import{x as k,f as S,o as a,c as o,E as v,t as r,e,L as i,H as g,F as _,U as x,a5 as u,I as y,ay as b,as as $,G as A,aA as N}from"./framework.29bd70f6.js";import{n as V,a as D,aQ as E,aR as F,aJ as G,aS as L,l as P}from"./components.18f911a0.js";import"../app.a726b562.js";import"./theme.ee8de9e6.js";const U={class:"p-1 flex flex-wrap gap-2 items-center"},z={class:"p-2 font-bold"},H=["onClick"],I={key:0,class:"pl-2 text-xl"},J=["onClick"],K={__name:"PostActionReact",props:{authors:{type:Object,default:()=>({})},hash:{type:String,default:""},tag:{type:String,default:""},back:Boolean},emits:["react","user"],setup(d){const c=d;V("deep");const{user:C}=D(),{reaction:w,react:p}=E({...c}),B=k(()=>F(c.authors)),f=k(()=>G(c.authors)),l=S();return(R,m)=>{var h;return a(),o("div",U,[v("div",z,r(e(f)>0?"+":"")+r(e(f)),1),i(e(L),{"is-my":(h=d.authors)==null?void 0:h[e(C).pub],reaction:e(w),onReact:m[0]||(m[0]=n=>e(p)(n))},null,8,["is-my","reaction"]),i(b,{name:"fade"},{default:g(()=>[(a(!0),o(_,null,x(e(B),(n,t)=>(a(),o("div",{class:"p-2px flex items-center rounded-3xl bg-light-500 dark-bg-dark-600 gap-1",key:t,onClick:u(s=>e(p)(t),["stop","prevent"])},[t!=="true"?(a(),o("div",I,r(t),1)):y("",!0),v("div",{class:"font-bold px-1",onClick:u(s=>l.value=l.value?null:t,["stop","prevent"])},r(n.length),9,J),i(b,{name:"fade"},{default:g(()=>[4>n.length||l.value==t?(a(!0),o(_,{key:0},x(n,s=>$((a(),A(e(P),{class:"rounded-full shadow-md min-w-6",key:s,size:20,selectable:!0,pub:s,"show-name":!1,onClick:u(M=>R.$emit("user",s),["stop","prevent"])},null,8,["pub","onClick"])),[[N,s]])),128)):y("",!0)]),_:2},1024)],8,H))),128))]),_:1})])}}};export{K as default};
