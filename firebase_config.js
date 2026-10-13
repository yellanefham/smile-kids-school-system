/**
 * =========================================================================
 * Smile Kids School - Google Firebase Integration Layer
 * اسم الملف: firebase_config.js
 * الغرض: تهيئة خدمات Firebase (Firestore & Authentication) للنظام المدرسي
 * متوافق مع: تطبيقات الويب الثابتة (Vanilla HTML/JS) ويدعم العمل دون اتصال (Offline Fallback)
 * SDK: Firebase v10/v11 Compat via Google CDN
 * =========================================================================
 */

(function(window) {
  'use strict';

  // =======================================================================
  // 1. إعدادات مشروع Firebase (Firebase Project Configuration)
  // ضع بيانات مشروعك هنا من Firebase Console -> Project Settings -> General -> Web App
  // =======================================================================
  const DEFAULT_FIREBASE_CONFIG = {
    apiKey: "AIzaSyDf3TZnC4AtwnaV_BXc2ko-QFcG7DVE8yQ",
    authDomain: "smile-kids-school.firebaseapp.com",
    projectId: "smile-kids-school",
    storageBucket: "smile-kids-school.firebasestorage.app",
    messagingSenderId: "248226226890",
    appId: "1:248226226890:web:3dd4ff3470691c2f334a33",
    measurementId: "G-DQ1RFWLBK9"
  };

  // السماح بتمرير إعدادات من النافذة العامة إذا تم تعريفها مسبقاً
  const firebaseConfig = Object.assign(
    {},
    DEFAULT_FIREBASE_CONFIG,
    window.SMILE_KIDS_FIREBASE_CONFIG || {}
  );

  /**
   * التحقق مما إذا كانت إعدادات Firebase مكتملة وتم استبدال القيم الافتراضية
   */
  function checkIsConfigured(cfg) {
    if (!cfg) return false;
    const isPlaceholder = (val) => {
      if (!val || typeof val !== 'string') return true;
      const upper = val.toUpperCase();
      return upper.includes('YOUR_') || upper.includes('PLACEHOLDER');
    };
    return (
      Boolean(cfg.apiKey) &&
      !isPlaceholder(cfg.apiKey) &&
      Boolean(cfg.projectId) &&
      Boolean(cfg.appId) &&
      !isPlaceholder(cfg.appId)
    );
  }

  const isConfigured = checkIsConfigured(firebaseConfig);

  // حالة النظام والمراجع الداخلية
  let appInstance = null;
  let dbInstance = null;
  let authInstance = null;
  let isSdkLoading = false;
  let activeListeners = [];

  // =======================================================================
  // 2. محمل Firebase SDK الديناميكي (Dynamic CDN Loader)
  // يقوم بتحميل مكتبات Firebase الرسمية تلقائياً من Google CDN إذا لم تكن موجودة
  // =======================================================================
  const FIREBASE_SDK_VERSION = '10.14.1';
  const CDN_SCRIPTS = [
    `https://www.gstatic.com/firebasejs/${FIREBASE_SDK_VERSION}/firebase-app-compat.js`,
    `https://www.gstatic.com/firebasejs/${FIREBASE_SDK_VERSION}/firebase-auth-compat.js`,
    `https://www.gstatic.com/firebasejs/${FIREBASE_SDK_VERSION}/firebase-firestore-compat.js`
  ];

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      // تجنب تحميل السكريبت مرتين
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        if (existing.getAttribute('data-loaded') === 'true') {
          return resolve();
        }
        existing.addEventListener('load', () => resolve(), { once: true });
        existing.addEventListener('error', (e) => reject(e), { once: true });
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.async = false; // الحفاظ على الترتيب
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        script.setAttribute('data-loaded', 'true');
        resolve();
      };
      script.onerror = (err) => {
        console.warn(`[SmileKids Firebase] تعذر تحميل المكتبة من CDN: ${src}`, err);
        reject(err);
      };
      (document.head || document.documentElement).appendChild(script);
    });
  }

  async function ensureFirebaseSdk() {
    if (typeof window === 'undefined') return false;
    if (window.firebase && window.firebase.firestore && window.firebase.auth) {
      return true;
    }

    if (isSdkLoading) {
      return readyPromise;
    }

    isSdkLoading = true;
    try {
      for (const scriptUrl of CDN_SCRIPTS) {
        await loadScript(scriptUrl);
      }
      return Boolean(window.firebase && window.firebase.firestore);
    } catch(err) {
      console.warn('[SmileKids Firebase] تنبيه: تعذر تحميل حزم Firebase SDK عبر الإنترنت، سيستمر النظام بالعمل محلياً بصورة كاملة.', err);
      return false;
    }
  }

  // =======================================================================
  // 3. تهيئة بيئة Firebase Firestore & Auth
  // =======================================================================
  const readyPromise = (async () => {
    if (!isConfigured) {
      console.info('%c[SmileKids Firebase] ⚠️ Firebase يعمل بوضع الاحتياط المحلي (Offline Fallback). لربط السحابة، أدخل بيانات مشروعك في firebase_config.js', 'color: #f59e0b; font-weight: bold;');
      return false;
    }

    try {
      const sdkReady = await ensureFirebaseSdk();
      if (!sdkReady || !window.firebase) {
        console.warn('[SmileKids Firebase] لم يتم العثور على كائن firebase العام.');
        return false;
      }

      // تهيئة التطبيق إن لم يكن مهيئاً مسبقاً
      if (!window.firebase.apps || window.firebase.apps.length === 0) {
        appInstance = window.firebase.initializeApp(firebaseConfig);
      } else {
        appInstance = window.firebase.app();
      }

      // تهيئة قاعدة البيانات Firestore
      dbInstance = window.firebase.firestore();

      // تفعيل التخزين المؤقت دون اتصال (Offline Persistence)
      try {
        await dbInstance.enablePersistence({ synchronizeTabs: true });
        console.log('[SmileKids Firebase] تم تفعيل التخزين المؤقت المحلي متعدد النوافذ (Firestore Persistence: Enabled 🟢)');
      } catch(err) {
        if (err.code === 'failed-precondition') {
          console.warn('[SmileKids Firebase] تنبيه: نافذة أخرى مفتوحة تدير التخزين المؤقت.');
        } else if (err.code === 'unimplemented') {
          console.warn('[SmileKids Firebase] المتصفح الحالي لا يدعم ميزة Persistence.');
        }
      }

      // تهيئة نظام المصادقة FirebaseAuth
      authInstance = window.firebase.auth();

      // تحديث الكائن العام
      SmileKidsFirebase.app = appInstance;
      SmileKidsFirebase.db = dbInstance;
      SmileKidsFirebase.auth = authInstance;
      SmileKidsFirebase.isReady = true;

      console.info('%c[SmileKids Firebase] متصل بنجاح مع Google Cloud Firestore & Auth 🚀', 'color: #10b981; font-weight: bold;');
      
      // إشعار التطبيق بجاهزية Firebase
      if (typeof window.dispatchEvent === 'function') {
        window.dispatchEvent(new CustomEvent('smilekids_firebase_ready', {
          detail: { projectId: firebaseConfig.projectId }
        }));
      }

      return true;
    } catch(err) {
      console.error('[SmileKids Firebase] خطأ أثناء تهيئة Firebase:', err);
      return false;
    }
  })();

  // =======================================================================
  // 4. الواجهة البرمجية الموحدة (Unified Public API)
  // =======================================================================
  const SmileKidsFirebase = {
    // الخصائص العامة
    config: firebaseConfig,
    isConfigured: isConfigured,
    isReady: false,
    app: null,
    db: null,
    auth: null,
    whenReady: readyPromise,

    /**
     * التحقق اللحظي من اتصال Firebase وجاهزيته
     */
    canUseFirestore: function() {
      return Boolean(this.isConfigured && this.db);
    },

    /**
     * حفظ / تحديث بيانات طالب في مجموعة 'students'
     * @param {Object} studentData بيانات الطالب الكاملة
     */
    saveStudentToFirestore: async function(studentData) {
      if (!studentData || !studentData.id) return { success: false, error: 'بيانات الطالب غير صالحة' };
      if (!this.canUseFirestore()) {
        return { success: false, fallback: true, message: 'Firebase غير مهيأ، تم الحفظ محلياً' };
      }

      try {
        const docRef = this.db.collection('students').doc(String(studentData.id));
        const payload = Object.assign({}, studentData, {
          _lastModified: Date.now(),
          _updatedAt: new Date().toISOString()
        });

        await docRef.set(payload, { merge: true });
        return { success: true, id: studentData.id };
      } catch(err) {
        console.warn(`[SmileKids Firebase] خطأ أثناء حفظ الطالب ${studentData.id} في Firestore:`, err);
        return { success: false, error: err.message };
      }
    },

    /**
     * حفظ سجل الحضور والغياب في مجموعة 'attendance' وتحديث سجل الطالب
     * @param {Object} record { studentId, dateStr, status, note, isBatch, records }
     */
    saveAttendanceToFirestore: async function(record) {
      if (!record) return { success: false, error: 'سجل الحضور فارغ' };
      if (!this.canUseFirestore()) {
        return { success: false, fallback: true, message: 'Firebase غير مهيأ، تم الحفظ محلياً' };
      }

      try {
        const batch = this.db.batch();
        const nowIso = new Date().toISOString();
        const nowTs = Date.now();

        if (record.isBatch && record.records && record.dateStr) {
          // تسجيل دفعة كاملة لفصل / صف
          const dateStr = record.dateStr;
          Object.entries(record.records).forEach(([stId, status]) => {
            const attDocId = `${stId}_${dateStr}`;
            const attRef = this.db.collection('attendance').doc(attDocId);
            batch.set(attRef, {
              studentId: stId,
              dateStr: dateStr,
              status: status,
              updatedAt: nowIso,
              timestamp: nowTs
            }, { merge: true });

            // تحديث سجل الطالب مباشرة في كائن الطالب
            const stRef = this.db.collection('students').doc(String(stId));
            const updateObj = {
              _lastModified: nowTs
            };
            updateObj[`attendanceRecords.${dateStr}`] = status;
            batch.set(stRef, updateObj, { merge: true });
          });

          await batch.commit();
          return { success: true, count: Object.keys(record.records).length };
        } else if (record.studentId && record.dateStr) {
          // تسجيل فردي لطالب
          const attDocId = `${record.studentId}_${record.dateStr}`;
          const attRef = this.db.collection('attendance').doc(attDocId);
          const attData = {
            studentId: record.studentId,
            dateStr: record.dateStr,
            status: record.status || 'present',
            note: record.note || '',
            updatedAt: nowIso,
            timestamp: nowTs
          };
          batch.set(attRef, attData, { merge: true });

          const stRef = this.db.collection('students').doc(String(record.studentId));
          const stUpdate = { _lastModified: nowTs };
          if (record.status !== undefined) stUpdate[`attendanceRecords.${record.dateStr}`] = record.status;
          if (record.note !== undefined) stUpdate[`attendanceNotes.${record.dateStr}`] = record.note;
          batch.set(stRef, stUpdate, { merge: true });

          await batch.commit();
          return { success: true, id: attDocId };
        }
        return { success: false, error: 'بيانات غير مطابقة' };
      } catch(err) {
        console.warn('[SmileKids Firebase] خطأ في حفظ الحضور في Firestore:', err);
        return { success: false, error: err.message };
      }
    },

    /**
     * حفظ رصد درجات مادة / اختبار في مجموعة 'grades' وتحديث سجل الطالب
     * @param {Object} gradeRecord { studentId, subjectId, periodKey, score, maxScore, patch, termsScores }
     */
    saveGradeToFirestore: async function(gradeRecord) {
      if (!gradeRecord || !gradeRecord.studentId) return { success: false, error: 'بيانات الدرجة غير صالحة' };
      if (!this.canUseFirestore()) {
        return { success: false, fallback: true, message: 'Firebase غير مهيأ، تم الحفظ محلياً' };
      }

      try {
        const batch = this.db.batch();
        const nowTs = Date.now();
        const nowIso = new Date().toISOString();
        const stId = String(gradeRecord.studentId);
        const subId = gradeRecord.subjectId || 'term';
        const period = gradeRecord.periodKey || 'general';

        const gradeDocId = `${stId}_${subId}_${period}`;
        const gradeRef = this.db.collection('grades').doc(gradeDocId);

        batch.set(gradeRef, {
          studentId: stId,
          subjectId: subId,
          periodKey: period,
          score: gradeRecord.score !== undefined ? gradeRecord.score : null,
          maxScore: gradeRecord.maxScore !== undefined ? gradeRecord.maxScore : null,
          details: gradeRecord.patch || {},
          updatedAt: nowIso,
          timestamp: nowTs
        }, { merge: true });

        // مزامنة سجل درجات الطالب في وثيقة الطالب
        const stRef = this.db.collection('students').doc(stId);
        const stUpdate = { _lastModified: nowTs };

        if (gradeRecord.termsScores) {
          stUpdate.termsScores = gradeRecord.termsScores;
        }
        if (gradeRecord.subjectScores) {
          stUpdate.subjectScores = gradeRecord.subjectScores;
        }
        if (gradeRecord.score !== undefined && subId && period) {
          stUpdate[`subjectScores.${subId}.scores.${period}`] = gradeRecord.score;
        }

        batch.set(stRef, stUpdate, { merge: true });
        await batch.commit();
        return { success: true, id: gradeDocId };
      } catch(err) {
        console.warn(`[SmileKids Firebase] خطأ في حفظ الدرجات للطالب ${gradeRecord.studentId}:`, err);
        return { success: false, error: err.message };
      }
    },

    /**
     * حفظ جدول الحصص في مجموعة 'timetables'
     * @param {string} teacherId معرف المعلمة
     * @param {Object} scheduleData بيانات الجدول الأسبوعي
     */
    saveTimetableToFirestore: async function(teacherId, scheduleData) {
      if (!teacherId || !scheduleData) return { success: false, error: 'بيانات الجدول غير مكتملة' };
      if (!this.canUseFirestore()) return { success: false, fallback: true };

      try {
        const docRef = this.db.collection('timetables').doc(String(teacherId));
        await docRef.set({
          teacherId: teacherId,
          schedule: scheduleData,
          _updatedAt: new Date().toISOString(),
          _lastModified: Date.now()
        }, { merge: true });
        return { success: true, teacherId: teacherId };
      } catch(err) {
        console.warn(`[SmileKids Firebase] خطأ في حفظ جدول المعلمة ${teacherId}:`, err);
        return { success: false, error: err.message };
      }
    },

    /**
     * إرسال دفعة طلاب إلى Firestore (تلقائياً مقسمة لحزم بحد أقصى 500 عملية)
     * @param {Array<Object>} studentsList قائمة الطلاب
     * @param {Function} onProgress دالة متابعة التقدم اختياري
     */
    batchSaveStudents: async function(studentsList, onProgress) {
      if (!Array.isArray(studentsList) || studentsList.length === 0) {
        return { success: false, error: 'قائمة الطلاب فارغة' };
      }
      if (!this.canUseFirestore()) {
        return { success: false, fallback: true, count: studentsList.length };
      }

      const BATCH_SIZE = 400; // هامش أمان أقل من 500
      let totalSaved = 0;

      try {
        for (let i = 0; i < studentsList.length; i += BATCH_SIZE) {
          const chunk = studentsList.slice(i, i + BATCH_SIZE);
          const batch = this.db.batch();

          chunk.forEach(st => {
            if (st && st.id) {
              const ref = this.db.collection('students').doc(String(st.id));
              batch.set(ref, Object.assign({}, st, {
                _migratedAt: new Date().toISOString(),
                _lastModified: Date.now()
              }), { merge: true });
            }
          });

          await batch.commit();
          totalSaved += chunk.length;
          if (typeof onProgress === 'function') {
            onProgress(totalSaved, studentsList.length);
          }
        }
        return { success: true, total: totalSaved };
      } catch(err) {
        console.error('[SmileKids Firebase] خطأ أثناء الحفظ المجمع للطلاب:', err);
        return { success: false, error: err.message, savedSoFar: totalSaved };
      }
    },

    /**
     * تفعيل الاستماع اللحظي لمجموعات Firestore (Realtime onSnapshot)
     * @param {Object} callbacks { onStudents, onAttendance, onGrades, onTimetables, onError }
     * @returns {Function} دالة لإلغاء جميع الاشتراكات
     */
    initFirestoreListeners: function(callbacks) {
      callbacks = callbacks || {};
      if (!this.canUseFirestore()) {
        console.info('[SmileKids Firebase] لن يتم تفعيل المستمعات اللحظية لأن Firebase يعمل محلياً.');
        return () => {};
      }

      // إلغاء أي اشتراكات سابقة إن وجدت
      this.stopFirestoreListeners();

      try {
        // 1. الاستماع لمجموعة الطلاب (students)
        if (typeof callbacks.onStudents === 'function') {
          const unsubStudents = this.db.collection('students').onSnapshot((snapshot) => {
            const students = [];
            snapshot.forEach(doc => {
              students.push(doc.data());
            });
            callbacks.onStudents(students, snapshot);
          }, (err) => {
            console.warn('[SmileKids Firebase] خطأ في مستمع الطلاب:', err);
            if (callbacks.onError) callbacks.onError(err, 'students');
          });
          activeListeners.push(unsubStudents);
        }

        // 2. الاستماع لسجلات الحضور (attendance)
        if (typeof callbacks.onAttendance === 'function') {
          const unsubAtt = this.db.collection('attendance').onSnapshot((snapshot) => {
            const records = [];
            snapshot.forEach(doc => records.push(doc.data()));
            callbacks.onAttendance(records, snapshot);
          }, (err) => {
            console.warn('[SmileKids Firebase] خطأ في مستمع الحضور:', err);
            if (callbacks.onError) callbacks.onError(err, 'attendance');
          });
          activeListeners.push(unsubAtt);
        }

        // 3. الاستماع لسجلات الدرجات (grades)
        if (typeof callbacks.onGrades === 'function') {
          const unsubGrades = this.db.collection('grades').onSnapshot((snapshot) => {
            const grades = [];
            snapshot.forEach(doc => grades.push(doc.data()));
            callbacks.onGrades(grades, snapshot);
          }, (err) => {
            console.warn('[SmileKids Firebase] خطأ في مستمع الدرجات:', err);
            if (callbacks.onError) callbacks.onError(err, 'grades');
          });
          activeListeners.push(unsubGrades);
        }

        // 4. الاستماع للجداول الدراسية (timetables)
        if (typeof callbacks.onTimetables === 'function') {
          const unsubTimetables = this.db.collection('timetables').onSnapshot((snapshot) => {
            const schedules = {};
            snapshot.forEach(doc => {
              schedules[doc.id] = doc.data();
            });
            callbacks.onTimetables(schedules, snapshot);
          }, (err) => {
            console.warn('[SmileKids Firebase] خطأ في مستمع الجداول:', err);
            if (callbacks.onError) callbacks.onError(err, 'timetables');
          });
          activeListeners.push(unsubTimetables);
        }

        console.log(`[SmileKids Firebase] تم تفعيل ${activeListeners.length} مستمعات لحظية على Firestore 📡`);

        return () => this.stopFirestoreListeners();
      } catch(err) {
        console.error('[SmileKids Firebase] فشل تفعيل المستمعات اللحظية:', err);
        return () => {};
      }
    },

    /**
     * إيقاف جميع مستمعات Firestore اللحظية النشطة
     */
    stopFirestoreListeners: function() {
      if (activeListeners.length > 0) {
        activeListeners.forEach(unsub => {
          try { if (typeof unsub === 'function') unsub(); } catch(e) {}
        });
        activeListeners = [];
      }
    },

    /**
     * حفظ إعدادات النهايات العظمى للمواد في مجموعة 'settings'
     */
    saveCustomMaxScoresToFirestore: async function(maxScoresObj) {
      if (!maxScoresObj || !this.canUseFirestore()) return { success: false, fallback: true };
      try {
        await this.db.collection('settings').doc('maxScores').set({
          data: maxScoresObj,
          _updatedAt: new Date().toISOString(),
          _lastModified: Date.now()
        }, { merge: true });
        return { success: true };
      } catch(err) {
        console.warn('[SmileKids Firebase] خطأ في حفظ النهايات العظمى في Firestore:', err);
        return { success: false, error: err.message };
      }
    },

    /**
     * سحب إعدادات النهايات العظمى للمواد من Firestore
     */
    fetchCustomMaxScoresFromFirestore: async function() {
      if (!this.canUseFirestore()) return null;
      try {
        const doc = await this.db.collection('settings').doc('maxScores').get();
        if (doc.exists && doc.data() && doc.data().data) {
          return doc.data().data;
        }
        return null;
      } catch(err) {
        console.warn('[SmileKids Firebase] خطأ في جلب النهايات العظمى من Firestore:', err);
        return null;
      }
    },

    /**
     * جلب شامل وفوري لجميع الطلاب والدرجات والإعدادات من سحابة Firestore
     */
    fetchAllFromFirestore: async function() {
      if (!this.canUseFirestore()) {
        return { success: false, fallback: true, message: 'Firebase غير متصل' };
      }

      try {
        // 1. Fetch Students
        const stSnapshot = await this.db.collection('students').get();
        const students = [];
        stSnapshot.forEach(doc => {
          if (doc.exists) students.push(doc.data());
        });

        // 2. Fetch Grades
        const gradesSnapshot = await this.db.collection('grades').get();
        const grades = [];
        gradesSnapshot.forEach(doc => {
          if (doc.exists) grades.push(doc.data());
        });

        // 3. Fetch Settings / Max Scores
        let customMaxScores = null;
        try {
          const sDoc = await this.db.collection('settings').doc('maxScores').get();
          if (sDoc.exists && sDoc.data()) {
            customMaxScores = sDoc.data().data;
          }
        } catch(e) {}

        return {
          success: true,
          students: students,
          grades: grades,
          customMaxScores: customMaxScores,
          count: students.length
        };
      } catch(err) {
        console.error('[SmileKids Firebase] خطأ أثناء الجلب الشامل من Firestore:', err);
        return { success: false, error: err.message };
      }
    },

    // =======================================================================
    // 5. خدمات المصادقة والأمان (Firebase Authentication)
    // =======================================================================

    /**
     * تسجيل الدخول بالبريد الإلكتروني وكلمة المرور
     * @param {string} email
     * @param {string} password
     */
    signInWithEmail: async function(email, password) {
      if (!this.isConfigured || !this.auth) {
        throw new Error('Firebase Auth غير مهيأ أو يعمل بوضع عدم الاتصال.');
      }
      return await this.auth.signInWithEmailAndPassword(email, password);
    },

    /**
     * تسجيل خروج المستخدم الحالي
     */
    signOutUser: async function() {
      if (!this.auth) return Promise.resolve();
      return await this.auth.signOut();
    },

    /**
     * مراقبة تغير حالة تسجيل دخول المستخدم
     * @param {Function} callback يتم استدعاؤه عند تغير حالة المستخدم (user)
     */
    onAuthStateChanged: function(callback) {
      if (!this.auth) {
        // تمرير null إذا كان النظام دون اتصال
        if (typeof callback === 'function') callback(null);
        return () => {};
      }
      return this.auth.onAuthStateChanged(callback);
    },

    /**
     * الحصول على المستخدم الحالي المسجل
     */
    getCurrentUser: function() {
      return this.auth ? this.auth.currentUser : null;
    }
  };

  // تصدير الكائن إلى النطاق العام للنافذة
  if (typeof window !== 'undefined') {
    window.SmileKidsFirebase = SmileKidsFirebase;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = SmileKidsFirebase;
  }

})(typeof window !== 'undefined' ? window : this);
