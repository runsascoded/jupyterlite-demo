"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5207],{59991:(e,t,o)=>{o.r(t),o.d(t,{CodeMirrorEditor:()=>_,CodeMirrorEditorFactory:()=>b,CodeMirrorMimeTypeService:()=>v,EditorSyntaxStatus:()=>k,ICodeMirror:()=>T,Mode:()=>i,editorServices:()=>E});var i,n,s=o(80695),r=o(56817),a=o(51269),l=o(35822),d=o(93315),c=o(79444),h=o(33498),u=o(41649),m=o(26260),g=o.n(m),p=(o(82017),o(91123),o(61682),o(32407),o(3519),o(79501),o(56755),o(991),o(57342),o(49469),o(60509),o(81094),o(79480),o(70722),o(45751),o(19757),o(19238),o(43602),o(25022),o(83280),o(94521),o(29113)),f=o(94642);o(90560),o(80011),o(98627),o(49055),o(38519),o(48033),o(2312),o(32848),o(25397),o(14149),o(56141),g().defineMode("ipython",((e,t)=>{const o={};for(const e in t)t.hasOwnProperty(e)&&(o[e]=t[e]);return o.name="python",o.singleOperators=new RegExp("^[\\+\\-\\*/%&|@\\^~<>!\\?]"),o.identifiers=new RegExp("^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*"),g().getMode(e,o)}),"python"),g().defineMIME("text/x-ipython","ipython"),g().modeInfo.push({ext:[],mime:"text/x-ipython",mode:"ipython",name:"ipython"}),o(15718),o(48239),o(38234),g().defineMode("ipythongfm",((e,t)=>{const o=g().getMode(e,{name:"gfm",tokenTypeOverrides:{list3:"string-2"}}),i=g().getMode(e,{name:"stex",inMathMode:!0});return g().multiplexingMode(o,{open:"<code>",close:"</code>",mode:o,parseDelimiters:!0},{open:"<pre>",close:"</pre>",mode:o,parseDelimiters:!0},{open:"```",close:"```",mode:o,parseDelimiters:!0},{open:"`",close:"`",mode:o,parseDelimiters:!0},{open:"$$",close:"$$",mode:i,delimStyle:"delimit"},{open:"$",close:"$",mode:i,delimStyle:"delimit"},{open:"\\(",close:"\\)",mode:i,delimStyle:"delimit"},{open:"\\[",close:"\\]",mode:i,delimStyle:"delimit"})}),"gfm"),g().defineMIME("text/x-ipythongfm","ipythongfm"),g().modeInfo.push({ext:[],mime:"text/x-ipythongfm",mode:"ipythongfm",name:"ipythongfm"}),function(e){const t=[{loader:async e=>g().modes.hasOwnProperty(e.mode),rank:0},{loader:function(e){return new Promise(((t,i)=>{Promise.all([o.e(1145),o.e(2106)]).then((function(){var i=[o(52106)(`./${e.mode}/${e.mode}.js`)];(function(){t(!0)}).apply(null,i)})).catch(o.oe)}))},rank:99}];function i(e){var t;const o="string"==typeof e?e:e.mode||e.name,i="string"!=typeof e?e.mime:o,n="string"!=typeof e&&null!==(t=e.ext)&&void 0!==t?t:[];return g().findModeByName(o||"")||g().findModeByMIME(i||"")||s(n)||g().findModeByMIME(a.IEditorMimeTypeService.defaultMimeType)||g().findModeByMIME("text/plain")}function s(e){if("string"==typeof e)return g().findModeByExtension(e);for(let t=0;t<e.length;t++){const o=g().findModeByExtension(e[t]);if(o)return o}return null}e.getModeInfo=function(){return g().modeInfo},e.run=function(e,t,o){g().runMode(e,t,o)},e.ensure=async function(e){const o=i(e);for(const e of t)if(await e.loader(o))return o;return null},e.addSpecLoader=function(e,o){const i={loader:e,rank:o},s=l.ArrayExt.upperBound(t,i,n.itemCmp);l.ArrayExt.insert(t,s,i)},e.findBest=i,e.findByMIME=function(e){return g().findModeByMIME(e)},e.findByName=function(e){return g().findModeByName(e)},e.findByFileName=function(e){const t=f.PathExt.basename(e);return g().findModeByFileName(t)},e.findByExtension=s}(i||(i={})),function(e){e.itemCmp=function(e,t){return e.rank-t.rank}}(n||(n={}));const y="jp-mod-readOnly";class _{constructor(e){this.edgeRequested=new u.Signal(this),this.selectionMarkers={},this._keydownHandlers=new Array,this._changeGuard=!1,this._uuid="",this._needsRefresh=!1,this._isDisposed=!1,this._lastChange=null;const t=this.host=e.host;this.translator=e.translator||s.nullTranslator,this._trans=this.translator.load("jupyterlab"),t.classList.add("jp-CodeMirrorEditor"),t.classList.add("jp-Editor"),t.addEventListener("focus",this,!0),t.addEventListener("blur",this,!0),t.addEventListener("scroll",this,!0),this._uuid=e.uuid||d.UUID.uuid4();const o=e.selectionStyle||{};this._selectionStyle=Object.assign(Object.assign({},a.CodeEditor.defaultSelectionStyle),o);const i=this._model=e.model,n=e.config||{},r=this._config=Object.assign(Object.assign({},_.defaultConfig),n),c=this._editor=C.createEditor(t,r);this._initializeEditorBinding(),this.model.sharedModelSwitched.connect(this._initializeEditorBinding,this),c.getDoc(),this._onMimeTypeChanged(),this._onCursorActivity(),this._poll=new h.Poll({factory:async()=>{this._checkSync()},frequency:{interval:3e3,backoff:!1},standby:()=>!this._lastChange||"when-hidden"}),i.mimeTypeChanged.connect(this._onMimeTypeChanged,this),i.selections.changed.connect(this._onSelectionsChanged,this),g().on(c,"keydown",((e,t)=>{-1===l.ArrayExt.findFirstIndex(this._keydownHandlers,(e=>!0===e(this,t)&&(t.preventDefault(),!0)))&&this.onKeydown(t)})),g().on(c,"cursorActivity",(()=>this._onCursorActivity())),g().on(c.getDoc(),"change",((e,t)=>{"setValue"===t.origin&&this.hasFocus()&&this.refresh(),this._lastChange=t})),c.on("paste",((e,t)=>{var o;null===(o=this._config.handlePaste)||void 0===o||o||(t.codemirrorIgnore=!0)})),c.getWrapperElement().addEventListener("paste",(()=>{this.hasFocus()&&this.refresh()}))}_initializeEditorBinding(){var e;null===(e=this._yeditorBinding)||void 0===e||e.destroy();const t=this.model.sharedModel,o=t.undoManager?{yUndoManager:t.undoManager}:{},i=t.awareness;this._yeditorBinding=new p.z$(t.ysource,this.editor,i,o)}get uuid(){return this._uuid}set uuid(e){this._uuid=e}get selectionStyle(){return this._selectionStyle}set selectionStyle(e){this._selectionStyle=e}get editor(){return this._editor}get doc(){return this._editor.getDoc()}get lineCount(){return this.doc.lineCount()}get model(){return this._model}get lineHeight(){return this._editor.defaultTextHeight()}get charWidth(){return this._editor.defaultCharWidth()}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,this.host.removeEventListener("focus",this,!0),this.host.removeEventListener("blur",this,!0),this.host.removeEventListener("scroll",this,!0),this._yeditorBinding&&this._yeditorBinding.destroy(),this._keydownHandlers.length=0,this._poll.dispose(),u.Signal.clearData(this))}getOption(e){return this._config[e]}setOption(e,t){this._config[e]!==t&&(this._config[e]=t,C.setOption(this.editor,e,t,this._config))}setOptions(e){const t=this._editor;t.startOperation();for(let o in e)t.operation((()=>{this.setOption(o,e[o])}));t.endOperation()}getLine(e){return this.doc.getLine(e)}getOffsetAt(e){return this.doc.indexFromPos({ch:e.column,line:e.line})}getPositionAt(e){const{ch:t,line:o}=this.doc.posFromIndex(e);return{line:o,column:t}}undo(){this.model.sharedModel.undo()}redo(){this.model.sharedModel.redo()}clearHistory(){var e,t;null===(t=null===(e=this._yeditorBinding)||void 0===e?void 0:e.yUndoManager)||void 0===t||t.clear()}focus(){this._editor.focus()}hasFocus(){return this._editor.getWrapperElement().contains(document.activeElement)}blur(){this._editor.getInputField().blur()}refresh(){this._editor.refresh(),this._needsRefresh=!1}resizeToFit(){this.hasFocus()?this.refresh():this._needsRefresh=!0,this._clearHover()}addOverlay(e,t){this._editor.addOverlay(e,t)}removeOverlay(e){this._editor.removeOverlay(e)}getSearchCursor(e,t,o){return this._editor.getDoc().getSearchCursor(e,t,o)}getCursor(e){return this._editor.getDoc().getCursor(e)}get state(){return this._editor.state}operation(e){return this._editor.operation(e)}firstLine(){return this._editor.getDoc().firstLine()}lastLine(){return this._editor.getDoc().lastLine()}scrollIntoView(e,t){this._editor.scrollIntoView(e,t)}scrollIntoViewCentered(e){var t,o;const i=this._editor.charCoords(e,"local").top,n=this._editor.getWrapperElement().offsetHeight;null===(o=(t=this.host).scrollIntoView)||void 0===o||o.call(t,{behavior:"auto",block:"center",inline:"center"}),this._editor.scrollTo(null,i-n/2)}cursorCoords(e,t){return this._editor.cursorCoords(e,t)}getRange(e,t,o){return this._editor.getDoc().getRange(e,t,o)}addKeydownHandler(e){return this._keydownHandlers.push(e),new c.DisposableDelegate((()=>{l.ArrayExt.removeAllWhere(this._keydownHandlers,(t=>t===e))}))}setSize(e){e?this._editor.setSize(e.width,e.height):this._editor.setSize(null,null),this._needsRefresh=!1}revealPosition(e){const t=this._toCodeMirrorPosition(e);this._editor.scrollIntoView(t)}revealSelection(e){const t={from:this._toCodeMirrorPosition(e.start),to:this._toCodeMirrorPosition(e.end)};this._editor.scrollIntoView(t)}getCoordinateForPosition(e){const t=this._toCodeMirrorPosition(e);return this.editor.charCoords(t,"page")}getPositionForCoordinate(e){return this._toPosition(this.editor.coordsChar(e))||null}getCursorPosition(){const e=this.doc.getCursor();return this._toPosition(e)}setCursorPosition(e,t){const o=this._toCodeMirrorPosition(e);this.doc.setCursor(o,void 0,t),this.editor.hasFocus()||this.model.selections.set(this.uuid,this.getSelections())}getSelection(){return this.getSelections()[0]}setSelection(e){this.setSelections([e])}getSelections(){const e=this.doc.listSelections();if(e.length>0)return e.map((e=>this._toSelection(e)));const t=this.doc.getCursor();return[this._toSelection({anchor:t,head:t})]}setSelections(e){const t=this._toCodeMirrorSelections(e);this.doc.setSelections(t,0)}replaceSelection(e){this.doc.replaceSelection(e)}getTokens(){let e=[];for(let t=0;t<this.lineCount;++t){const o=this.editor.getLineTokens(t).map((e=>({offset:this.getOffsetAt({column:e.start,line:t}),value:e.string,type:e.type||""})));e=e.concat(o)}return e}getTokenForPosition(e){var t;const o=this._toCodeMirrorPosition(e),i=this.editor.getTokenAt(o);return{offset:this.getOffsetAt({column:i.start,line:o.line}),value:i.string,type:null!==(t=i.type)&&void 0!==t?t:void 0}}newIndentedLine(){this.execCommand("newlineAndIndent")}execCommand(e){this._editor.execCommand(e)}onKeydown(e){const t=this.getCursorPosition(),{line:o,column:i}=t;if(0===o&&0===i&&38===e.keyCode)return e.shiftKey||this.edgeRequested.emit("top"),!1;if(0===o&&38===e.keyCode)return e.shiftKey||this.edgeRequested.emit("topLine"),!1;const n=this.lineCount-1,s=this.getLine(n).length;return o===n&&i===s&&40===e.keyCode&&(e.shiftKey||this.edgeRequested.emit("bottom"),!1)}_toCodeMirrorSelections(e){if(e.length>0)return e.map((e=>this._toCodeMirrorSelection(e)));const t={line:0,ch:0};return[{anchor:t,head:t}]}_onMimeTypeChanged(){const e=this._model.mimeType,t=this._editor.getOption("extraKeys")||{};"text/plain"!==e&&"text/x-ipythongfm"!==e?t.Backspace="delSpaceToPrevTabStop":delete t.Backspace,this.setOption("extraKeys",t),i.ensure(e).then((e=>{var t;this.setOption("mode",null!==(t=null==e?void 0:e.mime)&&void 0!==t?t:"null")}))}_onSelectionsChanged(e,t){const o=t.key;o!==this.uuid&&(this._cleanSelections(o),"remove"!==t.type&&t.newValue&&this._markSelections(o,t.newValue))}_cleanSelections(e){const t=this.selectionMarkers[e];t&&t.forEach((e=>{e.clear()})),delete this.selectionMarkers[e]}_markSelections(e,t){const o=[];let i;e===this._hoverId&&this._clearHover(),this._model.modelDB.collaborators&&(i=this._model.modelDB.collaborators.get(e)),t.forEach((e=>{if(d.JSONExt.deepEqual(e.start,e.end)){if(i){const t=this._getCaret(i);o.push(this.doc.setBookmark(this._toCodeMirrorPosition(e.end),{widget:t}))}}else{const t=e.start.line<e.end.line||e.start.line===e.end.line&&e.start.column<=e.end.column,n=this._toCodeMirrorPosition(t?e.start:e.end),s=this._toCodeMirrorPosition(t?e.end:e.start);let r;r=i?this._toTextMarkerOptions(Object.assign(Object.assign({},e.style),{color:i.color})):this._toTextMarkerOptions(e.style),o.push(this.doc.markText(n,s,r))}})),this.selectionMarkers[e]=o}_onCursorActivity(){if(this._editor.hasFocus()){const e=this.getSelections();this.model.selections.set(this.uuid,e)}}_toSelection(e){return{uuid:this.uuid,start:this._toPosition(e.anchor),end:this._toPosition(e.head),style:this.selectionStyle}}_toTextMarkerOptions(e){const t=`background-color: rgba( ${parseInt(e.color.slice(1,3),16)}, ${parseInt(e.color.slice(3,5),16)}, ${parseInt(e.color.slice(5,7),16)}, 0.15)`;return{className:e.className,title:e.displayName,css:t}}_toCodeMirrorSelection(e){return{anchor:this._toCodeMirrorPosition(e.start),head:this._toCodeMirrorPosition(e.end)}}_toPosition(e){return{line:e.line,column:e.ch}}_toCodeMirrorPosition(e){return{line:e.line,ch:e.column}}_onValueChanged(e,t){if(this._changeGuard)return;this._changeGuard=!0;const o=this.doc;switch(t.type){case"insert":{const e=o.posFromIndex(t.start);o.replaceRange(t.value,e,e,"+input");break}case"remove":{const e=o.posFromIndex(t.start),i=o.posFromIndex(t.end);o.replaceRange("",e,i,"+input");break}case"set":o.setValue(t.value)}this._changeGuard=!1}_beforeDocChanged(e,t){if(this._changeGuard)return;this._changeGuard=!0;const o=this._model.value,i=e.indexFromPos(t.from),n=e.indexFromPos(t.to),s=t.text.join("\n");n!==i&&o.remove(i,n),s&&o.insert(i,s),this._changeGuard=!1}handleEvent(e){switch(e.type){case"focus":this._evtFocus(e);break;case"blur":this._evtBlur(e);break;case"scroll":this._evtScroll()}}_evtFocus(e){this._needsRefresh&&this.refresh(),this.host.classList.add("jp-mod-focused"),this._onCursorActivity()}_evtBlur(e){this.host.classList.remove("jp-mod-focused")}_evtScroll(){this._clearHover()}_clearHover(){this._caretHover&&(window.clearTimeout(this._hoverTimeout),document.body.removeChild(this._caretHover),this._caretHover=null)}_getCaret(e){const t=e?e.displayName:"Anonymous",o=e?e.color:this._selectionStyle.color,i=document.createElement("span");return i.className="jp-CollaboratorCursor",i.style.borderBottomColor=o,i.onmouseenter=()=>{this._clearHover(),this._hoverId=e.sessionId;const n=i.getBoundingClientRect(),s=document.createElement("div");s.className="jp-CollaboratorCursor-hover",s.style.left=String(n.left)+"px",s.style.top=String(n.bottom)+"px",s.textContent=t,s.style.backgroundColor=o,s.onmouseenter=()=>{window.clearTimeout(this._hoverTimeout)},s.onmouseleave=()=>{this._hoverTimeout=window.setTimeout((()=>{this._clearHover()}),1e3)},this._caretHover=s,document.body.appendChild(s)},i.onmouseleave=()=>{this._hoverTimeout=window.setTimeout((()=>{this._clearHover()}),1e3)},i}_checkSync(){const e=this._lastChange;if(!e)return;this._lastChange=null;const t=this._editor,o=t.getDoc();o.getValue()!==this._model.value.text&&((0,r.showDialog)({title:this._trans.__("Code Editor out of Sync"),body:this._trans.__("Please open your browser JavaScript console for bug report instructions")}),console.warn("Please paste the following to https://github.com/jupyterlab/jupyterlab/issues/2951"),console.warn(JSON.stringify({model:this._model.value.text,view:o.getValue(),selections:this.getSelections(),cursor:this.getCursorPosition(),lineSep:t.getOption("lineSeparator"),mode:t.getOption("mode"),change:e})))}}var C;!function(e){e.defaultConfig=Object.assign(Object.assign({},a.CodeEditor.defaultConfig),{mode:"null",theme:"jupyter",smartIndent:!0,electricChars:!0,keyMap:"default",extraKeys:null,gutters:[],fixedGutter:!0,showCursorWhenSelecting:!1,coverGutterNextToScrollbar:!1,dragDrop:!0,lineSeparator:null,scrollbarStyle:"native",lineWiseCopyCut:!0,scrollPastEnd:!1,styleActiveLine:!1,styleSelectedText:!0,selectionPointer:!1,rulers:[],foldGutter:!1,handlePaste:!0}),e.addCommand=function(e,t){g().commands[e]=t}}(_||(_={})),function(e){function t(e,t){return e.line===t.line&&e.ch===t.ch}function o(e){const t={"CodeMirror-linenumbers":"lineNumbers","CodeMirror-foldgutter":"codeFolding"};return Object.keys(t).filter((o=>e[t[o]]))}e.createEditor=function(e,t){const{autoClosingBrackets:o,fontFamily:i,fontSize:n,insertSpaces:s,lineHeight:r,lineWrap:a,wordWrapColumn:l,tabSize:d,readOnly:c}=t,h=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o}(t,["autoClosingBrackets","fontFamily","fontSize","insertSpaces","lineHeight","lineWrap","wordWrapColumn","tabSize","readOnly"]),u=Object.assign({autoCloseBrackets:!!o&&{},indentUnit:d,indentWithTabs:!s,lineWrapping:"off"!==a,readOnly:c},h);return g()((t=>{i&&(t.style.fontFamily=i),n&&(t.style.fontSize=n+"px"),r&&(t.style.lineHeight=r.toString()),c&&t.classList.add(y),"wordWrapColumn"===a&&(t.querySelector(".CodeMirror-lines").style.width=`${l}ch`),"bounded"===a&&(t.querySelector(".CodeMirror-lines").style.maxWidth=`${l}ch`),e.appendChild(t)}),u)},e.indentMoreOrinsertTab=function(e){const o=e.getDoc(),i=o.getCursor("from");if(!t(i,o.getCursor("to")))return void g().commands.indentMore(e);const n=o.getLine(i.line).slice(0,i.ch);/^\s*$/.test(n)?g().commands.indentMore(e):e.getOption("indentWithTabs")?g().commands.insertTab(e):g().commands.insertSoftTab(e)},e.delSpaceToPrevTabStop=function(e){var o;const i=e.getDoc(),n=null!==(o=e.getOption("indentUnit"))&&void 0!==o?o:2,s=i.listSelections();for(let o=s.length-1;o>=0;o--){const r=s[o].head,a=s[o].anchor;if(t(r,a))if(null!==i.getLine(r.line).substring(0,r.ch).match(/^\ +$/)){const e=(Math.ceil(r.ch/n)-1)*n,t=g().Pos(r.line,e);i.replaceRange("",t,r)}else{const t=e.findPosH(r,-1,"char",!1);i.replaceRange("",t,r)}else i.replaceRange("",a,r)}},e.posEq=t,e.setOption=function(e,t,i,n){const s=e.getWrapperElement();switch(t){case"cursorBlinkRate":e.setOption(t,i);break;case"lineWrap":{const t="off"!==i,o=s.querySelector(".CodeMirror-lines"),r="bounded"===i?`${n.wordWrapColumn}ch`:null,a="wordWrapColumn"===i?`${n.wordWrapColumn}ch`:null;o.style.setProperty("max-width",r),o.style.setProperty("width",a),e.setOption("lineWrapping",t);break}case"wordWrapColumn":{const{lineWrap:e}=n;if("wordWrapColumn"===e||"bounded"===e){const t="wordWrapColumn"===e?"width":"maxWidth";s.querySelector(".CodeMirror-lines").style[t]=`${i}ch`}break}case"tabSize":e.setOption("indentUnit",i);break;case"insertSpaces":e.setOption("indentWithTabs",!i);break;case"autoClosingBrackets":e.setOption("autoCloseBrackets",i);break;case"rulers":{const t=i;e.setOption("rulers",t.map((e=>({column:e,className:"jp-CodeMirror-ruler"}))));break}case"readOnly":s.classList.toggle(y,i),e.setOption(t,i);break;case"fontFamily":s.style.fontFamily=i;break;case"fontSize":s.style.setProperty("font-size",i?i+"px":null);break;case"lineHeight":s.style.lineHeight=i?i.toString():null;break;case"gutters":e.setOption(t,o(n));break;case"lineNumbers":e.setOption(t,i),e.setOption("gutters",o(n));break;case"codeFolding":e.setOption("foldGutter",i),e.setOption("gutters",o(n));break;default:e.setOption(t,i)}}}(C||(C={})),_.addCommand("delSpaceToPrevTabStop",C.delSpaceToPrevTabStop),_.addCommand("indentMoreOrinsertTab",C.indentMoreOrinsertTab);class b{constructor(e={},t){this.newInlineEditor=e=>(e.host.dataset.type="inline",new _(Object.assign(Object.assign({},e),{config:Object.assign(Object.assign({},this.inlineCodeMirrorConfig),e.config||{}),translator:this.translator}))),this.newDocumentEditor=e=>(e.host.dataset.type="document",new _(Object.assign(Object.assign({},e),{config:Object.assign(Object.assign({},this.documentCodeMirrorConfig),e.config||{}),translator:this.translator}))),this.translator=t||s.nullTranslator,this.inlineCodeMirrorConfig=Object.assign(Object.assign(Object.assign({},_.defaultConfig),{extraKeys:{"Cmd-Right":"goLineRight",End:"goLineRight","Cmd-Left":"goLineLeft",Tab:"indentMoreOrinsertTab","Shift-Tab":"indentLess","Cmd-/":"toggleComment","Ctrl-/":"toggleComment","Ctrl-G":"find","Cmd-G":"find"}}),e),this.documentCodeMirrorConfig=Object.assign(Object.assign(Object.assign({},_.defaultConfig),{extraKeys:{Tab:"indentMoreOrinsertTab","Shift-Tab":"indentLess","Cmd-/":"toggleComment","Ctrl-/":"toggleComment","Shift-Enter":()=>{}},lineNumbers:!0,scrollPastEnd:!0}),e)}}class v{getMimeTypeByLanguage(e){const t=e.file_extension||"";return i.findBest(e.codemirror_mode||{mimetype:e.mimetype,name:e.name,ext:[t.split(".").slice(-1)[0]]}).mime}getMimeTypeByFilePath(e){const t=f.PathExt.extname(e);return".ipy"===t?"text/x-python":".md"===t?"text/x-ipythongfm":(i.findByFileName(e)||i.findBest("")).mime}}var M=o(87841),S=o(18151),O=o(96927),w=o.n(O);function x(e){return w().createElement(M.TextItem,{source:e.mode,onClick:e.handleClick})}class k extends r.VDomRenderer{constructor(e){super(new k.Model),this._handleClick=()=>{const e=new S.Menu({commands:this._commands});this._popup&&this._popup.dispose(),i.getModeInfo().sort(((e,t)=>{const o=e.name||"",i=t.name||"";return o.localeCompare(i)})).forEach((t=>{if(0===t.mode.indexOf("brainf"))return;const o={insertSpaces:!0,name:t.name};e.addItem({command:"codemirror:change-mode",args:o})})),this._popup=(0,M.showPopup)({body:e,anchor:this,align:"left"})},this._popup=null,this._commands=e.commands,this.translator=e.translator||s.nullTranslator;const t=this.translator.load("jupyterlab");this.addClass(M.interactiveItem),this.title.caption=t.__("Change text editor syntax highlighting")}render(){return this.model?w().createElement(x,{mode:this.model.mode,handleClick:this._handleClick}):null}}!function(e){class t extends r.VDomModel{constructor(){super(...arguments),this._onMIMETypeChange=(e,t)=>{const o=this._mode,n=i.findByMIME(t.newValue);this._mode=n.name||n.mode,this._triggerChange(o,this._mode)},this._mode="",this._editor=null}get mode(){return this._mode}get editor(){return this._editor}set editor(e){const t=this._editor;null!==t&&t.model.mimeTypeChanged.disconnect(this._onMIMETypeChange);const o=this._mode;if(this._editor=e,null===this._editor)this._mode="";else{const e=i.findByMIME(this._editor.model.mimeType);this._mode=e.name||e.mode,this._editor.model.mimeTypeChanged.connect(this._onMIMETypeChange)}this._triggerChange(o,this._mode)}_triggerChange(e,t){e!==t&&this.stateChanged.emit(void 0)}}e.Model=t}(k||(k={}));const T=new d.Token("@jupyterlab/codemirror:ICodeMirror"),E={factoryService:new b,mimeTypeService:new v}}}]);
//# sourceMappingURL=5207.cf1122d56b89f3e746b7.js.map