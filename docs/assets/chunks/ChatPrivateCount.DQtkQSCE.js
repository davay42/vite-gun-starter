import{a as l}from"./usePrivateChat.COXmAw4h.js";import{d as c,o as p,c as d,j as o,t as m,k as e,P as u}from"./framework.TCUxwrzd.js";import"./components.D4fD2a5V.js";import"./theme.D4rRXU8L.js";const f=o("div",{class:"i-ph-chats-light text-xl"},null,-1),h={class:"font-bold text-lg mx-2"},k=c({__name:"ChatPrivateCount",props:{pub:{default:"",type:String}},emits:["chat"],setup(a){const s=a,{count:n,available:r}=l(s.pub);return(i,t)=>(p(),d("div",{class:"pl-2 flex items-center bg-light-200 dark-bg-dark-600 rounded-xl cursor-pointer",style:u({opacity:e(r)?1:.1}),onClick:t[0]||(t[0]=g=>i.$emit("chat"))},[f,o("div",h,m(e(n)),1)],4))}});export{k as default};