import{o as s,c as n,l as r,I as p,w as k,m as e,b as c,e as x,T as g,F as u,E as f,n as D,t as w,aG as b,aH as $,P as B,aO as T}from"./framework.BQ1aRZM4.js";import{a as V,a6 as z,a4 as m,a7 as E,a2 as N,a8 as h}from"./components.Dl01snlO.js";import"./theme.CGMZLven.js";const F={class:"flex flex-col gap-2"},G={class:"flex w-full gap-2 flex-wrap"},L={key:0,class:"flex flex-1 gap-2 m-2"},P=["onClick"],S={class:"flex gap-2 flex-1"},U={class:"flex flex-wrap gap-2"},O={__name:"DictDefList",emits:["def","root"],setup(A){const{user:l}=V(),{def:i,addDef:v,found:C,linked:_}=z();return(d,o)=>(s(),n("div",F,[r("div",{class:"font-bold text-xl mb-2 cursor-pointer",onClick:o[0]||(o[0]=t=>d.$emit("root","defs"))},"Definitions"),p(g,{name:"fade",mode:"out-in"},{default:k(()=>{var t;return[(t=e(m))!=null&&t.word?(s(),c(e(E),{key:e(m).word,hash:e(m).word},null,8,["hash"])):x("",!0)]}),_:1}),r("div",G,[e(l).is?(s(),n("div",L,[(s(!0),n(u,null,f(e(N),(t,a)=>(s(),n("button",{class:D(["button capitalize text-xs",{active:e(i).part==a}]),key:t,onClick:y=>e(i).part=a},w(a),11,P))),128))])):x("",!0),r("div",S,[b(r("textarea",{class:"p-2 rounded-lg flex-auto dark-bg-dark-400","onUpdate:modelValue":o[1]||(o[1]=t=>e(i).text=t),placeholder:"Enter a definition"},null,512),[[$,e(i).text]]),r("button",{class:"button",onClick:o[2]||(o[2]=t=>e(l).is?e(v)():e(l).auth=!0)},"Add")])]),r("div",U,[p(T,{name:"list"},{default:k(()=>[e(i).text?(s(!0),n(u,{key:1},f(e(C),t=>(s(),c(e(h),{class:"cursor-pointer",key:t.item.hash,style:B({opacity:1-t.score}),hash:t.item.hash,onClick:a=>d.$emit("def",t.item.hash)},null,8,["style","hash","onClick"]))),128)):(s(!0),n(u,{key:0},f(e(_),(t,a)=>(s(),c(e(h),{class:"cursor-pointer",key:a,hash:a,onClick:y=>d.$emit("def",a)},null,8,["hash","onClick"]))),128))]),_:1})])]))}};export{O as default};
