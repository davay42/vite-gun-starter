import{o as t,c as s,G as c,w as u,F as m,C as p,N as g,j as l,t as o,k as x,aO as f}from"./framework.BhkIoD7n.js";import"./components.uLkgiBox.js";import{i as _}from"./useMates.DRJ3MdAr.js";import"./theme.CY_Hf4tR.js";const k={class:"p-2 flex flex-wrap bg-light-800 shadow-md rounded-xl gap-2"},h=["onClick"],y={class:"text-4xl"},v={key:0,class:"i-la-angle-up"},b={key:1,class:"i-la-angle-down"},w={class:"text-lg ml-1"},E={__name:"PostReactionTabs",props:{reactions:{type:Object,default:()=>({})},current:{type:String,default:""}},emits:["update:current"],setup(a,{emit:n}){const i=n;return(C,r)=>(t(),s("div",k,[c(f,{name:"fade"},{default:u(()=>[(t(!0),s(m,null,p(a.reactions,(d,e)=>(t(),s("div",{class:"flex py-2 items-center cursor-pointer bg-light-100 dark-bg-dark-200 rounded-xl shadow-lg px-4",key:e,style:g([{flex:"1 1 10px"},{backgroundColor:a.current==e?"#999":""}]),onClick:j=>i("update:current",e)},[l("div",y,o(x(_)(e)?e:"👋"),1),r[0]||(r[0]=l("div",{class:"flex-1 w-4"},null,-1)),a.current==e?(t(),s("div",v)):(t(),s("div",b)),l("div",w,o(Object.keys(d).length),1)],12,h))),128))]),_:1})]))}};export{E as default};