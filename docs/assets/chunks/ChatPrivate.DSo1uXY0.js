import{u as _,a_ as v,A as g,X as k,o as l,a$ as x}from"./components.Dl01snlO.js";import"./theme.CGMZLven.js";import{d as h,an as C,h as A,D as i,o as S,c as D,l as o,I as t,m as e,t as m,r as B,w as $}from"./framework.BQ1aRZM4.js";const q={class:"m-0 flex flex-col"},I={class:"flex-0 p-4 flex flex-wrap items-center"},w={class:"text-lg font-bold p-2"},y={class:"text-lg"},H=o("div",{class:"flex-1"},null,-1),P={class:"flex-0 bg-light-900 dark-bg-dark-600 p-4"},E=h({__name:"ChatPrivate",props:{pub:{default:"OKrDaDeD8VeA27d673RqlodSnebnaDq6Ci23Ys_ABWE.q8fI2lkxO46R8TMjeUeAf7I0yBS5mdH_Cb9_285Wkqk",type:String}},emits:["user"],setup(a){const u=a,{account:r}=_(C(u,"pub")),c=A(()=>v(u.pub));return(d,s)=>{var p;const f=i("chat-messages"),b=i("AccountHome");return S(),D("div",q,[o("div",I,[t(e(g),{class:"cursor-pointer",pub:a.pub,onClick:s[0]||(s[0]=n=>d.$emit("user",a.pub))},null,8,["pub"]),o("div",w,m((p=e(r).profile)==null?void 0:p.name),1),o("div",y,m(e(r).lastSeen),1),H,B(d.$slots,"default")]),t(f,{class:"bg-dark-50 dark-bg-dark-400",messages:c.value.sorted},null,8,["messages"]),o("div",P,[t(e(k),{onSubmit:s[1]||(s[1]=n=>c.value.send(n))})]),t(e(x),{onClose:s[2]||(s[2]=n=>e(l).pub=""),open:!!e(l).pub},{default:$(()=>[t(b,{pub:e(l).pub},null,8,["pub"])]),_:1},8,["open"])])}}});export{E as default};
