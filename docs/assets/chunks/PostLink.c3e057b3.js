import{o as m,L as p}from"./components.18f911a0.js";import{b as u,x as i,e as n,o as l,c as d,t as g,I as f}from"./framework.29bd70f6.js";import"../app.a726b562.js";import"./theme.ee8de9e6.js";const h={key:0,class:"m-1 flex items-center items-center px-2 py-1 bg-light-700 dark-bg-dark-50 rounded-lg"},y={__name:"PostLink",props:{hash:{type:String,default:""}},setup(r){const a=r,c=m(),t=u({});c.user(p.pub).get("posts").map().once((s,e)=>{e.indexOf(a.hash)==0&&s?t[e.substring(45,87)]=s:delete t[e]});const o=i(()=>Object.keys(t).length);return(s,e)=>n(o)>0?(l(),d("button",h,g(n(o)),1)):f("",!0)}};export{y as default};
