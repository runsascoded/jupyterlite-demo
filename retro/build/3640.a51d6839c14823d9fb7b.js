"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3640,2462],{53640:(e,t,s)=>{s.r(t),s.d(t,{IDocumentProviderFactory:()=>h,ProviderMock:()=>r,WebSocketProviderWithLocks:()=>m,getAnonymousUserName:()=>i,getRandomColor:()=>a,moonsOfJupyter:()=>n,userColors:()=>o});const n=["Metis","Adrastea","Amalthea","Thebe","Io","Europa","Ganymede","Callisto","Themisto","Leda","Ersa","Pandia","Himalia","Lysithea","Elara","Dia","Carpo","Valetudo","Euporie","Eupheme","Helike","Euanthe","Hermippe","Praxidike","Thyone","Thelxinoe","Ananke","Mneme","Orthosie","Harpalyke","Iocaste","Erinome","Aitne","Herse","Taygete","Eukelade","Carme","Isonoe","Autonoe","Philophrosyne","Cyllene","Pasithee","Pasiphae","Sponde","Eurydome","Kalyke","Hegemone","Kale","Kallichore","Chaldene","Arche","Eirene","Kore","Megaclite","Aoede","Callirrhoe","Sinope"],i=()=>"Anonymous "+n[Math.floor(Math.random()*n.length)],o=["#12A0D3","#17AB30","#CC8500","#A79011","#ee6352","#609DA9","#4BA749","#00A1B3"],a=()=>o[Math.floor(Math.random()*o.length)];class r{requestInitialContent(){return Promise.resolve(!1)}putInitializedState(){}acquireLock(){return Promise.resolve(0)}releaseLock(e){}destroy(){}setPath(e){}}var l=s(93315);const h=new l.Token("@jupyterlab/docprovider:IDocumentProviderFactory");var c=s(94072),u=s(23406),d=s(88621),_=s(85230),p=s(70132);class m extends d.V{constructor(e){var t;super(e.url,e.contentType+":"+e.path,e.ymodel.ydoc,{awareness:e.ymodel.awareness}),this._currentLockRequest=null,this._initialContentRequest=null,this._path=e.path,this._contentType=e.contentType,this._serverUrl=e.url;const s="#"+p.jS("--usercolor",a().slice(1)),n=p.jS("--username",i()),o=e.ymodel.awareness.getLocalState();o&&null==(null===(t=o.user)||void 0===t?void 0:t.name)&&e.ymodel.awareness.setLocalStateField("user",{name:n,color:s}),this.messageHandlers[127]=(e,t,s,n,i)=>{const o=c.Jl(t),a=this._currentLockRequest;this._currentLockRequest=null,a&&a.resolve(o)},this.messageHandlers[125]=(e,t,s,n,i)=>{const o=c.iU(t);o.byteLength>0&&setTimeout((()=>{_.applyUpdate(this.doc,o)}),0);const a=this._initialContentRequest;this._initialContentRequest=null,a&&a.resolve(o.byteLength>0)},this._isInitialized=!1,this._onConnectionStatus=this._onConnectionStatus.bind(this),this.on("status",this._onConnectionStatus)}setPath(e){if(e!==this._path){this._path=e,this.bcChannel=this._serverUrl+"/"+this._contentType+":"+this._path,this.url=this.bcChannel;const t=u.Mf();u.cW(t,123);const s=unescape(encodeURIComponent(this._contentType+":"+e));for(let e=0;e<s.length;e++)u.cW(t,s.codePointAt(e));this._sendMessage(u._f(t))}}requestInitialContent(){return this._initialContentRequest||(this._initialContentRequest=new l.PromiseDelegate,this._sendMessage(new Uint8Array([125])),setTimeout((()=>{var e;return null===(e=this._initialContentRequest)||void 0===e?void 0:e.resolve(!1)}),1e3)),this._initialContentRequest.promise}putInitializedState(){const e=u.Mf();u.uE(e,124),u.HK(e,_.encodeStateAsUpdate(this.doc)),this._sendMessage(u._f(e)),this._isInitialized=!0}acquireLock(){if(this._currentLockRequest)return this._currentLockRequest.promise;this._sendMessage(new Uint8Array([127]));const e=setInterval((()=>{this.wsconnected&&this._sendMessage(new Uint8Array([127]))}),500);let t,s;const n=new Promise(((e,n)=>{t=e,s=n}));this._currentLockRequest={promise:n,resolve:t,reject:s};const i=()=>{clearInterval(e)};return n.then(i,i),n}releaseLock(e){const t=u.Mf();u.uE(t,126),u.Ep(t,e),this._sendMessage(u._f(t))}_sendMessage(e){const t=()=>{setTimeout((()=>{this.wsconnected?this.ws.send(e):this.once("status",t)}),0)};t()}async _onConnectionStatus(e){if(this._isInitialized&&"connected"===e.status){const e=await this.acquireLock();await this.requestInitialContent()||this.putInitializedState(),this.releaseLock(e)}}}}}]);
//# sourceMappingURL=3640.a51d6839c14823d9fb7b.js.map