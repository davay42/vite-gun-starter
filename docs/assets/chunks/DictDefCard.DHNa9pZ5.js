import{m as g,n as v,a as y,a1 as D,a2 as b,a3 as k,a4 as S,a5 as w}from"./components.Cw6xLTg0.js";import{_ as B,h as C,o as I,c as L,m as s,t as l,Q as N,p as e,r as J,J as f,q as O,s as R}from"./framework.BoeOPt-z.js";import"./theme.BgzKx3Gc.js";const V=t=>(O("data-v-bd8a1c3b"),t=t(),R(),t),j={class:"flex flex-col rounded-xl text-xl p-2 bg-light-800 dark-bg-dark-400"},q={class:"flex flex-wrap items-center"},z={class:"inline-flex text-sm gap-1"},E={class:"font-bold"},F=V(()=>s("div",{class:"flex-1"},null,-1)),G={__name:"DictDefCard",props:{hash:{type:String,default:""},authors:{type:Object,default:()=>({})}},setup(t){const n=t,x=g("light"),_=v(),{user:m}=y(),a=C();_.get("dict").get("#def").get(n.hash).once(o=>{a.value=JSON.parse(o)});const c=D(n.hash);return(o,P)=>{var r,d,i,u,p,h;return I(),L("div",j,[s("div",{class:"text-lg flex items-center flex-wrap",style:N([{"text-decoration-line":"underline"},{textDecorationStyle:(d=e(b)[(r=a.value)==null?void 0:r.part])==null?void 0:d.underline,textDecorationColor:e(x).hex(t.hash)}])},l((i=a.value)==null?void 0:i.text),5),s("div",q,[s("div",z,[s("div",E,l((u=a.value)==null?void 0:u.lang),1),s("p",null,l((p=a.value)==null?void 0:p.part),1)]),J(o.$slots,"default",{},void 0,!0),F,f(e(k),{links:e(c),type:"word"},null,8,["links"]),f(e(w),{hash:t.hash,type:"def",my:(h=e(c)[e(S).word])==null?void 0:h[e(m).pub]},null,8,["hash","my"])])])}}},A=B(G,[["__scopeId","data-v-bd8a1c3b"]]);export{A as default};
