import{h as p,p as u,o,c as r,a2 as m,e as d}from"./framework.BoeOPt-z.js";import{a as f}from"./components.Cw6xLTg0.js";import"./theme.BgzKx3Gc.js";const g={key:0,class:"i-la-star"},h={key:1,class:"i-la-star-solid"},S={__name:"PostActionStar",props:{tag:{type:String,default:""},hash:{type:String,default:""}},setup(c){const{user:n}=f(),t=c,s=p(!1),i=n.db.get("posts").get(`${t.tag}`).get(t.hash);i.on((a,e)=>{s.value=a});function l(a=t.tag,e=t.hash){i.put(!s.value)}return(a,e)=>u(n).is?(o(),r("button",{key:0,class:"m-1 button items-center",onClick:e[0]||(e[0]=m(_=>l(),["stop","prevent"]))},[s.value?(o(),r("div",h)):(o(),r("div",g))])):d("",!0)}};export{S as default};
