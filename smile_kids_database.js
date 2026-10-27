/**
 * =========================================================================
 * Smile Kids School - Unified Master Central Database Engine
 * اسم قاعدة البيانات: قاعدة بيانات مدرسة Smile Kids الموحدة
 * كود التخزين: SMILE_KIDS_MASTER_DATABASE_2026
 * الملف البرمجي: smile_kids_database.js
 * ملف التصدير العام: smile_kids_database.json
 * =========================================================================
 */
(function(window) {
  'use strict';

    const BLACKLIST_DELETED_STUDENTS = new Set([
    'SK-G2-LN-013',
    'SK-G2-AR-006',
    'SK-G5-AR-003',
    'SK-G4-AR-5389',
    'SK-G4-AR-6602',
    'SK-G4-AR-7167',
    'SK-G4-AR-0432',
    'SK-G4-AR-2978',
    'SK-G4-AR-6460'
  ]);
  const BLACKLIST_DELETED_NAMES = new Set(['ليان محمد أمين', 'حمزة أحمد مصطفى', 'لين مهند خضرو', 'جودى مهند خضرو', 'جود مهند خضرو']);

  function isStudentBlacklisted(s) {
    if (!s) return false;
    if (s.id && BLACKLIST_DELETED_STUDENTS.has(s.id)) return true;
    if (s.nameAr && (BLACKLIST_DELETED_NAMES.has(s.nameAr.trim()) || s.nameAr.includes('خضرو'))) return true;
    return false;
  }

  const STORAGE_KEY = 'SMILE_KIDS_MASTER_DATABASE_2026_V7';
  const LEGACY_STUDENT_KEYS = ['SMILE_KIDS_MASTER_DATABASE_2026_V6', 'SMILE_KIDS_MASTER_DATABASE_2026_V5', 'SMILE_KIDS_MASTER_DATABASE_2026_V4', 'SMILE_KIDS_MASTER_DATABASE_2026_V3', 'SMILE_KIDS_MASTER_DATABASE_2026_V2', 'SMILE_KIDS_MASTER_DATABASE_2026', 'smile_kids_students', 'smile_kids_students_v7_custom', 'smilekids_school_v6'];
  const LEGACY_ATT_KEY = 'smile_kids_attendance_v7_data';

  // Canonical Student Identity Overrides (Ironclad protection against legacy rollbacks)
  const CANONICAL_STUDENT_OVERRIDES = {
    'SK-G8-AR-002': {
      nameAr: 'سعد محمود منصور',
      nameEn: 'Saad Mahmoud Mansour',
      gender: 'male'
    },
    'SK-G1-AR-008': {
      nameAr: 'ماريا قتيبه العلي',
      nameEn: 'Maria Qutaiba Ali',
      gender: 'female'
    },
    'SK-G4-AR-0026': {
      nameAr: 'لينا بهاء العاصي',
      nameEn: 'Lina Bahaa El-Assi',
      gender: 'female'
    },
    'SK-G5-LN-006': {
      nameAr: 'مليكة محمد نوار',
      nameEn: 'Malika Mohamed Nawar',
      gender: 'female'
    },
    'SK-G3-LN-013': {
      nameAr: 'زين محمد نوار',
      nameEn: 'Zein Mohamed Nawar',
      gender: 'male'
    },
    'SK-G2-AR-007': {
      nameAr: 'إيلين أحمد زيدان',
      nameEn: 'Ellen Ahmed Zeidan',
      gender: 'female'
    },
    'SK-G2-LN-004': {
      nameAr: 'معتز محمد أوطه باشي',
      nameEn: 'Moataz Mohamed Ota Bashi',
      gender: 'male'
    },
    'SK-G4-LN-010': {
      nameAr: 'ميرا محمد أوطه باشي',
      nameEn: 'Mira Mohamed Ota Bashi',
      gender: 'female'
    },
    'SK-G9-AR-001': {
      nameAr: 'سارة محمد أوطه باشي',
      nameEn: 'Sara Mohamed Ota Bashi',
      gender: 'female'
    }
  };

  const CANONICAL_DELETED_STUDENT_IDS = [];

  function isCanonicalDeletedStudent(s) {
    if (!s) return false;
    if (s.id && CANONICAL_DELETED_STUDENT_IDS.includes(s.id)) return true;
    if (s.nameAr && s.nameAr.includes('إسلام أحمد إسماعيل')) return true;
    return false;
  }

  function enforceCanonicalStudent(s) {
    if (!s || !s.id) return s;
    const canon = CANONICAL_STUDENT_OVERRIDES[s.id];
    if (canon) {
      s.nameAr = canon.nameAr;
      s.nameEn = canon.nameEn;
      if (canon.gender) s.gender = canon.gender;
    }
    return s;
  }

  // Master Initial Verified Students (147 Students across 9 Grades)
  const MASTER_INITIAL_STUDENTS = [];

  const SmileKidsDB = {
    DATABASE_NAME: 'قاعدة بيانات مدرسة Smile Kids الموحدة 2025/2026',
    DATABASE_CODE: 'SMILE_KIDS_MASTER_DB',
    VERSION: '7.0.0',
    STORAGE_KEY: STORAGE_KEY,
    FILE_NAME_JS: 'smile_kids_database.js',
    FILE_NAME_JSON: 'smile_kids_database.json',
    CLOUD_API_URL: '',
    AUTH_KEY: 'SK_SECURE_AUTH_2026_TOKEN_V1',
    AUTH_HEADER_NAME: 'X-SmileKids-Auth-Key',
    _isSyncingToCloud: false,
    _syncDebounceTimer: null,
    _syncStatus: 'idle',
    _lastModified: 0,
    _bc: null,

    getActiveTeacherSession: function() {
      try {
        if (typeof window !== 'undefined' && window.currentTeacher) {
          return {
            teacherId: window.currentTeacher.id,
            teacherName: window.currentTeacher.nameAr
          };
        }
        if (typeof sessionStorage !== 'undefined') {
          const raw = sessionStorage.getItem('smile_kids_active_teacher_session');
          if (raw) return JSON.parse(raw);
        }
        if (typeof localStorage !== 'undefined') {
          const raw = localStorage.getItem('smile_kids_active_teacher_session');
          if (raw) return JSON.parse(raw);
        }
      } catch(e) {}
      return null;
    },

    _cache: null,
    _listeners: [],
    DELETED_IDS_KEY: 'smile_kids_deleted_student_ids_v1',
    _deletedIds: new Set(['SK-G2-LN-013', 'SK-G2-AR-006', 'SK-G5-AR-003']),

    init: function() {
      // Purge legacy storage versions to prevent stale unrecorded cache overrides
      if (typeof localStorage !== 'undefined') {
        const staleKeys = ['SMILE_KIDS_MASTER_DATABASE_2026_V6', 'SMILE_KIDS_MASTER_DATABASE_2026_V5', 'SMILE_KIDS_MASTER_DATABASE_2026_V4', 'SMILE_KIDS_MASTER_DATABASE_2026', 'smile_kids_students', 'smilekids_school_v6', 'smile_kids_students_v7_custom'];
        staleKeys.forEach(k => {
          try { localStorage.removeItem(k); } catch(e) {}
        });
      }

      // Auto-purge outdated legacy storage caches to prevent old sessions from resurrecting typos
      if (typeof localStorage !== 'undefined') {
        LEGACY_STUDENT_KEYS.forEach(k => {
          try { localStorage.removeItem(k); } catch(e) {}
        });
        try { localStorage.removeItem(LEGACY_ATT_KEY); } catch(e) {}
      }

      let raw = null;
      if (typeof localStorage !== 'undefined') {
        try {
          raw = localStorage.getItem(STORAGE_KEY);
          const lm = localStorage.getItem(STORAGE_KEY + '_LAST_MODIFIED');
          if (lm) this._lastModified = parseInt(lm) || 0;
        } catch(e) {
          console.warn('localStorage read error:', e);
        }
      }

      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            this._cache = parsed.filter(s => !isStudentBlacklisted(s));
          } else {
            this._cache = this._clone(MASTER_INITIAL_STUDENTS);
            this.save();
          }
        } catch(e) {
          console.error('Master DB parse error, restoring defaults:', e);
          this._cache = this._clone(MASTER_INITIAL_STUDENTS);
          this.save();
        }
      } else {
        // Try migrating from legacy storage if present
        const migrated = this._tryMigrateLegacy();
        if (migrated && migrated.length > 0) {
          this._cache = migrated;
        } else {
          this._cache = this._clone(MASTER_INITIAL_STUDENTS);
        }
        this.save();
      }

      // Initialize and load deleted student IDs (Tombstones) to prevent zombie resurrections
      this._deletedIds = new Set(['SK-G2-LN-013', 'SK-G2-AR-006', 'SK-G5-AR-003']);
      if (typeof localStorage !== 'undefined') {
        try {
          const rawDel = localStorage.getItem(this.DELETED_IDS_KEY);
          if (rawDel) {
            const arr = JSON.parse(rawDel);
            if (Array.isArray(arr)) arr.forEach(id => this._deletedIds.add(id));
          }
          localStorage.setItem(this.DELETED_IDS_KEY, JSON.stringify(Array.from(this._deletedIds)));
        } catch(e) {}
      }

      // Purge any deleted students from cache immediately
      if (this._cache && Array.isArray(this._cache)) {
        this._cache = this._cache.filter(s => !this._deletedIds.has(s.id));
      }

      // Ensure verified students exist in cache without resurrecting deleted students
      if (this._cache) {
        const existingIds = new Set(this._cache.map(s => s.id));
        let addedCount = 0;
        let updatedFieldsCount = 0;
        MASTER_INITIAL_STUDENTS.forEach(defSt => {
          if (!existingIds.has(defSt.id) && !this._deletedIds.has(defSt.id)) {
            this._cache.push(this._clone(defSt));
            addedCount++;
          } else if (existingIds.has(defSt.id)) {
            const cachedSt = this._cache.find(s => s.id === defSt.id);
            if (cachedSt) {
              if (cachedSt.nameAr !== defSt.nameAr || cachedSt.nameEn !== defSt.nameEn || cachedSt.gender !== defSt.gender) {
                cachedSt.nameAr = defSt.nameAr;
                cachedSt.nameEn = defSt.nameEn;
                cachedSt.gender = defSt.gender;
                updatedFieldsCount++;
              }
              // Sync / update September scores from master if cached scores are missing or unrecorded
              if (defSt.subjectScores) {
                if (!cachedSt.subjectScores) cachedSt.subjectScores = {};
                for (const subKey in defSt.subjectScores) {
                  const defSub = defSt.subjectScores[subKey];
                  const cachedSub = cachedSt.subjectScores[subKey];
                  const cachedSep = cachedSub && cachedSub.scores && cachedSub.scores.t1_sep;
                  const isCachedRecorded = cachedSep && cachedSep.isRecorded === true && cachedSep.score !== null;
                  const defSep = defSub && defSub.scores && defSub.scores.t1_sep;
                  const isDefRecorded = defSep && defSep.isRecorded === true && defSep.score !== null;

                  if (isDefRecorded && (!isCachedRecorded || cachedSep.score !== defSep.score)) {
                    cachedSt.subjectScores[subKey] = this._clone(defSub);
                    updatedFieldsCount++;
                  }
                }
              }
              if (defSt.termsScores && defSt.termsScores.t1_sep) {
                if (!cachedSt.termsScores) cachedSt.termsScores = {};
                if (!cachedSt.termsScores.t1_sep || cachedSt.termsScores.t1_sep.totalScore === null || cachedSt.termsScores.t1_sep.totalScore === undefined) {
                  cachedSt.termsScores.t1_sep = this._clone(defSt.termsScores.t1_sep);
                  updatedFieldsCount++;
                }
              }
            }
          }
        });
        if (addedCount > 0 || updatedFieldsCount > 0) {
          this.save();
        }
      }

      this._ensureStudentFields();
      this._setupStorageListener();
      this._setupCloudSync();
      this._setupFirebaseSync();
      return this;
    },

    
    _setupCloudSync: function() {
      if (typeof window === 'undefined') return;

      // 1. Initial cloud check on startup
      setTimeout(() => {
        this.syncFromCloud();
      }, 400);

      // 2. Auto-sync whenever user switches back to the tab/window on mobile or desktop
      if (typeof document !== 'undefined' && document.addEventListener) {
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible') {
            this.syncFromCloud();
          }
        });
      }
      if (window.addEventListener) {
        window.addEventListener('focus', () => {
          this.syncFromCloud();
        });
      }
    },

    forceCloudSync: async function() {
      this._setSyncStatus('syncing', 'جاري المزامنة السحابية الفورية...');
      await this.syncToCloud({ action: 'full_backup', instant: true });
      await this.syncFromCloud();
      this._notifyListeners('force_sync');
      return { success: true, total: this.getAllStudents().length };
    },

    _setupFirebaseSync: function() {
      if (typeof window === 'undefined') return;

      const startListening = () => {
        if (!window.SmileKidsFirebase || !window.SmileKidsFirebase.canUseFirestore()) return;
        if (this._isFirebaseListening) return;
        this._isFirebaseListening = true;

        console.log('[SmileKids DB] تم تفعيل المزامنة اللحظية مع Google Cloud Firestore 📡');

        this._firestoreUnsubscribe = window.SmileKidsFirebase.initFirestoreListeners({
          onStudents: (remoteStudents) => {
            if (!Array.isArray(remoteStudents) || remoteStudents.length === 0) return;

            let hasChanges = false;
            const localMap = new Map();
            this.getAllStudents().forEach(s => localMap.set(s.id, s));

            remoteStudents.forEach(remoteSt => {
              const localSt = localMap.get(remoteSt.id);
              if (!localSt) {
                this._cache.push(remoteSt);
                hasChanges = true;
              } else {
                enforceCanonicalStudent(localSt);
                enforceCanonicalStudent(remoteSt);
                if (!CANONICAL_STUDENT_OVERRIDES[localSt.id]) {
                  if (remoteSt.nameAr && remoteSt.nameAr !== localSt.nameAr) { localSt.nameAr = remoteSt.nameAr; hasChanges = true; }
                  if (remoteSt.nameEn && remoteSt.nameEn !== localSt.nameEn) { localSt.nameEn = remoteSt.nameEn; hasChanges = true; }
                  if (remoteSt.gender && remoteSt.gender !== localSt.gender) { localSt.gender = remoteSt.gender; hasChanges = true; }
                } else {
                  const c = CANONICAL_STUDENT_OVERRIDES[localSt.id];
                  localSt.nameAr = c.nameAr;
                  localSt.nameEn = c.nameEn;
                  if (c.gender) localSt.gender = c.gender;
                }

                if (remoteSt.photo !== undefined && remoteSt.photo !== localSt.photo) {localSt.photo = remoteSt.photo; hasChanges = true;}
                // دمج حالة القيد وتعليق الشهادات
                if (remoteSt.enrollmentStatus && remoteSt.enrollmentStatus !== localSt.enrollmentStatus) {
                  localSt.enrollmentStatus = remoteSt.enrollmentStatus;
                  hasChanges = true;
                }
                if (remoteSt.status && remoteSt.status !== localSt.status) {
                  localSt.status = remoteSt.status;
                  hasChanges = true;
                }

                // دمج غير هدام: الحفاظ على أحدث التعديلات
                const remoteTs = remoteSt._lastModified || 0;
                const localTs = this._lastModified || 0;

                // دمج سجلات الحضور والغياب
                if (remoteSt.attendanceRecords && typeof remoteSt.attendanceRecords === 'object') {
                  localSt.attendanceRecords = localSt.attendanceRecords || {};
                  Object.keys(remoteSt.attendanceRecords).forEach(d => {
                    if (remoteTs >= localTs || !localSt.attendanceRecords[d]) {
                      if (localSt.attendanceRecords[d] !== remoteSt.attendanceRecords[d]) {
                        localSt.attendanceRecords[d] = remoteSt.attendanceRecords[d];
                        hasChanges = true;
                      }
                    }
                  });
                }

                // دمج ملاحظات الحضور
                if (remoteSt.attendanceNotes && typeof remoteSt.attendanceNotes === 'object') {
                  localSt.attendanceNotes = localSt.attendanceNotes || {};
                  Object.keys(remoteSt.attendanceNotes).forEach(d => {
                    if (localSt.attendanceNotes[d] !== remoteSt.attendanceNotes[d]) {
                      localSt.attendanceNotes[d] = remoteSt.attendanceNotes[d];
                      hasChanges = true;
                    }
                  });
                }

                // دمج درجات الشهور والاختبارات
                if (remoteSt.termsScores && typeof remoteSt.termsScores === 'object') {
                  localSt.termsScores = localSt.termsScores || {};
                  Object.keys(remoteSt.termsScores).forEach(k => {
                    if (remoteTs >= localTs || (!localSt.termsScores[k] && remoteSt.termsScores[k])) {
                      if (localSt.termsScores[k] !== remoteSt.termsScores[k]) {
                        localSt.termsScores[k] = remoteSt.termsScores[k];
                        hasChanges = true;
                      }
                    }
                  });
                }

                // دمج درجات المواد التفصيلية
                if (remoteSt.subjectScores && typeof remoteSt.subjectScores === 'object') {
                  localSt.subjectScores = localSt.subjectScores || {};
                  Object.keys(remoteSt.subjectScores).forEach(subId => {
                    if (!localSt.subjectScores[subId]) {
                      localSt.subjectScores[subId] = remoteSt.subjectScores[subId];
                      hasChanges = true;
                    } else if (remoteSt.subjectScores[subId].scores) {
                      localSt.subjectScores[subId].scores = localSt.subjectScores[subId].scores || {};
                      Object.keys(remoteSt.subjectScores[subId].scores).forEach(p => {
                        if (localSt.subjectScores[subId].scores[p] !== remoteSt.subjectScores[subId].scores[p]) {
                          localSt.subjectScores[subId].scores[p] = remoteSt.subjectScores[subId].scores[p];
                          hasChanges = true;
                        }
                      });
                    }
                  });
                }
              }
            });

            if (hasChanges) {
              this._ensureStudentFields();
              if (typeof localStorage !== 'undefined') {
                try {
                  localStorage.setItem(STORAGE_KEY, JSON.stringify(this._cache));
                  localStorage.setItem(STORAGE_KEY + '_LAST_MODIFIED', String(Date.now()));
                } catch(e) {}
              }
              this._notifyListeners('firestore_remote_sync');
            }
            this._setSyncStatus('online', 'Firestore (متزامن 🟢)');
          },

          onAttendance: (records) => {
            if (!Array.isArray(records) || records.length === 0) return;
            let updated = false;
            records.forEach(rec => {
              if (!rec.periodKey && rec.studentId && rec.dateStr && rec.status) {
                const st = this.getStudentById(rec.studentId);
                if (st) {
                  st.attendanceRecords = st.attendanceRecords || {};
                  if (st.attendanceRecords[rec.dateStr] !== rec.status) {
                    st.attendanceRecords[rec.dateStr] = rec.status;
                    updated = true;
                  }
                  if (rec.note) {
                    st.attendanceNotes = st.attendanceNotes || {};
                    st.attendanceNotes[rec.dateStr] = rec.note;
                  }
                }
              }
            });
            if (updated) {
              this._notifyListeners('firestore_attendance');
            }
          },

          onGrades: (grades) => {
            if (!Array.isArray(grades) || grades.length === 0) return;
            let updated = false;
            grades.forEach(g => {
              if (g.studentId && g.subjectId && g.periodKey && g.score !== undefined) {
                const st = this.getStudentById(g.studentId);
                if (st) {
                  st.subjectScores = st.subjectScores || {};
                  st.subjectScores[g.subjectId] = st.subjectScores[g.subjectId] || { subjectId: g.subjectId, scores: {} };
                  st.subjectScores[g.subjectId].scores = st.subjectScores[g.subjectId].scores || {};
                  const scNum = g.score === null ? null : parseFloat(g.score);
                  const mxNum = parseFloat(g.maxScore) || 20;
                  if (scNum === null || (!isNaN(scNum) && scNum >= 0)) {
                    st.subjectScores[g.subjectId].scores[g.periodKey] = {
                      score: scNum,
                      maxScore: mxNum,
                      isRecorded: scNum !== null,
                      updatedAt: g.updatedAt || new Date().toISOString()
                    };
                    const fld = g.periodKey.replace('t1_', '').replace('t2_', '');
                    st.subjectScores[g.subjectId][fld] = scNum;
                    updated = true;
                  }
                }
              }
            });
            if (updated) {
              this._ensureStudentFields();
              if (typeof localStorage !== 'undefined') {
                try {
                  localStorage.setItem(STORAGE_KEY, JSON.stringify(this._cache));
                  localStorage.setItem(STORAGE_KEY + '_LAST_MODIFIED', String(Date.now()));
                } catch(e) {}
              }
              this._notifyListeners('firestore_grades');
            }
          },

          onTimetables: (schedulesMap) => {
            this._timetablesCache = schedulesMap;
            this._notifyListeners('firestore_timetables');
          },

          onError: (err) => {
            console.warn('[SmileKids DB] تنبيه مستمع Firestore (استمرار العمل محلياً):', err);
          }
        });
      };

      if (window.SmileKidsFirebase) {
        if (window.SmileKidsFirebase.isReady && window.SmileKidsFirebase.canUseFirestore()) {
          startListening();
        } else if (window.SmileKidsFirebase.whenReady) {
          window.SmileKidsFirebase.whenReady.then((ready) => {
            if (ready) startListening();
          });
        }
      }

      window.addEventListener('smilekids_firebase_ready', () => {
        startListening();
      });
    },

    _setSyncStatus: function(status, detail) {
      this._syncStatus = status;
      if (typeof document === 'undefined') return;

      const badgeElements = document.querySelectorAll('.cloud-sync-badge, #cloud-sync-badge, #db-sync-status');
      badgeElements.forEach(el => {
        if (status === 'syncing') {
          el.innerHTML = '<span class="inline-block animate-spin mr-1">🔄</span> جاري المزامنة مع Google Drive...';
          el.className = el.className.replace(/bg-\S+|text-\S+|border-\S+/g, '') + ' bg-amber-950/70 border border-amber-500/50 text-amber-300';
        } else if (status === 'online') {
          el.innerHTML = '<span class="relative flex h-2 w-2 mr-1"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span> Google Drive (متزامن 🟢)';
          el.className = el.className.replace(/bg-\S+|text-\S+|border-\S+/g, '') + ' bg-emerald-950/70 border border-emerald-500/50 text-emerald-300';
          el.title = 'متصل بـ Google Drive: ' + (detail || 'سمايل كيدز');
        } else if (status === 'error' || status === 'offline') {
          el.innerHTML = '<span class="text-amber-400 mr-1">⚠️</span> محلي (غير متصل بالدرايف)';
          el.className = el.className.replace(/bg-\S+|text-\S+|border-\S+/g, '') + ' bg-slate-900/80 border border-slate-700/60 text-slate-300';
        }
      });

      if (typeof window !== 'undefined' && window.dispatchEvent) {
        window.dispatchEvent(new CustomEvent('smilekids_sync_status', {
          detail: { status: status, detail: detail }
        }));
      }
    },

    syncFromCloud: async function(callback, queryParams) {
      if (!this.CLOUD_API_URL || typeof fetch === 'undefined') return;
      // Do not pull from cloud if a local edit is pending cloud push
      if (this._isSyncingToCloud) return;

      try {
        this._setSyncStatus('syncing');

        // Construct GET URL with secret auth key and optional query params
        let fetchUrl = this.CLOUD_API_URL;
        try {
          const u = new URL(this.CLOUD_API_URL);
          u.searchParams.set('authKey', this.AUTH_KEY);
          if (queryParams && typeof queryParams === 'object') {
            Object.entries(queryParams).forEach(([k, v]) => {
              if (v !== undefined && v !== null) u.searchParams.set(k, String(v));
            });
          }
          fetchUrl = u.toString();
        } catch(e) {
          const sep = fetchUrl.includes('?') ? '&' : '?';
          fetchUrl += `${sep}authKey=${encodeURIComponent(this.AUTH_KEY)}`;
        }

        const resp = await fetch(fetchUrl, {
          method: 'GET'
        });

        if (resp.ok) {
          const data = await resp.json();
          let studentsList = null;
          let cloudTimestamp = 0;
          if (Array.isArray(data)) {
            studentsList = data;
          } else if (data && typeof data === 'object') {
            if (Array.isArray(data.students)) studentsList = data.students;
            if (data.database_info && data.database_info.last_modified) {
              cloudTimestamp = parseInt(data.database_info.last_modified) || 0;
            } else if (data.database_info && data.database_info.exported_at) {
              cloudTimestamp = new Date(data.database_info.exported_at).getTime() || 0;
            }
          }

          if (studentsList && studentsList.length > 0) {
            studentsList = studentsList.filter(s => !isStudentBlacklisted(s));
            // Guard 0: If local has MORE students than cloud (e.g. 154 on mobile vs 147 on cloud), push local students to cloud!
            if (this._cache && this._cache.length > studentsList.length) {
              console.log('[SmileKids DB] Local has more students than cloud (' + this._cache.length + ' vs ' + studentsList.length + '). Uploading master to cloud...');
              this.syncToCloud({ action: 'full_backup', instant: true });
              return;
            }

            // Guard 1: If local edits were made more recently than cloud timestamp, push local to cloud instead
            if (this._lastModified > 0 && cloudTimestamp > 0 && this._lastModified > cloudTimestamp + 1000 && this._cache && this._cache.length >= studentsList.length) {
              console.log('Local data is newer than cloud. Syncing local changes to cloud...');
              this.syncToCloud();
              return;
            }

            // Guard 2: Safe Non-Destructive Merge (never wipe local attendance or subjectScores with empty cloud objects)
            let hasChanges = false;
            if (!this._cache || this._cache.length === 0) {
              this._cache = studentsList;
              hasChanges = true;
            } else {
              const localMap = new Map();
              this._cache.forEach(s => localMap.set(s.id, s));

              let cloudHasDeleted = false;
              studentsList.forEach(cloudSt => {
                if (this._deletedIds && this._deletedIds.has(cloudSt.id)) {
                  cloudHasDeleted = true;
                  return; // NEVER resurrect a deleted student!
                }
                const localSt = localMap.get(cloudSt.id);
                if (!localSt) {
                  this._cache.push(cloudSt);
                  hasChanges = true;
                } else {
                  // Merge updated student profile fields from cloud (names, photo, parent info)
                  if (cloudSt.photo && cloudSt.photo !== localSt.photo) {
                    localSt.photo = cloudSt.photo;
                    hasChanges = true;
                  }
                  enforceCanonicalStudent(localSt);
                  enforceCanonicalStudent(cloudSt);
                  if (!CANONICAL_STUDENT_OVERRIDES[localSt.id]) {
                    if (cloudSt.nameEn && cloudSt.nameEn !== localSt.nameEn) {
                      localSt.nameEn = cloudSt.nameEn;
                      hasChanges = true;
                    }
                    if (cloudSt.nameAr && cloudSt.nameAr !== localSt.nameAr) {
                      localSt.nameAr = cloudSt.nameAr;
                      hasChanges = true;
                    }
                    if (cloudSt.gender && cloudSt.gender !== localSt.gender) {
                      localSt.gender = cloudSt.gender;
                      hasChanges = true;
                    }
                  } else {
                    const c = CANONICAL_STUDENT_OVERRIDES[localSt.id];
                    localSt.nameAr = c.nameAr;
                    localSt.nameEn = c.nameEn;
                    if (c.gender) localSt.gender = c.gender;
                  }

                  // دمج حالة القيد وتعليق الشهادة السحابية
                  if (cloudSt.enrollmentStatus && cloudSt.enrollmentStatus !== localSt.enrollmentStatus) {
                    localSt.enrollmentStatus = cloudSt.enrollmentStatus;
                    hasChanges = true;
                  }
                  if (cloudSt.status && cloudSt.status !== localSt.status) {
                    localSt.status = cloudSt.status;
                    hasChanges = true;
                  }

                  if (cloudSt.parentName && cloudSt.parentName !== localSt.parentName) {
                    localSt.parentName = cloudSt.parentName;
                    hasChanges = true;
                  }
                  if (cloudSt.parentPhone && cloudSt.parentPhone !== localSt.parentPhone) {
                    localSt.parentPhone = cloudSt.parentPhone;
                    hasChanges = true;
                  }
                  if (cloudSt.parentWhatsApp && cloudSt.parentWhatsApp !== localSt.parentWhatsApp) {
                    localSt.parentWhatsApp = cloudSt.parentWhatsApp;
                    hasChanges = true;
                  }
                  if (cloudSt.parentEmail && cloudSt.parentEmail !== localSt.parentEmail) {
                    localSt.parentEmail = cloudSt.parentEmail;
                    localSt.email = cloudSt.parentEmail;
                    hasChanges = true;
                  }

                  // Merge attendance records without overwriting local marks
                  if (cloudSt.attendanceRecords && typeof cloudSt.attendanceRecords === 'object') {
                    localSt.attendanceRecords = localSt.attendanceRecords || {};
                    Object.keys(cloudSt.attendanceRecords).forEach(date => {
                      if (!localSt.attendanceRecords[date]) {
                        localSt.attendanceRecords[date] = cloudSt.attendanceRecords[date];
                        hasChanges = true;
                      }
                    });
                  }
                  if (cloudSt.attendanceNotes && typeof cloudSt.attendanceNotes === 'object') {
                    localSt.attendanceNotes = localSt.attendanceNotes || {};
                    Object.keys(cloudSt.attendanceNotes).forEach(date => {
                      if (!localSt.attendanceNotes[date]) {
                        localSt.attendanceNotes[date] = cloudSt.attendanceNotes[date];
                        hasChanges = true;
                      }
                    });
                  }
                  // Merge subject scores: NEVER replace non-empty local scores with empty cloud
                  if (cloudSt.subjectScores && typeof cloudSt.subjectScores === 'object' && Object.keys(cloudSt.subjectScores).length > 0) {
                    localSt.subjectScores = localSt.subjectScores || {};
                    Object.keys(cloudSt.subjectScores).forEach(subId => {
                      if (!localSt.subjectScores[subId]) {
                        localSt.subjectScores[subId] = cloudSt.subjectScores[subId];
                        hasChanges = true;
                      } else if (cloudSt.subjectScores[subId].scores) {
                        localSt.subjectScores[subId].scores = localSt.subjectScores[subId].scores || {};
                        Object.keys(cloudSt.subjectScores[subId].scores).forEach(period => {
                          if (!localSt.subjectScores[subId].scores[period]) {
                            localSt.subjectScores[subId].scores[period] = cloudSt.subjectScores[subId].scores[period];
                            hasChanges = true;
                          }
                        });
                      }
                    });
                  }
                  // Merge terms scores: preserve non-zero local scores
                  if (cloudSt.termsScores && typeof cloudSt.termsScores === 'object') {
                    localSt.termsScores = localSt.termsScores || {};
                    Object.keys(cloudSt.termsScores).forEach(k => {
                      if ((!localSt.termsScores[k] || localSt.termsScores[k] === 0) && cloudSt.termsScores[k] > 0) {
                        localSt.termsScores[k] = cloudSt.termsScores[k];
                        hasChanges = true;
                      }
                    });
                  }
                }
              });
            }

            if (cloudTimestamp > 0 && cloudTimestamp > this._lastModified) {
              this._lastModified = cloudTimestamp;
            }
            this._ensureStudentFields();
            if (typeof localStorage !== 'undefined') {
              try {
                const serialized = JSON.stringify(this._cache);
                localStorage.setItem(STORAGE_KEY, serialized);
                localStorage.setItem(STORAGE_KEY + '_LAST_MODIFIED', String(this._lastModified));
                localStorage.setItem('SMILE_KIDS_MASTER_DATABASE_2026', serialized);
                localStorage.setItem('smilekids_school_v6', serialized);
                localStorage.setItem('smile_kids_students_v7_custom', serialized);
              } catch(e) {}
            }
            this._setSyncStatus('online', this._cache.length + ' طالب');
            if (hasChanges) {
              this._notifyListeners('cloud_pull');
            }
            if (callback) callback({ success: true, count: this._cache.length });
            return;
          }
        }
        this._setSyncStatus('offline', 'لم يتم استرجاع بيانات');
      } catch(err) {
        console.warn('Google Cloud syncFromCloud error (working offline):', err);
        this._setSyncStatus('offline', err.message);
      }
    },

    syncToCloud: async function(options) {
      if (!this.CLOUD_API_URL || typeof fetch === 'undefined') return;
      options = options || {};

      // If debounced timer is pending and instant is not requested, handle cleanly
      if (options.instant && this._syncDebounceTimer) {
        clearTimeout(this._syncDebounceTimer);
        this._syncDebounceTimer = null;
      }

      // Build POST URL with query param authKey
      let postUrl = this.CLOUD_API_URL;
      try {
        const u = new URL(this.CLOUD_API_URL);
        u.searchParams.set('authKey', this.AUTH_KEY);
        postUrl = u.toString();
      } catch(e) {
        const sep = postUrl.includes('?') ? '&' : '?';
        postUrl += `${sep}authKey=${encodeURIComponent(this.AUTH_KEY)}`;
      }

      this._isSyncingToCloud = true;
      this._setSyncStatus('syncing');

      try {
        const now = Date.now();
        if (!this._lastModified || this._lastModified < now) {
          this._lastModified = now;
        }

        const teacherSession = this.getActiveTeacherSession();
        const action = options.action || 'full_backup';

        let payload = {
          authKey: this.AUTH_KEY,
          action: action,
          teacherId: options.teacherId || (teacherSession ? teacherSession.teacherId : 'system'),
          teacherName: options.teacherName || (teacherSession ? teacherSession.teacherName : 'المعلمة / النظام'),
          timestamp: new Date().toISOString()
        };

        if (action === 'sync_grades') {
          payload.studentId = options.studentId;
          payload.subjectId = options.subjectId;
          payload.periodKey = options.periodKey;
          payload.score = options.score;
          payload.maxScore = options.maxScore;
          payload.patch = options.patch;
          payload.updates = options.updates;
        } else if (action === 'sync_attendance') {
          payload.studentId = options.studentId;
          payload.status = options.status;
          payload.note = options.note;
          payload.dateStr = options.dateStr;
          payload.periodNum = options.periodNum;
          payload.records = options.records;
          payload.classBadge = options.classBadge;
        }

        // Always include master payload and database_info for backward compatibility and data preservation
        payload.database_info = {
          name: this.DATABASE_NAME,
          version: this.VERSION,
          last_modified: this._lastModified,
          exported_at: new Date(this._lastModified).toISOString(),
          total_students: this.getAllStudents().length
        };
        payload.students = this.getAllStudents().map(s => enforceCanonicalStudent(s));

        const resp = await fetch(postUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify(payload)
        });

        let res = null;
        try {
          res = await resp.json();
        } catch(pe) {
          console.warn('Non-JSON response from cloud sync:', pe);
        }

        if (res && res.success) {
          this._setSyncStatus('online', 'متصل بالسحابة (Google Cloud 🟢)');
        } else {
          this._setSyncStatus('online', 'تم الحفظ في Google Drive');
        }
        return res || { success: true };
      } catch(err) {
        console.warn('Google Cloud syncToCloud error:', err);
        this._setSyncStatus('offline', err.message);
        return { success: false, error: err.message };
      } finally {
        this._isSyncingToCloud = false;
      }
    },

    _setupStorageListener: function() {
      if (typeof window === 'undefined') return;

      // 1. BroadcastChannel for instant real-time synchronization between open pages/tabs
      if (typeof BroadcastChannel !== 'undefined') {
        try {
          this._bc = new BroadcastChannel('smile_kids_shared_channel');
          this._bc.onmessage = (event) => {
            if (event.data && event.data.type === 'DB_UPDATED' && Array.isArray(event.data.data)) {
              this._cache = event.data.data;
              this._lastModified = event.data.timestamp || Date.now();
              this._ensureStudentFields();
              this._notifyListeners('broadcast_sync');
            }
          };
        } catch(e) {
          console.warn('BroadcastChannel initialization error:', e);
        }
      }

      // 2. Storage event listener fallback (cross-origin / different window instances)
      if (window.addEventListener) {
        window.addEventListener('storage', (e) => {
          if ((e.key === STORAGE_KEY || e.key === 'smilekids_school_v6' || e.key === 'SMILE_KIDS_MASTER_DATABASE_2026') && e.newValue) {
            try {
              const incoming = JSON.parse(e.newValue);
              if (Array.isArray(incoming) && incoming.length > 0) {
                this._cache = incoming;
                this._ensureStudentFields();
                this._notifyListeners('remote_storage_sync');
              }
            } catch(err) {
              console.error('Remote storage sync error:', err);
            }
          }
        });
      }
    },

    subscribe: function(callback) {
      if (typeof callback === 'function') {
        this._listeners.push(callback);
      }
      return () => {
        this._listeners = this._listeners.filter(cb => cb !== callback);
      };
    },

    _notifyListeners: function(trigger) {
      const data = this.getAllStudents();
      this._listeners.forEach(cb => {
        try {
          cb(data, trigger);
        } catch(e) {
          console.error('Error in DB subscriber:', e);
        }
      });
      if (typeof window !== 'undefined' && window.dispatchEvent) {
        window.dispatchEvent(new CustomEvent('smilekids_db_updated', {
          detail: { total: data.length, trigger: trigger }
        }));
      }
    },

    save: function() {
      if (!this._cache) return;
      this._lastModified = Date.now();
      const serialized = JSON.stringify(this._cache);
      if (typeof localStorage !== 'undefined') {
        try {
          localStorage.setItem(STORAGE_KEY, serialized);
          localStorage.setItem(STORAGE_KEY + '_LAST_MODIFIED', String(this._lastModified));
          // Keep all legacy and sister storage keys synchronized
          localStorage.setItem('SMILE_KIDS_MASTER_DATABASE_2026', serialized);
          localStorage.setItem('smilekids_school_v6', serialized);
          localStorage.setItem('smile_kids_students_v7_custom', serialized);
          localStorage.setItem('smile_kids_students', serialized);
        } catch(e) {
          console.warn('DB Save failed:', e);
        }
      }

      // Instant cross-page notification via BroadcastChannel
      if (this._bc) {
        try {
          this._bc.postMessage({
            type: 'DB_UPDATED',
            timestamp: this._lastModified,
            data: this._cache
          });
        } catch(err) {
          console.warn('BroadcastChannel postMessage error:', err);
        }
      }

      this._notifyListeners('local_save');

      // Local persistence only. Cloud writes must carry an explicit changed-record payload.

    },

    getAllStudents: function() {
      if (!this._cache) this.init();
      return this._cache;
    },

    getStudentsByGrade: function(grade, track) {
      const all = this.getAllStudents();
      const g = parseInt(grade);
      return all.filter(s => {
        const matchGrade = (isNaN(g) || grade === 'all' || s.grade === g);
        const matchTrack = (!track || track === 'all' || s.track === track);
        return matchGrade && matchTrack;
      });
    },

    getStudentById: function(id) {
      return this.getAllStudents().find(s => s.id === id) || null;
    },

    loadStudentsFromCloud: function(remoteStudents) {
      if (!Array.isArray(remoteStudents) || remoteStudents.length === 0) return this.getAllStudents();
      if (!this._cache) this._cache = this.getAllStudents();
      const localMap = new Map();
      this._cache.forEach(s => localMap.set(s.id, s));
      let hasChanges = false;

      remoteStudents.forEach(rem => {
        if (!rem || !rem.id) return;
        if (isStudentBlacklisted(rem) || isCanonicalDeletedStudent(rem)) return;
        if (this._deletedIds && this._deletedIds.has(rem.id)) {
          // Permanently block resurrection of deleted students & purge from Firestore in background
          if (typeof window !== 'undefined' && window.SmileKidsFirebase && typeof window.SmileKidsFirebase.deleteStudentFromFirestore === 'function') {
            window.SmileKidsFirebase.deleteStudentFromFirestore(rem.id);
          }
          return;
        }
        const localSt = localMap.get(rem.id);
        if (!localSt) {
          this._cache.push(rem);
          hasChanges = true;
        } else {
          if (rem.enrollmentStatus && localSt.enrollmentStatus !== rem.enrollmentStatus) {
            localSt.enrollmentStatus = rem.enrollmentStatus;
            hasChanges = true;
          }
          if (rem.status && localSt.status !== rem.status) {
            localSt.status = rem.status;
            hasChanges = true;
          }
          // Cloud is the source of truth for the parent PIN
          if (rem.pin && localSt.pin !== rem.pin) { localSt.pin = rem.pin; localSt.password = rem.pin; hasChanges = true; }
          if (rem.attendanceRecords) localSt.attendanceRecords = Object.assign({},localSt.attendanceRecords || {},rem.attendanceRecords);
          if (rem.photo !== undefined) localSt.photo = rem.photo;
          // Non-destructive merge of profile and scores
          if (rem.nameAr) localSt.nameAr = rem.nameAr;
          if (rem.nameEn) localSt.nameEn = rem.nameEn;
          if (rem.gender) localSt.gender = rem.gender;
          if (rem.track) localSt.track = rem.track;
          if (rem.enrollmentStatus) localSt.enrollmentStatus = rem.enrollmentStatus;
          if (rem.status) localSt.status = rem.status;

          // SAFE NON-DESTRUCTIVE MERGE: NEVER overwrite a valid local score (> 0) with zero, null, or empty!
          if (rem.subjectScores && typeof rem.subjectScores === 'object') {
            localSt.subjectScores = localSt.subjectScores || {};
            Object.keys(rem.subjectScores).forEach(subId => {
              const remSub = rem.subjectScores[subId];
              if (!remSub || typeof remSub !== 'object') return;

              if (!localSt.subjectScores[subId]) {
                localSt.subjectScores[subId] = JSON.parse(JSON.stringify(remSub));
                return;
              }

              const locSub = localSt.subjectScores[subId];
              if (remSub.teacherNameAr) locSub.teacherNameAr = remSub.teacherNameAr;
              if (remSub.subjectId) locSub.subjectId = remSub.subjectId;

              locSub.scores = locSub.scores || {};
              if (remSub.scores && typeof remSub.scores === 'object') {
                Object.keys(remSub.scores).forEach(pKey => {
                  const remP = remSub.scores[pKey];
                  const locP = locSub.scores[pKey];
                  if (remP && typeof remP === 'object' && 'score' in remP) {
                    locSub.scores[pKey] = Object.assign({}, locP || {}, remP);
                  }
                });
              }

              ['sep', 'm1', 'm2', 'tasks', 'exam'].forEach(fld => {
                const remVal = parseFloat(remSub[fld]);
                if (!isNaN(remVal) && remVal > 0) {
                  locSub[fld] = remVal;
                }
              });
            });
          }

          if (rem.termsScores && typeof rem.termsScores === 'object') {
            localSt.termsScores = Object.assign({}, localSt.termsScores || {}, rem.termsScores);
          }
          hasChanges = true;
        }
      });

      this._ensureStudentFields();
      if (hasChanges) {
        this.save();
      }
      return this._cache;
    },

    updateStudent: function(idOrStudent, patchData) {
      const id = typeof idOrStudent === 'object' ? idOrStudent.id : idOrStudent;
      const patch = typeof idOrStudent === 'object' ? idOrStudent : (patchData || {});
      const st = this.getStudentById(id);
      if (!st) return null;

      Object.assign(st, patch);
      if (patch.track) {
        st.track = patch.track;
        st.trackNameAr = patch.track === 'languages' ? 'لغات (Math & Science)' : 'عربي (حساب)';
        st.trackNameEn = patch.track === 'languages' ? 'Languages Track' : 'Arabic Track';
      }
      if (patch.grade) {
        st.grade = parseInt(patch.grade);
        st.gradeNameAr = `الصف ${st.grade}`;
        st.gradeNameEn = `Grade ${st.grade}`;
      }
      this._ensureStudentFields();
      this.save();

      // Metadata edits are narrow. Grade/attendance paths use their own confirmed queue.
      const metadata = {};
      Object.keys(patch).filter(k => !['subjectScores','termsScores','attendanceRecords','attendanceNotes','score','subjectId','periodKey','id','_lastModified','_updatedAt'].includes(k)).forEach(k => metadata[k] = patch[k]);
      if (Object.keys(metadata).length && typeof window !== 'undefined' && window.SmileKidsFirebase) {
        window.SmileKidsFirebase.saveStudentToFirestore(Object.assign({id}, metadata));
      }

      return st;
    },

    addStudent: function(studentData) {
      if (!studentData || isStudentBlacklisted(studentData)) return null;

      const grade = parseInt(studentData.grade) || 1;
      const track = studentData.track || 'arabic';
      const trackCode = track === 'languages' ? 'EN' : 'AR';
      const cleanName = (studentData.nameAr || '').trim();

      // Debounce & duplicate protection: ignore duplicate submits within 6 seconds
      const now = Date.now();
      if (this._lastAdded && this._lastAdded.name === cleanName && this._lastAdded.grade === grade && (now - this._lastAdded.time < 6000)) {
        console.warn('[SmileKids DB] منع إضافة طالب مكرر خلال نافذة الحماية (Debounce)');
        return this.getAllStudents().find(s => s.nameAr && s.nameAr.trim() === cleanName && s.grade === grade) || studentData;
      }
      this._lastAdded = { name: cleanName, grade: grade, time: now };

      if (!studentData.id) {
        studentData.id = 'SK-G' + grade + '-' + trackCode + '-' + Date.now().toString().slice(-4);
      }
      studentData.grade = grade;
      studentData.track = track;
      if (!studentData.attendanceRecords) studentData.attendanceRecords = {};
      if (!studentData.attendanceNotes) studentData.attendanceNotes = {};
      if (!studentData.termsScores) {
        studentData.termsScores = { t1_m1: 20, t1_m2: 20, t1_exam: 30, t1_total: 100, t2_m1: 20, t2_m2: 20, t2_exam: 30, t2_total: 100, annual_total: 100 };
      }
      this.getAllStudents().push(studentData);
      this.save();

      // Instant Cloud Sync to Google Drive
      this.syncToCloud({
        action: 'full_backup',
        instant: true
      });

      // Instant Firestore Sync for new student
      if (typeof window !== 'undefined' && window.SmileKidsFirebase && window.SmileKidsFirebase.canUseFirestore()) {
        window.SmileKidsFirebase.saveStudentToFirestore(studentData).catch(e => {
          console.warn('[SmileKids DB] Firestore addStudent error:', e);
        });
      }

      return studentData;
    },

    PENDING_ADMISSIONS_KEY: 'SMILE_KIDS_PENDING_ADMISSIONS_2026',

    getPendingAdmissions: function() {
      if (typeof localStorage === 'undefined') return [];
      try {
        const val = localStorage.getItem(this.PENDING_ADMISSIONS_KEY);
        return val ? JSON.parse(val) : [];
      } catch(e) {
        return [];
      }
    },

    savePendingAdmissions: function(list) {
      if (typeof localStorage === 'undefined') return;
      try {
        localStorage.setItem(this.PENDING_ADMISSIONS_KEY, JSON.stringify(list));
      } catch(e) {}
    },

    addPendingAdmission: function(applicantData) {
      const list = this.getPendingAdmissions();
      const requestId = 'REQ-' + new Date().getFullYear() + '-' + Date.now().toString().slice(-4);
      const req = Object.assign({}, applicantData, {
        requestId: requestId,
        status: 'pending',
        submittedAt: new Date().toISOString()
      });
      list.unshift(req);
      this.savePendingAdmissions(list);
      return req;
    },

    approveAdmission: function(requestId) {
      const list = this.getPendingAdmissions();
      const item = list.find(r => r.requestId === requestId);
      if (!item) return { success: false, error: 'الطلب غير موجود' };
      if (item.status === 'approved') return { success: false, error: 'تم اعتماد هذا الطلب مسبقاً' };

      const studentData = {
        grade: parseInt(item.grade) || 1,
        track: item.track || 'arabic',
        nameAr: item.nameAr,
        nameEn: item.nameEn,
        parentName: item.parentName || '',
        parentPhone: item.parentPhone || item.phone || '',
        parentWhatsApp: item.parentWhatsApp || item.whatsapp || '',
        parentEmail: item.parentEmail || item.email || '',
        email: item.parentEmail || item.email || '',
        notes: item.notes || '',
        photo: item.photo || null,
        gender: item.gender || (item.nameAr && item.nameAr.match(/(ة|ه|فاطمة|مريم|نور|تاليا|إيلاف|فيروز|سارة|جنى|ملك|حبيبة)$/i) ? 'female' : 'male')
      };

      const added = this.addStudent(studentData);
      item.status = 'approved';
      item.approvedStudentId = added.id;
      item.approvedAt = new Date().toISOString();
      this.savePendingAdmissions(list);

      return { success: true, student: added, request: item };
    },

    rejectAdmission: function(requestId, reason) {
      const list = this.getPendingAdmissions();
      const item = list.find(r => r.requestId === requestId);
      if (!item) return false;
      item.status = 'rejected';
      item.rejectReason = reason || 'مرفوض من الإدارة';
      item.rejectedAt = new Date().toISOString();
      this.savePendingAdmissions(list);
      return true;
    },

    deleteStudent: function(id) {
      if (!id) return null;
      if (!this._deletedIds) this._deletedIds = new Set();
      this._deletedIds.add(id);

      if (typeof localStorage !== 'undefined') {
        try {
          localStorage.setItem(this.DELETED_IDS_KEY, JSON.stringify(Array.from(this._deletedIds)));
        } catch(e) {}
      }

      const idx = this.getAllStudents().findIndex(s => s.id === id);
      let removed = null;
      if (idx !== -1) {
        removed = this.getAllStudents().splice(idx, 1)[0];
        this.save();

        // Instant Cloud Sync to Google Drive with deleted IDs
        this.syncToCloud({
          action: 'full_backup',
          instant: true,
          deleted_student_ids: Array.from(this._deletedIds)
        });

        // Instant Firestore Sync for deleted student (both SDK and REST Fallback)
        if (typeof window !== 'undefined' && window.SmileKidsFirebase) {
          if (typeof window.SmileKidsFirebase.deleteStudentFromFirestore === 'function') {
            window.SmileKidsFirebase.deleteStudentFromFirestore(String(id));
          } else if (window.SmileKidsFirebase.canUseFirestore && window.SmileKidsFirebase.canUseFirestore() && window.SmileKidsFirebase.db) {
            window.SmileKidsFirebase.db.collection('students').doc(String(id)).delete().catch(e => {
              console.warn('[SmileKids DB] Firestore deleteStudent error:', e);
            });
          }
        }

        return removed;
      }
      return null;
    },

    getAttendance: function(studentId, dateStr) {
      const st = this.getStudentById(studentId);
      if (!st || !st.attendanceRecords) return 'present';
      return st.attendanceRecords[dateStr] || 'present';
    },

    setAttendance: function(studentId, dateStr, status, note) {
      const st = this.getStudentById(studentId);
      if (!st) return false;
      if (!st.attendanceRecords) st.attendanceRecords = {};
      if (status !== undefined && status !== null) {
        st.attendanceRecords[dateStr] = status;
      }
      if (note !== undefined && note !== null) {
        if (!st.attendanceNotes) st.attendanceNotes = {};
        st.attendanceNotes[dateStr] = note;
      }
      this.save();

      return window.SmileKidsSync ? window.SmileKidsSync.enqueue('attendance', {studentId,dateStr,status,note}) : Promise.resolve({success:false,error:'محرك الحفظ غير جاهز'});
    },

    setBatchAttendance: function(studentIds, dateStr, status) {
      const records = {};
      studentIds.forEach(id => {
        const st = this.getStudentById(id);
        if (st) { st.attendanceRecords = st.attendanceRecords || {}; st.attendanceRecords[dateStr] = status; records[id] = status; }
      });
      this.save();
      return window.SmileKidsSync ? window.SmileKidsSync.enqueue('attendance', {isBatch:true,dateStr,records}) : Promise.resolve({success:false,error:'محرك الحفظ غير جاهز'});
    },

    syncToFirestore: async function() {
      return {success:false,error:'الحفظ الجماعي الشامل غير متاح. احفظ التعديلات المحددة فقط.'};
    },

    saveTimetableToFirestore: async function(teacherId, scheduleData) {
      if (typeof window !== 'undefined' && window.SmileKidsFirebase && window.SmileKidsFirebase.canUseFirestore()) {
        return await window.SmileKidsFirebase.saveTimetableToFirestore(teacherId, scheduleData);
      }
      return { success: false, fallback: true };
    },

    resetToDefault: function() {
      this._cache = this._clone(MASTER_INITIAL_STUDENTS);
      this._ensureStudentFields();
      this.save();
      return this._cache;
    },

    exportJSON: function() {
      const payload = {
        database_info: {
          name: this.DATABASE_NAME,
          code: this.DATABASE_CODE,
          version: this.VERSION,
          storage_key: this.STORAGE_KEY,
          file_name: this.FILE_NAME_JSON,
          exported_at: new Date().toISOString(),
          total_students: this.getAllStudents().length
        },
        students: this.getAllStudents()
      };
      return JSON.stringify(payload, null, 2);
    },

    downloadJSONBackup: function() {
      const jsonStr = this.exportJSON();
      const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'smile_kids_database_backup_' + new Date().toISOString().split('T')[0] + '.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    },

    importJSON: function(jsonStr) {
      try {
        const parsed = JSON.parse(jsonStr);
        let list = null;
        if (Array.isArray(parsed)) {
          list = parsed;
        } else if (parsed && Array.isArray(parsed.students)) {
          list = parsed.students;
        }
        if (list && list.length > 0) {
          this._cache = list;
          this._ensureStudentFields();
          this.save();
          return { success: true, count: list.length };
        }
        return { success: false, error: 'الملف غير صالح أو لا يحتوي على سجلات طلاب' };
      } catch(err) {
        return { success: false, error: err.message };
      }
    },

    _clone: function(obj) {
      return JSON.parse(JSON.stringify(obj));
    },

    _ensureStudentFields: function() {
      if (!this._cache) return;
      this._cache = this._cache.filter(s => !isCanonicalDeletedStudent(s));
      this._cache.forEach(s => {
        enforceCanonicalStudent(s);
        if (!s.enrollmentStatus) s.enrollmentStatus = (s.status === 'withdrawn' ? 'withdrawn' : 'active');
        if (!s.attendanceRecords) s.attendanceRecords = {};
        if (!s.attendanceNotes) s.attendanceNotes = {};
        if (!s.subjectScores) s.subjectScores = {};
        if (!s.termsScores) {
          s.termsScores = {
            t1_m1: null,
            t1_m2: null,
            t1_tasks: null,
            t1_exam: null,
            t1_total: null,
            t2_m1: null,
            t2_m2: null,
            t2_tasks: null,
            t2_exam: null,
            t2_total: null,
            annual_total: null
          };
        }
      });
    },

    _tryMigrateLegacy: function() {
      if (typeof localStorage === 'undefined') return null;
      for (const k of LEGACY_STUDENT_KEYS) {
        try {
          const val = localStorage.getItem(k);
          if (val) {
            const list = JSON.parse(val);
            if (Array.isArray(list) && list.length > 0) {
              try {
                const attVal = localStorage.getItem(LEGACY_ATT_KEY);
                if (attVal) {
                  const attMap = JSON.parse(attVal);
                  list.forEach(st => {
                    if (attMap[st.id]) {
                      st.attendanceRecords = Object.assign(st.attendanceRecords || {}, attMap[st.id]);
                    }
                  });
                }
              } catch(e) {}
              return list;
            }
          }
        } catch(e) {}
      }
      return null;
    }
  };

  if (typeof window !== 'undefined') {
    window.SmileKidsDB = SmileKidsDB.init();
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = SmileKidsDB;
  }
})(typeof window !== 'undefined' ? window : this);
