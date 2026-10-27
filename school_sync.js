/* Confirmed, field-scoped school writes. Local edits are never reported as server saves. */
(function (window) {
  'use strict';
  const KEY = 'smilekids_pending_writes_v1';
  let pending = [];
  try { pending = JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (_) {}
  if (!Array.isArray(pending)) pending = [];
  let running = false;
  const waiters = new Map();
  const user = () => window.firebase && window.firebase.auth && window.firebase.auth().currentUser;
  function persist() { localStorage.setItem(KEY, JSON.stringify(pending)); }
  function status(kind, message) {
    let bar = document.getElementById('sk-cloud-save-status');
    if (!bar && document.body) {
      bar = document.createElement('div'); bar.id = 'sk-cloud-save-status';
      bar.setAttribute('dir', 'rtl'); bar.setAttribute('role', 'status');
      bar.style.cssText = 'position:fixed;bottom:12px;right:12px;left:12px;z-index:10000;padding:12px 16px;border-radius:12px;font:700 14px Tahoma,Arial;background:#1e293b;color:white;box-shadow:0 3px 18px #0006;display:flex;gap:12px;justify-content:center;align-items:center;';
      const label = document.createElement('span'); label.id = 'sk-cloud-save-label'; bar.appendChild(label);
      const retry = document.createElement('button'); retry.id = 'sk-cloud-save-retry'; retry.type = 'button'; retry.textContent = 'إعادة محاولة الحفظ';
      retry.style.cssText = 'padding:7px 12px;background:#f59e0b;color:#0f172a;border:0;border-radius:8px;cursor:pointer;font:inherit;';
      retry.addEventListener('click', () => drain(true)); bar.appendChild(retry); document.body.appendChild(bar);
    }
    if (bar) {
      bar.dataset.state = kind;
      document.getElementById('sk-cloud-save-label').textContent = message;
      document.getElementById('sk-cloud-save-retry').style.display = kind === 'failed' ? '' : 'none';
      const space = Math.max(100,bar.offsetHeight + 28);
      document.body.style.paddingBottom = space + 'px';
      document.querySelectorAll('main, #dashboard-view').forEach(el=>{el.style.paddingBottom=space+'px';});
      document.getElementById('att-students-list')?.style.setProperty('margin-bottom',space+'px');
      bar.style.border = '2px solid ' + ({saved:'#34d399',saving:'#fbbf24',failed:'#fb7185'}[kind] || '#94a3b8');
    }
    window.dispatchEvent(new CustomEvent('smilekids_cloud_save_status', {detail:{kind,message,pending:pending.length}}));
  }
  function key(kind, p) {
    if (kind === 'grade') return 'grade:' + p.studentId + ':' + p.subjectId + ':' + p.periodKey;
    return 'attendance:' + (p.studentId || Object.keys(p.records || {}).sort().join(',')) + ':' + p.dateStr + ':' + (p.periodKey || 'day');
  }
  async function drain(explicitRetry) {
    if (running || !pending.length) return;
    running = true;
    try {
      const fb = window.SmileKidsFirebase;
      if (!fb) throw new Error('محرك الاتصال غير جاهز');
      if (!fb.auth || !fb.auth.currentUser) throw new Error('سجل الدخول أولاً ثم أعد المحاولة');
      const uid = fb.auth.currentUser.uid;
      if (pending.some(x => x.uid !== uid)) throw new Error('توجد تعديلات لحساب آخر. ادخل بالحساب الذي سجلها قبل إعادة المحاولة');
      while (pending.length) {
        const item = pending[0];
        status('saving', 'جارٍ تأكيد الحفظ أونلاين... لا تغلق الصفحة');
        let timer;
        const result = await Promise.race([
          item.kind === 'grade' ? fb.saveGradeToFirestore(item.payload) : fb.saveAttendanceToFirestore(item.payload),
          new Promise(resolve => { timer = setTimeout(() => resolve({success:false,error:'انتهت مهلة تأكيد الحفظ. تحقق من الإنترنت ثم أعد المحاولة'}), 15000); })
        ]);
        clearTimeout(timer);
        if (!result || !result.success) throw new Error(result && result.error || 'تعذر تأكيد الحفظ');
        // Remove only the completed version; a newer edit stays queued.
        const index = pending.findIndex(x => x.version === item.version);
        if (index !== -1) pending.splice(index, 1);
        persist();
        const done = waiters.get(item.version); if (done) {done(result); waiters.delete(item.version);}
      }
      status('saved', 'تم الحفظ أونلاين وتأكيده ✓');
    } catch (err) {
      status('failed', 'لم يتأكد الحفظ أونلاين. التعديلات محفوظة على هذا الجهاز فقط. ' + err.message);
      waiters.forEach(done => done({success:false,error:err.message})); waiters.clear();
    } finally { running = false; }
  }
  window.SmileKidsSync = {
    enqueue(kind, payload) {
      const fb = window.SmileKidsFirebase;
      const uid = fb && fb.auth && fb.auth.currentUser && fb.auth.currentUser.uid;
      if (!uid) { status('failed', 'لا يمكن تأكيد الحفظ: سجل الدخول أولاً. لا تغلق الصفحة.'); return Promise.resolve({success:false,error:'يلزم تسجيل الدخول'}); }
      const k = key(kind, payload);
      const version = Date.now() + '-' + Math.random().toString(36).slice(2);
      const item = {kind,payload:JSON.parse(JSON.stringify(payload)),uid,key:k,version};
      // Preserve in-flight item. Coalesce only queued later versions of the same field.
      const start = running ? 1 : 0;
      for (let i = pending.length - 1; i >= start; i--) {
        if (pending[i].key === k && pending[i].uid === uid) {
          const old = waiters.get(pending[i].version); if (old) old({success:false,superseded:true});
          waiters.delete(pending[i].version); pending.splice(i,1);
        }
      }
      pending.push(item);
      try {persist();} catch (err) {pending.pop();status('failed','تعذر حفظ نسخة احتياطية على الجهاز. لا تغلق الصفحة.');return Promise.resolve({success:false,error:err.message});}
      const done = new Promise(resolve => waiters.set(version, resolve));
      drain(false);
      return done;
    },
    retry: () => drain(true),
    pendingCount: () => pending.length
  };
  function showPending() { if (pending.length) status('failed','توجد تعديلات سابقة غير مؤكدة أونلاين على هذا الجهاز. تحقق منها قبل إعادة المحاولة.'); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', showPending); else showPending();
  window.addEventListener('beforeunload', e => {if (pending.length) {e.preventDefault();e.returnValue='';}});
})(window);
