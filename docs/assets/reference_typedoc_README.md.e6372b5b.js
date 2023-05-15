import{_ as e,o as t,c as r,X as o}from"./chunks/framework.e76a7413.js";const m=JSON.parse('{"title":"gun-vue.js.org","description":"","frontmatter":{},"headers":[],"relativePath":"reference/typedoc/README.md","filePath":"reference/typedoc/README.md","pages":["CHANGELOG","basics/video","basics/video/2021/03-02","basics/video/2021/11-19","basics/video/2021/11-27","basics/video/2022/01-12","basics/video/2022/01-22","basics/video/2022/02-09","basics/video/2022/03-26","basics/video/2022/04-13","basics/video/2022/07-08","basics/video/2022/07-21","basics/video/2022/07-23","basics/video/2022/08-01","basics/video/2022/08-05","basics/video/2023/02-03","basics/video/2023/03-06","basics/video/2023/04-15","basics/video/2023/04-17","basics/video/2023/04-21","basics/video/2023/04-27","basics/video/2023/05-02","basics/what-is","explanations/crdt","explanations/qna","explanations/stack","how-to/use-components","index","packages/components","packages/composables","packages/","reference/components","reference/","reference/typedoc/README","reference/typedoc/interfaces/Account.Account","reference/typedoc/interfaces/Account.Profile","reference/typedoc/interfaces/Auth.Auth","reference/typedoc/interfaces/Auth.useAuth","reference/typedoc/interfaces/Certificates.CertOptions","reference/typedoc/interfaces/Certificates.Policy","reference/typedoc/interfaces/Chat.Message","reference/typedoc/interfaces/Crypto.Entity","reference/typedoc/interfaces/Dict.DictRecord","reference/typedoc/interfaces/File.PictureUploadData","reference/typedoc/interfaces/File.PictureUploadOptions","reference/typedoc/interfaces/File.UploadState","reference/typedoc/interfaces/Gift.Gift","reference/typedoc/interfaces/Gifts.GiftList","reference/typedoc/interfaces/Guests.Guest","reference/typedoc/interfaces/Mates.Mate","reference/typedoc/interfaces/Md.MdContent","reference/typedoc/interfaces/Mouse.Mouse","reference/typedoc/interfaces/Mouse.useMouse","reference/typedoc/interfaces/Post.Post","reference/typedoc/interfaces/Post.PostContent","reference/typedoc/interfaces/PrivateChat.Chat","reference/typedoc/interfaces/Project.ProjectItem","reference/typedoc/interfaces/Reaction.Reaction","reference/typedoc/interfaces/Reaction.ReactionVector","reference/typedoc/interfaces/Reactions.AuthorList","reference/typedoc/interfaces/Relay.Relay","reference/typedoc/interfaces/Space.Arrow","reference/typedoc/interfaces/Space.Pos","reference/typedoc/interfaces/Space.SpaceGuest","reference/typedoc/interfaces/User.User","reference/typedoc/interfaces/room_useRoom.CurrentRoom","reference/typedoc/modules","reference/typedoc/modules/Account","reference/typedoc/modules/Auth","reference/typedoc/modules/Background","reference/typedoc/modules/Cast","reference/typedoc/modules/Certificates","reference/typedoc/modules/Chat","reference/typedoc/modules/Color","reference/typedoc/modules/Crypto","reference/typedoc/modules/Dict","reference/typedoc/modules/Draw","reference/typedoc/modules/File","reference/typedoc/modules/Gift","reference/typedoc/modules/Gifts","reference/typedoc/modules/Guests","reference/typedoc/modules/Gun","reference/typedoc/modules/GunWorker","reference/typedoc/modules/Languages","reference/typedoc/modules/Mates","reference/typedoc/modules/Md","reference/typedoc/modules/Mouse","reference/typedoc/modules/Post","reference/typedoc/modules/Posts","reference/typedoc/modules/PrivateChat","reference/typedoc/modules/Project","reference/typedoc/modules/Projects","reference/typedoc/modules/QR","reference/typedoc/modules/Reaction","reference/typedoc/modules/Reactions","reference/typedoc/modules/Relay","reference/typedoc/modules/Relays","reference/typedoc/modules/Room","reference/typedoc/modules/Space","reference/typedoc/modules/Tags","reference/typedoc/modules/Theme","reference/typedoc/modules/Torrent","reference/typedoc/modules/User","reference/typedoc/modules/Zip","reference/typedoc/modules/room_useRoom","reference/typedoc/modules/useProject","reference/typedoc/modules/user_useAvatar","tutorials/first-app","tutorials/getting-started","tutorials/vue-app"]}'),a={name:"reference/typedoc/README.md"},n=o(`<p>Gun-Vue docs / <a href="./modules.html">Exports</a></p><hr><h2 id="title-reference" tabindex="-1">title: Reference <a class="header-anchor" href="#title-reference" aria-label="Permalink to &quot;title: Reference&quot;">​</a></h2><p><img src="https://gun-vue.js.org/media/gun-vue-logo.svg" alt="@gun-vue logo"></p><h1 id="gun-vue-js-org" tabindex="-1"><a href="https://gun-vue.js.org" target="_blank" rel="noreferrer">gun-vue.js.org</a> <a class="header-anchor" href="#gun-vue-js-org" aria-label="Permalink to &quot;[gun-vue.js.org](https://gun-vue.js.org)&quot;">​</a></h1><h2 id="vue-gun-p2p-crypto-graph-db-toolkit" tabindex="-1">Vue + Gun p2p crypto graph db toolkit <a class="header-anchor" href="#vue-gun-p2p-crypto-graph-db-toolkit" aria-label="Permalink to &quot;Vue + Gun p2p crypto graph db toolkit&quot;">​</a></h2><p>Gun-vue – is where the peer-to-peer javascript database <strong>Gun</strong> meets the reactivity system of <strong>Vue</strong>. Pluggable components for UX designers. Easily importable composables for UI developers. Relay peer for p2p network enthusiasts. Demos and docs for beginners. Open source for everyone! ✊</p><h2 id="what-is-gun-vue" tabindex="-1">What is @gun-vue? <a class="header-anchor" href="#what-is-gun-vue" aria-label="Permalink to &quot;What is @gun-vue?&quot;">​</a></h2><p>@gun-vue is a open collection of interconnected building blocks for making a whole range of decentralized apps for online and offline collaboration. It&#39;s a place where we can feel the nature of distributed networking and have fun together!</p><p><a href="https://gun.eco" target="_blank" rel="noreferrer">Gun</a> is a CRDT based distributed graph database, <a href="https://vuejs.org" target="_blank" rel="noreferrer">Vue</a> is a reactive JS UI framework. And SEA is web-browser cryptography adapter. Together they evolve into an ecosystem of multiple app levels.</p><p>The project is committed to give all the basic tools for everyone to participate in exploring this new graph universe. You can find your own way in it for yourself.</p><p>There code is organised into distinct layers in the <a href="https://www.npmjs.com/org/gun-vue" target="_blank" rel="noreferrer">@gun-vue npmjs.com organisation</a> for you to install and use in your P2P apps.</p><h2 id="gun-vue-app" tabindex="-1">@gun-vue/app <a class="header-anchor" href="#gun-vue-app" aria-label="Permalink to &quot;@gun-vue/app&quot;">​</a></h2><p>The main <a href="https://gun-vue.js.org" target="_blank" rel="noreferrer">gun-vue.js.org</a> web-site is a demo Gun-Vue Vite SPA. It&#39;s also automagically gets built into a set of desktop apps.</p><h3 id="web-app-hosted-at-github-pages-and-js-org-domain" tabindex="-1"><a href="https://gun-vue.js.org" target="_blank" rel="noreferrer">Web app</a> hosted at GitHub pages and JS.org domain <a class="header-anchor" href="#web-app-hosted-at-github-pages-and-js-org-domain" aria-label="Permalink to &quot;[Web app](https://gun-vue.js.org) hosted at GitHub pages and JS.org domain&quot;">​</a></h3><p>The app is reachable via the free <a href="https://js.org" target="_blank" rel="noreferrer">js.org</a> subdomain since <a href="https://github.com/js-org/js.org/commit/56a145bb39e53c6d63edf63b26d331cf30c35061" target="_blank" rel="noreferrer">Jan 2022</a>. Yet it&#39;s build with the relative base path and can be served from any domain and path.</p><h3 id="desktop-app-releases-via-github-actions-and-tauri" tabindex="-1"><a href="https://github.com/DeFUCC/gun-vue/releases" target="_blank" rel="noreferrer">Desktop app releases</a> via GitHub Actions and Tauri <a class="header-anchor" href="#desktop-app-releases-via-github-actions-and-tauri" aria-label="Permalink to &quot;[Desktop app releases](https://github.com/DeFUCC/gun-vue/releases) via GitHub Actions and Tauri&quot;">​</a></h3><p>Every time a new version of Gun-Vue is published, an automated action creates a new release draft with a full kit of lightweight native desktop apps for Windows, Mac OS and Linux with <a href="https://tauri.app" target="_blank" rel="noreferrer">Tauri</a> by a <a href="https://github.com/DeFUCC/gun-vue/actions/workflows/tauri.yml" target="_blank" rel="noreferrer">GitHub Action</a>. Mobile apps are coming.</p><h3 id="open-source-code-at-github-pnpm-monorepo" tabindex="-1"><a href="https://github.com/DeFUCC/gun-vue/tree/master/src" target="_blank" rel="noreferrer">Open source code</a> at GitHub <a href="https://pnpm.io" target="_blank" rel="noreferrer">pnpm</a> monorepo <a class="header-anchor" href="#open-source-code-at-github-pnpm-monorepo" aria-label="Permalink to &quot;[Open source code](https://github.com/DeFUCC/gun-vue/tree/master/src) at GitHub [pnpm](https://pnpm.io) monorepo&quot;">​</a></h3><p>The code is cut into vertical slices as small interconnectable apps in the common <a href="https://github.com/DeFUCC/gun-vue/tree/master/src" target="_blank" rel="noreferrer">source folder</a>.</p><p>This means that each folder in the <code>src</code> directory is a quite convenient section of the whole codebase. Each holds shared basic structure, but has distinct functionality.</p><p>All the code get build locally to the <code>_dist</code> folder and it&#39;s then deployed to the free <a href="https://github.com/DeFUCC/gun-vue/tree/gh-pages" target="_blank" rel="noreferrer">GitHub Pages</a> static site hosting.</p><hr><h2 id="gun-vue-components" tabindex="-1">@gun-vue/components <a class="header-anchor" href="#gun-vue-components" aria-label="Permalink to &quot;@gun-vue/components&quot;">​</a></h2><p>Ready to use Vue 3 components as building blocks to implement Gun powered interactivity in seconds.</p><p><a href="https://www.npmjs.com/package/@gun-vue/components" target="_blank"><img src="https://img.shields.io/npm/v/@gun-vue/components?color=E23C92&amp;logo=npm&amp;style=for-the-badge" alt="NPM version"></a></p><h3 id="playground-at-stackblitz-com" tabindex="-1"><a href="https://stackblitz.com/edit/gun-vue" target="_blank" rel="noreferrer">Playground</a> at Stackblitz.com <a class="header-anchor" href="#playground-at-stackblitz-com" aria-label="Permalink to &quot;[Playground](https://stackblitz.com/edit/gun-vue) at Stackblitz.com&quot;">​</a></h3><h3 id="learn-more" tabindex="-1"><a href="https://github.com/DeFUCC/gun-vue/tree/master/components" target="_blank" rel="noreferrer">Learn more</a> <a class="header-anchor" href="#learn-more" aria-label="Permalink to &quot;[Learn more](https://github.com/DeFUCC/gun-vue/tree/master/components)&quot;">​</a></h3><p>Native web-components may be implemented in future.</p><hr><h2 id="gun-vue-composables" tabindex="-1">@gun-vue/composables <a class="header-anchor" href="#gun-vue-composables" aria-label="Permalink to &quot;@gun-vue/composables&quot;">​</a></h2><p><a href="https://www.npmjs.com/package/@gun-vue/composables" target="_blank"><img src="https://img.shields.io/npm/v/@gun-vue/composables?color=E23C92&amp;logo=npm&amp;style=for-the-badge" alt="NPM version"></a></p><p>Composable functions for use with Vue 3 Composition API</p><h3 id="documentation-with-typedoc-and-vitepress" tabindex="-1"><a href="https://gun-vue.js.org/composables" target="_blank" rel="noreferrer">Documentation</a> with Typedoc and Vitepress <a class="header-anchor" href="#documentation-with-typedoc-and-vitepress" aria-label="Permalink to &quot;[Documentation](https://gun-vue.js.org/composables) with Typedoc and Vitepress&quot;">​</a></h3><h3 id="learn-more-1" tabindex="-1"><a href="https://github.com/DeFUCC/gun-vue/tree/master/composables" target="_blank" rel="noreferrer">Learn more</a> <a class="header-anchor" href="#learn-more-1" aria-label="Permalink to &quot;[Learn more](https://github.com/DeFUCC/gun-vue/tree/master/composables)&quot;">​</a></h3><hr><h2 id="gun-vue-relay" tabindex="-1"><a href="https://github.com/DeFUCC/gun-vue/tree/master/relay" target="_blank" rel="noreferrer">@gun-vue/relay</a> <a class="header-anchor" href="#gun-vue-relay" aria-label="Permalink to &quot;[@gun-vue/relay](https://github.com/DeFUCC/gun-vue/tree/master/relay)&quot;">​</a></h2><p>A simple no-store Gun server to throw at any free tier Node.js environment.</p><p><a href="https://www.npmjs.com/package/@gun-vue/relay" target="__blank"><img src="https://img.shields.io/npm/v/@gun-vue/relay?color=E23C92&amp;logo=npm&amp;style=for-the-badge" alt="NPM version"></a></p><h3 id="demo-relay-by-defucc" tabindex="-1"><a href="https://gun.defucc.me" target="_blank" rel="noreferrer">Demo relay</a> by DeFUCC <a class="header-anchor" href="#demo-relay-by-defucc" aria-label="Permalink to &quot;[Demo relay](https://gun.defucc.me) by DeFUCC&quot;">​</a></h3><hr><h2 id="development-video-blog-watch-at-defucc-youtube-channel" tabindex="-1">Development video blog. Watch at <a href="https://www.youtube.com/watch?v=gwZUQcCp01U&amp;list=PLncuCCb2zjt6wmlSNLiK1lZl150qX-rAw" target="_blank" rel="noreferrer">DeFUCC youtube channel</a> <a class="header-anchor" href="#development-video-blog-watch-at-defucc-youtube-channel" aria-label="Permalink to &quot;Development video blog. Watch at [DeFUCC youtube channel](https://www.youtube.com/watch?v=gwZUQcCp01U&amp;list=PLncuCCb2zjt6wmlSNLiK1lZl150qX-rAw)&quot;">​</a></h2><p>You can find shorter feature announcements there along with longer live coding sessions.</p><h2 id="how-to-build-the-workspace-repo-yourself" tabindex="-1">How to build the workspace repo yourself? <a class="header-anchor" href="#how-to-build-the-workspace-repo-yourself" aria-label="Permalink to &quot;How to build the workspace repo yourself?&quot;">​</a></h2><ol><li>Clone the repo</li><li>Use <a href="https://pnpm.io/" target="_blank" rel="noreferrer">pnpm</a> to install all the dependencies in the workspaces</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-G</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span></span></code></pre></div><ol><li>Use <code>dev</code> and <code>docs</code> scripts in the root <code>package.json</code> to run corresponding dev servers.</li><li>Use <code>npm run build</code> to build the whole project to the <code>_dist</code> folder.</li></ol>`,47),s=[n];function c(i,p,l,u,d,h){return t(),r("div",null,s)}const g=e(a,[["render",c]]);export{m as __pageData,g as default};
