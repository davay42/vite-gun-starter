import"../app.a726b562.js";import{ab as x,U as h}from"./components.18f911a0.js";import{_ as b,x as y,f as d,w as p,o as v,c as f,e as i,I as C,E as o,r as g,n as k,L as S,H as $,V as w,W as I}from"./framework.29bd70f6.js";import"./theme.ee8de9e6.js";const P=l=>(w("data-v-8b3f873f"),l=l(),I(),l),V={class:"flex flex-wrap"},B=["id"],F=["for"],N=P(()=>o("div",{class:"i-la-image"},null,-1)),U={class:"button fixed text-2xl opacity-40 hover-opacity-100 m-4"},z={class:"button fixed text-2xl opacity-40 hover-opacity-100 mt-4 ml-18"},E=["src"],L={__name:"FormPicture",props:{field:{type:String,default:"cover"},options:{type:Object,default:()=>({picSize:800,preserveRatio:!0})}},emits:["update"],setup(l,{emit:m}){const r=l,u=y(()=>`${r.field}_upload`),s=d(!1),a=d(),{state:_,handleChange:c}=x(r.options);return p(()=>_.output,t=>{t!=null&&t.content&&(s.value=!0,a.value=t.content)}),p(a,t=>{m("update",t)}),(t,e)=>(v(),f("div",V,[a.value?C("",!0):(v(),f("input",{key:0,class:"hidden",id:i(u),type:"file",accept:"image/*",onChange:e[0]||(e[0]=(...n)=>i(c)&&i(c)(...n))},null,40,B)),o("label",{class:k(["m-1 button cursor-pointer",{active:a.value}]),for:i(u),onClick:e[1]||(e[1]=n=>s.value=!0)},[g(t.$slots,"default",{},()=>[N],!0)],10,F),S(i(h),{class:"max-h-60vh mt-20",open:s.value,onClose:e[4]||(e[4]=n=>s.value=!1)},{default:$(()=>[o("button",U,[o("div",{class:"i-la-check",onClick:e[2]||(e[2]=n=>s.value=!1)})]),o("button",z,[o("div",{class:"i-la-trash-alt",onClick:e[3]||(e[3]=n=>{a.value="",s.value=!1})})]),o("img",{src:a.value},null,8,E)]),_:1},8,["open"])]))}},W=b(L,[["__scopeId","data-v-8b3f873f"]]);export{W as default};
