import{_ as o,e as t,o as i,c as l,n as r,N as c,a5 as u,I as m}from"./framework.29bd70f6.js";import{a as d,a0 as a}from"./components.18f911a0.js";import"../app.a726b562.js";import"./theme.ee8de9e6.js";const y={__name:"DictLinkButton",props:{type:{type:String,default:""},hash:{type:String,default:""},my:Boolean},setup(e){const{user:s}=d();return(f,n)=>t(s).is?(i(),l("div",{key:0,class:r(["i-la-link link",{active:t(a)[e.type]==e.hash}]),style:c({color:e.my?"red":""}),onClick:n[0]||(n[0]=u(k=>t(a)[e.type]=t(a)[e.type]==e.hash?null:e.hash,["stop","prevent"]))},null,6)):m("",!0)}},_=o(y,[["__scopeId","data-v-21b7a062"]]);export{_ as default};
