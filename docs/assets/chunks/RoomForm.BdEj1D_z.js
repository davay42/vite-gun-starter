import{ah as c,h as f,k,o as r,c as n,j as l,e as s,aC as b,aD as x,G as v,w as y,T as g,N as w}from"./framework.BhkIoD7n.js";import{a as C,S as N,aO as _}from"./components.uLkgiBox.js";import{u as B}from"./useBackground.DM8FPnbf.js";import"./theme.CY_Hf4tR.js";const V={class:"flex"},A={__name:"RoomForm",emits:["room"],setup(R,{emit:S}){const{user:m}=C(),e=c({pair:null,name:""});async function u(){let a=await N.pair();e.pair=a}function i(){e.pair=null,e.name=""}function p(){_(e),i()}const d=f(()=>{var a;return B({pub:(a=e.pair)==null?void 0:a.pub,size:620})});return(a,t)=>k(m).pub?(r(),n("div",{key:0,class:"flex flex-col bg-cover rounded-2xl p-8 max-w-620px bg-light-800 dark-bg-dark-500 justify-center",style:w({...d.value})},[l("div",V,[l("button",{class:"button m-2 flex-1",onClick:t[0]||(t[0]=o=>u())},"Generate a new room"),e.pair?(r(),n("button",{key:0,class:"button m-2",onClick:t[1]||(t[1]=o=>i())},"Reset")):s("",!0)]),e.pair?b((r(),n("input",{key:0,class:"p-2 m-2 rounded-xl dark-bg-dark-200","onUpdate:modelValue":t[2]||(t[2]=o=>e.name=o),type:"text",placeholder:"New room name"},null,512)),[[x,e.name]]):s("",!0),v(g,{name:"fade"},{default:y(()=>[e.pair&&e.name?(r(),n("button",{key:0,class:"button m-2 flex-1",onClick:t[3]||(t[3]=o=>p())},"Add room")):s("",!0)]),_:1})],4)):s("",!0)}};export{A as default};