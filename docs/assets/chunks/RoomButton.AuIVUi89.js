import{aL as $,j as r,o as c,aM as R,aX as w,aG as y}from"./components.uLkgiBox.js";import{u as C}from"./useBackground.DM8FPnbf.js";import"./theme.CY_Hf4tR.js";import{p as x,h as v,o as l,c as n,j as m,k as t,e as k,t as N,N as V,G as j,w as g,b as z}from"./framework.BhkIoD7n.js";const G={class:"mx-2"},L=["src"],P={key:1,class:"ml-1 text-sm"},X={__name:"RoomButton",emits:["room","rooms","browse"],setup(S){const s=x(!1),u=v(()=>$(r.pub));c("deep");const B=v(()=>C({pub:r.pub,size:200,attachment:"local"})),{logo:i}=R(r.pub);return(a,o)=>{var p,d,f,b;return l(),n("div",G,[m("button",{class:"button",style:V({...B.value}),onClick:o[0]||(o[0]=e=>s.value=!0)},[t(i)?(l(),n("img",{key:0,class:"h-12 rounded-xl mr-2",src:t(i)},null,8,L)):k("",!0),o[6]||(o[6]=m("div",{class:"text-2xl font-normal"},"@",-1)),(f=(d=(p=u.value)==null?void 0:p.room)==null?void 0:d.profile)!=null&&f.name?(l(),n("div",P,N((b=u.value)==null?void 0:b.room.profile.name.substring(0,15)),1)):k("",!0)],4),j(t(y),{class:"break-all",open:s.value,"close-button":!1,onClose:o[5]||(o[5]=e=>s.value=!1)},{default:g(()=>[(l(),z(t(w),{key:t(r).pub,onRoom:o[2]||(o[2]=e=>a.$emit("room",e)),onRooms:o[3]||(o[3]=e=>a.$emit("rooms")),onBrowse:o[4]||(o[4]=e=>{a.$emit("browse",e),s.value=!1})},{default:g(()=>[m("button",{class:"button m-4",onClick:o[1]||(o[1]=e=>{a.$emit("rooms"),s.value=!1})},"Browse rooms")]),_:1}))]),_:1},8,["open"])])}}};export{X as default};