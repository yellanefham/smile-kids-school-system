const fs=require('fs'),vm=require('vm'),assert=require('assert');
const src=fs.readFileSync(require('path').join(__dirname,'../firebase_config.js'),'utf8');
function take(a,b){return src.slice(src.indexOf(a),src.indexOf(b,src.indexOf(a)));}
const ctx={skSha256:async()=> 'SYNTHETIC-HASH',console,Date};
vm.createContext(ctx);
vm.runInContext(take('  async function skEnsurePublicView','  async function skMergeParentUpdates')+take('  async function skMergeParentUpdates','  // هوية الكادر الحالية'),ctx);
const copy=x=>JSON.parse(JSON.stringify(x));
(async()=>{
let publicData=null,sets=[];
const ref={get:async()=>({exists:!!publicData,data:()=>copy(publicData)}),set:async(p)=>{sets.push(copy(p));publicData={...(publicData||{}),...copy(p)}}};
const db={collection:()=>({doc:()=>ref})};
const st={id:'TEST-ONLY',pin:'TEST-NONREAL',nameAr:'TEST',grade:1,track:'arabic',gender:'female',photo:'PRIVATE-SYNTHETIC-PHOTO'};
await ctx.skEnsurePublicView(db,st);assert.equal(publicData.photo,null);assert.equal(st.photo,'PRIVATE-SYNTHETIC-PHOTO');
publicData.photo='EXISTING-PARENT-SYNTHETIC';sets=[];await ctx.skEnsurePublicView(db,st);assert.equal(publicData.photo,'EXISTING-PARENT-SYNTHETIC');assert.equal(sets.length,0);
await ctx.skEnsurePublicView(db,{...st,grade:2});assert.equal(publicData.photo,'EXISTING-PARENT-SYNTHETIC');assert(!('photo'in sets[0]));
for(const photo of [null,undefined,'','   ','NEW-PARENT-SYNTHETIC']){
 let student={photo:'STAFF-SYNTHETIC',subjectScores:{math:{scores:{t1_sep:{score:19}}}},attendanceRecords:{'2026-09-01':'absent'}};let cleared=false;
 const parent={id:'TEST-ONLY',nameAr:'NEW NAME',nameEn:'NEW NAME',photo,parentUpdated:true};
 const db2={collection:c=>c==='public_view'?{where:()=>({get:async()=>({docs:[{data:()=>parent,ref:{set:async patch=>{assert.deepEqual(copy(patch),{parentUpdated:false});cleared=true}}}]})})}:{doc:()=>({set:async(p,o)=>{assert(o.merge);assert(!('subjectScores'in p));assert(!('attendanceRecords'in p));student={...student,...copy(p)}}})}};
 await ctx.skMergeParentUpdates(db2);assert.equal(student.photo,photo==='NEW-PARENT-SYNTHETIC'?photo:'STAFF-SYNTHETIC');assert.equal(student.nameAr,'NEW NAME');assert.equal(student.subjectScores.math.scores.t1_sep.score,19);assert.equal(student.attendanceRecords['2026-09-01'],'absent');assert(cleared);
}
console.log('PASS portrait privacy: missing parent view gets no staff photo; existing parent photos unchanged; grade metadata update preserves photo; null/missing/empty name-only update preserves staff photo; explicit supplied parent photo retained; academic/attendance fields untouched. Synthetic only.');
})();
