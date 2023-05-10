import{d as $,f as d,o as e,c as t,e as o,t as f,I as p,L as h,H as y,E as s,T as b,at as A,a2 as B,au as N,F as v,U as g,G as V}from"./framework.e76a7413.js";import{C as z,D}from"./theme.7b41b406.js";import{H as L,A as S}from"./components.ff545abb.js";import"../app.1dbdb34a.js";const E={class:"flex flex-wrap"},F={class:"text-xl font-bold p-2"},H=s("div",{class:"flex-1"},null,-1),K={key:0,class:"i-la-plus"},M={key:1,class:"i-la-times"},O={key:0,class:"flex flex-wrap"},P={class:"flex flex-col p-2 gap-2 h-full"},U=["onClick"],G={class:"flex-1"},J=$({__name:"ChatTopics",props:{title:{type:String,default:"Topics"},topic:{type:String,default:"general"}},emits:["topic"],setup(x){const{addChat:_,chats:C}=L(),r=d(""),n=d(!1),m=d(),i=d(!0),u=z("(min-width: 640px)");return D(m,()=>u.value?null:i.value=!1),(w,l)=>(e(),t(v,null,[!i.value&&!o(u)?(e(),t("button",{key:0,class:"button absolute z-200 top-4 left-4",onClick:l[0]||(l[0]=a=>i.value=!0)},f(x.title),1)):p("",!0),h(b,{name:"fade"},{default:y(()=>[o(u)||i.value&&!o(u)?(e(),t("div",{key:0,class:"px-1 py-2 flex flex-col bg-dark-50 dark-bg-dark-400 bg-opacity-95 gap-2 min-h-full overflow-y-scroll scroll-smooth absolute sm-static z-20 w-220px max-w-full max-h-full text-light-900 backdrop-filter backdrop-blur-xl",ref_key:"chatsPanel",ref:m,style:{flex:"0 1 320px"}},[s("div",E,[s("div",F,f(x.title),1),H,s("div",{class:"cursor-pointer self-center text-2xl p-2",onClick:l[1]||(l[1]=a=>n.value=!n.value)},[h(b,{name:"fade",mode:"out-in"},{default:y(()=>[n.value?(e(),t("div",M)):(e(),t("div",K))]),_:1})])]),n.value?(e(),t("div",O,[A(s("input",{class:"p-2 m-2 w-full rounded-xl text-dark-800","onUpdate:modelValue":l[2]||(l[2]=a=>r.value=a),placeholder:"New chat",onKeyup:l[3]||(l[3]=B(a=>{o(_)(r.value),r.value="",n.value=!1},["enter"]))},null,544),[[N,r.value]])])):p("",!0),s("div",P,[(e(!0),t(v,null,g(o(C),(a,c)=>(e(),t("div",{class:"font-bold bg-light-100 bg-opacity-10 rounded-xl px-2 cursor-pointer flex",key:c,onClick:T=>{w.$emit("topic",c),i.value=!1}},[s("div",G,f(c),1),(e(!0),t(v,null,g(a,(T,k)=>(e(),V(o(S),{key:k,size:20,pub:k},null,8,["pub"]))),128))],8,U))),128))])],512)):p("",!0)]),_:1})],64))}});export{J as default};
