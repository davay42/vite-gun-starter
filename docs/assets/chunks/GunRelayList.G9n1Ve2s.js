import{av as p,ax as f}from"./components.Dl01snlO.js";import{_ as m,k as h,o as a,c as l,l as s,m as o,F as v,E as x,n as y,P as g,t as d,p as b,q as R}from"./framework.BQ1aRZM4.js";import"./theme.CGMZLven.js";const r=t=>(b("data-v-389c61aa"),t=t(),R(),t),S={class:"flex flex-col"},C={class:"flex items-center"},I=r(()=>s("div",{class:"text-lg text-left"},"Volunteer relay peers:",-1)),B=r(()=>s("div",{class:"flex-auto"},null,-1)),L=r(()=>s("div",{class:"i-la-redo-alt"},null,-1)),P=[L],w={class:"flex flex-col font-normal items-start"},z=["onClick"],E={class:"flex-1 underline"},F={class:"font-bold"},G={__name:"GunRelayList",setup(t){const{relay:i,setPeer:_,resetPeer:V}=p(),{relays:u,loadRelays:c}=f();return h(()=>{c()}),($,n)=>(a(),l("div",S,[s("div",C,[I,B,s("button",{class:"button m-1",onClick:n[0]||(n[0]=e=>o(c)())},P)]),s("ul",w,[(a(!0),l(v,null,x(o(u),e=>(a(),l("li",{class:y(["flex w-full text-left p-1 hover-bg-light-500 cursor-pointer hover-dark-bg-dark-600",{active:e.url==o(i).peer}]),key:e.host,style:g({order:e.ping}),onClick:q=>o(_)(e.url)},[s("div",E,d(e==null?void 0:e.host),1),s("div",F,d(e.ping)+" ms",1)],14,z))),128))])]))}},j=m(G,[["__scopeId","data-v-389c61aa"]]);export{j as default};
