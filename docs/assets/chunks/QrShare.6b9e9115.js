import{G as x,A as h,B as y}from"./theme.ee8de9e6.js";import"../app.a726b562.js";import{H as k,U as C}from"./components.18f911a0.js";import{d as b,f as S,x as g,o,c as a,E as s,r as w,L as c,H as B,e,t as $,I as d}from"./framework.29bd70f6.js";const L={class:"flex"},N=s("div",{class:"i-ion-share-outline"},null,-1),V={class:"flex flex-col items-center mb-4"},A={class:"text-md mx-4 my-2 break-all max-w-420px"},E={class:"flex text-lg mt-2"},H={key:0,class:"button text-lg font-normal items-center"},Q={key:0,class:"ml-2"},U={key:1,class:"ml-2"},j={key:1,class:"button text-lg font-normal items-center"},D=s("div",{class:"ml-2"},"Send",-1),K=b({__name:"QrShare",setup(G){const i=x(),n=S(!1),{text:I,copy:u,copied:m,isSupported:p}=h(),{share:f,isSupported:v}=y(),l=g(()=>i.value.href+i.value.search);return(_,t)=>(o(),a("div",L,[s("button",{class:"button p-4 transition shadow-lg flex items-center justify-center",onClick:t[0]||(t[0]=r=>n.value=!n.value)},[N,w(_.$slots,"default")]),c(e(C),{class:"text-center",open:n.value,onClose:t[3]||(t[3]=r=>n.value=!1)},{default:B(()=>[c(e(k),{class:"max-w-full",data:e(l)},null,8,["data"]),s("div",V,[s("div",A,$(e(l)),1),s("div",E,[e(p)?(o(),a("button",H,[s("div",{class:"i-la-copy",onClick:t[1]||(t[1]=r=>e(u)(e(l)))}),e(m)?(o(),a("div",Q,"Copied!")):(o(),a("div",U,"Copy"))])):d("",!0),e(v)?(o(),a("button",j,[s("div",{class:"i-la-share",onClick:t[2]||(t[2]=r=>e(f)({title:"Look at this",text:"A gun-vue page",url:e(l)}))}),D])):d("",!0)])])]),_:1},8,["open"])]))}});export{K as default};
