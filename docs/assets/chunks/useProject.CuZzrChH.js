import{a as g,ab as j,j as c,h as a,i as f,ac as l,q as b}from"./components.D4fD2a5V.js";import{aj as d,h as i}from"./framework.TCUxwrzd.js";function y(o){const{user:u}=g(),e=d({id:j(6),title:o,type:"project",status:"new",public:!0,funding:!1,room:i(()=>c.pub),author:i(()=>u.pub)});async function r(n){const t=a(),s=t.user().get("projects").get(e.id).put(e,()=>{var p;e.public&&(t.user(c.pub).get("projects").get(e.id+"@"+u.pub).put(s,()=>{console.log("added project"),n&&n()},{opt:{cert:(p=c.features)==null?void 0:p.projects}}),e.title="",e.id="")})}return{newProject:e,addProject:r}}function h(o,u,e){const n=a().user().get("projects").get(o);n.get(u).put(e,()=>{n.get("updated").put(Date.now())})}function w(o){const u=a(),e=d({id:"0",type:"event"});u.user(c.pub).get("projects").get(o).map().on(async(t,s)=>{s=="cover"&&f(t)?e[s]=await u.get("#cover").get(t).then():e[s]=t});function r(t,s){h(o.slice(0,-88),t,s)}async function n(t){const s=await b(t);s&&(u.get("#cover").get(s).put(t),r("cover",s))}return{project:e,updateField:r,updateCover:n}}async function P(o){var n;const u=a(),e=l(),{user:r}=g();if(o.includes(r.pub))u.user(c.pub).get("projects").get(o).put(null,void 0,{opt:{cert:(n=c.features)==null?void 0:n.projects}});else if(c.hosts[r.pub]){const t=await r.decrypt(c.hosts[r.pub].enc);e.user().auth(t,()=>{e.user().get("projects").get(o).put(null)})}console.error("Can't delete the project")}export{y as a,P as r,w as u};