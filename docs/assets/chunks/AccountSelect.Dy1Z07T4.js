import{d as c,o as t,c as l,G as u,k as n,j as s,t as m,w as f,F as b,C as k,b as v,aO as x}from"./framework.BhkIoD7n.js";import{m as r}from"./components.uLkgiBox.js";import{u as _}from"./useGuests.17aeiNWs.js";import"./theme.CY_Hf4tR.js";const C={class:"p-4"},B={key:0,class:"flex items-center"},S={key:1,class:"flex flex-col"},y={class:"flex items-center p-2"},A={class:"p-0"},D={class:"flex flex-wrap gap-3"},G=c({__name:"AccountSelect",props:{pub:{type:String,default:"OKrDaDeD8VeA27d673RqlodSnebnaDq6Ci23Ys_ABWE.q8fI2lkxO46R8TMjeUeAf7I0yBS5mdH_Cb9_285Wkqk"}},emits:["update:pub"],setup(a){const{guests:d,count:p}=_();return(i,e)=>(t(),l("div",C,[a.pub?(t(),l("div",B,[u(n(r),{pub:a.pub},null,8,["pub"]),e[1]||(e[1]=s("div",{class:"flex-1"},null,-1)),s("div",{class:"i-la-times mr-2 cursor-pointer",onClick:e[0]||(e[0]=o=>i.$emit("update:pub",""))})])):(t(),l("div",S,[s("div",y,[e[2]||(e[2]=s("div",{class:"font-bold"},"SELECT A USER",-1)),e[3]||(e[3]=s("div",{class:"flex-1"},null,-1)),s("div",A,m(n(p).total),1)]),s("div",D,[u(x,{name:"fade"},{default:f(()=>[(t(!0),l(b,null,k(n(d),o=>(t(),v(n(r),{key:o.pub,pub:o.pub,onClick:E=>i.$emit("update:pub",o.pub)},null,8,["pub","onClick"]))),128))]),_:1})])]))]))}});export{G as default};