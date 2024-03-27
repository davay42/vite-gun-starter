import{I as Q,m as S,aF as T,aO as D,aT as E,aG as G,aQ as H,aU as A,aj as I,aV as J}from"./components.Cw6xLTg0.js";import"./theme.BgzKx3Gc.js";import{k as U,o as l,c as a,m as e,F as O,G as Y,b as u,p as s,t as m,e as n,Q as q,J as V}from"./framework.BoeOPt-z.js";const K={class:"rounded-lg max-w-65ch flex flex-col items-stretch justify-center w-full overscroll-contain bg-light-200 dark-bg-dark-500"},R={class:"flex flex-wrap"},W={class:"z-30 flex flex-wrap items-center w-full px-4 py-2 sticky top-0 shadow-xl filter grayscale-70 hover-grayscale-0 transition duration-400ms"},X=e("div",{class:"p-0"},"#",-1),Z=[X],ss={class:"ml-1 break-all font-bold"},es=e("div",{class:"flex-1"},null,-1),ts=e("div",{class:"i-la-angle-left"},null,-1),ls=[ts],os=e("div",{class:"i-la-times"},null,-1),as=[os],is={class:"flex-1 flex flex-col items-stretch",style:{flex:"10 1 300px"}},ns={key:0,class:"z-1 max-w-100vw"},rs=["src"],ds={class:"flex flex-wrap items-start w-full justify-start"},cs={class:"w-full flex flex-col items-stretch"},us={class:"p-2"},hs=["src"],ms={key:1,class:"text-2xl font-bold m-2"},fs={key:3,class:"m-2"},xs=e("div",{class:"flex-auto"},null,-1),ks={class:"flex flex-wrap p-4 bg-dark-50 bg-opacity-25 dark-bg-dark-400 w-full items-center gap-1 text-sm"},vs={key:0,class:"i-la-file-download"},ps={key:1,class:"i-la-redo-alt animate-spin"},ys=["innerHTML"],$s={__name:"PostPage",props:{tag:{type:String,default:""},hash:{type:String,default:""}},emits:["close","browse","user"],setup(d){const j=Q(),c=d;U(()=>S("light").hex(c.hash));const z=U(()=>S("deep").hex(c.hash)),{post:t,download:F,downloading:M}=T({hash:c.hash}),{posts:_s,backlinks:N}=D(c.hash);return(r,o)=>{var f,x,k,v,p,y,_,b,g,w,$,C,P,L;return l(),a("div",K,[e("div",R,[(l(!0),a(O,null,Y(s(N),(i,h)=>(l(),u(s(E),{key:h,style:{flex:"1 1 220px"},hash:h,tag:d.tag,authors:i,back:!0,onUser:o[0]||(o[0]=B=>r.$emit("user",B)),onClick:B=>r.$emit("browse",h)},null,8,["hash","tag","authors","onClick"]))),128))]),e("div",W,[e("div",{class:"hover-underline text-md cursor-pointer font-bold flex",onClick:o[1]||(o[1]=i=>r.$emit("close"))},Z),e("div",ss,m((f=s(t))==null?void 0:f.title),1),es,e("button",{class:"p-2",onClick:o[2]||(o[2]=i=>r.$router.back())},ls),e("button",{class:"p-2",onClick:o[3]||(o[3]=i=>r.$emit("close"))},as)]),e("div",is,[(x=s(t))!=null&&x.cover||(k=s(t))!=null&&k.youtube||(v=s(t))!=null&&v.text?(l(),a("div",ns,[e("img",{class:"sticky top-0",src:s(t).cover},null,8,rs)])):n("",!0),e("div",ds,[e("div",cs,[e("div",us,[s(t).icon?(l(),a("img",{key:0,class:"w-20 h-20 rounded-full m-2",style:q([{flex:"0 1 40px"},{borderColor:z.value}]),src:s(t).icon},null,12,hs)):n("",!0),(p=s(t))!=null&&p.title?(l(),a("div",ms,m((y=s(t))==null?void 0:y.title),1)):n("",!0),(_=s(t))!=null&&_.link?(l(),u(s(G),{key:2,url:(b=s(t))==null?void 0:b.link},null,8,["url"])):n("",!0),(g=s(t))!=null&&g.statement?(l(),a("div",fs,m((w=s(t))==null?void 0:w.statement),1)):n("",!0)]),xs,e("div",ks,[V(s(H)),V(s(A),{hash:d.hash},null,8,["hash"]),e("button",{class:"button flex items-center",onClick:o[4]||(o[4]=i=>s(F)())},[s(M)?(l(),a("div",ps)):(l(),a("div",vs))])])])]),($=s(t))!=null&&$.youtube?(l(),u(s(I),{key:1,class:"mb-6 shadow-xl flex-1",video:(C=s(t))==null?void 0:C.youtube},null,8,["video"])):n("",!0),(P=s(t))!=null&&P.text?(l(),a("div",{key:2,class:"text-md markdown-body m-1 px-4 py-4 leading-relaxed",innerHTML:s(j).render((L=s(t))==null?void 0:L.text)},null,8,ys)):n("",!0),(l(),u(s(J),{key:d.tag,tag:d.hash,header:!1,onBrowse:o[5]||(o[5]=i=>r.$emit("browse",i))},null,8,["tag"]))])])}}};export{$s as default};
