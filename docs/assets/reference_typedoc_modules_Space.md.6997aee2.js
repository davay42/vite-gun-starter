import{_ as e,o as t,c as o,X as c}from"./chunks/framework.e76a7413.js";const m=JSON.parse('{"title":"Module: Space","description":"","frontmatter":{},"headers":[],"relativePath":"reference/typedoc/modules/Space.md","filePath":"reference/typedoc/modules/Space.md","pages":["CHANGELOG","basics/video","basics/video/2021/03-02","basics/video/2021/11-19","basics/video/2021/11-27","basics/video/2022/01-12","basics/video/2022/01-22","basics/video/2022/02-09","basics/video/2022/03-26","basics/video/2022/04-13","basics/video/2022/07-08","basics/video/2022/07-21","basics/video/2022/07-23","basics/video/2022/08-01","basics/video/2022/08-05","basics/video/2023/02-03","basics/video/2023/03-06","basics/video/2023/04-15","basics/video/2023/04-17","basics/video/2023/04-21","basics/video/2023/04-27","basics/video/2023/05-02","basics/what-is","explanations/crdt","explanations/qna","explanations/stack","how-to/use-components","index","reference/","reference/typedoc/README","reference/typedoc/interfaces/Account.Account","reference/typedoc/interfaces/Account.Profile","reference/typedoc/interfaces/Auth.Auth","reference/typedoc/interfaces/Auth.useAuth","reference/typedoc/interfaces/Certificates.CertOptions","reference/typedoc/interfaces/Certificates.Policy","reference/typedoc/interfaces/Chat.Message","reference/typedoc/interfaces/Crypto.Entity","reference/typedoc/interfaces/Dict.DictRecord","reference/typedoc/interfaces/File.PictureUploadData","reference/typedoc/interfaces/File.PictureUploadOptions","reference/typedoc/interfaces/File.UploadState","reference/typedoc/interfaces/Gift.Gift","reference/typedoc/interfaces/Gifts.GiftList","reference/typedoc/interfaces/Guests.Guest","reference/typedoc/interfaces/Mates.Mate","reference/typedoc/interfaces/Md.MdContent","reference/typedoc/interfaces/Mouse.Mouse","reference/typedoc/interfaces/Mouse.useMouse","reference/typedoc/interfaces/Post.Post","reference/typedoc/interfaces/Post.PostContent","reference/typedoc/interfaces/PrivateChat.Chat","reference/typedoc/interfaces/Project.ProjectItem","reference/typedoc/interfaces/Reaction.Reaction","reference/typedoc/interfaces/Reaction.ReactionVector","reference/typedoc/interfaces/Reactions.AuthorList","reference/typedoc/interfaces/Relay.Relay","reference/typedoc/interfaces/Space.Arrow","reference/typedoc/interfaces/Space.Pos","reference/typedoc/interfaces/Space.SpaceGuest","reference/typedoc/interfaces/User.User","reference/typedoc/interfaces/room_useRoom.CurrentRoom","reference/typedoc/modules","reference/typedoc/modules/Account","reference/typedoc/modules/Auth","reference/typedoc/modules/Background","reference/typedoc/modules/Cast","reference/typedoc/modules/Certificates","reference/typedoc/modules/Chat","reference/typedoc/modules/Color","reference/typedoc/modules/Crypto","reference/typedoc/modules/Dict","reference/typedoc/modules/Draw","reference/typedoc/modules/File","reference/typedoc/modules/Gift","reference/typedoc/modules/Gifts","reference/typedoc/modules/Guests","reference/typedoc/modules/Gun","reference/typedoc/modules/GunWorker","reference/typedoc/modules/Languages","reference/typedoc/modules/Mates","reference/typedoc/modules/Md","reference/typedoc/modules/Mouse","reference/typedoc/modules/Post","reference/typedoc/modules/Posts","reference/typedoc/modules/PrivateChat","reference/typedoc/modules/Project","reference/typedoc/modules/Projects","reference/typedoc/modules/QR","reference/typedoc/modules/Reaction","reference/typedoc/modules/Reactions","reference/typedoc/modules/Relay","reference/typedoc/modules/Relays","reference/typedoc/modules/Room","reference/typedoc/modules/Space","reference/typedoc/modules/Tags","reference/typedoc/modules/Theme","reference/typedoc/modules/Torrent","reference/typedoc/modules/User","reference/typedoc/modules/Zip","reference/typedoc/modules/room_useRoom","reference/typedoc/modules/useProject","tutorials/first-app","tutorials/getting-started","tutorials/vue-app"]}'),s={name:"reference/typedoc/modules/Space.md"},a=c(`<p><a href="./../README.html">Gun-Vue docs - v0.18.0</a> / <a href="./../modules.html">Exports</a> / Space</p><h1 id="module-space" tabindex="-1">Module: Space <a class="header-anchor" href="#module-space" aria-label="Permalink to &quot;Module: Space&quot;">​</a></h1><p>A 2D-space</p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h3><ul><li><a href="./../interfaces/Space.Arrow.html">Arrow</a></li><li><a href="./../interfaces/Space.Pos.html">Pos</a></li><li><a href="./../interfaces/Space.SpaceGuest.html">SpaceGuest</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h3><ul><li><a href="./Space.html#usespace">useSpace</a></li></ul><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="usespace" tabindex="-1">useSpace <a class="header-anchor" href="#usespace" aria-label="Permalink to &quot;useSpace&quot;">​</a></h3><p>▸ <strong>useSpace</strong>(<code>«destructured»?</code>): <code>Object</code></p><p>A space to navigate with mouse clicks</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> space</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> plane</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> links</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> width</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> height</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> guests</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> area</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> join </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useSpace</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">TIMEOUT</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>«destructured»</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;">› <code>TIMEOUT</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;">› <code>randomness</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>allGuests</code></td><td style="text-align:left;">{ <code>[key: string]</code>: <a href="./../interfaces/Space.SpaceGuest.html"><code>SpaceGuest</code></a>; }</td></tr><tr><td style="text-align:left;"><code>area</code></td><td style="text-align:left;"><code>Ref</code>&lt;<code>any</code>&gt;</td></tr><tr><td style="text-align:left;"><code>guestCount</code></td><td style="text-align:left;"><code>ComputedRef</code>&lt;<code>number</code>&gt;</td></tr><tr><td style="text-align:left;"><code>guests</code></td><td style="text-align:left;"><code>ComputedRef</code>&lt;<code>Record</code>&lt;<code>string</code>, <a href="./../interfaces/Space.SpaceGuest.html"><code>SpaceGuest</code></a>&gt;&gt;</td></tr><tr><td style="text-align:left;"><code>height</code></td><td style="text-align:left;"><code>Ref</code>&lt;<code>number</code>&gt;</td></tr><tr><td style="text-align:left;"><code>join</code></td><td style="text-align:left;">() =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</td></tr><tr><td style="text-align:left;"><code>links</code></td><td style="text-align:left;">{}</td></tr><tr><td style="text-align:left;"><code>place</code></td><td style="text-align:left;">(<code>__namedParameters</code>: { <code>x</code>: <code>number</code> ; <code>y</code>: <code>number</code> }) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>plane</code></td><td style="text-align:left;"><code>Ref</code>&lt;<code>any</code>&gt;</td></tr><tr><td style="text-align:left;"><code>pos</code></td><td style="text-align:left;"><code>number</code>[]</td></tr><tr><td style="text-align:left;"><code>setStatus</code></td><td style="text-align:left;">(<code>status</code>: <code>string</code>) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>space</code></td><td style="text-align:left;">{ <code>cert</code>: <code>string</code> ; <code>db</code>: <code>IGunChain</code>&lt;<code>any</code>, <code>any</code>, <code>any</code>, <code>&quot;space&quot;</code>&gt; ; <code>joined</code>: <code>boolean</code> = false; <code>my</code>: { mouse: { x: number; y: number; }; pos: any; } ; <code>title</code>: <code>string</code> = &quot;space&quot; }</td></tr><tr><td style="text-align:left;"><code>space.cert</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>space.db</code></td><td style="text-align:left;"><code>IGunChain</code>&lt;<code>any</code>, <code>any</code>, <code>any</code>, <code>&quot;space&quot;</code>&gt;</td></tr><tr><td style="text-align:left;"><code>space.joined</code></td><td style="text-align:left;"><code>boolean</code></td></tr><tr><td style="text-align:left;"><code>space.my</code></td><td style="text-align:left;">{ mouse: { x: number; y: number; }; pos: any; }</td></tr><tr><td style="text-align:left;"><code>space.title</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>width</code></td><td style="text-align:left;"><code>Ref</code>&lt;<code>number</code>&gt;</td></tr><tr><td style="text-align:left;"><code>zoom</code></td><td style="text-align:left;"><code>Ref</code>&lt;<code>number</code>&gt;</td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/cd8df69b/src/space/useSpace.ts#L44" target="_blank" rel="noreferrer">src/space/useSpace.ts:44</a></p>`,21),d=[a];function r(n,l,i,p,f,y){return t(),o("div",null,d)}const h=e(s,[["render",r]]);export{m as __pageData,h as default};
