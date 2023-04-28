import{_ as e,o as t,c as r,X as o}from"./chunks/framework.29bd70f6.js";const h=JSON.parse('{"title":"Module: Tags","description":"","frontmatter":{},"headers":[],"relativePath":"reference/typedoc/modules/Tags.md","pages":["CHANGELOG","basics/video","basics/video/2021/03-02","basics/video/2021/11-19","basics/video/2021/11-27","basics/video/2022/01-12","basics/video/2022/01-22","basics/video/2022/02-09","basics/video/2022/03-26","basics/video/2022/04-13","basics/video/2022/07-08","basics/video/2022/07-21","basics/video/2022/07-23","basics/video/2022/08-01","basics/video/2022/08-05","basics/video/2023/02-03","basics/video/2023/03-06","basics/video/2023/04-15","basics/video/2023/04-17","basics/video/2023/04-21","basics/video/2023/04-27","basics/what-is","explanations/crdt","explanations/qna","explanations/stack","how-to/use-components","index","reference/","reference/typedoc/README","reference/typedoc/interfaces/Account.Account","reference/typedoc/interfaces/Account.Profile","reference/typedoc/interfaces/Auth.Pass","reference/typedoc/interfaces/Auth.UsePass","reference/typedoc/interfaces/Certificates.CertOptions","reference/typedoc/interfaces/Certificates.Policy","reference/typedoc/interfaces/Chat.Message","reference/typedoc/interfaces/Crypto.Entity","reference/typedoc/interfaces/Dict.DictRecord","reference/typedoc/interfaces/Discourse.Item","reference/typedoc/interfaces/Discourse.ItemType","reference/typedoc/interfaces/File.PictureUploadData","reference/typedoc/interfaces/File.PictureUploadOptions","reference/typedoc/interfaces/File.UploadState","reference/typedoc/interfaces/Gift.Gift","reference/typedoc/interfaces/Gifts.GiftList","reference/typedoc/interfaces/Guests.Guest","reference/typedoc/interfaces/Mates.Mate","reference/typedoc/interfaces/Md.MdContent","reference/typedoc/interfaces/Mouse.Mouse","reference/typedoc/interfaces/Mouse.useMouse","reference/typedoc/interfaces/Post.Post","reference/typedoc/interfaces/Post.PostContent","reference/typedoc/interfaces/PrivateChat.Chat","reference/typedoc/interfaces/Project.Project","reference/typedoc/interfaces/Project.ProjectItem","reference/typedoc/interfaces/Reaction.Reaction","reference/typedoc/interfaces/Reaction.ReactionVector","reference/typedoc/interfaces/Reactions.AuthorList","reference/typedoc/interfaces/Relay.Relay","reference/typedoc/interfaces/Room.CurrentRoom","reference/typedoc/interfaces/Space.Arrow","reference/typedoc/interfaces/Space.Pos","reference/typedoc/interfaces/Space.SpaceGuest","reference/typedoc/interfaces/User.User","reference/typedoc/modules","reference/typedoc/modules/Account","reference/typedoc/modules/Auth","reference/typedoc/modules/Background","reference/typedoc/modules/Cast","reference/typedoc/modules/Certificates","reference/typedoc/modules/Chat","reference/typedoc/modules/Color","reference/typedoc/modules/Crypto","reference/typedoc/modules/Dict","reference/typedoc/modules/Discourse","reference/typedoc/modules/Draw","reference/typedoc/modules/File","reference/typedoc/modules/Gift","reference/typedoc/modules/Gifts","reference/typedoc/modules/Guests","reference/typedoc/modules/Gun","reference/typedoc/modules/GunWorker","reference/typedoc/modules/Languages","reference/typedoc/modules/Mates","reference/typedoc/modules/Md","reference/typedoc/modules/Mouse","reference/typedoc/modules/Post","reference/typedoc/modules/Posts","reference/typedoc/modules/PrivateChat","reference/typedoc/modules/Project","reference/typedoc/modules/Projects","reference/typedoc/modules/QR","reference/typedoc/modules/Reaction","reference/typedoc/modules/Reactions","reference/typedoc/modules/Relay","reference/typedoc/modules/Relays","reference/typedoc/modules/Room","reference/typedoc/modules/Space","reference/typedoc/modules/Tags","reference/typedoc/modules/Theme","reference/typedoc/modules/Torrent","reference/typedoc/modules/User","reference/typedoc/modules/Zip","tutorials/first-app","tutorials/getting-started"]}'),c={name:"reference/typedoc/modules/Tags.md"},a=o('<p><a href="./../README.html">Gun-Vue docs - v0.16.9</a> / <a href="./../modules.html">Exports</a> / Tags</p><h1 id="module-tags" tabindex="-1">Module: Tags <a class="header-anchor" href="#module-tags" aria-label="Permalink to &quot;Module: Tags&quot;">​</a></h1><p>Get and handle a particular post by it&#39;s tag and hash</p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h3><ul><li><a href="./Tags.html#listpersonaltag">listPersonalTag</a></li><li><a href="./Tags.html#usetaglist">useTagList</a></li></ul><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="listpersonaltag" tabindex="-1">listPersonalTag <a class="header-anchor" href="#listpersonaltag" aria-label="Permalink to &quot;listPersonalTag&quot;">​</a></h3><p>▸ <strong>listPersonalTag</strong>(<code>tag</code>, <code>pub?</code>): <a href="./Posts.html#postlist"><code>PostList</code></a></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>tag</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>pub</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>currentRoom.pub</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./Posts.html#postlist"><code>PostList</code></a></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/5f05c0ee/src/post/useTags.ts#L86" target="_blank" rel="noreferrer">src/post/useTags.ts:86</a></p><hr><h3 id="usetaglist" tabindex="-1">useTagList <a class="header-anchor" href="#usetaglist" aria-label="Permalink to &quot;useTagList&quot;">​</a></h3><p>▸ <strong>useTagList</strong>(): <code>Object</code></p><p>Toolkit to deal with the available tags</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>addTag</code></td><td style="text-align:left;">(<code>tag</code>: <code>string</code>) =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</td></tr><tr><td style="text-align:left;"><code>search</code></td><td style="text-align:left;"><code>Ref</code>&lt;<code>any</code>&gt;</td></tr><tr><td style="text-align:left;"><code>slug</code></td><td style="text-align:left;"><code>ComputedRef</code>&lt;<code>string</code>&gt;</td></tr><tr><td style="text-align:left;"><code>tags</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/5f05c0ee/src/post/useTags.ts#L19" target="_blank" rel="noreferrer">src/post/useTags.ts:19</a></p>',24),s=[a];function d(n,i,l,f,u,p){return t(),r("div",null,s)}const m=e(c,[["render",d]]);export{h as __pageData,m as default};
