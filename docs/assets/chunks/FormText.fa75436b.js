import{_ as m,f,x,q as i,o as v,c as k,E as t,as as h,at as b,e as g,i as w,V as T,W as y}from"./framework.29bd70f6.js";import{z as S,ac as F}from"./components.18f911a0.js";import"../app.a726b562.js";import"./theme.ee8de9e6.js";const o=a=>(T("data-v-a0d4e179"),a=a(),y(),a),I={class:"flex flex-col"},M={class:"flex flex-col text-left"},B={class:"flex flex-wrap bg-dark-100 p-4"},C=o(()=>t("div",{class:"i-la-check"},null,-1)),V=o(()=>t("div",{class:"ml-2"},"Save",-1)),$=[C,V],D=o(()=>t("label",{class:"m-1 button cursor-pointer flex items-center",for:"import-post"},[t("div",{class:"i-la-markdown"}),t("div",{class:"ml-2"},"Load")],-1)),E=o(()=>t("div",{class:"flex-1"},null,-1)),R=o(()=>t("div",{class:"i-la-trash"},null,-1)),q=o(()=>t("div",{class:"ml-2"},"Reset",-1)),z=[R,q],L={__name:"FormText",props:{text:{type:String,default:""}},emits:["update:text","frontmatter","close"],setup(a,{emit:d}){const r=a,c=f(!1),n=x({get(){return r.text},set(l){d("update:text",l)}});i(()=>{});function p(l){var e;S((e=l.target)==null?void 0:e.files,s=>{let{frontmatter:u,content:_}=F(s);d("frontmatter",u),_&&(c.value=!0,i(()=>{}))})}return(l,e)=>(v(),k("div",I,[t("div",M,[h(t("textarea",{class:"dark-bg-dark-200 p-2",id:"myMD",ref:"md","onUpdate:modelValue":e[0]||(e[0]=s=>w(n)?n.value=s:null),placeholder:"Main text content (with **markdown** support)"},null,512),[[b,g(n)]])]),t("div",B,[t("button",{class:"button m-1",onClick:e[1]||(e[1]=s=>l.$emit("close"))},$),D,t("input",{class:"hidden dark-bg-dark-200",id:"import-post",ref:"file",tabindex:"-1",type:"file",accept:"text/markdown",onChange:e[2]||(e[2]=s=>p(s))},null,544),E,t("button",{class:"button m-1",onClick:e[3]||(e[3]=s=>n.value="")},z)])]))}},j=m(L,[["__scopeId","data-v-a0d4e179"]]);export{j as default};
