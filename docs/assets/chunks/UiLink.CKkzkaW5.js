import{p as o,h as i,o as u,c,j as n,t as d,e as m}from"./framework.BhkIoD7n.js";const p=["href"],h={class:"mr-1px ml-8px"},g={__name:"UiLink",props:{url:{type:[String,Object],default:""},icon:{type:[Boolean,String],default:!0}},setup(s){const r=s,e=o(!1),a=i(()=>{if(r.url)try{let t=new URL(r.url);return e.value=t,t.hostname}catch{return e.value=null,"incorrect link"}else return""});return(t,l)=>a.value?(u(),c("a",{key:0,class:"underline flex items-center bg-light-300 dark-bg-dark-300 rounded-xl p-1 shadow-sm hover-shadow-lg transition duration-200ms hover-bg-light-5",href:e.value,target:"_blank"},[n("div",h,d(a.value),1),l[0]||(l[0]=n("div",{class:"i-la-external-link-alt mx-1"},null,-1))],8,p)):m("",!0)}};export{g as default};