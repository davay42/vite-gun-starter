import{d as h,h as p,p as o,o as l,c as i,b as _,Q as v,e as r,m as s,aG as C,aH as g,U as w}from"./framework.BoeOPt-z.js";import{m as f,a as A,y as B,A as U,S as $,z}from"./components.Cw6xLTg0.js";import"./theme.BgzKx3Gc.js";const E=s("div",{class:"text-xl font-bold"},"Create a new account",-1),P=s("div",{class:"mb-4 mt-2"},"Tap the circle to generate a new key",-1),S={class:"flex flex-col"},T={class:"flex justify-center my-4"},V=s("div",{class:"i-la-undo text-2xl"},null,-1),j=[V],D=s("div",{class:"i-fad-random-1dice text-3xl"},null,-1),H=[D],F=h({__name:"AuthCreate",setup(N){const c=f("deep");f("light");const{user:d,auth:x}=A(),a=p(""),t=p(null),{history:b,undo:k,redo:G}=B(t);async function u(){t.value=await $.pair()}u();function y(){x(t.value,()=>w(()=>{z("name",a.value)}))}return(M,e)=>{var m;return o(d).is?r("",!0):(l(),i("div",{key:0,class:"flex flex-col items-center flex-1 p-2 bg-light-700 dark-bg-dark-200 rounded-3xl shadow-lg text-center p-4 transition duration-300ms ease-in",style:v({backgroundColor:o(c).hex(((m=t.value)==null?void 0:m.pub)||"")})},[E,P,t.value?(l(),_(o(U),{key:0,class:"cursor-pointer rounded-full shadow-xl border-8",pub:t.value.pub,size:200,style:v({borderColor:o(c).hex(t.value.pub)}),onClick:e[0]||(e[0]=n=>u())},null,8,["pub","style"])):r("",!0),s("div",S,[s("div",T,[o(b).length>2?(l(),i("button",{key:0,class:"m-2 button items-center",onClick:e[1]||(e[1]=n=>o(k)())},j)):r("",!0),s("button",{class:"m-2 button items-center",onClick:e[2]||(e[2]=n=>u())},H)]),C(s("input",{class:"p-4 rounded-2xl my-2 dark-bg-dark-200","onUpdate:modelValue":e[3]||(e[3]=n=>a.value=n),placeholder:"Enter your name or nickname"},null,512),[[g,a.value]]),t.value&&!o(d).is&&a.value?(l(),i("button",{key:0,class:"button w-full flex justify-center items-center",onClick:e[4]||(e[4]=n=>y())},"Authenticate")):r("",!0)])],4))}}});export{F as default};
