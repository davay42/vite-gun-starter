import{_ as m,s as b,o as r,c as d,j as t,t as a,e as u,P as c,k as e,I as p,w as _,a as x,aC as y,aD as k,p as w,l as h}from"./framework.TCUxwrzd.js";import{ah as C,ai as g,U as S}from"./components.D4fD2a5V.js";import"./theme.D4rRXU8L.js";const R=l=>(w("data-v-eb12b5b3"),l=l(),h(),l),D={class:"cursor-pointer relative text-left"},I=R(()=>t("div",{class:"i-carbon-bare-metal-server-01 text-xl -mt-1"},null,-1)),V={key:0,class:"ml-2 font-bold"},N={class:"p-4 min-w-60vw max-w-full"},P={class:"flex flex-col items-start"},$={class:"p-0 flex items-center flex-wrap w-full"},B={key:0,class:"info"},G={class:"p-0"},U={class:"num p-0"},L={class:"num p-0"},T={class:"num p-0"},j={class:"p-0"},z={__name:"GunRelay",props:{text:{type:String,default:""}},setup(l){const{relay:s,setPeer:v,resetPeer:f}=C(),i=b(!1);return(A,o)=>(r(),d("div",D,[t("button",{class:"flex",onClick:o[0]||(o[0]=n=>i.value=!0)},[I,l.text?(r(),d("div",V,a(l.text),1)):u("",!0),t("div",{class:"p-1 bottom-0 left-2 rounded-full transition duration-300ms ease-in-out opacity-50 absolute",style:c({backgroundColor:e(s).blink?"white":"black"})},null,4)]),p(e(S),{open:i.value,onClose:o[4]||(o[4]=n=>i.value=!1)},{default:_(()=>[t("div",N,[t("div",{class:"h-2 w-full mb-2 rounded-full transition-all duration-300 ease-in-out opacity-40",style:c({backgroundColor:e(s).blink?"white":"black"})},null,4),t("div",P,[t("div",$,[x(" Host: "),y(t("input",{class:"mx-1 p-2 rounded-lg flex-auto dark-bg-dark-800","onUpdate:modelValue":o[1]||(o[1]=n=>e(s).peer=n)},null,512),[[k,e(s).peer]]),t("button",{class:"button m-1",onClick:o[2]||(o[2]=n=>e(v)(e(s).peer))},"Set"),t("button",{class:"button m-1",onClick:o[3]||(o[3]=n=>e(f)())},"Reset")]),e(s).status!="offline"?(r(),d("div",B,[t("div",G,"Relay server is "+a(e(s).status)+" for "+a(e(s).age),1),t("div",U,"Delay: "+a(e(s).delay)+" ms",1),t("div",L,"Pulse drift: "+a(e(s).lag)+" ms",1),t("div",T,"Active wires: "+a(e(s).activeWires)+" / "+a(e(s).totalConnections),1),t("div",j,"Data storage is "+a(e(s).store?"enabled":"disabled"),1)])):u("",!0)]),p(e(g))])]),_:1},8,["open"])]))}},W=m(z,[["__scopeId","data-v-eb12b5b3"]]);export{W as default};