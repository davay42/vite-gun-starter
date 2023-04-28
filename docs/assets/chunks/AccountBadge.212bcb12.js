import{n as m,o as g,a as x,A as y,t as k,p as B}from"./components.18f911a0.js";import"../app.a726b562.js";import{d as N,f,v as z,w as A,o as l,c as r,L as C,e as s,t as p,I as v,N as b,r as S,_ as D}from"./framework.29bd70f6.js";import"./theme.ee8de9e6.js";const $=["title"],E={key:0,class:"mx-2 font-bold text-sm max-w-8ch overflow-ellipsis overflow-hidden whitespace-nowrap"},I=N({__name:"AccountBadge",props:{pub:{type:String,default:""},showName:{type:Boolean,default:!0},size:{type:Number,default:30},selectable:Boolean,vertical:Boolean},setup(e){const n=e,t=f(""),o=f(""),u=m("deep"),h=m("light"),c=g(),{user:i}=x();z(()=>{t.value="",o.value="",c.user(n.pub).get("profile").get("name").on(a=>{t.value=a}),c.user().get("petnames").get(n.pub).on(async a=>{o.value=await i.decrypt(a)})}),A(()=>i.is,a=>{a||(t.value="",o.value="")});function w(){n.selectable&&(B.pub=n.pub)}return(a,d)=>(l(),r("div",{class:"frame p-2px flex items-center rounded-full bg-light-900 dark-bg-dark-200 cursor-pointer shadow transition duration-400 ease-in",style:b({backgroundColor:e.pub?s(k).dark?s(u).hex(e.pub):s(h).hex(e.pub):"transparent",flexDirection:e.vertical?"column":"row"}),title:e.showName?o.value?o.value:e.pub:t.value,onClick:d[0]||(d[0]=L=>w())},[C(s(y),{pub:e.pub,size:e.size},null,8,["pub","size"]),e.showName&&t.value?(l(),r("div",E,p(t.value),1)):v("",!0),t.value&&!e.showName?(l(),r("div",{key:1,class:"tip mx-2 font-bold text-sm max-w-8ch overflow-ellipsis overflow-hidden whitespace-nowrap absolute opacity-0 hover-opacity-100 transition-all duration-300 ease-in text-center transform translate-y-2 p-1 rounded-lg",style:b({transform:`translateY(${-e.size-5}px) translateX(-50%)`,backgroundColor:s(u).hex(e.pub)})},p(t.value),5)):v("",!0),S(a.$slots,"default",{},void 0,!0)],12,$))}});const Y=D(I,[["__scopeId","data-v-b7b96d95"]]);export{Y as default};
