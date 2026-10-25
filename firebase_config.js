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
    if (typeof window === 'undefined' || typeof document === 'undefined') return false;
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

  // =======================================================================
  // بوابة تسجيل الدخول: تظهر شاشة دخول للكادر ولا تكمل تحميل البيانات إلا بعد الدخول
  // =======================================================================

  // =======================================================================
  // العرض المحدود لأولياء الأمور (public_view) - بدون أرقام هواتف أو أرقام سرية
  // =======================================================================
  async function skSha256(str) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  async function skEnsurePublicView(db, st) {
    try {
      if (!db || !st || !st.id || !st.pin) return;
      const id = await skSha256(String(st.id).toUpperCase() + ':' + String(st.pin).trim().toUpperCase());
      const ref = db.collection('public_view').doc(id);
      const snap = await ref.get();
      if (!snap.exists) {
        await ref.set({ id: st.id, nameAr: st.nameAr || '', nameEn: st.nameEn || '', grade: st.grade, track: st.track || '', gender: st.gender || '', photo: st.photo || null, parentUpdated: false });
      } else {
        const cur = snap.data() || {};
        if (cur.grade !== st.grade || (cur.track || '') !== (st.track || '') || (cur.gender || '') !== (st.gender || '')) {
          await ref.set({ grade: st.grade, track: st.track || '', gender: st.gender || '' }, { merge: true });
        }
      }
    } catch (e) { console.warn('[SmileKids] public_view sync:', e && e.message); }
  }

  async function skMergeParentUpdates(db) {
    try {
      const qs = await db.collection('public_view').where('parentUpdated', '==', true).get();
      for (const d of qs.docs) {
        const v = d.data();
        if (!v.id) continue;
        await db.collection('students').doc(String(v.id)).set({
          nameAr: v.nameAr || '', nameEn: v.nameEn || '', photo: v.photo || null,
          parentUpdated: true, parentUpdatedAt: v.parentUpdatedAt || null, _updatedAt: new Date().toISOString()
        }, { merge: true });
        await d.ref.set({ parentUpdated: false }, { merge: true });
      }
    } catch (e) { console.warn('[SmileKids] merge parent updates:', e && e.message); }
  }


  // هوية الكادر الحالية (من حساب Firebase الذي سجل الدخول)
  function skStaffIdentity() {
    try {
      const u = window.firebase && window.firebase.auth && window.firebase.auth().currentUser;
      if (!u || !u.email) return null;
      const email = u.email.toLowerCase();
      const local = email.split('@')[0];
      if (email === 'admin@smilekids.school' || email === 'nabila.fakhry@gmail.com') {
        return { email: email, role: 'admin', teacherId: null };
      }
      const map = { nancy: 't_german' };
      return { email: email, role: 'teacher', teacherId: map[local] || ('t_' + local) };
    } catch (e) { return null; }
  }

  function skToEmail(v) {
    v = String(v || '').trim().toLowerCase();
    if (!v) return '';
    if (v.indexOf('@') === -1) v = v + '@smilekids.school';
    return v;
  }

  function skRequireStaffLogin(auth) {
    return new Promise((resolve) => {
      let firstEvent = true;
      auth.onAuthStateChanged((user) => {
        if (user && !user.isAnonymous) {
          const o = document.getElementById('sk-login-overlay');
          if (o) o.remove();
          if (firstEvent) { firstEvent = false; }
          resolve(user);
          return;
        }
        if (user && user.isAnonymous) { auth.signOut(); return; }
        firstEvent = false;
        showOverlay();
      });

      function showOverlay() {
        if (document.getElementById('sk-login-overlay')) return;
        const build = () => {
          const o = document.createElement('div');
          o.id = 'sk-login-overlay';
          o.setAttribute('dir', 'rtl');
          o.style.cssText = 'position:fixed;inset:0;z-index:2147483647;background:#0f172a;display:flex;align-items:center;justify-content:center;font-family:Tahoma,Arial,sans-serif;padding:16px;';
          o.innerHTML = '<form id="sk-login-form" style="background:#1e293b;border:1px solid #334155;border-radius:18px;padding:28px;width:100%;max-width:360px;color:#f1f5f9;box-shadow:0 20px 50px rgba(0,0,0,.5)">' +
            '<h2 style="margin:0 0 6px;font-size:20px;font-weight:800;text-align:center">مدرسة Smile Kids</h2>' +
            '<p style="margin:0 0 18px;font-size:13px;color:#94a3b8;text-align:center">تسجيل دخول الكادر</p>' +
            '<label style="font-size:12px;color:#cbd5e1">الإيميل أو الاسم (مثال: asmaa)</label>' +
            '<input id="sk-login-email" type="text" autocomplete="username" dir="ltr" style="width:100%;box-sizing:border-box;margin:6px 0 14px;padding:11px;border-radius:10px;border:1px solid #475569;background:#0f172a;color:#fff;font-size:15px">' +
            '<label style="font-size:12px;color:#cbd5e1">كلمة المرور</label>' +
            '<input id="sk-login-pass" type="password" autocomplete="current-password" dir="ltr" style="width:100%;box-sizing:border-box;margin:6px 0 14px;padding:11px;border-radius:10px;border:1px solid #475569;background:#0f172a;color:#fff;font-size:15px">' +
            '<div id="sk-login-err" style="display:none;color:#fca5a5;font-size:12px;margin-bottom:10px"></div>' +
            '<button id="sk-login-btn" type="submit" style="width:100%;padding:12px;border:0;border-radius:10px;background:#f59e0b;color:#0f172a;font-weight:800;font-size:15px;cursor:pointer">دخول</button>' +
            '</form>';
          document.body.appendChild(o);
          document.getElementById('sk-login-form').addEventListener('submit', async (ev) => {
            ev.preventDefault();
            const err = document.getElementById('sk-login-err');
            const btn = document.getElementById('sk-login-btn');
            err.style.display = 'none';
            btn.disabled = true; btn.textContent = '...';
            try {
              await auth.signInWithEmailAndPassword(
                skToEmail(document.getElementById('sk-login-email').value),
                document.getElementById('sk-login-pass').value
              );
            } catch (e) {
              err.textContent = 'الإيميل أو كلمة المرور غير صحيحة';
              err.style.display = 'block';
              btn.disabled = false; btn.textContent = 'دخول';
            }
          });
        };
        if (document.body) build(); else document.addEventListener('DOMContentLoaded', build);
      }
    });
  }

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

      // ==== بوابة تسجيل دخول الكادر (Firebase Auth) ====
      if (!window.SK_PUBLIC_PAGE) {
        await skRequireStaffLogin(authInstance);
        setTimeout(() => skMergeParentUpdates(dbInstance), 2500);
        try {
          const idn = skStaffIdentity();
          if (idn && idn.role === 'admin') {
            sessionStorage.setItem('smile_kids_active_teacher_session', JSON.stringify({ teacherId: 'admin_master', isAdmin: true }));
          }
          const loadData = async () => {
            for (let i = 0; i < 40 && !(window.SmileKidsDB && window.SmileKidsDB.loadStudentsFromCloud); i++) await new Promise(r => setTimeout(r, 250));
            try {
              const res = await window.SmileKidsFirebase.fetchAllFromFirestore();
              if (res && res.students && res.students.length && window.SmileKidsDB) window.SmileKidsDB.loadStudentsFromCloud(res.students);
            } catch (e) { console.warn('[SmileKids] post-login load failed', e); }
          };
          if (idn) loadData();
          const fire = () => window.dispatchEvent(new CustomEvent('smilekids_staff_signed_in', { detail: idn }));
          if (document.readyState === 'complete') setTimeout(fire, 300); else window.addEventListener('load', () => setTimeout(fire, 300));
        } catch (e) {}
      }

      // تحديث الكائن العام
      SmileKidsFirebase.app = appInstance;
      SmileKidsFirebase.db = dbInstance;
      SmileKidsFirebase.auth = authInstance;
      SmileKidsFirebase.isReady = true;

      console.info('%c[SmileKids Firebase] متصل بنجاح مع Google Cloud Firestore & Auth 🚀', 'color: #10b981; font-weight: bold;');
      
      // إشعار التطبيق بجاهزية Firebase
      if (typeof window.dispatchEvent === 'function') {
        window.dispatchEvent(new CustomEvent('smilekids_firebase_ready', {
          detail: { projectId: firebaseConfig.projectId, mode: 'sdk' }
        }));
      }

      return true;
    } catch(err) {
      console.warn('[SmileKids Firebase] تعذر تهيئة Firebase SDK، سيتم استخدام محرك REST التلقائي:', err);
      return false;
    } finally {
      SmileKidsFirebase.isReady = true;
      // ضمان إشعار جميع بوابات الموبايل والكمبيوتر بجاهزية الاتصال السحابي دائماً
      if (typeof window.dispatchEvent === 'function') {
        window.dispatchEvent(new CustomEvent('smilekids_firebase_ready', {
          detail: { projectId: firebaseConfig.projectId, mode: dbInstance ? 'sdk' : 'rest' }
        }));
      }
    }
  })();

  function cleanObjectForFirestore(obj) {
    if (!obj || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) return obj.map(cleanObjectForFirestore);
    const res = {};
    for (const key of Object.keys(obj)) {
      if (key.includes('.')) continue;
      res[key] = cleanObjectForFirestore(obj[key]);
    }
    return res;
  }


  // =======================================================================
  // 3.5. محرك التزامن المباشر عبر واجهة Firestore REST API (REST Engine Fallback)
  // يضمن اتصالاً ثنائياً وسحابياً 100% حتى لو تعذر تحميل SDK أو تم حجبه
  // =======================================================================
  function encodeFirestoreValue(val) {
    if (val === null || val === undefined) return { nullValue: null };
    if (typeof val === 'boolean') return { booleanValue: val };
    if (typeof val === 'number') {
      if (Number.isInteger(val)) return { integerValue: String(val) };
      return { doubleValue: val };
    }
    if (typeof val === 'string') return { stringValue: val };
    if (Array.isArray(val)) {
      return { arrayValue: { values: val.map(encodeFirestoreValue) } };
    }
    if (typeof val === 'object') {
      const fields = {};
      for (const [k, v] of Object.entries(val)) {
        if (!k.includes('.')) {
          fields[k] = encodeFirestoreValue(v);
        }
      }
      return { mapValue: { fields } };
    }
    return { stringValue: String(val) };
  }

  function decodeFirestoreValue(v) {
    if (!v) return null;
    if (v.stringValue !== undefined) return v.stringValue;
    if (v.integerValue !== undefined) return parseInt(v.integerValue, 10);
    if (v.doubleValue !== undefined) return Number(v.doubleValue);
    if (v.booleanValue !== undefined) return v.booleanValue;
    if (v.nullValue !== undefined) return null;
    if (v.mapValue && v.mapValue.fields) {
      const obj = {};
      for (const [mk, mv] of Object.entries(v.mapValue.fields)) {
        obj[mk] = decodeFirestoreValue(mv);
      }
      return obj;
    }
    if (v.arrayValue && v.arrayValue.values) {
      return v.arrayValue.values.map(decodeFirestoreValue);
    }
    return null;
  }

  function decodeFirestoreDoc(doc) {
    if (!doc || !doc.fields) return {};
    const res = {};
    for (const [k, v] of Object.entries(doc.fields)) {
      const decodedVal = decodeFirestoreValue(v);
      if (k.includes('.')) {
        // فك مفاتيح التنقيط التلقائية مثل subjectScores.arabic.scores.t1_sep
        const parts = k.split('.');
        let cur = res;
        for (let i = 0; i < parts.length - 1; i++) {
          cur[parts[i]] = cur[parts[i]] || {};
          cur = cur[parts[i]];
        }
        cur[parts[parts.length - 1]] = decodedVal;
      } else {
        res[k] = decodedVal;
      }
    }
    return res;
  }

  // طلبات REST تحمل رمز تسجيل دخول المستخدم (Firebase ID token) عند توفره
  async function skAuthedFetch(url, opts) {
    opts = opts || {};
    try {
      const u = window.firebase && window.firebase.auth && window.firebase.auth().currentUser;
      if (u) {
        const tok = await u.getIdToken();
        opts.headers = Object.assign({}, opts.headers || {}, { 'Authorization': 'Bearer ' + tok });
      }
    } catch (e) { /* بدون رمز */ }
    return fetch(url, opts);
  }

  const REST_BASE_URL = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents`;

  async function fetchCollectionREST(collectionName) {
    let allDocs = [];
    let pageToken = '';
    do {
      let url = `${REST_BASE_URL}/${collectionName}?pageSize=300&key=${firebaseConfig.apiKey}`;
      if (pageToken) url += `&pageToken=${encodeURIComponent(pageToken)}`;
      const resp = await skAuthedFetch(url);
      if (!resp.ok) throw new Error(`Firestore REST GET failed: ${resp.status}`);
      const data = await resp.json();
      if (Array.isArray(data.documents)) {
        data.documents.forEach(doc => {
          allDocs.push(decodeFirestoreDoc(doc));
        });
      }
      pageToken = data.nextPageToken || '';
    } while (pageToken);
    return allDocs;
  }

  async function getDocREST(collectionName, docId) {
    const url = `${REST_BASE_URL}/${collectionName}/${encodeURIComponent(docId)}?key=${firebaseConfig.apiKey}`;
    const resp = await skAuthedFetch(url);
    if (resp.status === 404) return null;
    if (!resp.ok) throw new Error(`Firestore REST GET doc failed: ${resp.status}`);
    const data = await resp.json();
    return decodeFirestoreDoc(data);
  }

  async function saveDocREST(collectionName, docId, data) {
    const url = `${REST_BASE_URL}/${collectionName}/${encodeURIComponent(docId)}?key=${firebaseConfig.apiKey}`;
    const fields = {};
    for (const [k, v] of Object.entries(data)) {
      if (!k.includes('.')) {
        fields[k] = encodeFirestoreValue(v);
      }
    }
    const resp = await skAuthedFetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields })
    });
    if (!resp.ok) throw new Error(`Firestore REST PATCH failed: ${resp.status}`);
    return await resp.json();
  }

  async function deleteDocREST(collectionName, docId) {
    const url = `${REST_BASE_URL}/${collectionName}/${encodeURIComponent(docId)}?key=${firebaseConfig.apiKey}`;
    try {
      const resp = await skAuthedFetch(url, { method: 'DELETE' });
      if (resp.status === 404) return true; // Already deleted
      if (!resp.ok) {
        console.warn(`[SmileKids Firebase] Firestore REST DELETE error (${resp.status}) for ${collectionName}/${docId}`);
        return false;
      }
      return true;
    } catch(err) {
      console.warn(`[SmileKids Firebase] Network error in deleteDocREST for ${collectionName}/${docId}:`, err);
      return false;
    }
  }

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

    // محرك REST المساعد المتاح للاستدعاء المباشر
    rest: {
      fetchCollection: fetchCollectionREST,
      getDoc: getDocREST,
      saveDoc: saveDocREST
    },

    /**
     * التحقق اللحظي من اتصال Firebase وجاهزيته (يدعم كلاً من SDK و REST Fallback)
     */
    canUseFirestore: function() {
      return Boolean(this.isConfigured && (this.db || typeof fetch === 'function'));
    },

    /**
     * حفظ / تحديث بيانات طالب في مجموعة 'students' (يدعم SDK مع Fallback تلقائي إلى REST)
     * @param {Object} studentData بيانات الطالب الكاملة
     */
    saveStudentToFirestore: async function(studentData) {
      if (!studentData || !studentData.id) return { success: false, error: 'بيانات الطالب غير صالحة' };
      if (!this.canUseFirestore() && this.whenReady) {
        try { await this.whenReady; } catch(e) {}
      }
      if (!this.canUseFirestore()) {
        return { success: false, fallback: true, message: 'Firebase غير مهيأ، تم الحفظ محلياً' };
      }

      const cleanData = cleanObjectForFirestore(studentData);
      // Skip identical re-saves (saves free-plan write quota)
      try {
        const sig = JSON.stringify(cleanData, (k, v) => (k === '_lastModified' || k === '_updatedAt') ? undefined : v);
        if (!window.__skSaved) { try { window.__skSaved = JSON.parse(localStorage.getItem('sk_saved_sig') || '{}'); } catch (e2) { window.__skSaved = {}; } }
        const sid = String(studentData.id);
        let hsh = 0; for (let i = 0; i < sig.length; i++) { hsh = (hsh * 31 + sig.charCodeAt(i)) | 0; }
        const key = sig.length + ':' + hsh;
        if (window.__skSaved[sid] === key) return { success: true, id: studentData.id, source: 'dedupe' };
        window.__skSaved[sid] = key;
        clearTimeout(window.__skSavedT); window.__skSavedT = setTimeout(() => { try { localStorage.setItem('sk_saved_sig', JSON.stringify(window.__skSaved)); } catch (e3) {} }, 1500);
      } catch (e) {}
      const payload = Object.assign({}, cleanData, {
        _lastModified: Date.now(),
        _updatedAt: new Date().toISOString()
      });


      // 1. Try Firebase SDK if available
      if (this.db) {
        try {
          const docRef = this.db.collection('students').doc(String(studentData.id));
          await docRef.set(payload, { merge: true });
          skEnsurePublicView(this.db, studentData);
          return { success: true, id: studentData.id, source: 'sdk' };
        } catch(err) {
          console.warn(`[SmileKids Firebase] تعذر الحفظ عبر SDK للطالب ${studentData.id}، جاري التحويل إلى REST Fallback:`, err);
        }
      }

      // 2. Fallback to Firestore REST API
      try {
        await saveDocREST('students', String(studentData.id), payload);
        return { success: true, id: studentData.id, source: 'rest' };
      } catch(restErr) {
        console.warn(`[SmileKids Firebase] خطأ أثناء حفظ الطالب ${studentData.id} في Firestore عبر REST:`, restErr);
        return { success: false, error: restErr.message };
      }
    },

    /**
     * حذف مستند طالب من مجموعة 'students' في Firestore نهائياً (يدعم SDK و REST Fallback المباشر)
     * @param {string} studentId معرف الطالب المراد حذفه
     */
    deleteStudentFromFirestore: async function(studentId) {
      if (!studentId) return { success: false, error: 'معرف الطالب مفقود' };
      const stId = String(studentId);

      // 1. Try Firebase SDK if available
      if (this.db) {
        try {
          await this.db.collection('students').doc(stId).delete();
          console.log(`[SmileKids Firebase] تم حذف الطالب ${stId} من Firestore بنجاح عبر SDK`);
          return { success: true, id: stId, source: 'sdk' };
        } catch(sdkErr) {
          console.warn(`[SmileKids Firebase] تعذر حذف الطالب ${stId} عبر SDK، جاري المحاولة عبر REST Fallback:`, sdkErr);
        }
      }

      // 2. Fallback to REST DELETE
      try {
        const ok = await deleteDocREST('students', stId);
        if (ok) {
          console.log(`[SmileKids Firebase] تم حذف الطالب ${stId} من Firestore بنجاح عبر REST API`);
          return { success: true, id: stId, source: 'rest' };
        }
        return { success: false, error: 'فشل حذف المستند عبر REST' };
      } catch(restErr) {
        console.error(`[SmileKids Firebase] خطأ في حذف الطالب ${stId} عبر REST:`, restErr);
        return { success: false, error: restErr.message };
      }
    },

    /**
     * حذف مستند عام من أي مجموعة في Firestore
     * @param {string} collectionName
     * @param {string} docId
     */
    deleteDocFromFirestore: async function(collectionName, docId) {
      if (!collectionName || !docId) return { success: false, error: 'بيانات غير صالحة' };
      const dId = String(docId);
      if (this.db) {
        try {
          await this.db.collection(collectionName).doc(dId).delete();
          return { success: true, source: 'sdk' };
        } catch(e) {}
      }
      try {
        const ok = await deleteDocREST(collectionName, dId);
        return { success: ok, source: 'rest' };
      } catch(e) {
        return { success: false, error: e.message };
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
      if (!this.canUseFirestore() && this.whenReady) {
        try { await this.whenReady; } catch(e) {}
      }
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
        const gradePayload = {
          studentId: stId,
          subjectId: subId,
          periodKey: period,
          score: gradeRecord.score !== undefined ? gradeRecord.score : null,
          maxScore: gradeRecord.maxScore !== undefined ? gradeRecord.maxScore : null,
          details: gradeRecord.patch || {},
          updatedAt: nowIso,
          timestamp: nowTs
        };

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

        // 1. Try Firebase SDK if available
        if (this.db) {
          try {
            const batch = this.db.batch();
            const gradeRef = this.db.collection('grades').doc(gradeDocId);
            batch.set(gradeRef, gradePayload, { merge: true });

            const stRef = this.db.collection('students').doc(stId);
            batch.set(stRef, stUpdate, { merge: true });
            await batch.commit();
            return { success: true, id: gradeDocId, source: 'sdk' };
          } catch(sdkErr) {
            console.warn(`[SmileKids Firebase] تعذر حفظ الدرجات عبر SDK للطالب ${stId}، جاري التحويل إلى REST Fallback:`, sdkErr);
          }
        }

        // 2. Fallback to Firestore REST API
        await saveDocREST('grades', gradeDocId, gradePayload);
        try {
          await saveDocREST('students', stId, stUpdate);
        } catch(e) {}
        return { success: true, id: gradeDocId, source: 'rest' };
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
      if (!this.canUseFirestore() && this.whenReady) {
        try { await this.whenReady; } catch(e) {}
      }
      if (!this.canUseFirestore() || !this.db) {
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
     * حفظ الإعدادات العامة للنظام في مجموعة 'settings' (وثيقة appSettings)
     * @param {Object} settingsObj كائن الإعدادات المراد تحديثها
     */
    saveSettingsToFirestore: async function(settingsObj) {
      if (!settingsObj || !this.canUseFirestore()) return { success: false, fallback: true };
      const payload = Object.assign({}, settingsObj, {
        _updatedAt: new Date().toISOString(),
        _lastModified: Date.now()
      });

      // 1. Try Firebase SDK
      if (this.db) {
        try {
          await this.db.collection('settings').doc('appSettings').set(payload, { merge: true });
          return { success: true, source: 'sdk' };
        } catch(err) {
          console.warn('[SmileKids Firebase] تعذر حفظ الإعدادات عبر SDK، جاري التحويل إلى REST Fallback:', err);
        }
      }

      // 2. Fallback to Firestore REST API
      try {
        await saveDocREST('settings', 'appSettings', payload);
        return { success: true, source: 'rest' };
      } catch(err) {
        console.warn('[SmileKids Firebase] خطأ في حفظ الإعدادات في Firestore عبر REST:', err);
        return { success: false, error: err.message };
      }
    },

    /**
     * سحب الإعدادات العامة للنظام من Firestore (يدعم SDK مع Fallback إلى REST)
     */
    fetchSettingsFromFirestore: async function() {
      if (!this.canUseFirestore()) return null;

      // 1. Try Firebase SDK
      if (this.db) {
        try {
          const doc = await this.db.collection('settings').doc('appSettings').get();
          if (doc.exists && doc.data()) {
            return doc.data();
          }
        } catch(err) {
          console.warn('[SmileKids Firebase] تعذر جلب الإعدادات عبر SDK، جاري التحويل إلى REST Fallback:', err);
        }
      }

      // 2. Fallback to Firestore REST API
      try {
        return await getDocREST('settings', 'appSettings');
      } catch(err) {
        console.warn('[SmileKids Firebase] خطأ في جلب الإعدادات من Firestore عبر REST:', err);
        return null;
      }
    },

    /**
     * جلب شامل وفوري لجميع الطلاب والدرجات والإعدادات من سحابة Firestore (يدعم SDK مع Fallback إلى REST)
     */
    fetchAllFromFirestore: async function() {
      if (!this.canUseFirestore() && this.whenReady) {
        try { await this.whenReady; } catch(e) {}
      }
      if (!this.canUseFirestore()) {
        return { success: false, fallback: true, message: 'Firebase غير متصل' };
      }

      // 1. Try Firebase SDK if available
      if (this.db) {
        try {
          const stSnapshot = await this.db.collection('students').get();
          const students = [];
          stSnapshot.forEach(doc => {
            if (doc.exists) students.push(doc.data());
          });

          const gradesSnapshot = await this.db.collection('grades').get();
          const grades = [];
          gradesSnapshot.forEach(doc => {
            if (doc.exists) grades.push(doc.data());
          });

          let customMaxScores = null;
          let appSettings = null;
          try {
            const sDoc = await this.db.collection('settings').doc('maxScores').get();
            if (sDoc.exists && sDoc.data()) customMaxScores = sDoc.data().data;
          } catch(e) {}
          try {
            const settDoc = await this.db.collection('settings').doc('appSettings').get();
            if (settDoc.exists && settDoc.data()) appSettings = settDoc.data();
          } catch(e) {}

          return {
            success: true,
            source: 'sdk',
            students: students,
            grades: grades,
            customMaxScores: customMaxScores,
            appSettings: appSettings,
            selectedCertificateStyle: appSettings ? appSettings.selectedCertificateStyle : null,
            count: students.length
          };
        } catch(sdkErr) {
          console.warn('[SmileKids Firebase] تعذر الجلب الشامل عبر SDK، جاري التحويل إلى REST Fallback المباشر:', sdkErr);
        }
      }

      // 2. Fallback to Firestore REST API
      try {
        const students = await fetchCollectionREST('students');
        const grades = await fetchCollectionREST('grades');
        let customMaxScores = null;
        let appSettings = null;
        try {
          const sDoc = await getDocREST('settings', 'maxScores');
          if (sDoc && sDoc.data) customMaxScores = sDoc.data;
        } catch(e) {}
        try {
          appSettings = await getDocREST('settings', 'appSettings');
        } catch(e) {}

        return {
          success: true,
          source: 'rest',
          students: students,
          grades: grades,
          customMaxScores: customMaxScores,
          appSettings: appSettings,
          selectedCertificateStyle: appSettings ? appSettings.selectedCertificateStyle : null,
          count: students.length
        };
      } catch(err) {
        console.error('[SmileKids Firebase] خطأ أثناء الجلب الشامل من Firestore عبر REST:', err);
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
    staffIdentity: function() { return skStaffIdentity(); },

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
