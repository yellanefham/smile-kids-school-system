const {initializeTestEnvironment,assertFails}=require('@firebase/rules-unit-testing');
const {doc,setDoc,getDoc,writeBatch,onSnapshot,terminate}=require('firebase/firestore');
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const source=fs.readFileSync(require('path').join(__dirname,'../firebase_config.js'),'utf8');
function method(name){const a=source.indexOf('    '+name+': ');const b=source.indexOf('\n    /**',a);return vm.runInNewContext('('+source.slice(a+name.length+6,b).trim().replace(/,$/,'')+')');}
const saveGrade=method('saveGradeToFirestore'),saveAttendance=method('saveAttendanceToFirestore');
(async()=>{const env=await initializeTestEnvironment({projectId:'demo-school-safety',firestore:{host:'127.0.0.1',port:8088,rules:fs.readFileSync(require('path').join(__dirname,'../firestore.rules'),'utf8')}});
const a=env.authenticatedContext('synthetic-nabila',{email:'nabila@smilekids.school'}).firestore(),b=env.authenticatedContext('synthetic-yara',{email:'yara@smilekids.school'}).firestore(),outsider=env.authenticatedContext('outsider',{email:'unknown@example.test'}).firestore();
await env.withSecurityRulesDisabled(async ctx=>{await setDoc(doc(ctx.firestore(),'students','TEST-SAFETY'),{id:'TEST-SAFETY',nameAr:'TEST ONLY',photo:'UNCHANGED',subjectScores:{math:{scores:{t1_sep:{score:19,maxScore:20,isRecorded:true}}}},attendanceRecords:{'2026-09-01':'absent'}})});
function adapter(db,uid) {
 return {whenReady:Promise.resolve(),auth:{currentUser:{uid}},db:{
   collection:c=>({doc:id=>doc(db,c,id)}),
   batch:()=>{const batch=writeBatch(db);return {set:(r,p,o)=>batch.set(r,JSON.parse(JSON.stringify(p)),o),update:(r,p)=>batch.update(r,JSON.parse(JSON.stringify(p))),commit:()=>batch.commit()};}
 }};
}
const aa=adapter(a,'a'),bb=adapter(b,'b');
const payload=(subject,score)=>({studentId:'TEST-SAFETY',subjectId:subject,periodKey:'t1_m1',score,maxScore:20});
let seen=[];const unsub=onSnapshot(doc(b,'students','TEST-SAFETY'),s=>seen.push(s.data()));
let r=await Promise.all([saveGrade.call(aa,payload('math',17)),saveGrade.call(bb,payload('english',18))]);assert(r.every(x=>x.success));
let data=(await getDoc(doc(a,'students','TEST-SAFETY'))).data();assert.equal(data.subjectScores.math.scores.t1_m1.score,17);assert.equal(data.subjectScores.english.scores.t1_m1.score,18);assert.equal(data.subjectScores.math.scores.t1_sep.score,19);assert.equal(data.photo,'UNCHANGED');
assert.equal((await getDoc(doc(a,'students','TEST-SAFETY'))).data().subjectScores.math.scores.t1_sep.score,19);
r=await saveAttendance.call(aa,{isBatch:true,dateStr:'2026-10-27',records:{'TEST-SAFETY':'absent'}});assert(r.success);data=(await getDoc(doc(b,'students','TEST-SAFETY'))).data();assert.equal(data.attendanceRecords['2026-10-27'],'absent');assert.equal(data.attendanceRecords['2026-09-01'],'absent');
r=await saveGrade.call(aa,payload('math',null));assert(r.success);assert.equal((await getDoc(doc(b,'students','TEST-SAFETY'))).data().subjectScores.math.scores.t1_m1.score,null);
await assertFails(getDoc(doc(outsider,'students','TEST-SAFETY')));await assertFails(getDoc(doc(env.unauthenticatedContext().firestore(),'students','TEST-SAFETY')));
assert(seen.some(s=>s?.subjectScores?.english?.scores?.t1_m1?.score===18));unsub();
const reopened=env.authenticatedContext('synthetic-reopened',{email:'nabila@smilekids.school'}).firestore();data=(await getDoc(doc(reopened,'students','TEST-SAFETY'))).data();assert.equal(data.subjectScores.english.scores.t1_m1.score,18);assert.equal(data.attendanceRecords['2026-10-27'],'absent');
await env.cleanup();console.log('PASS Firestore emulator: actual SDK atomic writes, named staff rules, separate sessions simultaneous subjects, listener visibility, new-session readback, September preservation, daily attendance, clear, anonymous/unknown denied. Demo project only, no production network.');})();
