import{o as l,c as a,m as t,t as p,p as s,n as m,a2 as x,e as r,r as h}from"./framework.BoeOPt-z.js";import{D as k}from"./components.Cw6xLTg0.js";import"./theme.BgzKx3Gc.js";const w={class:"p-2 flex flex-wrap items-center gap-2 border-1 rounded-xl"},_={class:"text-xl font-bold flex-0"},b={class:"flex-auto flex gap-1"},v=["innerHTML"],y=["href"],g=t("div",{class:"i-la-link"},null,-1),B=[g],L={__name:"GiftWallet",props:{wallet:{type:Object,default:()=>({currency:"USD",account:"Bank of America 1234567890",url:"https://bankofamerica.com"})}},setup(e){var o;const c=e,{text:C,copy:i,copied:d,isSupported:u}=k({source:(o=c.wallet)==null?void 0:o.account});return(f,n)=>(l(),a("div",w,[t("div",_,p(e.wallet.currency),1),t("div",b,[t("div",{class:"text-xs overflow-ellipsis break-all",innerHTML:e.wallet.account},null,8,v),s(u)?(l(),a("div",{key:0,class:m(["i-la-copy w-10",{"animate-bounce":s(d)}]),onClick:n[0]||(n[0]=x(S=>s(i)(),["stop"]))},null,2)):r("",!0)]),e.wallet.url?(l(),a("a",{key:0,href:e.wallet.url,target:"_blank"},B,8,y)):r("",!0),h(f.$slots,"default")]))}};export{L as default};
