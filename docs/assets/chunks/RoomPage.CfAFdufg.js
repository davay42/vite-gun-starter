import{bj as B,a as C,T as m,bc as L,I as F,m as T,b as U,bk as P,b5 as S,k as z,bl as H,bm as M,aL as N,bn as k}from"./components.Dl01snlO.js";import"./theme.CGMZLven.js";import{h,ak as V,o as r,c as i,l as s,I as u,m as e,t as j,F as y,E as _,P as A,r as E,b as w,e as I}from"./framework.BQ1aRZM4.js";const D={class:"flex flex-col items-stretch"},G={class:"max-w-full flex flex-col items-stretche bg-light-100 bg-opacity-20 dark-bg-dark-800 dark-bg-opacity-40 p-4 md-p-12 shadow-xl backdrop-blur-md backdrop-filter rounded-t-xl"},O={class:"flex flex-wrap items-center gap-8"},q={class:"flex flex-col flex-auto",style:{flex:"100"}},J={class:"text-md"},K={class:"flex items-center flex-wrap"},Q=s("div",{class:"font-bold mr-2"},"Hosts: ",-1),W={class:"flex flex-col items-center bg-light-300 dark-bg-dark-400"},X={class:"flex flex-wrap items-center gap-2 p-4"},Y={class:"relative"},Z={key:0,class:"flex items-center"},ee=["innerHTML"],te=s("div",{class:"i-la-pen"},null,-1),se=[te],oe={class:"p-2 flex flex-col gap-2"},de={__name:"RoomPage",props:{pub:{type:String,default:""},titles:{type:Object,default:()=>B}},emits:["rooms","browse","user"],setup(p){const f=p,{user:b}=C(),d=h(()=>f.pub?f.pub:m.pub),{room:a,leaveRoom:le,updateRoomProfile:x,enterRoom:ae}=L(d.value),R=F(),n=V({name:!1,description:!1,text:!1});T("deep");const $=h(()=>U({pub:d.value,size:1200,attachment:"local"}));return(c,o)=>{var v,g;return r(),i("div",D,[s("div",{class:"pt-32 px-2 md-px-8 bg-cover relative flex flex-col items-center",style:A({...$.value})},[s("div",G,[s("div",O,[u(e(P),{class:"flex-1 rounded-2xl overflow-hidden min-w-20",pub:p.pub},null,8,["pub"]),s("div",q,[u(e(S),{class:"font-bold text-2xl",text:e(a).profile.name||d.value.substring(0,12),editable:e(a).hosts[e(b).pub]&&d.value==e(m).pub&&!n.name,onUpdate:o[0]||(o[0]=l=>e(x)("name",l))},null,8,["text","editable"]),s("div",J,j(e(a).profile.description),1),s("div",K,[Q,(r(!0),i(y,null,_(e(a).hosts,(l,t)=>(r(),i("div",{class:"p-2 flex flex-col items-start gap-2",key:t},[u(e(z),{pub:t,selectable:!0},null,8,["pub"])]))),128))]),u(e(H),{pub:d.value},null,8,["pub"])])])])],4),E(c.$slots,"default"),s("div",W,[s("div",X,[(r(!0),i(y,null,_(p.titles,(l,t)=>(r(),w(e(M),{key:t,cert:e(a).features[t],type:t,title:l,pub:p.pub||e(m).pub,open:e(a).features[t]||t=="users"&&e(a).features.space||t=="chat"&&e(a).features.chat,onClick:re=>c.$emit("browse",t)},null,8,["cert","type","title","pub","open","onClick"]))),128))]),s("div",Y,[n.text===!1?(r(),i("div",Z,[s("div",{class:"p-8 markdown-body prose",innerHTML:e(R).render(((v=e(a).profile)==null?void 0:v.text)||"")},null,8,ee),(g=e(a).hosts)!=null&&g[e(b).pub]?(r(),i("button",{key:0,class:"button absolute top-4 right-4 z-200",onClick:o[1]||(o[1]=l=>{var t;return n.text=((t=e(a).profile)==null?void 0:t.text)||""})},se)):I("",!0)])):(r(),w(e(N),{key:1,text:n.text,"onUpdate:text":o[2]||(o[2]=l=>n.text=l),onClose:o[3]||(o[3]=l=>{e(x)("text",n.text),n.text=!1})},null,8,["text"]))]),s("div",oe,[u(e(k),{onUser:o[4]||(o[4]=l=>c.$emit("user",l))}),u(e(k),{state:"offline",onUser:o[5]||(o[5]=l=>c.$emit("user",l))})])])])}}};export{de as default};
