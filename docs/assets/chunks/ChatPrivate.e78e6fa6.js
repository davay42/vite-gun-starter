import{u as m,aT as f,A as _,R as b}from"./components.18f911a0.js";import"../app.a726b562.js";import{d as g,j as k,x,J as v,o as h,c as C,E as t,L as a,e,t as d}from"./framework.29bd70f6.js";import"./theme.ee8de9e6.js";const A={class:"m-0 flex flex-col"},S={class:"flex-0 p-4 flex flex-wrap items-center"},B={class:"text-lg font-bold p-2"},D={class:"text-lg"},q={class:"flex-0 bg-light-900 dark-bg-dark-600 p-4"},V=g({__name:"ChatPrivate",props:{pub:{default:"OKrDaDeD8VeA27d673RqlodSnebnaDq6Ci23Ys_ABWE.q8fI2lkxO46R8TMjeUeAf7I0yBS5mdH_Cb9_285Wkqk",type:String}},emits:["user"],setup(o){const n=o,{account:r}=m(k(n,"pub")),l=x(()=>f(n.pub));return(p,s)=>{var c;const u=v("chat-messages");return h(),C("div",A,[t("div",S,[a(e(_),{pub:o.pub,onClick:s[0]||(s[0]=i=>p.$emit("user"))},null,8,["pub"]),t("div",B,d((c=e(r).profile)==null?void 0:c.name),1),t("div",D,d(e(r).lastSeen),1)]),a(u,{class:"bg-dark-50 dark-bg-dark-400",messages:e(l).sorted},null,8,["messages"]),t("div",q,[a(e(b),{onSubmit:s[1]||(s[1]=i=>e(l).send(i))})])])}}});export{V as default};
