import{p as e,o,c as a,m,J as x,t as k,e as i,aG as b,aH as f,aj as g,a2 as y,Q as v}from"./framework.BoeOPt-z.js";import{a as h,m as w,aA as M,k as B}from"./components.Cw6xLTg0.js";import"./theme.BgzKx3Gc.js";const C={key:0,class:"flex items-center"},V={key:0,class:"p-2"},_={key:2,class:"i-la-plus"},D={key:3,class:"i-la-times"},U={__name:"MateButton",props:{pub:{type:String,default:""}},setup(l){const d=l,{user:n}=h(),p=w("deep"),{emoji:r,isMate:s,toggleMate:c}=M(d.pub);return(N,t)=>e(n).is&&e(n).pub!=l.pub?(o(),a("div",C,[m("button",{class:"flex items-center rounded-2xl shadow-xl px-2 text-3xl bg-light-500 dark-bg-dark-700",style:v({backgroundColor:e(s)?e(p).hex(l.pub):""}),onClick:t[2]||(t[2]=u=>e(c)())},[x(e(B),{pub:e(n).pub,"show-name":!1},null,8,["pub"]),e(s)?(o(),a("div",V,k(e(s)),1)):i("",!0),e(s)?i("",!0):b((o(),a("input",{key:1,class:"mx-1 rounded-2xl w-46px p-2 rounded-lg shadow-inner text-center","onUpdate:modelValue":t[0]||(t[0]=u=>g(r)?r.value=u:null),type:"text",placeholder:"",onClick:t[1]||(t[1]=y(()=>{},["stop","prevent"]))},null,512)),[[f,e(r)]]),e(s)?(o(),a("div",D)):(o(),a("div",_))],4)])):i("",!0)}};export{U as default};
