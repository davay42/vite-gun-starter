import{d as k,h as f,p as w,v as C,o as x,c as v,aC as D,aT as M,j as i,G as T,k as u,t as h,N as c,e as N,_ as S}from"./framework.BhkIoD7n.js";import{a as B,p as L,m as R}from"./components.uLkgiBox.js";import{u as j}from"./useMd.XDBWPWBw.js";import{g as z}from"./useMates.DRJ3MdAr.js";import"./theme.CY_Hf4tR.js";const E=["id","data-pub"],I={class:"ml-2 text-sm opacity-20 hover-opacity-80 transition cursor-default text-light-200"},U={class:"ml-2 text-sm opacity-20 hover-opacity-80 transition cursor-default text-dark-200"},V=["innerHTML"],$=k({__name:"ChatMessage",props:{index:{type:Number,default:0},source:{type:Object,default:()=>({author:"",timestamp:"",text:"empty"})}},setup(t){const o=t,b=j(),l=f(()=>g(Number(o.source.timestamp))),{user:y}=B(),n=f(()=>o.source.author==y.pub);function g(a){if(!a)return;const e=new Date(a),s=e.toLocaleDateString("en-CA"),r=e.toLocaleTimeString("ru-RU");return{full:s+" "+r,date:s,time:r}}const d=w(!0);return C(()=>{var a,e;o.index>1&&((e=(a=document.getElementById(`chat-${o.index-1}`))==null?void 0:a.dataset)==null?void 0:e.pub)==o.source.author&&(d.value=!1)}),(a,e)=>{var s,r,m,p;return x(),v("div",{class:"px-1 py-2px flex flex-col w-full gap-1",style:c({alignItems:n.value?"end":"start"})},[D(i("div",{class:"flex items-center w-full mt-2",id:`chat-${t.index}`,style:c({flexDirection:n.value?"row-reverse":"row"}),"data-pub":t.source.author},[T(u(R),{class:"opacity-50 hover-opacity-90 transition",pub:t.source.author,"show-name":!0,size:20,onClick:e[0]||(e[0]=A=>u(L).pub=t.source.author)},null,8,["pub"]),i("div",I,h((s=l.value)==null?void 0:s.time),1),e[1]||(e[1]=i("div",{class:"flex-1"},null,-1)),i("div",U,h((r=l.value)==null?void 0:r.date),1)],12,E),[[M,d.value]]),i("div",{class:"px-2 py-1 bg-light-300 dark-bg-dark-200 dark-bg-opacity-80 bg-opacity-80 rounded-b-xl max-w-max break-all overflow-hidden",style:c({borderTopLeftRadius:n.value?"12px":"0px",borderTopRightRadius:n.value?"0px":"12px",fontSize:t.source.text==u(z)(t.source.text)?"6em":"1em"})},[(m=t.source)!=null&&m.text?(x(),v("div",{key:0,class:"markdown-body",innerHTML:u(b).render((p=t.source)==null?void 0:p.text)},null,8,V)):N("",!0)],4)],4)}}}),q=S($,[["__scopeId","data-v-b483e91c"]]);export{q as default};