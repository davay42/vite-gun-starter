import{u as v,A as g,R as k,p as l,aG as x}from"./components.uLkgiBox.js";import{u as _}from"./usePrivateChat.BncZ8Ox6.js";import"./theme.CY_Hf4tR.js";import{d as C,aI as A,h,B as c,o as S,c as B,j as t,G as o,k as s,t as m,r as D,w as q}from"./framework.BhkIoD7n.js";const I={class:"m-0 flex flex-col"},R={class:"flex-0 p-4 flex flex-wrap items-center"},$={class:"text-lg font-bold p-2"},w={class:"text-lg"},y={class:"flex-0 bg-light-900 dark-bg-dark-600 p-4"},j=C({__name:"ChatPrivate",props:{pub:{default:"OKrDaDeD8VeA27d673RqlodSnebnaDq6Ci23Ys_ABWE.q8fI2lkxO46R8TMjeUeAf7I0yBS5mdH_Cb9_285Wkqk",type:String}},emits:["user"],setup(a){const r=a,{account:u}=v(A(r,"pub")),p=h(()=>_(r.pub));return(d,e)=>{var i;const f=c("chat-messages"),b=c("AccountHome");return S(),B("div",I,[t("div",R,[o(s(g),{class:"cursor-pointer",pub:a.pub,onClick:e[0]||(e[0]=n=>d.$emit("user",a.pub))},null,8,["pub"]),t("div",$,m((i=s(u).profile)==null?void 0:i.name),1),t("div",w,m(s(u).lastSeen),1),e[3]||(e[3]=t("div",{class:"flex-1"},null,-1)),D(d.$slots,"default")]),o(f,{class:"bg-dark-50 dark-bg-dark-400",messages:p.value.sorted},null,8,["messages"]),t("div",y,[o(s(k),{onSubmit:e[1]||(e[1]=n=>p.value.send(n))})]),o(s(x),{onClose:e[2]||(e[2]=n=>s(l).pub=""),open:!!s(l).pub},{default:q(()=>[o(b,{pub:s(l).pub},null,8,["pub"])]),_:1},8,["open"])])}}});export{j as default};