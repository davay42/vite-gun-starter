import{d as p,o,c as n,j as t,k as l,e as r,aC as c,aS as u}from"./framework.BhkIoD7n.js";import{B as f}from"./components.uLkgiBox.js";import"./theme.CY_Hf4tR.js";const k={class:"flex flex-col mt-4 bg-light-700 dark-bg-dark-400 p-4 m-2 shadow-lg rounded-xl"},v={class:"flex items-center px-4"},x={class:"ml-1 flex flex-col items-center"},h={key:0,class:"i-la-check text-green-600 m-1"},w=["type","placeholder"],B=p({__name:"AuthPass",setup(y){const{pass:s}=f();return(g,e)=>{var i,d,m;return o(),n("div",k,[e[5]||(e[5]=t("div",{class:"flex items-center mb-4"},[t("div",{class:"mx-2"},[t("div",{class:"i-la-asterisk"})]),t("div",{class:"px-1"},"Enter a passphrase to encrypt your key with")],-1)),t("div",v,[t("div",x,[(i=l(s).safe)!=null&&i.enc?(o(),n("div",h)):r("",!0)]),c(t("input",{class:"p-2 mx-4 rounded-xl w-full dark-bg-dark-200","onUpdate:modelValue":e[0]||(e[0]=a=>l(s).input=a),autocomplete:"current-password",type:l(s).show?"text":"password",placeholder:`Your passphrase of ${l(s).minLength} or more letters`},null,8,w),[[u,l(s).input]]),l(s).input.length>=l(s).minLength?(o(),n("button",{key:0,class:"button items-center",onClick:e[1]||(e[1]=a=>l(s).set())},e[3]||(e[3]=[t("div",{class:"i-la-check"},null,-1),t("div",{class:"ml-2"},"Set",-1)]))):r("",!0),(m=(d=l(s))==null?void 0:d.safe)!=null&&m.enc?(o(),n("button",{key:1,class:"button items-center",onClick:e[2]||(e[2]=a=>l(s).show=!l(s).show)},e[4]||(e[4]=[t("div",{class:"i-la-eye"},null,-1),t("div",{class:"ml-2"},"Show",-1)]))):r("",!0)])])}}});export{B as default};