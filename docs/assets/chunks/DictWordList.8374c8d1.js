import{o as a,c as d,E as n,L as p,H as c,e,G as l,I as $,T as x,as as D,at as g,i as b,F as k,U as h,N as W,ay as B}from"./framework.29bd70f6.js";import{a as N,a7 as T,a0 as u,a4 as V,a3 as v}from"./components.18f911a0.js";import"../app.a726b562.js";import"./theme.ee8de9e6.js";const E={class:"flex flex-col gap-2"},L={class:"flex gap-2"},U={class:"flex flex-wrap gap-2"},H={__name:"DictWordList",emits:["word","root","def"],setup(F){const{user:m}=N(),{input:i,found:y,linked:C,addWord:w}=T();return(r,t)=>(a(),d("div",E,[n("div",{class:"font-bold text-xl mb-2 cursor-pointer",onClick:t[0]||(t[0]=s=>r.$emit("root","words"))},"Words"),p(x,{name:"fade",mode:"out-in"},{default:c(()=>[e(u).def?(a(),l(e(V),{key:e(u).def,hash:e(u).def},null,8,["hash"])):$("",!0)]),_:1}),n("div",L,[D(n("input",{class:"p-2 rounded-lg flex-1 dark-bg-dark-400","onUpdate:modelValue":t[1]||(t[1]=s=>b(i)?i.value=s:null),placeholder:"Enter a word"},null,512),[[g,e(i)]]),n("button",{class:"button",onClick:t[2]||(t[2]=s=>e(m).is?e(w)():e(m).auth=!0)},"Add")]),n("div",U,[p(B,{name:"list"},{default:c(()=>[e(i)?(a(!0),d(k,{key:1},h(e(y),s=>(a(),l(e(v),{key:s.item.hash,style:W({opacity:1-s.score}),hash:s.item.hash,onDef:t[4]||(t[4]=o=>r.$emit("def",o)),onClick:o=>r.$emit("word",s.item.hash)},null,8,["style","hash","onClick"]))),128)):(a(!0),d(k,{key:0},h(e(C),(s,o)=>(a(),l(e(v),{key:o,hash:o,onDef:t[3]||(t[3]=f=>r.$emit("def",f)),onClick:f=>r.$emit("word",o)},null,8,["hash","onClick"]))),128))]),_:1})])]))}};export{H as default};
