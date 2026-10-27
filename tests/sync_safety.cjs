const fs=require('fs'),vm=require('vm'),assert=require('assert');
const root=require('path').join(__dirname,'..');
const source=fs.readFileSync(root+'/firebase_config.js','utf8');
function extract(start,end){return source.slice(source.indexOf(start)+start.length,source.indexOf(end,source.indexOf(start))).trim().replace(/,$/,'');}
const grade=vm.runInNewContext('('+extract('    saveGradeToFirestore: ', '\n    /**')+')');
const attendance=vm.runInNewContext('('+extract('    saveAttendanceToFirestore: ', '\n    /**')+')');
let docs={students:{TEST:{nameAr:'TEST ONLY',photo:'untouched',subjectScores:{math:{scores:{t1_sep:{score:19,isRecorded:true}}}},attendanceRecords:{'2026-09-01':'absent'}}},grades:{},attendance:{}};
let writes=0,fail=false;
const clone=x=>JSON.parse(JSON.stringify(x));
function apply(target,patch){for(const [key,value] of Object.entries(patch)){const path=key.split('.');let at=target;for(const p of path.slice(0,-1))at=at[p]||(at[p]={});at[path.at(-1)]=clone(value);}}
function api(uid){return {whenReady:Promise.resolve(),auth:{currentUser:{uid}},db:{collection:c=>({doc:id=>({c,id})}),batch:()=>{const ops=[];return {set:(r,p,o)=>ops.push([r,p,'set']),update:(r,p)=>ops.push([r,p,'update']),commit:async()=>{if(fail)throw Error('synthetic permission failure');const fresh=clone(docs);for(const [r,p,mode]of ops){if(mode==='update'&&!fresh[r.c][r.id])throw Error('missing student');fresh[r.c][r.id] ||= {};apply(fresh[r.c][r.id],p);}docs=fresh;writes+=ops.length;}}}},saveGradeToFirestore:grade,saveAttendanceToFirestore:attendance};}
(async()=>{
 const a=api('a'),b=api('b');const sep=JSON.stringify(docs.students.TEST.subjectScores.math.scores.t1_sep);
 await Promise.all([grade.call(a,{studentId:'TEST',subjectId:'math',periodKey:'t1_m1',score:17,maxScore:20}),grade.call(b,{studentId:'TEST',subjectId:'english',periodKey:'t1_m1',score:18,maxScore:20})]);
 assert.equal(docs.students.TEST.subjectScores.math.scores.t1_m1.score,17);assert.equal(docs.students.TEST.subjectScores.english.scores.t1_m1.score,18);assert.equal(JSON.stringify(docs.students.TEST.subjectScores.math.scores.t1_sep),sep);assert.equal(writes,4);assert.equal(docs.students.TEST.photo,'untouched');
 await grade.call(a,{studentId:'TEST',subjectId:'math',periodKey:'t1_m1',score:null,maxScore:20});assert.equal(docs.students.TEST.subjectScores.math.scores.t1_m1.isRecorded,false);assert.equal(docs.students.TEST.subjectScores.english.scores.t1_m1.score,18);
 let r=await attendance.call(a,{isBatch:true,dateStr:'2026-10-27',records:{TEST:'late'}});assert(r.success);assert.equal(docs.students.TEST.attendanceRecords['2026-09-01'],'absent');assert.equal(docs.students.TEST.attendanceRecords['2026-10-27'],'late');assert.equal(docs.attendance['TEST_2026-10-27'].status,'late');
 fail=true;const before=JSON.stringify(docs);r=await grade.call(a,{studentId:'TEST',subjectId:'math',periodKey:'t1_m2',score:20,maxScore:20});assert(!r.success);assert.equal(JSON.stringify(docs),before);fail=false;
 r=await grade.call(a,{studentId:'MISSING',subjectId:'math',periodKey:'t1_m1',score:5,maxScore:20});assert(!r.success);assert(!docs.grades.MISSING_math_t1_m1);
 const storage=new Map();let state=[];
 function queue(api,stored=storage){const ctx={window:{SmileKidsFirebase:api,addEventListener(){},dispatchEvent:e=>state.push(e.detail)},localStorage:{getItem:k=>stored.get(k)||null,setItem:(k,v)=>stored.set(k,v)},document:{body:null,readyState:'complete',getElementById:()=>null},CustomEvent:function(n,o){this.detail=o.detail},Date,Math,JSON,Map,Promise,setTimeout,clearTimeout};vm.runInNewContext(fs.readFileSync(root+'/school_sync.js','utf8'),ctx);return ctx.window.SmileKidsSync;}
 const qa=queue(a);fail=true;r=await qa.enqueue('grade',{studentId:'TEST',subjectId:'math',periodKey:'t1_m2',score:16,maxScore:20});assert(!r.success);assert.equal(qa.pendingCount(),1);assert.equal(state.at(-1).kind,'failed');assert(!state.some(x=>x.kind==='saved'));fail=false;
 const reloaded=queue(a);assert.equal(reloaded.pendingCount(),1);await reloaded.retry();assert.equal(reloaded.pendingCount(),0);assert.equal(docs.students.TEST.subjectScores.math.scores.t1_m2.score,16);assert.equal(state.at(-1).kind,'saved');
 fail=true;await qa.enqueue('grade',{studentId:'TEST',subjectId:'math',periodKey:'t1_m2',score:12,maxScore:20});fail=false;const other=queue(b);await other.retry();assert.equal(other.pendingCount(),1);assert.equal(docs.students.TEST.subjectScores.math.scores.t1_m2.score,16);
 const dbsrc=fs.readFileSync(root+'/smile_kids_database.js','utf8');const save=dbsrc.slice(dbsrc.indexOf('    save: function()'),dbsrc.indexOf('    getAllStudents:',dbsrc.indexOf('    save: function()')));assert(!save.includes('syncToFirestore'));assert(!save.includes('syncToCloud'));
 assert(source.includes('updateMask.fieldPaths='));assert(source.includes('skAuthedFetch(maskedUrl'));
 console.log('PASS: concurrent subjects, protected September, unrelated metadata, 2 writes per grade, atomic missing-student failure, daily attendance, clear propagation, no false-success, durable retry/reload, account-bound queue, no full-roster autosave, REST update-mask contract.');
})();
