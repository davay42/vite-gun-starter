import{_ as e,o as t,c as a,X as r}from"./chunks/framework.e76a7413.js";const p=JSON.parse('{"title":"Module: Dict","description":"","frontmatter":{},"headers":[],"relativePath":"reference/typedoc/modules/Dict.md","filePath":"reference/typedoc/modules/Dict.md","pages":["CHANGELOG","basics/video","basics/video/2021/03-02","basics/video/2021/11-19","basics/video/2021/11-27","basics/video/2022/01-12","basics/video/2022/01-22","basics/video/2022/02-09","basics/video/2022/03-26","basics/video/2022/04-13","basics/video/2022/07-08","basics/video/2022/07-21","basics/video/2022/07-23","basics/video/2022/08-01","basics/video/2022/08-05","basics/video/2023/02-03","basics/video/2023/03-06","basics/video/2023/04-15","basics/video/2023/04-17","basics/video/2023/04-21","basics/video/2023/04-27","basics/video/2023/05-02","basics/what-is","explanations/crdt","explanations/qna","explanations/stack","how-to/use-components","index","reference/","reference/typedoc/README","reference/typedoc/interfaces/Account.Account","reference/typedoc/interfaces/Account.Profile","reference/typedoc/interfaces/Auth.Auth","reference/typedoc/interfaces/Auth.useAuth","reference/typedoc/interfaces/Certificates.CertOptions","reference/typedoc/interfaces/Certificates.Policy","reference/typedoc/interfaces/Chat.Message","reference/typedoc/interfaces/Crypto.Entity","reference/typedoc/interfaces/Dict.DictRecord","reference/typedoc/interfaces/File.PictureUploadData","reference/typedoc/interfaces/File.PictureUploadOptions","reference/typedoc/interfaces/File.UploadState","reference/typedoc/interfaces/Gift.Gift","reference/typedoc/interfaces/Gifts.GiftList","reference/typedoc/interfaces/Guests.Guest","reference/typedoc/interfaces/Mates.Mate","reference/typedoc/interfaces/Md.MdContent","reference/typedoc/interfaces/Mouse.Mouse","reference/typedoc/interfaces/Mouse.useMouse","reference/typedoc/interfaces/Post.Post","reference/typedoc/interfaces/Post.PostContent","reference/typedoc/interfaces/PrivateChat.Chat","reference/typedoc/interfaces/Project.ProjectItem","reference/typedoc/interfaces/Reaction.Reaction","reference/typedoc/interfaces/Reaction.ReactionVector","reference/typedoc/interfaces/Reactions.AuthorList","reference/typedoc/interfaces/Relay.Relay","reference/typedoc/interfaces/Space.Arrow","reference/typedoc/interfaces/Space.Pos","reference/typedoc/interfaces/Space.SpaceGuest","reference/typedoc/interfaces/User.User","reference/typedoc/interfaces/room_useRoom.CurrentRoom","reference/typedoc/modules","reference/typedoc/modules/Account","reference/typedoc/modules/Auth","reference/typedoc/modules/Background","reference/typedoc/modules/Cast","reference/typedoc/modules/Certificates","reference/typedoc/modules/Chat","reference/typedoc/modules/Color","reference/typedoc/modules/Crypto","reference/typedoc/modules/Dict","reference/typedoc/modules/Draw","reference/typedoc/modules/File","reference/typedoc/modules/Gift","reference/typedoc/modules/Gifts","reference/typedoc/modules/Guests","reference/typedoc/modules/Gun","reference/typedoc/modules/GunWorker","reference/typedoc/modules/Languages","reference/typedoc/modules/Mates","reference/typedoc/modules/Md","reference/typedoc/modules/Mouse","reference/typedoc/modules/Post","reference/typedoc/modules/Posts","reference/typedoc/modules/PrivateChat","reference/typedoc/modules/Project","reference/typedoc/modules/Projects","reference/typedoc/modules/QR","reference/typedoc/modules/Reaction","reference/typedoc/modules/Reactions","reference/typedoc/modules/Relay","reference/typedoc/modules/Relays","reference/typedoc/modules/Room","reference/typedoc/modules/Space","reference/typedoc/modules/Tags","reference/typedoc/modules/Theme","reference/typedoc/modules/Torrent","reference/typedoc/modules/User","reference/typedoc/modules/Zip","reference/typedoc/modules/room_useRoom","reference/typedoc/modules/useProject","tutorials/first-app","tutorials/getting-started","tutorials/vue-app"]}'),d={name:"reference/typedoc/modules/Dict.md"},o=r('<p><a href="./../README.html">Gun-Vue docs - v0.18.0</a> / <a href="./../modules.html">Exports</a> / Dict</p><h1 id="module-dict" tabindex="-1">Module: Dict <a class="header-anchor" href="#module-dict" aria-label="Permalink to &quot;Module: Dict&quot;">​</a></h1><h2 id="dictionary-app" tabindex="-1">Dictionary app <a class="header-anchor" href="#dictionary-app" aria-label="Permalink to &quot;Dictionary app&quot;">​</a></h2><p>It&#39;s a collective hive mind evolving in words and their meanings that are proposed and valuated by the members of the community.</p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h3><ul><li><a href="./Dict.html#langparts">langParts</a></li><li><a href="./Dict.html#languages">languages</a></li></ul><h3 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h3><ul><li><a href="./../interfaces/Dict.DictRecord.html">DictRecord</a></li></ul><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h3><ul><li><a href="./Dict.html#dictlang">dictLang</a></li><li><a href="./Dict.html#dictrecord">dictRecord</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h3><ul><li><a href="./Dict.html#letterfilter">letterFilter</a></li><li><a href="./Dict.html#parsehashlink">parseHashLink</a></li><li><a href="./Dict.html#renderstress">renderStress</a></li><li><a href="./Dict.html#usedefs">useDefs</a></li><li><a href="./Dict.html#usedictauthors">useDictAuthors</a></li><li><a href="./Dict.html#usedictlangs">useDictLangs</a></li><li><a href="./Dict.html#usedictrecordsby">useDictRecordsBy</a></li><li><a href="./Dict.html#usedictrecordsfor">useDictRecordsFor</a></li><li><a href="./Dict.html#useword">useWord</a></li><li><a href="./Dict.html#usewords">useWords</a></li></ul><h2 id="references-1" tabindex="-1">References <a class="header-anchor" href="#references-1" aria-label="Permalink to &quot;References&quot;">​</a></h2><h3 id="langparts" tabindex="-1">langParts <a class="header-anchor" href="#langparts" aria-label="Permalink to &quot;langParts&quot;">​</a></h3><p>Re-exports <a href="./Languages.html#langparts">langParts</a></p><hr><h3 id="languages" tabindex="-1">languages <a class="header-anchor" href="#languages" aria-label="Permalink to &quot;languages&quot;">​</a></h3><p>Re-exports <a href="./Languages.html#languages">languages</a></p><h2 id="variables-1" tabindex="-1">Variables <a class="header-anchor" href="#variables-1" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="dictlang" tabindex="-1">dictLang <a class="header-anchor" href="#dictlang" aria-label="Permalink to &quot;dictLang&quot;">​</a></h3><p>• <code>Const</code> <strong>dictLang</strong>: <code>Ref</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/cd8df69b/src/dict/useDict.ts#L26" target="_blank" rel="noreferrer">src/dict/useDict.ts:26</a></p><hr><h3 id="dictrecord" tabindex="-1">dictRecord <a class="header-anchor" href="#dictrecord" aria-label="Permalink to &quot;dictRecord&quot;">​</a></h3><p>• <code>Const</code> <strong>dictRecord</strong>: <a href="./../interfaces/Dict.DictRecord.html"><code>DictRecord</code></a></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/cd8df69b/src/dict/useDict.ts#L21" target="_blank" rel="noreferrer">src/dict/useDict.ts:21</a></p><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="letterfilter" tabindex="-1">letterFilter <a class="header-anchor" href="#letterfilter" aria-label="Permalink to &quot;letterFilter&quot;">​</a></h3><p>▸ <strong>letterFilter</strong>(<code>str</code>): <code>string</code></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>str</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/cd8df69b/src/dict/useDict.ts#L301" target="_blank" rel="noreferrer">src/dict/useDict.ts:301</a></p><hr><h3 id="parsehashlink" tabindex="-1">parseHashLink <a class="header-anchor" href="#parsehashlink" aria-label="Permalink to &quot;parseHashLink&quot;">​</a></h3><p>▸ <strong>parseHashLink</strong>(<code>link</code>): <code>Object</code></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>link</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>author</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>from</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>to</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/cd8df69b/src/dict/useDict.ts#L285" target="_blank" rel="noreferrer">src/dict/useDict.ts:285</a></p><hr><h3 id="renderstress" tabindex="-1">renderStress <a class="header-anchor" href="#renderstress" aria-label="Permalink to &quot;renderStress&quot;">​</a></h3><p>▸ <strong>renderStress</strong>(<code>«destructured»</code>): <code>string</code></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>«destructured»</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;">› <code>stress</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;">› <code>text</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/cd8df69b/src/dict/useDict.ts#L294" target="_blank" rel="noreferrer">src/dict/useDict.ts:294</a></p><hr><h3 id="usedefs" tabindex="-1">useDefs <a class="header-anchor" href="#usedefs" aria-label="Permalink to &quot;useDefs&quot;">​</a></h3><p>▸ <strong>useDefs</strong>(): <code>Object</code></p><p>Dictionary definitions browser</p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>addDef</code></td><td style="text-align:left;">() =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</td></tr><tr><td style="text-align:left;"><code>def</code></td><td style="text-align:left;">{ <code>lang</code>: <code>any</code> = dictLang; <code>part</code>: <code>string</code> = &#39;noun&#39;; <code>text</code>: <code>string</code> = &#39;&#39; }</td></tr><tr><td style="text-align:left;"><code>def.lang</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>def.part</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>def.text</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>defs</code></td><td style="text-align:left;">{}</td></tr><tr><td style="text-align:left;"><code>found</code></td><td style="text-align:left;"><code>ComputedRef</code>&lt;<code>FuseResult</code>&lt;<code>any</code>&gt;[]&gt;</td></tr><tr><td style="text-align:left;"><code>linked</code></td><td style="text-align:left;">{}</td></tr></tbody></table><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/cd8df69b/src/dict/useDict.ts#L115" target="_blank" rel="noreferrer">src/dict/useDict.ts:115</a></p><hr><h3 id="usedictauthors" tabindex="-1">useDictAuthors <a class="header-anchor" href="#usedictauthors" aria-label="Permalink to &quot;useDictAuthors&quot;">​</a></h3><p>▸ <strong>useDictAuthors</strong>(): <code>Object</code></p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/cd8df69b/src/dict/useDict.ts#L243" target="_blank" rel="noreferrer">src/dict/useDict.ts:243</a></p><hr><h3 id="usedictlangs" tabindex="-1">useDictLangs <a class="header-anchor" href="#usedictlangs" aria-label="Permalink to &quot;useDictLangs&quot;">​</a></h3><p>▸ <strong>useDictLangs</strong>(): <code>Object</code></p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/cd8df69b/src/dict/useDict.ts#L259" target="_blank" rel="noreferrer">src/dict/useDict.ts:259</a></p><hr><h3 id="usedictrecordsby" tabindex="-1">useDictRecordsBy <a class="header-anchor" href="#usedictrecordsby" aria-label="Permalink to &quot;useDictRecordsBy&quot;">​</a></h3><p>▸ <strong>useDictRecordsBy</strong>(<code>pub</code>): <code>Object</code></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pub</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/cd8df69b/src/dict/useDict.ts#L219" target="_blank" rel="noreferrer">src/dict/useDict.ts:219</a></p><hr><h3 id="usedictrecordsfor" tabindex="-1">useDictRecordsFor <a class="header-anchor" href="#usedictrecordsfor" aria-label="Permalink to &quot;useDictRecordsFor&quot;">​</a></h3><p>▸ <strong>useDictRecordsFor</strong>(<code>hash</code>): <code>Object</code></p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>hash</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/cd8df69b/src/dict/useDict.ts#L193" target="_blank" rel="noreferrer">src/dict/useDict.ts:193</a></p><hr><h3 id="useword" tabindex="-1">useWord <a class="header-anchor" href="#useword" aria-label="Permalink to &quot;useWord&quot;">​</a></h3><p>▸ <strong>useWord</strong>(<code>hash</code>): <code>Object</code></p><p>Get a word by it&#39;s hash</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>hash</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>word</code></td><td style="text-align:left;"><code>Ref</code>&lt;<code>string</code>&gt;</td></tr></tbody></table><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/cd8df69b/src/dict/useDict.ts#L99" target="_blank" rel="noreferrer">src/dict/useDict.ts:99</a></p><hr><h3 id="usewords" tabindex="-1">useWords <a class="header-anchor" href="#usewords" aria-label="Permalink to &quot;useWords&quot;">​</a></h3><p>▸ <strong>useWords</strong>(): <code>Object</code></p><p>Use filtrable words list</p><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>addWord</code></td><td style="text-align:left;">() =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</td></tr><tr><td style="text-align:left;"><code>found</code></td><td style="text-align:left;"><code>ComputedRef</code>&lt;<code>FuseResult</code>&lt;{ <code>hash</code>: <code>string</code> ; <code>text</code>: <code>string</code> }&gt;[]&gt;</td></tr><tr><td style="text-align:left;"><code>input</code></td><td style="text-align:left;"><code>Ref</code>&lt;<code>string</code>&gt;</td></tr><tr><td style="text-align:left;"><code>linked</code></td><td style="text-align:left;">{}</td></tr><tr><td style="text-align:left;"><code>word</code></td><td style="text-align:left;"><code>ComputedRef</code>&lt;<code>string</code>&gt;</td></tr><tr><td style="text-align:left;"><code>words</code></td><td style="text-align:left;">{ <code>[key: string]</code>: <code>string</code>; }</td></tr></tbody></table><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/cd8df69b/src/dict/useDict.ts#L38" target="_blank" rel="noreferrer">src/dict/useDict.ts:38</a></p>',118),c=[o];function s(i,n,l,h,f,u){return t(),a("div",null,c)}const g=e(d,[["render",s]]);export{p as __pageData,g as default};
