import{f as k,al as x,o as s,c as t,F as u,U as d,N as w,e as r,E as n,G as y,I as h,t as c,L as C,H as b,as as g,aA as B,T as A}from"./framework.29bd70f6.js";import{n as _,o as G,t as N,A as D}from"./components.18f911a0.js";import"../app.a726b562.js";import"./theme.ee8de9e6.js";const I={class:"overflow-hidden m-4 rounded-xl break-all"},L=["onClick"],S={class:"item"},V={key:0},z={class:"font-bold"},E={class:"content"},K={__name:"GunGraph",setup(F){const l=k({}),p=_("light"),m=_("deep"),v=G(),f=setInterval(()=>{l.value={...v._.graph}},1e3);return x(()=>{clearInterval(f)}),(T,U)=>(s(),t("article",I,[(s(!0),t(u,null,d(l.value,(o,e)=>(s(),t("div",{class:"p-2px text-sm",key:e,style:w({backgroundColor:r(N).dark?r(m).hex(e):r(p).hex(e)})},[n("div",{class:"flex cursor-pointer",onClick:i=>o.show=!o.show},[e[0]=="~"?(s(),y(r(D),{key:0,pub:e.slice(1,88),size:20},null,8,["pub"])):h("",!0),n("div",S,c(e[0]=="~"?e.slice(88):e),1)],8,L),C(A,{name:"fade"},{default:b(()=>[o.show?(s(),t("section",V,[(s(!0),t(u,null,d(o,(i,a)=>g((s(),t("div",{class:"p-2",key:a},[n("div",z,c(a),1),n("div",E,c(i),1)])),[[B,a!="_"&&a!="show"]])),128))])):h("",!0)]),_:2},1024)],4))),128))]))}};export{K as default};
