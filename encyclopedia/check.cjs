const fs=require('fs');
const vm=require('vm');
const assert=require('assert');
const app=fs.readFileSync('dist/app.js','utf8');
const code=fs.readFileSync('dist/research.js','utf8')+'\n'+app.split('\ntry{const raw=')[0]+'\n'+app.slice(app.indexOf('function nameKey'),app.indexOf('const labels='));
vm.runInNewContext(code+`
assert.equal(seeds.length,12);
assert.equal(new Set(seeds.map(e=>e.id)).size,12);
assert.equal(safeURL('javascript:alert(1)'), '');
assert.equal(safeURL('https://example.com/a'), 'https://example.com/a');
assert.equal(safeURL('data:text/html;base64,abc',true),'');
assert.equal(esc('<script>'), '&lt;script&gt;');
const sample={entries:[{id:'custom-one',name:'Test species',summary:'Test description',image:'javascript:evil'}],overrides:{},saved:['custom-one','missing']};
const restored=validate(sample);
assert.equal(restored.entries[0].image,'');
assert.equal(restored.saved.length,1);
assert.throws(()=>validate({...sample,entries:[...sample.entries,...sample.entries]}));
assert.throws(()=>validate({}));
assert.equal(Object.keys(RESEARCH).length,12);
assert.equal(Object.keys(REFERENCES).length,14);
assert.equal(new Set(Object.values(REFERENCES).map(s=>referenceKey(s.url))).size,14);
const used=new Set(['alienint']);
for(const seed of seeds){
  const r=RESEARCH[seed.id];assert(r&&r.sections.length>=2);
  for(const [title,body,refs]of r.sections){assert(title&&body&&refs.length);assert.equal(new Set(refs).size,refs.length);for(const id of refs){assert(REFERENCES[id]);used.add(id)}}
  assert(researchHTML(seed).includes('Sources & review notes'));
}
assert.equal(used.size,14);
assertUniqueSpecies(seeds);
for(const name of [' Grays ','GREYS','Mantis aliens','Mantids','Anunna','little-green-men']){
  assert.throws(()=>assertUniqueSpecies([...seeds,{id:'custom-duplicate',name}]));
  assert.throws(()=>validate({...sample,entries:[{id:'custom-duplicate',name,summary:'test'}]}));
}
assert.throws(()=>assertUniqueSpecies([...seeds,{id:'custom-a',name:'New Being'},{id:'custom-b',name:'new-being'}]));
assertUniqueSpecies([...seeds,{id:'custom-a',name:'Original Species'}]);
assert.equal(validate({...sample,saved:['custom-one','custom-one']}).saved.length,1);
assert.equal(referenceKey('https://www.example.com/page/?utm_source=test#section'),referenceKey('http://example.com/page'));
assert.equal(validate({...sample,overrides:{greys:{name:'Greys',summary:'My summary',notes:'Keep my notes'}}}).overrides.greys.notes,'Keep my notes');
assert.equal(validate({...sample,entries:[{id:'custom-duplicate',name:'Grays',summary:'legacy'}]},false).entries.length,1);
`,{assert,URL});
console.log('PASS: 12 unique species; 14 unique, used sources; citations resolve; aliases, imports and duplicate bookmarks checked; existing notes preserved; URL filtering and escaping');
