import{s as f,a1 as w,o as s,c as t,F as u,E as d,P as x,k as r,j as n,b as y,e as h,t as c,I as C,w as b,aC as g,aR as B,T as A}from"./framework.TCUxwrzd.js";import{o as _,h as D,t as G,A as I}from"./components.D4fD2a5V.js";import"./theme.D4rRXU8L.js";const N={class:"overflow-hidden m-4 rounded-xl break-all"},S=["onClick"],V={class:"item"},z={key:0},E={class:"font-bold"},F={class:"content"},q={__name:"GunGraph",setup(L){const l=f({}),p=_("light"),m=_("deep"),v=D(),k=setInterval(()=>{l.value={...v._.graph}},1e3);return w(()=>{clearInterval(k)}),(T,P)=>(s(),t("article",N,[(s(!0),t(u,null,d(l.value,(o,e)=>(s(),t("div",{class:"p-2px text-sm",key:e,style:x({backgroundColor:r(G).dark?r(m).hex(e):r(p).hex(e)})},[n("div",{class:"flex cursor-pointer",onClick:i=>o.show=!o.show},[e[0]=="~"?(s(),y(r(I),{key:0,pub:e.slice(1,88),size:20},null,8,["pub"])):h("",!0),n("div",V,c(e[0]=="~"?e.slice(88):e),1)],8,S),C(A,{name:"fade"},{default:b(()=>[o.show?(s(),t("section",z,[(s(!0),t(u,null,d(o,(i,a)=>g((s(),t("div",{class:"p-2",key:a},[n("div",E,c(a),1),n("div",F,c(i),1)])),[[B,a!="_"&&a!="show"]])),128))])):h("",!0)]),_:2},1024)],4))),128))]))}};export{q as default};