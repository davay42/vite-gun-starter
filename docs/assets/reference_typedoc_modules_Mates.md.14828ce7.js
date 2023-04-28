import{_ as e,o as t,c as a,X as r}from"./chunks/framework.29bd70f6.js";const m=JSON.parse('{"title":"Module: Mates","description":"","frontmatter":{},"headers":[],"relativePath":"reference/typedoc/modules/Mates.md","pages":["CHANGELOG","basics/video","basics/video/2021/03-02","basics/video/2021/11-19","basics/video/2021/11-27","basics/video/2022/01-12","basics/video/2022/01-22","basics/video/2022/02-09","basics/video/2022/03-26","basics/video/2022/04-13","basics/video/2022/07-08","basics/video/2022/07-21","basics/video/2022/07-23","basics/video/2022/08-01","basics/video/2022/08-05","basics/video/2023/02-03","basics/video/2023/03-06","basics/video/2023/04-15","basics/video/2023/04-17","basics/video/2023/04-21","basics/video/2023/04-27","basics/what-is","explanations/crdt","explanations/qna","explanations/stack","how-to/use-components","index","reference/","reference/typedoc/README","reference/typedoc/interfaces/Account.Account","reference/typedoc/interfaces/Account.Profile","reference/typedoc/interfaces/Auth.Pass","reference/typedoc/interfaces/Auth.UsePass","reference/typedoc/interfaces/Certificates.CertOptions","reference/typedoc/interfaces/Certificates.Policy","reference/typedoc/interfaces/Chat.Message","reference/typedoc/interfaces/Crypto.Entity","reference/typedoc/interfaces/Dict.DictRecord","reference/typedoc/interfaces/Discourse.Item","reference/typedoc/interfaces/Discourse.ItemType","reference/typedoc/interfaces/File.PictureUploadData","reference/typedoc/interfaces/File.PictureUploadOptions","reference/typedoc/interfaces/File.UploadState","reference/typedoc/interfaces/Gift.Gift","reference/typedoc/interfaces/Gifts.GiftList","reference/typedoc/interfaces/Guests.Guest","reference/typedoc/interfaces/Mates.Mate","reference/typedoc/interfaces/Md.MdContent","reference/typedoc/interfaces/Mouse.Mouse","reference/typedoc/interfaces/Mouse.useMouse","reference/typedoc/interfaces/Post.Post","reference/typedoc/interfaces/Post.PostContent","reference/typedoc/interfaces/PrivateChat.Chat","reference/typedoc/interfaces/Reaction.Reaction","reference/typedoc/interfaces/Reaction.ReactionVector","reference/typedoc/interfaces/Reactions.AuthorList","reference/typedoc/interfaces/Relay.Relay","reference/typedoc/interfaces/Room.CurrentRoom","reference/typedoc/interfaces/Space.Arrow","reference/typedoc/interfaces/Space.Pos","reference/typedoc/interfaces/Space.SpaceGuest","reference/typedoc/interfaces/User.User","reference/typedoc/interfaces/project_useProject.ProjectItem","reference/typedoc/modules","reference/typedoc/modules/Account","reference/typedoc/modules/Auth","reference/typedoc/modules/Background","reference/typedoc/modules/Cast","reference/typedoc/modules/Certificates","reference/typedoc/modules/Chat","reference/typedoc/modules/Color","reference/typedoc/modules/Crypto","reference/typedoc/modules/Dict","reference/typedoc/modules/Discourse","reference/typedoc/modules/Draw","reference/typedoc/modules/File","reference/typedoc/modules/Gift","reference/typedoc/modules/Gifts","reference/typedoc/modules/Guests","reference/typedoc/modules/Gun","reference/typedoc/modules/GunWorker","reference/typedoc/modules/Languages","reference/typedoc/modules/Mates","reference/typedoc/modules/Md","reference/typedoc/modules/Mouse","reference/typedoc/modules/Post","reference/typedoc/modules/Posts","reference/typedoc/modules/PrivateChat","reference/typedoc/modules/Project","reference/typedoc/modules/Projects","reference/typedoc/modules/QR","reference/typedoc/modules/Reaction","reference/typedoc/modules/Reactions","reference/typedoc/modules/Relay","reference/typedoc/modules/Relays","reference/typedoc/modules/Room","reference/typedoc/modules/Space","reference/typedoc/modules/Tags","reference/typedoc/modules/Theme","reference/typedoc/modules/Torrent","reference/typedoc/modules/User","reference/typedoc/modules/Zip","reference/typedoc/modules/project_useProject","tutorials/first-app","tutorials/getting-started"]}'),o={name:"reference/typedoc/modules/Mates.md"},s=r('<p><a href="./../README.html">Gun-Vue docs - v0.16.9</a> / <a href="./../modules.html">Exports</a> / Mates</p><h1 id="module-mates" tabindex="-1">Module: Mates <a class="header-anchor" href="#module-mates" aria-label="Permalink to &quot;Module: Mates&quot;">​</a></h1><p>Connections between accounts!</p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h3><ul><li><a href="./../interfaces/Mates.Mate.html">Mate</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h3><ul><li><a href="./Mates.html#getfirstemoji">getFirstEmoji</a></li><li><a href="./Mates.html#isemoji">isEmoji</a></li><li><a href="./Mates.html#usemate">useMate</a></li><li><a href="./Mates.html#usemates">useMates</a></li></ul><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="getfirstemoji" tabindex="-1">getFirstEmoji <a class="header-anchor" href="#getfirstemoji" aria-label="Permalink to &quot;getFirstEmoji&quot;">​</a></h3><p>▸ <strong>getFirstEmoji</strong>(<code>text</code>, <code>def?</code>): <code>string</code></p><p>Break the string into graphemes and return the first one if it&#39;s an emoji</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>def</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&quot;👋&quot;</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ae5fd861/src/mate/useMates.ts#L61" target="_blank" rel="noreferrer">src/mate/useMates.ts:61</a></p><hr><h3 id="isemoji" tabindex="-1">isEmoji <a class="header-anchor" href="#isemoji" aria-label="Permalink to &quot;isEmoji&quot;">​</a></h3><p>▸ <strong>isEmoji</strong>(<code>text</code>): <code>boolean</code></p><p>Check if the text has emojis</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ae5fd861/src/mate/useMates.ts#L75" target="_blank" rel="noreferrer">src/mate/useMates.ts:75</a></p><hr><h3 id="usemate" tabindex="-1">useMate <a class="header-anchor" href="#usemate" aria-label="Permalink to &quot;useMate&quot;">​</a></h3><p>▸ <strong>useMate</strong>(<code>pub</code>): <code>Object</code></p><p>Make mates with some account by current user</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pub</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>emoji</code></td><td style="text-align:left;"><code>Ref</code>&lt;<code>string</code>&gt;</td></tr><tr><td style="text-align:left;"><code>isMate</code></td><td style="text-align:left;"><code>Ref</code>&lt;<code>string</code> | <code>boolean</code>&gt;</td></tr><tr><td style="text-align:left;"><code>toggleMate</code></td><td style="text-align:left;">() =&gt; <code>void</code></td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ae5fd861/src/mate/useMates.ts#L90" target="_blank" rel="noreferrer">src/mate/useMates.ts:90</a></p><hr><h3 id="usemates" tabindex="-1">useMates <a class="header-anchor" href="#usemates" aria-label="Permalink to &quot;useMates&quot;">​</a></h3><p>▸ <strong>useMates</strong>(<code>pub</code>): <code>Record</code>&lt;<code>string</code>, <a href="./../interfaces/Mates.Mate.html"><code>Mate</code></a>&gt;</p><p>Get a reactive list of the user&#39;s mates</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pub</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Record</code>&lt;<code>string</code>, <a href="./../interfaces/Mates.Mate.html"><code>Mate</code></a>&gt;</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ae5fd861/src/mate/useMates.ts#L22" target="_blank" rel="noreferrer">src/mate/useMates.ts:22</a></p>',49),c=[s];function d(n,i,l,f,u,h){return t(),a("div",null,c)}const y=e(o,[["render",d]]);export{m as __pageData,y as default};
