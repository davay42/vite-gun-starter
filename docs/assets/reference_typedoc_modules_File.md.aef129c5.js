import{_ as e,o as t,c as a,X as r}from"./chunks/framework.e76a7413.js";const y=JSON.parse('{"title":"Module: File","description":"","frontmatter":{},"headers":[],"relativePath":"reference/typedoc/modules/File.md","filePath":"reference/typedoc/modules/File.md","pages":["CHANGELOG","basics/video","basics/video/2021/03-02","basics/video/2021/11-19","basics/video/2021/11-27","basics/video/2022/01-12","basics/video/2022/01-22","basics/video/2022/02-09","basics/video/2022/03-26","basics/video/2022/04-13","basics/video/2022/07-08","basics/video/2022/07-21","basics/video/2022/07-23","basics/video/2022/08-01","basics/video/2022/08-05","basics/video/2023/02-03","basics/video/2023/03-06","basics/video/2023/04-15","basics/video/2023/04-17","basics/video/2023/04-21","basics/video/2023/04-27","basics/video/2023/05-02","basics/what-is","explanations/crdt","explanations/qna","explanations/stack","how-to/use-components","index","packages/components","packages/composables","packages/","reference/components","reference/","reference/typedoc/README","reference/typedoc/interfaces/Account.Account","reference/typedoc/interfaces/Account.Profile","reference/typedoc/interfaces/Auth.Auth","reference/typedoc/interfaces/Auth.useAuth","reference/typedoc/interfaces/Certificates.CertOptions","reference/typedoc/interfaces/Certificates.Policy","reference/typedoc/interfaces/Chat.Message","reference/typedoc/interfaces/Crypto.Entity","reference/typedoc/interfaces/Dict.DictRecord","reference/typedoc/interfaces/File.PictureUploadData","reference/typedoc/interfaces/File.PictureUploadOptions","reference/typedoc/interfaces/File.UploadState","reference/typedoc/interfaces/Gift.Gift","reference/typedoc/interfaces/Gifts.GiftList","reference/typedoc/interfaces/Guests.Guest","reference/typedoc/interfaces/Mates.Mate","reference/typedoc/interfaces/Md.MdContent","reference/typedoc/interfaces/Mouse.Mouse","reference/typedoc/interfaces/Mouse.useMouse","reference/typedoc/interfaces/Post.Post","reference/typedoc/interfaces/Post.PostContent","reference/typedoc/interfaces/PrivateChat.Chat","reference/typedoc/interfaces/Project.ProjectItem","reference/typedoc/interfaces/Reaction.Reaction","reference/typedoc/interfaces/Reaction.ReactionVector","reference/typedoc/interfaces/Reactions.AuthorList","reference/typedoc/interfaces/Relay.Relay","reference/typedoc/interfaces/Space.Arrow","reference/typedoc/interfaces/Space.Pos","reference/typedoc/interfaces/Space.SpaceGuest","reference/typedoc/interfaces/User.User","reference/typedoc/interfaces/room_useRoom.CurrentRoom","reference/typedoc/modules","reference/typedoc/modules/Account","reference/typedoc/modules/Auth","reference/typedoc/modules/Background","reference/typedoc/modules/Cast","reference/typedoc/modules/Certificates","reference/typedoc/modules/Chat","reference/typedoc/modules/Color","reference/typedoc/modules/Crypto","reference/typedoc/modules/Dict","reference/typedoc/modules/Draw","reference/typedoc/modules/File","reference/typedoc/modules/Gift","reference/typedoc/modules/Gifts","reference/typedoc/modules/Guests","reference/typedoc/modules/Gun","reference/typedoc/modules/GunWorker","reference/typedoc/modules/Languages","reference/typedoc/modules/Mates","reference/typedoc/modules/Md","reference/typedoc/modules/Mouse","reference/typedoc/modules/Post","reference/typedoc/modules/Posts","reference/typedoc/modules/PrivateChat","reference/typedoc/modules/Project","reference/typedoc/modules/Projects","reference/typedoc/modules/QR","reference/typedoc/modules/Reaction","reference/typedoc/modules/Reactions","reference/typedoc/modules/Relay","reference/typedoc/modules/Relays","reference/typedoc/modules/Room","reference/typedoc/modules/Space","reference/typedoc/modules/Tags","reference/typedoc/modules/Theme","reference/typedoc/modules/Torrent","reference/typedoc/modules/User","reference/typedoc/modules/Zip","reference/typedoc/modules/room_useRoom","reference/typedoc/modules/useProject","reference/typedoc/modules/user_useAvatar","tutorials/first-app","tutorials/getting-started","tutorials/vue-app"]}'),o={name:"reference/typedoc/modules/File.md"},s=r(`<p><a href="./../README.html">Gun-Vue docs - v0.18.1</a> / <a href="./../modules.html">Exports</a> / File</p><h1 id="module-file" tabindex="-1">Module: File <a class="header-anchor" href="#module-file" aria-label="Permalink to &quot;Module: File&quot;">​</a></h1><p>File handling functions</p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h3><ul><li><a href="./../interfaces/File.PictureUploadData.html">PictureUploadData</a></li><li><a href="./../interfaces/File.PictureUploadOptions.html">PictureUploadOptions</a></li><li><a href="./../interfaces/File.UploadState.html">UploadState</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h3><ul><li><a href="./File.html#base64extension">base64Extension</a></li><li><a href="./File.html#base64filetype">base64FileType</a></li><li><a href="./File.html#base64mimetype">base64MimeType</a></li><li><a href="./File.html#detectmimetype">detectMimeType</a></li><li><a href="./File.html#downloadfile">downloadFile</a></li><li><a href="./File.html#uploadtext">uploadText</a></li><li><a href="./File.html#usepictureupload">usePictureUpload</a></li></ul><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="base64extension" tabindex="-1">base64Extension <a class="header-anchor" href="#base64extension" aria-label="Permalink to &quot;base64Extension&quot;">​</a></h3><p>▸ <strong>base64Extension</strong>(<code>encoded</code>): <code>string</code></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>encoded</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ed30c0ae/src/files/useFile.ts#L291" target="_blank" rel="noreferrer">src/files/useFile.ts:291</a></p><hr><h3 id="base64filetype" tabindex="-1">base64FileType <a class="header-anchor" href="#base64filetype" aria-label="Permalink to &quot;base64FileType&quot;">​</a></h3><p>▸ <strong>base64FileType</strong>(<code>encoded</code>): <code>string</code></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>encoded</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ed30c0ae/src/files/useFile.ts#L287" target="_blank" rel="noreferrer">src/files/useFile.ts:287</a></p><hr><h3 id="base64mimetype" tabindex="-1">base64MimeType <a class="header-anchor" href="#base64mimetype" aria-label="Permalink to &quot;base64MimeType&quot;">​</a></h3><p>▸ <strong>base64MimeType</strong>(<code>encoded</code>): <code>string</code></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>encoded</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ed30c0ae/src/files/useFile.ts#L275" target="_blank" rel="noreferrer">src/files/useFile.ts:275</a></p><hr><h3 id="detectmimetype" tabindex="-1">detectMimeType <a class="header-anchor" href="#detectmimetype" aria-label="Permalink to &quot;detectMimeType&quot;">​</a></h3><p>▸ <strong>detectMimeType</strong>(<code>b64</code>): <code>any</code></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>b64</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ed30c0ae/src/files/useFile.ts#L306" target="_blank" rel="noreferrer">src/files/useFile.ts:306</a></p><hr><h3 id="downloadfile" tabindex="-1">downloadFile <a class="header-anchor" href="#downloadfile" aria-label="Permalink to &quot;downloadFile&quot;">​</a></h3><p>▸ <strong>downloadFile</strong>(<code>text</code>, <code>fileType</code>, <code>fileName</code>, <code>isBlob?</code>): <code>void</code></p><p>A method to download any text as a file</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code> | <code>Blob</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">the text to download</td></tr><tr><td style="text-align:left;"><code>fileType</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">the file type like &quot;application/json&quot;</td></tr><tr><td style="text-align:left;"><code>fileName</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">the full file name like &quot;myKey.json&quot;</td></tr><tr><td style="text-align:left;"><code>isBlob</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>true</code></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ed30c0ae/src/files/useFile.ts#L17" target="_blank" rel="noreferrer">src/files/useFile.ts:17</a></p><hr><h3 id="uploadtext" tabindex="-1">uploadText <a class="header-anchor" href="#uploadtext" aria-label="Permalink to &quot;uploadText&quot;">​</a></h3><p>▸ <strong>uploadText</strong>(<code>files</code>, <code>callback?</code>): <code>void</code></p><p>Upload and parse JSON keypair</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>files</code></td><td style="text-align:left;"><code>FileList</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><code>Function</code></td><td style="text-align:left;">a function to handle the loaded file from the reader</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ed30c0ae/src/files/useFile.ts#L46" target="_blank" rel="noreferrer">src/files/useFile.ts:46</a></p><hr><h3 id="usepictureupload" tabindex="-1">usePictureUpload <a class="header-anchor" href="#usepictureupload" aria-label="Permalink to &quot;usePictureUpload&quot;">​</a></h3><p>▸ <strong>usePictureUpload</strong>(<code>«destructured»</code>): <a href="./../interfaces/File.PictureUploadData.html"><code>PictureUploadData</code></a></p><p>Process an uploaded picture by rendering in into a canvas with given size. Returns a base64 encoded image to be stored and displayed as <code>img.src</code></p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> src </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> handleUpload</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">usePictureUpload</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">preserveRatio</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">watch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">output</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">file</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> src</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> file</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">content)</span></span></code></pre></div><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>«destructured»</code></td><td style="text-align:left;"><a href="./../interfaces/File.PictureUploadOptions.html"><code>PictureUploadOptions</code></a></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../interfaces/File.PictureUploadData.html"><code>PictureUploadData</code></a></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ed30c0ae/src/files/useFile.ts#L108" target="_blank" rel="noreferrer">src/files/useFile.ts:108</a></p>`,76),l=[s];function n(d,c,i,p,f,h){return t(),a("div",null,l)}const m=e(o,[["render",n]]);export{y as __pageData,m as default};
