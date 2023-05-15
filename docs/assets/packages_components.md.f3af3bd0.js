import{_ as e,o as n,c as a,L as o,X as l,J as p}from"./chunks/framework.e76a7413.js";const A=JSON.parse('{"title":"Components","description":"","frontmatter":{"title":"Components"},"headers":[],"relativePath":"packages/components.md","filePath":"packages/components.md","pages":["CHANGELOG","basics/video","basics/video/2021/03-02","basics/video/2021/11-19","basics/video/2021/11-27","basics/video/2022/01-12","basics/video/2022/01-22","basics/video/2022/02-09","basics/video/2022/03-26","basics/video/2022/04-13","basics/video/2022/07-08","basics/video/2022/07-21","basics/video/2022/07-23","basics/video/2022/08-01","basics/video/2022/08-05","basics/video/2023/02-03","basics/video/2023/03-06","basics/video/2023/04-15","basics/video/2023/04-17","basics/video/2023/04-21","basics/video/2023/04-27","basics/video/2023/05-02","basics/what-is","explanations/crdt","explanations/qna","explanations/stack","how-to/use-components","index","packages/components","packages/composables","packages/","reference/components","reference/","reference/typedoc/README","reference/typedoc/interfaces/Account.Account","reference/typedoc/interfaces/Account.Profile","reference/typedoc/interfaces/Auth.Auth","reference/typedoc/interfaces/Auth.useAuth","reference/typedoc/interfaces/Certificates.CertOptions","reference/typedoc/interfaces/Certificates.Policy","reference/typedoc/interfaces/Chat.Message","reference/typedoc/interfaces/Crypto.Entity","reference/typedoc/interfaces/Dict.DictRecord","reference/typedoc/interfaces/File.PictureUploadData","reference/typedoc/interfaces/File.PictureUploadOptions","reference/typedoc/interfaces/File.UploadState","reference/typedoc/interfaces/Gift.Gift","reference/typedoc/interfaces/Gifts.GiftList","reference/typedoc/interfaces/Guests.Guest","reference/typedoc/interfaces/Mates.Mate","reference/typedoc/interfaces/Md.MdContent","reference/typedoc/interfaces/Mouse.Mouse","reference/typedoc/interfaces/Mouse.useMouse","reference/typedoc/interfaces/Post.Post","reference/typedoc/interfaces/Post.PostContent","reference/typedoc/interfaces/PrivateChat.Chat","reference/typedoc/interfaces/Project.ProjectItem","reference/typedoc/interfaces/Reaction.Reaction","reference/typedoc/interfaces/Reaction.ReactionVector","reference/typedoc/interfaces/Reactions.AuthorList","reference/typedoc/interfaces/Relay.Relay","reference/typedoc/interfaces/Space.Arrow","reference/typedoc/interfaces/Space.Pos","reference/typedoc/interfaces/Space.SpaceGuest","reference/typedoc/interfaces/User.User","reference/typedoc/interfaces/room_useRoom.CurrentRoom","reference/typedoc/modules","reference/typedoc/modules/Account","reference/typedoc/modules/Auth","reference/typedoc/modules/Background","reference/typedoc/modules/Cast","reference/typedoc/modules/Certificates","reference/typedoc/modules/Chat","reference/typedoc/modules/Color","reference/typedoc/modules/Crypto","reference/typedoc/modules/Dict","reference/typedoc/modules/Draw","reference/typedoc/modules/File","reference/typedoc/modules/Gift","reference/typedoc/modules/Gifts","reference/typedoc/modules/Guests","reference/typedoc/modules/Gun","reference/typedoc/modules/GunWorker","reference/typedoc/modules/Languages","reference/typedoc/modules/Mates","reference/typedoc/modules/Md","reference/typedoc/modules/Mouse","reference/typedoc/modules/Post","reference/typedoc/modules/Posts","reference/typedoc/modules/PrivateChat","reference/typedoc/modules/Project","reference/typedoc/modules/Projects","reference/typedoc/modules/QR","reference/typedoc/modules/Reaction","reference/typedoc/modules/Reactions","reference/typedoc/modules/Relay","reference/typedoc/modules/Relays","reference/typedoc/modules/Room","reference/typedoc/modules/Space","reference/typedoc/modules/Tags","reference/typedoc/modules/Theme","reference/typedoc/modules/Torrent","reference/typedoc/modules/User","reference/typedoc/modules/Zip","reference/typedoc/modules/room_useRoom","reference/typedoc/modules/useProject","reference/typedoc/modules/user_useAvatar","tutorials/first-app","tutorials/getting-started","tutorials/vue-app"]}'),t={name:"packages/components.md"},c=l(`<h1 id="gun-vue-is-a-library-of-reusable-components-for-gun-built-with-vue" tabindex="-1">Gun-Vue is a library of reusable components for Gun built with Vue. <a class="header-anchor" href="#gun-vue-is-a-library-of-reusable-components-for-gun-built-with-vue" aria-label="Permalink to &quot;Gun-Vue is a library of reusable components for Gun built with Vue.&quot;">​</a></h1><p>It enables eager web developers to build p2p apps for their communities all over the world, free and open source.</p><p><img src="https://gun-vue.js.org/media/svg/components.svg" alt="@gun-vue components logo"></p><p><a href="https://gun-vue.js.org" target="_blank" rel="noreferrer">gun-vue.js.org</a></p><h2 id="how-to-install" tabindex="-1">How to install? <a class="header-anchor" href="#how-to-install" aria-label="Permalink to &quot;How to install?&quot;">​</a></h2><p>Gun-Vue is distributed as a regular NPM package and may be used in any Vue 3 project.</p><ol start="0"><li>You may start by <a href="https://vuejs.org/guide/quick-start.html" target="_blank" rel="noreferrer">creating a new Vue project</a> or skip this step if you already have one.</li></ol><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue@latest</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">your-project-nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span></code></pre></div><ol><li>Install the <code>@gun-vue/components</code> package and start the development process</li></ol><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@gun-vue/components</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span></code></pre></div><ol start="2"><li>You can use the components in any place of your app</li></ol><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@gun-vue/components/dist/style.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">UserHome</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@gun-vue/components</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">UserHome</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">UserHome</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><ol start="3"><li>OR you can install the Gun-Vue plugin and it&#39;s styles in your app <code>main.js</code> file and use all the components straight away.</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./App.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./router</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./assets/main.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@gun-vue/components/style.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">GunVuePlugin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@gun-vue/components</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(App)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(router)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(GunVuePlugin)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>So you can use any of the Gun-Vue components in any SFC in your app.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ChatRoom</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="ssr-environment" tabindex="-1">SSR environment <a class="header-anchor" href="#ssr-environment" aria-label="Permalink to &quot;SSR environment&quot;">​</a></h3><p>Most of the Gun-Vue components rely on realtime communication with the GUN database. This means we should prevent them from running during the build process to be executed only on the client. You can use <code>client-only</code> and <code>Suspense</code> with async components to have client-side components in a server side render environment.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@gun-vue/components/dist/style.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> UserHome </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@gun-vue/components</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">UserHome</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">UserHome</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ClientOnly</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;Suspense&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Home&gt;&lt;/Home&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/Suspense&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ClientOnly</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Another way is to have the whole <code>GunVuePlugin</code> be mounted only on client-side. Here&#39;s what we have here in the Vitepress docs setup.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// .vitepress/theme/index.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">enhanceApp</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">app</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">meta</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">SSR</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">GunVuePlugin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@gun-vue/components</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">GunVuePlugin</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,22);function r(y,i,D,F,u,d){const s=p("UiComponents");return n(),a("div",null,[o(s),c])}const f=e(t,[["render",r]]);export{A as __pageData,f as default};
