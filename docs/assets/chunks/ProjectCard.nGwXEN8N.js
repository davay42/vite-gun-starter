import{_ as C,D as S,o as s,c as o,m as c,a2 as I,e as l,l as t,P as j,t as g,b as B,r as P,I as N,p as V,q as $}from"./framework.BQ1aRZM4.js";import{a as D,m as y,T,b3 as U,aG as q}from"./components.Dl01snlO.js";import"./theme.CGMZLven.js";const a=e=>(V("data-v-b7c2bbeb"),e=e(),$(),e),z=a(()=>t("div",{class:"i-la-trash"},null,-1)),E=[z],G={class:"flex flex-wrap items-center max-w-full w-full backdrop-blur-lg rounded-2xl bg-light-100 dark-bg-dark-400 backdrop-blur-sm backdrop-filter shadow-md"},L={key:0,class:"p-0",style:{flex:"1 1 40px"}},M=["src"],O={class:"flex flex-col p-2 overflow-hidden",style:{flex:"10 1 280px"}},R={class:"px-2"},A={class:"flex items-center"},F={class:"flex flex-col my-2"},H={key:0,class:"text-xl font-bold"},J={key:1,class:"text-md"},K={class:"flex items-center flex-wrap items-center mt-2 gap-2"},Q={key:0,class:"i-la-youtube mx-1"},W={key:1,class:"i-mdi-text-long mx-1"},X=a(()=>t("div",{class:"flex-1"},null,-1)),Y={class:"text-xs break-all p-2"},Z=a(()=>t("div",{class:"flex-1"},null,-1)),ee={__name:"ProjectCard",props:{path:{type:String,default:""},project:{type:Object,default:()=>({title:"",statement:"",color:"",cover:null,icon:null,link:"",goals:[],objects:[],events:[],text:""})}},emits:["user"],setup(e){const{user:r}=D();return y("light"),y("deep"),(w,i)=>{var d,n,u,m,p,x,b,h,f,v,k;const _=S("account-badge");return s(),o("div",{class:"card",style:j({backgroundImage:`url(${((d=e.project)==null?void 0:d.cover)||((n=e.project)==null?void 0:n.raw)||"none"})`,backgroundColor:e.project.color})},[e.path.includes(c(r).pub)||c(T).hosts[c(r).pub]?(s(),o("div",{key:0,class:"absolute top-2 right-2",onClick:i[0]||(i[0]=I(te=>c(U)(e.path),["stop","prevent"]))},E)):l("",!0),t("div",{class:"p-0",style:j([{flex:"12 1 120px"},{paddingTop:(u=e.project)!=null&&u.cover||(m=e.project)!=null&&m.raw?"18em":"0"}])},null,4),t("div",G,[(p=e.project)!=null&&p.icon?(s(),o("div",L,[t("img",{class:"w-20 max-h-20 rounded-full m-2",src:e.project.icon,width:"40px"},null,8,M)])):l("",!0),t("div",O,[t("div",R,[t("div",A,[t("div",F,[(x=e.project)!=null&&x.title?(s(),o("div",H,g(e.project.title),1)):l("",!0),(b=e.project)!=null&&b.description?(s(),o("div",J,g(e.project.description),1)):l("",!0)]),t("div",K,[(h=e.project)!=null&&h.youtube?(s(),o("div",Q)):l("",!0),(f=e.project)!=null&&f.text?(s(),o("div",W)):l("",!0),(v=e.project)!=null&&v.link?(s(),B(c(q),{key:2,url:(k=e.project)==null?void 0:k.link},null,8,["url"])):l("",!0),X,t("div",Y,[P(w.$slots,"default",{},void 0,!0)])]),Z,N(_,{pub:e.path.slice(-87)},null,8,["pub"])])])])])],4)}}},ce=C(ee,[["__scopeId","data-v-b7c2bbeb"]]);export{ce as default};
