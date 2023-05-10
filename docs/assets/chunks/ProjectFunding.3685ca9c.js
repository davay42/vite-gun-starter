import{o as e,c as s,E as o,F as r,e as t,G as b,U as h,t as u,H as _,at as B,aB as w,I as k}from"./framework.e76a7413.js";import{a$ as C,a as $,b0 as F,k as j,ah as G}from"./components.ff545abb.js";import"../app.1dbdb34a.js";import"./theme.7b41b406.js";const S={class:"flex flex-col"},E={class:"text-xl my-4 p-2 flex items-center"},P=o("div",{class:"font-bold"},"Project funding",-1),D=o("div",{class:"flex-1"},null,-1),U={key:1,class:"text-xs"},V={key:0,class:"p-2 flex flex-col gap-4"},A={class:"p-2 w-full flex items-center gap-2"},H={class:"text-xl font-bold"},I={class:"text-xl"},L=o("div",{class:"opacity-50"},"by",-1),z={class:"flex flex-wrap gap-2"},J={class:"mr-2"},W={__name:"ProjectFunding",props:{path:{type:String,default:""},enabled:{type:Boolean,default:!1}},emits:["enable","gift","open"],setup(n,{emit:K}){const v=n,{gifts:M,collections:m}=C(v.path),{user:l}=$();return(f,d)=>(e(),s("div",S,[o("div",E,[P,D,n.enabled?(e(),b(t(F),{key:1,gift:{project:n.path,to:n.path.slice(-87)},onSent:d[1]||(d[1]=a=>f.$emit("gift",a))},null,8,["gift"])):(e(),s(r,{key:0},[n.path.includes(t(l).pub)?(e(),s("button",{key:0,class:"button",onClick:d[0]||(d[0]=a=>f.$emit("enable"))},"Enable Funding")):(e(),s("div",U,"Funding not yet enabled by the author"))],64))]),n.enabled?(e(),s("div",V,[(e(!0),s(r,null,h(t(m),(a,p)=>{var x,g,y;return e(),s("div",{class:"flex flex-col gap-2 p-2 bg-dark-50 rounded-xl bg-opacity-10 shadow-xl",key:a},[o("div",A,[o("div",H,u(a.sum),1),o("div",I,u(p),1),L,o("div",z,[(e(!0),s(r,null,h(a.from,(i,c)=>(e(),b(t(j),{key:i,pub:c},{default:_(()=>[o("div",J,u(i)+" "+u(p),1)]),_:2},1032,["pub"]))),128))])]),(y=(g=(x=t(m))==null?void 0:x[p])==null?void 0:g.from)!=null&&y[t(l).pub]||n.path.includes(t(l).pub)?(e(!0),s(r,{key:0},h(a.list,(i,c)=>B((e(),b(t(G),{class:"cursor-pointer",key:c,hash:c,onClick:N=>f.$emit("open",c)},null,8,["hash","onClick"])),[[w,i.from==t(l).pub||i.to==t(l).pub]])),128)):k("",!0)])}),128))])):k("",!0)]))}};export{W as default};
