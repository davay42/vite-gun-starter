import{aY as x,j as b,a as C,aL as $,aZ as g,E as j}from"./components.uLkgiBox.js";import{h as B,o as e,c as n,k as s,j as t,e as v}from"./framework.BhkIoD7n.js";import"./theme.CY_Hf4tR.js";const E=x.room,N={class:"flex flex-wrap items-center gap-2"},L={key:2,class:"flex flex-wrap py-4"},F={__name:"RoomActions",props:{pub:{type:String,default:b.pub}},setup(k){const p=k,{user:l}=C(),{room:u,leaveRoom:y,enterRoom:R}=$(p.pub),m=B(()=>p.pub?p.pub:b.pub);async function w(c){var a;const o=await l.decrypt(c);j(JSON.stringify(o),"application/json",`room-${(a=u.profile)==null?void 0:a.name}.json`)}return(c,o)=>{var a,f;return e(),n("div",N,[(a=s(u).hosts)!=null&&a[s(l).pub]?(e(),n("button",{key:0,class:"button",onClick:o[0]||(o[0]=d=>{var r,i;return s(g)((i=(r=s(u).hosts)==null?void 0:r[s(l).pub])==null?void 0:i.enc)})},o[4]||(o[4]=[t("div",{class:"i-la-tools"},null,-1),t("div",{class:"ml-2"},"Renew",-1)]))):v("",!0),(f=s(u).hosts)!=null&&f[s(l).pub]?(e(),n("button",{key:1,class:"button",onClick:o[1]||(o[1]=d=>{var r,i;return w((i=(r=s(u).hosts)==null?void 0:r[s(l).pub])==null?void 0:i.enc)})},o[5]||(o[5]=[t("div",{class:"i-la-download"},null,-1),t("div",{class:"ml-2"},"Keys",-1)]))):v("",!0),m.value!=s(E).pub?(e(),n("div",L,[s(b).pub!==m.value?(e(),n("button",{key:0,class:"button",onClick:o[2]||(o[2]=d=>s(R)(m.value))},o[6]||(o[6]=[t("div",{class:"i-ion-enter-outline"},null,-1),t("div",{class:"ml-2"},"Enter",-1)]))):(e(),n("button",{key:1,class:"button",onClick:o[3]||(o[3]=d=>s(y)())},o[7]||(o[7]=[t("div",{class:"i-ion-exit-outline"},null,-1),t("div",{class:"ml-2"},"Leave",-1)])))])):v("",!0)])}}};export{F as default};