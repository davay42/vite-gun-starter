import{s as F,x as P,h as _,o as p,c as v,j as w,t as k,I as $,k as d,w as x,F as C,E as R,a2 as h,e as B,aM as E,aC as S,b as D,aR as N}from"./framework.TCUxwrzd.js";import{a as y,h as L,j as b,o as T,aF as V,m as A}from"./components.D4fD2a5V.js";import{g as G}from"./useMates.-pMUoSrD.js";import{a as M,c as z}from"./useReactions.CRsm-x41.js";import"./theme.D4rRXU8L.js";const I=["rooms"];function O({tag:t,hash:s,back:f}){const{user:r}=y(),o=F("👍"),n=L().user(b.pub);P(()=>{I.includes(t)?n.get(t).get(`${s}@${r.pub}`).on(e=>{e&&e!==!0&&(o.value=e)}):n.get("posts").get(`${t}:${s}@${r.pub}`).on(e=>{e&&e!==!0&&(o.value=e)})});function a(e){U({tag:t,hash:s,back:f,reaction:G(e||o.value)})}return{reaction:o,react:a}}async function U({tag:t,hash:s,back:f,reaction:r=!0}){var n,a;const{user:o}=y(),m=L();if(t=="rooms"){let e=m.user(b.pub).get(t).get(`${s}@${o.pub}`),c=await e.then();e.put(c?null:r,null,{opt:{cert:(n=b.features)==null?void 0:n[t]}})}else{const e=m.user(b.pub).get("posts");let c=f?`${s}:${t}@${o.pub}`:`${t}:${s}@${o.pub}`;const g=e.get(c);let u=await g.then();g.put(u?null:r,null,{opt:{cert:(a=b.features)==null?void 0:a.posts}})}}const q={class:"p-1 flex flex-wrap gap-2 items-center"},H={class:"p-2 font-bold"},J=["onClick"],K={key:0,class:"pl-2 text-xl"},Q=["onClick"],te={__name:"PostActionReact",props:{authors:{type:Object,default:()=>({})},hash:{type:String,default:""},tag:{type:String,default:""},back:Boolean},emits:["react","user"],setup(t){const s=t;T("deep");const{user:f}=y(),{reaction:r,react:o}=O({...s}),m=_(()=>M(s.authors)),n=_(()=>z(s.authors)),a=F();return(e,c)=>{var g;return p(),v("div",q,[w("div",H,k(n.value>0?"+":"")+k(n.value),1),$(d(V),{"is-my":(g=t.authors)==null?void 0:g[d(f).pub],reaction:d(r),onReact:c[0]||(c[0]=u=>d(o)(u))},null,8,["is-my","reaction"]),$(E,{name:"fade"},{default:x(()=>[(p(!0),v(C,null,R(m.value,(u,l)=>(p(),v("div",{class:"p-2px flex items-center rounded-3xl bg-light-500 dark-bg-dark-600 gap-1",key:l,onClick:h(i=>d(o)(l),["stop","prevent"])},[l!=="true"?(p(),v("div",K,k(l),1)):B("",!0),w("div",{class:"font-bold px-1",onClick:h(i=>a.value=a.value?null:l,["stop","prevent"])},k(u.length),9,Q),$(E,{name:"fade"},{default:x(()=>[4>u.length||a.value==l?(p(!0),v(C,{key:0},R(u,i=>S((p(),D(d(A),{class:"rounded-full shadow-md min-w-6",key:i,size:20,selectable:!0,pub:i,"show-name":!1,onClick:h(W=>e.$emit("user",i),["stop","prevent"])},null,8,["pub","onClick"])),[[N,i]])),128)):B("",!0)]),_:2},1024)],8,J))),128))]),_:1})])}}};export{te as default};