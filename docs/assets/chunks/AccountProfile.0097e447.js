import{u as f,l as p}from"./components.845a6cfb.js";import{d as u,o as e,c as s,F as _,U as m,E as l,t as o,e as x}from"./framework.088f8093.js";import"../app.bd6bdc69.js";import"./theme.3d7ce0ac.js";const k={class:"flex flex-col break-all"},b={class:"mr-2 font-bold",style:{flex:"1 1 60px"}},h={class:"flex items-center ml-1",style:{flex:"1 1 180px"}},y={key:0,class:"p-0"},g=["href"],S=u({__name:"AccountProfile",props:{pub:{type:String,default:"OKrDaDeD8VeA27d673RqlodSnebnaDq6Ci23Ys_ABWE.q8fI2lkxO46R8TMjeUeAf7I0yBS5mdH_Cb9_285Wkqk"}},setup(n){const c=n,{account:i}=f(c.pub);function d(r){return p({exact:!0}).test(r)}return(r,v)=>(e(),s("div",k,[(e(!0),s(_,null,m(x(i).profile,(t,a)=>(e(),s("div",{class:"p-2 flex items-center",key:a},[l("div",b,o(a),1),l("div",h,[d(t)?(e(),s("a",{key:1,class:"font-bold underline",href:t,target:"_blank"},o(t),9,g)):(e(),s("div",y,o(t),1))])]))),128))]))}});export{S as default};