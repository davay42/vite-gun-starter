import{_ as S,aF as V,e as a,x,f as c,p as P,b as B,o as b,c as _,at as k,au as y,I as D,E as s,a2 as j,a5 as z,n as C,L as n,H as g,V as E,W as L}from"./framework.e76a7413.js";import{m as M,aA as U,aB as N,aC as T,U as w,aD as A,aE as H}from"./components.ff545abb.js";import"../app.1dbdb34a.js";import"./theme.7b41b406.js";const u=d=>(E("data-v-c53fdb98"),d=d(),L(),d),K={class:"w-full flex flex-col p-2 shadow-xl m-1 rounded-2xl",action:"javascript:void(0);"},h={class:"flex flex-wrap z-100"},R=u(()=>s("div",{class:"i-la-info-circle"},null,-1)),W=u(()=>s("div",{class:"i-mdi-text-long"},null,-1)),Y=[W],q=u(()=>s("div",{class:"flex-1"},null,-1)),G={class:"flex justify-center flex-1"},J=["disabled"],O=u(()=>s("div",{class:"i-la-check"},null,-1)),Q=u(()=>s("div",{class:"font-bold ml-2"},"Submit",-1)),X=[O,Q],Z=u(()=>s("div",{class:"i-la-trash-alt"},null,-1)),tt=[Z],et={__name:"PostForm",props:{tag:{type:String,default:" "}},emits:["close"],setup(d,{emit:F}){const r=d;V(i=>({"569a1dcc":a(I)}));const $=M("deep"),I=x(()=>$.hex(r.tag)),f=c();P(()=>{var i;(i=f.value)==null||i.focus()});const o=c({}),l=B({form:!1,youtube:!1,text:!1}),p=x(()=>o.value.title||o.value.statement||o.value.text||o.value.cover);function v(){if(!p.value)return;const i={...o.value};H(r.tag,i),m()}function m(){l.form=!1,o.value={},F("close")}return(i,t)=>(b(),_("form",K,[l.title?k((b(),_("input",{key:0,class:"font-bold text-xl dark-bg-dark-200",ref_key:"titleInput",ref:f,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value.title=e),placeholder:"Title",autofocus:""},null,512)),[[y,o.value.title]]):D("",!0),k(s("textarea",{class:"text-1rem leading-relaxed dark-bg-dark-200","onUpdate:modelValue":t[1]||(t[1]=e=>o.value.statement=e),placeholder:"Short text statement",onKeyup:t[2]||(t[2]=j(z(e=>v(),["ctrl"]),["enter"]))},null,544),[[y,o.value.statement]]),s("div",h,[s("button",{class:C(["button m-1",{active:o.value.title}]),title:"Add a heading",onClick:t[3]||(t[3]=e=>l.title=!l.title)},"H1",2),n(a(U),{field:"icon",options:{picSize:400,preserveRatio:!1},onUpdate:t[4]||(t[4]=e=>o.value.icon=e)},{default:g(()=>[R]),_:1}),n(a(U),{onUpdate:t[5]||(t[5]=e=>o.value.cover=e)}),n(a(N),{onUpdate:t[6]||(t[6]=e=>o.value.link=e)}),n(a(T),{onUpdate:t[7]||(t[7]=e=>o.value.youtube=e)}),s("button",{class:C(["m-1 button",{active:o.value.text}]),onClick:t[8]||(t[8]=e=>l.text=!0)},Y,2),q,s("div",G,[s("button",{class:"plus button flex-1 justify-center m-1",disabled:!a(p),type:"submit",onClick:t[9]||(t[9]=e=>v())},X,8,J),s("button",{class:"m-1 button text-xl",onClick:t[10]||(t[10]=e=>m())},tt)])]),n(a(w),{open:l.youtube,offset:"22vh",onClose:t[11]||(t[11]=e=>l.youtube=!1)},null,8,["open"]),n(a(w),{open:l.text,offset:"22vh",onClose:t[14]||(t[14]=e=>l.text=!1)},{default:g(()=>[n(a(A),{text:o.value.text,"onUpdate:text":t[12]||(t[12]=e=>o.value.text=e),onClose:t[13]||(t[13]=e=>l.text=!1)},null,8,["text"])]),_:1},8,["open"])]))}},nt=S(et,[["__scopeId","data-v-c53fdb98"]]);export{nt as default};
