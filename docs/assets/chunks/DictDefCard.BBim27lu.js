import{o as g,h as v,a as k,Y as y,Z as D,_ as b,$ as S}from"./components.D4fD2a5V.js";import{_ as w,s as I,o as B,c as C,j as s,t as l,P as L,k as e,r as N,I as f,p as j,l as O}from"./framework.TCUxwrzd.js";import{a as P}from"./langs.CLi14XB-.js";import"./theme.D4rRXU8L.js";const R=t=>(j("data-v-bd8a1c3b"),t=t(),O(),t),V={class:"flex flex-col rounded-xl text-xl p-2 bg-light-800 dark-bg-dark-400"},$={class:"flex flex-wrap items-center"},z={class:"inline-flex text-sm gap-1"},E={class:"font-bold"},F=R(()=>s("div",{class:"flex-1"},null,-1)),G={__name:"DictDefCard",props:{hash:{type:String,default:""},authors:{type:Object,default:()=>({})}},setup(t){const c=t,x=g("light"),_=v(),{user:m}=k(),a=I();_.get("dict").get("#def").get(c.hash).once(o=>{a.value=JSON.parse(o)});const n=y(c.hash);return(o,J)=>{var r,d,i,u,p,h;return B(),C("div",V,[s("div",{class:"text-lg flex items-center flex-wrap",style:L([{"text-decoration-line":"underline"},{textDecorationStyle:(d=e(P)[(r=a.value)==null?void 0:r.part])==null?void 0:d.underline,textDecorationColor:e(x).hex(t.hash)}])},l((i=a.value)==null?void 0:i.text),5),s("div",$,[s("div",z,[s("div",E,l((u=a.value)==null?void 0:u.lang),1),s("p",null,l((p=a.value)==null?void 0:p.part),1)]),N(o.$slots,"default",{},void 0,!0),F,f(e(D),{links:e(n),type:"word"},null,8,["links"]),f(e(S),{hash:t.hash,type:"def",my:(h=e(n)[e(b).word])==null?void 0:h[e(m).pub]},null,8,["hash","my"])])])}}},A=w(G,[["__scopeId","data-v-bd8a1c3b"]]);export{A as default};