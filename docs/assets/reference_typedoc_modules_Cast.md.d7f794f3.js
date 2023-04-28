import{_ as e,o as t,c as a,X as r}from"./chunks/framework.29bd70f6.js";const p=JSON.parse('{"title":"Module: Cast","description":"","frontmatter":{},"headers":[],"relativePath":"reference/typedoc/modules/Cast.md","pages":["CHANGELOG","basics/video","basics/video/2021/03-02","basics/video/2021/11-19","basics/video/2021/11-27","basics/video/2022/01-12","basics/video/2022/01-22","basics/video/2022/02-09","basics/video/2022/03-26","basics/video/2022/04-13","basics/video/2022/07-08","basics/video/2022/07-21","basics/video/2022/07-23","basics/video/2022/08-01","basics/video/2022/08-05","basics/video/2023/02-03","basics/video/2023/03-06","basics/video/2023/04-15","basics/video/2023/04-17","basics/video/2023/04-21","basics/video/2023/04-27","basics/what-is","explanations/crdt","explanations/qna","explanations/stack","how-to/use-components","index","reference/","reference/typedoc/README","reference/typedoc/interfaces/Account.Account","reference/typedoc/interfaces/Account.Profile","reference/typedoc/interfaces/Auth.Pass","reference/typedoc/interfaces/Auth.UsePass","reference/typedoc/interfaces/Certificates.CertOptions","reference/typedoc/interfaces/Certificates.Policy","reference/typedoc/interfaces/Chat.Message","reference/typedoc/interfaces/Crypto.Entity","reference/typedoc/interfaces/Dict.DictRecord","reference/typedoc/interfaces/Discourse.Item","reference/typedoc/interfaces/Discourse.ItemType","reference/typedoc/interfaces/File.PictureUploadData","reference/typedoc/interfaces/File.PictureUploadOptions","reference/typedoc/interfaces/File.UploadState","reference/typedoc/interfaces/Gift.Gift","reference/typedoc/interfaces/Gifts.GiftList","reference/typedoc/interfaces/Guests.Guest","reference/typedoc/interfaces/Mates.Mate","reference/typedoc/interfaces/Md.MdContent","reference/typedoc/interfaces/Mouse.Mouse","reference/typedoc/interfaces/Mouse.useMouse","reference/typedoc/interfaces/Post.Post","reference/typedoc/interfaces/Post.PostContent","reference/typedoc/interfaces/PrivateChat.Chat","reference/typedoc/interfaces/Reaction.Reaction","reference/typedoc/interfaces/Reaction.ReactionVector","reference/typedoc/interfaces/Reactions.AuthorList","reference/typedoc/interfaces/Relay.Relay","reference/typedoc/interfaces/Room.CurrentRoom","reference/typedoc/interfaces/Space.Arrow","reference/typedoc/interfaces/Space.Pos","reference/typedoc/interfaces/Space.SpaceGuest","reference/typedoc/interfaces/User.User","reference/typedoc/interfaces/project_useProject.ProjectItem","reference/typedoc/modules","reference/typedoc/modules/Account","reference/typedoc/modules/Auth","reference/typedoc/modules/Background","reference/typedoc/modules/Cast","reference/typedoc/modules/Certificates","reference/typedoc/modules/Chat","reference/typedoc/modules/Color","reference/typedoc/modules/Crypto","reference/typedoc/modules/Dict","reference/typedoc/modules/Discourse","reference/typedoc/modules/Draw","reference/typedoc/modules/File","reference/typedoc/modules/Gift","reference/typedoc/modules/Gifts","reference/typedoc/modules/Guests","reference/typedoc/modules/Gun","reference/typedoc/modules/GunWorker","reference/typedoc/modules/Languages","reference/typedoc/modules/Mates","reference/typedoc/modules/Md","reference/typedoc/modules/Mouse","reference/typedoc/modules/Post","reference/typedoc/modules/Posts","reference/typedoc/modules/PrivateChat","reference/typedoc/modules/Project","reference/typedoc/modules/Projects","reference/typedoc/modules/QR","reference/typedoc/modules/Reaction","reference/typedoc/modules/Reactions","reference/typedoc/modules/Relay","reference/typedoc/modules/Relays","reference/typedoc/modules/Room","reference/typedoc/modules/Space","reference/typedoc/modules/Tags","reference/typedoc/modules/Theme","reference/typedoc/modules/Torrent","reference/typedoc/modules/User","reference/typedoc/modules/Zip","reference/typedoc/modules/project_useProject","tutorials/first-app","tutorials/getting-started"]}'),o={name:"reference/typedoc/modules/Cast.md"},d=r('<p><a href="./../README.html">Gun-Vue docs - v0.16.9</a> / <a href="./../modules.html">Exports</a> / Cast</p><h1 id="module-cast" tabindex="-1">Module: Cast <a class="header-anchor" href="#module-cast" aria-label="Permalink to &quot;Module: Cast&quot;">​</a></h1><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h3><ul><li><a href="./Cast.html#mimetypes">MimeTypes</a></li></ul><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h3><ul><li><a href="./Cast.html#cameras">cameras</a></li><li><a href="./Cast.html#cast">cast</a></li><li><a href="./Cast.html#currentcamera">currentCamera</a></li><li><a href="./Cast.html#currentmic">currentMic</a></li><li><a href="./Cast.html#devices">devices</a></li><li><a href="./Cast.html#filenames">fileNames</a></li><li><a href="./Cast.html#microphones">microphones</a></li><li><a href="./Cast.html#mimeextmap">mimeExtMap</a></li><li><a href="./Cast.html#mimetype">mimeType</a></li><li><a href="./Cast.html#recordcamera">recordCamera</a></li><li><a href="./Cast.html#recordingname">recordingName</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h3><ul><li><a href="./Cast.html#download">download</a></li><li><a href="./Cast.html#ensuredeviceslistpermissions">ensureDevicesListPermissions</a></li><li><a href="./Cast.html#getfilename">getFilename</a></li><li><a href="./Cast.html#getsupportedmimetypes">getSupportedMimeTypes</a></li><li><a href="./Cast.html#userecording">useRecording</a></li></ul><h2 id="type-aliases-1" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases-1" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="mimetypes" tabindex="-1">MimeTypes <a class="header-anchor" href="#mimetypes" aria-label="Permalink to &quot;MimeTypes&quot;">​</a></h3><p>Ƭ <strong>MimeTypes</strong>: <code>&quot;video/webm&quot;</code> | <code>&quot;video/webm;codecs=h264&quot;</code> | <code>&quot;video/x-matroska;codecs=avc1&quot;</code> | <code>undefined</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ae5fd861/src/cast/useCast.ts#L35" target="_blank" rel="noreferrer">src/cast/useCast.ts:35</a></p><h2 id="variables-1" tabindex="-1">Variables <a class="header-anchor" href="#variables-1" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="cameras" tabindex="-1">cameras <a class="header-anchor" href="#cameras" aria-label="Permalink to &quot;cameras&quot;">​</a></h3><p>• <strong>cameras</strong>: <code>ComputedRef</code>&lt;<code>MediaDeviceInfo</code>[]&gt;</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ae5fd861/src/cast/useCast.ts#L67" target="_blank" rel="noreferrer">src/cast/useCast.ts:67</a></p><hr><h3 id="cast" tabindex="-1">cast <a class="header-anchor" href="#cast" aria-label="Permalink to &quot;cast&quot;">​</a></h3><p>• <code>Const</code> <strong>cast</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>recorderCamera</code></td><td style="text-align:left;"><code>ShallowRef</code>&lt;<code>any</code>&gt;</td></tr><tr><td style="text-align:left;"><code>recorderSlides</code></td><td style="text-align:left;"><code>ShallowRef</code>&lt;<code>any</code>&gt;</td></tr><tr><td style="text-align:left;"><code>recording</code></td><td style="text-align:left;"><code>Ref</code>&lt;<code>boolean</code>&gt;</td></tr><tr><td style="text-align:left;"><code>recordingTime</code></td><td style="text-align:left;"><code>ComputedRef</code>&lt;<code>number</code>&gt;</td></tr><tr><td style="text-align:left;"><code>showAvatar</code></td><td style="text-align:left;"><code>Ref</code>&lt;<code>boolean</code>&gt;</td></tr><tr><td style="text-align:left;"><code>startRecording</code></td><td style="text-align:left;">(<code>customConfig</code>: {}) =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</td></tr><tr><td style="text-align:left;"><code>stopRecording</code></td><td style="text-align:left;">() =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</td></tr><tr><td style="text-align:left;"><code>streamCamera</code></td><td style="text-align:left;"><code>ShallowRef</code>&lt;<code>any</code>&gt;</td></tr><tr><td style="text-align:left;"><code>streamCapture</code></td><td style="text-align:left;"><code>ShallowRef</code>&lt;<code>any</code>&gt;</td></tr><tr><td style="text-align:left;"><code>streamSlides</code></td><td style="text-align:left;"><code>ShallowRef</code>&lt;<code>any</code>&gt;</td></tr><tr><td style="text-align:left;"><code>toggleAvatar</code></td><td style="text-align:left;">() =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</td></tr><tr><td style="text-align:left;"><code>toggleRecording</code></td><td style="text-align:left;">() =&gt; <code>void</code></td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ae5fd861/src/cast/useCast.ts#L289" target="_blank" rel="noreferrer">src/cast/useCast.ts:289</a></p><hr><h3 id="currentcamera" tabindex="-1">currentCamera <a class="header-anchor" href="#currentcamera" aria-label="Permalink to &quot;currentCamera&quot;">​</a></h3><p>• <code>Const</code> <strong>currentCamera</strong>: <code>Ref</code>&lt;<code>string</code>&gt;</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ae5fd861/src/cast/useCast.ts#L13" target="_blank" rel="noreferrer">src/cast/useCast.ts:13</a></p><hr><h3 id="currentmic" tabindex="-1">currentMic <a class="header-anchor" href="#currentmic" aria-label="Permalink to &quot;currentMic&quot;">​</a></h3><p>• <code>Const</code> <strong>currentMic</strong>: <code>Ref</code>&lt;<code>string</code>&gt;</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ae5fd861/src/cast/useCast.ts#L16" target="_blank" rel="noreferrer">src/cast/useCast.ts:16</a></p><hr><h3 id="devices" tabindex="-1">devices <a class="header-anchor" href="#devices" aria-label="Permalink to &quot;devices&quot;">​</a></h3><p>• <strong>devices</strong>: <code>Ref</code>&lt;<code>MediaDeviceInfo</code>[]&gt;</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ae5fd861/src/cast/useCast.ts#L66" target="_blank" rel="noreferrer">src/cast/useCast.ts:66</a></p><hr><h3 id="filenames" tabindex="-1">fileNames <a class="header-anchor" href="#filenames" aria-label="Permalink to &quot;fileNames&quot;">​</a></h3><p>• <code>Const</code> <strong>fileNames</strong>: <code>Object</code></p><h4 id="type-declaration-1" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-1" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>camera</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>screen</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ae5fd861/src/cast/useCast.ts#L59" target="_blank" rel="noreferrer">src/cast/useCast.ts:59</a></p><hr><h3 id="microphones" tabindex="-1">microphones <a class="header-anchor" href="#microphones" aria-label="Permalink to &quot;microphones&quot;">​</a></h3><p>• <strong>microphones</strong>: <code>ComputedRef</code>&lt;<code>MediaDeviceInfo</code>[]&gt;</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ae5fd861/src/cast/useCast.ts#L68" target="_blank" rel="noreferrer">src/cast/useCast.ts:68</a></p><hr><h3 id="mimeextmap" tabindex="-1">mimeExtMap <a class="header-anchor" href="#mimeextmap" aria-label="Permalink to &quot;mimeExtMap&quot;">​</a></h3><p>• <code>Const</code> <strong>mimeExtMap</strong>: <code>Object</code></p><h4 id="type-declaration-2" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-2" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>video/webm</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>video/webm;codecs=h264</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>video/x-matroska;codecs=avc1</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ae5fd861/src/cast/useCast.ts#L28" target="_blank" rel="noreferrer">src/cast/useCast.ts:28</a></p><hr><h3 id="mimetype" tabindex="-1">mimeType <a class="header-anchor" href="#mimetype" aria-label="Permalink to &quot;mimeType&quot;">​</a></h3><p>• <code>Const</code> <strong>mimeType</strong>: <code>Ref</code>&lt;<code>string</code>&gt;</p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ae5fd861/src/cast/useCast.ts#L25" target="_blank" rel="noreferrer">src/cast/useCast.ts:25</a></p><hr><h3 id="recordcamera" tabindex="-1">recordCamera <a class="header-anchor" href="#recordcamera" aria-label="Permalink to &quot;recordCamera&quot;">​</a></h3><p>• <code>Const</code> <strong>recordCamera</strong>: <code>Ref</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ae5fd861/src/cast/useCast.ts#L22" target="_blank" rel="noreferrer">src/cast/useCast.ts:22</a></p><hr><h3 id="recordingname" tabindex="-1">recordingName <a class="header-anchor" href="#recordingname" aria-label="Permalink to &quot;recordingName&quot;">​</a></h3><p>• <code>Const</code> <strong>recordingName</strong>: <code>Ref</code>&lt;<code>string</code>&gt;</p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ae5fd861/src/cast/useCast.ts#L19" target="_blank" rel="noreferrer">src/cast/useCast.ts:19</a></p><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="download" tabindex="-1">download <a class="header-anchor" href="#download" aria-label="Permalink to &quot;download&quot;">​</a></h3><p>▸ <strong>download</strong>(<code>name</code>, <code>url</code>): <code>void</code></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>url</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ae5fd861/src/cast/useCast.ts#L84" target="_blank" rel="noreferrer">src/cast/useCast.ts:84</a></p><hr><h3 id="ensuredeviceslistpermissions" tabindex="-1">ensureDevicesListPermissions <a class="header-anchor" href="#ensuredeviceslistpermissions" aria-label="Permalink to &quot;ensureDevicesListPermissions&quot;">​</a></h3><p>▸ <strong>ensureDevicesListPermissions</strong>(): <code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>node_modules/.pnpm/@vueuse+core@10.1.0_vue@3.2.47/node_modules/@vueuse/core/index.d.ts:1375</p><hr><h3 id="getfilename" tabindex="-1">getFilename <a class="header-anchor" href="#getfilename" aria-label="Permalink to &quot;getFilename&quot;">​</a></h3><p>▸ <strong>getFilename</strong>(<code>media</code>, <code>mimeType</code>): <code>string</code></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>media</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>mimeType</code></td><td style="text-align:left;"><a href="./Cast.html#mimetypes"><code>MimeTypes</code></a></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ae5fd861/src/cast/useCast.ts#L38" target="_blank" rel="noreferrer">src/cast/useCast.ts:38</a></p><hr><h3 id="getsupportedmimetypes" tabindex="-1">getSupportedMimeTypes <a class="header-anchor" href="#getsupportedmimetypes" aria-label="Permalink to &quot;getSupportedMimeTypes&quot;">​</a></h3><p>▸ <strong>getSupportedMimeTypes</strong>(): <code>string</code>[]</p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code>[]</p><h4 id="defined-in-15" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-15" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ae5fd861/src/cast/useCast.ts#L51" target="_blank" rel="noreferrer">src/cast/useCast.ts:51</a></p><hr><h3 id="userecording" tabindex="-1">useRecording <a class="header-anchor" href="#userecording" aria-label="Permalink to &quot;useRecording&quot;">​</a></h3><p>▸ <strong>useRecording</strong>(): <code>Object</code></p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>recorderCamera</code></td><td style="text-align:left;"><code>ShallowRef</code>&lt;<code>any</code>&gt;</td></tr><tr><td style="text-align:left;"><code>recorderSlides</code></td><td style="text-align:left;"><code>ShallowRef</code>&lt;<code>any</code>&gt;</td></tr><tr><td style="text-align:left;"><code>recording</code></td><td style="text-align:left;"><code>Ref</code>&lt;<code>boolean</code>&gt;</td></tr><tr><td style="text-align:left;"><code>recordingTime</code></td><td style="text-align:left;"><code>ComputedRef</code>&lt;<code>number</code>&gt;</td></tr><tr><td style="text-align:left;"><code>showAvatar</code></td><td style="text-align:left;"><code>Ref</code>&lt;<code>boolean</code>&gt;</td></tr><tr><td style="text-align:left;"><code>startRecording</code></td><td style="text-align:left;">(<code>customConfig</code>: {}) =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</td></tr><tr><td style="text-align:left;"><code>stopRecording</code></td><td style="text-align:left;">() =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</td></tr><tr><td style="text-align:left;"><code>streamCamera</code></td><td style="text-align:left;"><code>ShallowRef</code>&lt;<code>any</code>&gt;</td></tr><tr><td style="text-align:left;"><code>streamCapture</code></td><td style="text-align:left;"><code>ShallowRef</code>&lt;<code>any</code>&gt;</td></tr><tr><td style="text-align:left;"><code>streamSlides</code></td><td style="text-align:left;"><code>ShallowRef</code>&lt;<code>any</code>&gt;</td></tr><tr><td style="text-align:left;"><code>toggleAvatar</code></td><td style="text-align:left;">() =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</td></tr><tr><td style="text-align:left;"><code>toggleRecording</code></td><td style="text-align:left;">() =&gt; <code>void</code></td></tr></tbody></table><h4 id="defined-in-16" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-16" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/ae5fd861/src/cast/useCast.ts#L94" target="_blank" rel="noreferrer">src/cast/useCast.ts:94</a></p>',115),c=[d];function s(i,n,l,f,h,u){return t(),a("div",null,c)}const g=e(o,[["render",s]]);export{p as __pageData,g as default};
