import{o as S,aC as V,an as F,ay as H,aD as T,a8 as A,aE as I}from"./components.D4fD2a5V.js";import{u as Q}from"./useMd.CfQ7drip.js";import{u as Y}from"./useZip.Banvg0bU.js";import{u as q}from"./usePosts.BBcQO6Ca.js";import"./theme.D4rRXU8L.js";import{h as E,o,c as a,j as t,F as G,E as J,b as u,k as s,t as h,e as n,P as K,I as j}from"./framework.TCUxwrzd.js";import"./useGift.BPHV4NrC.js";import"./composables.Di8zjsLP.js";const O={class:"rounded-lg max-w-65ch flex flex-col items-stretch justify-center w-full overscroll-contain bg-light-200 dark-bg-dark-500"},R={class:"flex flex-wrap"},W={class:"z-30 flex flex-wrap items-center w-full px-4 py-2 sticky top-0 shadow-xl filter grayscale-70 hover-grayscale-0 transition duration-400ms"},X=t("div",{class:"p-0"},"#",-1),Z=[X],ss={class:"ml-1 break-all font-bold"},ts=t("div",{class:"flex-1"},null,-1),es=t("div",{class:"i-la-angle-left"},null,-1),os=[es],ls=t("div",{class:"i-la-times"},null,-1),as=[ls],is={class:"flex-1 flex flex-col items-stretch",style:{flex:"10 1 300px"}},ns={key:0,class:"z-1 max-w-100vw"},rs=["src"],ds={class:"flex flex-wrap items-start w-full justify-start"},cs={class:"w-full flex flex-col items-stretch"},us={class:"p-2"},ms=["src"],hs={key:1,class:"text-2xl font-bold m-2"},fs={key:3,class:"m-2"},xs=t("div",{class:"flex-auto"},null,-1),ps={class:"flex flex-wrap p-4 bg-dark-50 bg-opacity-25 dark-bg-dark-400 w-full items-center gap-1 text-sm"},ks={key:0,class:"i-la-file-download"},vs={key:1,class:"i-la-redo-alt animate-spin"},ys=["innerHTML"],Ss={__name:"PostPage",props:{tag:{type:String,default:""},hash:{type:String,default:""}},emits:["close","browse","user"],setup(d){const z=Q(),c=d;E(()=>S("light").hex(c.hash));const D=E(()=>S("deep").hex(c.hash)),{post:e,download:M,downloading:N}=Y({hash:c.hash}),{posts:_s,backlinks:U}=q(c.hash);return(r,l)=>{var f,x,p,k,v,y,_,b,g,w,$,C,P,L;return o(),a("div",O,[t("div",R,[(o(!0),a(G,null,J(s(U),(i,m)=>(o(),u(s(V),{key:m,style:{flex:"1 1 220px"},hash:m,tag:d.tag,authors:i,back:!0,onUser:l[0]||(l[0]=B=>r.$emit("user",B)),onClick:B=>r.$emit("browse",m)},null,8,["hash","tag","authors","onClick"]))),128))]),t("div",W,[t("div",{class:"hover-underline text-md cursor-pointer font-bold flex",onClick:l[1]||(l[1]=i=>r.$emit("close"))},Z),t("div",ss,h((f=s(e))==null?void 0:f.title),1),ts,t("button",{class:"p-2",onClick:l[2]||(l[2]=i=>r.$router.back())},os),t("button",{class:"p-2",onClick:l[3]||(l[3]=i=>r.$emit("close"))},as)]),t("div",is,[(x=s(e))!=null&&x.cover||(p=s(e))!=null&&p.youtube||(k=s(e))!=null&&k.text?(o(),a("div",ns,[t("img",{class:"sticky top-0",src:s(e).cover},null,8,rs)])):n("",!0),t("div",ds,[t("div",cs,[t("div",us,[s(e).icon?(o(),a("img",{key:0,class:"w-20 h-20 rounded-full m-2",style:K([{flex:"0 1 40px"},{borderColor:D.value}]),src:s(e).icon},null,12,ms)):n("",!0),(v=s(e))!=null&&v.title?(o(),a("div",hs,h((y=s(e))==null?void 0:y.title),1)):n("",!0),(_=s(e))!=null&&_.link?(o(),u(s(F),{key:2,url:(b=s(e))==null?void 0:b.link},null,8,["url"])):n("",!0),(g=s(e))!=null&&g.statement?(o(),a("div",fs,h((w=s(e))==null?void 0:w.statement),1)):n("",!0)]),xs,t("div",ps,[j(s(H)),j(s(T),{hash:d.hash},null,8,["hash"]),t("button",{class:"button flex items-center",onClick:l[4]||(l[4]=i=>s(M)())},[s(N)?(o(),a("div",vs)):(o(),a("div",ks))])])])]),($=s(e))!=null&&$.youtube?(o(),u(s(A),{key:1,class:"mb-6 shadow-xl flex-1",video:(C=s(e))==null?void 0:C.youtube},null,8,["video"])):n("",!0),(P=s(e))!=null&&P.text?(o(),a("div",{key:2,class:"text-md markdown-body m-1 px-4 py-4 leading-relaxed",innerHTML:s(z).render((L=s(e))==null?void 0:L.text)},null,8,ys)):n("",!0),(o(),u(s(I),{key:d.tag,tag:d.hash,header:!1,onBrowse:l[5]||(l[5]=i=>r.$emit("browse",i))},null,8,["tag"]))])])}}};export{Ss as default};