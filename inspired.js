/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,t,i)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:n,defineProperty:h,getOwnPropertyDescriptor:l,getOwnPropertyNames:c,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,g=globalThis,u=g.trustedTypes,f=u?u.emptyScript:"",v=g.reactiveElementPolyfillSupport,m=(t,e)=>t,w={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!n(t,e),x={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&h(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const r=s?.call(this);o.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...c(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:w).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=s,this[s]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??b)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[m("elementProperties")]=new Map,y[m("finalized")]=new Map,v?.({ReactiveElement:y}),(g.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,E=A.trustedTypes,P=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,M="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,I="?"+C,B=`<${I}>`,S=document,T=()=>S.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Q=Array.isArray,R="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,O=/>/g,J=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Y=/'/g,N=/"/g,X=/^(?:script|style|textarea|title)$/i,K=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),V=new WeakMap,Z=S.createTreeWalker(S,129);function q(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":"",a=U;for(let e=0;e<i;e++){const i=t[e];let n,h,l=-1,c=0;for(;c<i.length&&(a.lastIndex=c,h=a.exec(i),null!==h);)c=a.lastIndex,a===U?"!--"===h[1]?a=H:void 0!==h[1]?a=O:void 0!==h[2]?(X.test(h[2])&&(o=RegExp("</"+h[2],"g")),a=J):void 0!==h[3]&&(a=J):a===J?">"===h[0]?(a=o??U,l=-1):void 0===h[1]?l=-2:(l=a.lastIndex-h[2].length,n=h[1],a=void 0===h[3]?J:'"'===h[3]?N:Y):a===N||a===Y?a=J:a===H||a===O?a=U:(a=J,o=void 0);const d=a===J&&t[e+1].startsWith("/>")?" ":"";r+=a===U?i+B:l>=0?(s.push(n),i.slice(0,l)+M+i.slice(l)+C+d):i+C+(-2===l?e:d)}return[q(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class j{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const a=t.length-1,n=this.parts,[h,l]=G(t,e);if(this.el=j.createElement(h,i),Z.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Z.nextNode())&&n.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(M)){const e=l[r++],i=s.getAttribute(t).split(C),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?_:"?"===a[1]?tt:"@"===a[1]?et:$}),s.removeAttribute(t)}else t.startsWith(C)&&(n.push({type:6,index:o}),s.removeAttribute(t));if(X.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],T()),Z.nextNode(),n.push({type:2,index:++o});s.append(t[e],T())}}}else if(8===s.nodeType)if(s.data===I)n.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)n.push({type:7,index:o}),t+=C.length-1}o++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function L(t,e,i=t,s){if(e===F)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const r=k(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=L(t,o._$AS(t,e.values),o,s)),e}class z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??S).importNode(e,!0);Z.currentNode=s;let o=Z.nextNode(),r=0,a=0,n=i[0];for(;void 0!==n;){if(r===n.index){let e;2===n.type?e=new W(o,o.nextSibling,this,t):1===n.type?e=new n.ctor(o,n.name,n.strings,this,t):6===n.type&&(e=new it(o,this,t)),this._$AV.push(e),n=i[++a]}r!==n?.index&&(o=Z.nextNode(),r++)}return Z.currentNode=S,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class W{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),k(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>Q(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==D&&k(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=j.createElement(q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new z(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new j(t)),e}k(t){Q(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new W(this.S(T()),this.S(T()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class ${get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=L(this,t,e,0),r=!k(t)||t!==this._$AH&&t!==F,r&&(this._$AH=t);else{const s=t;let a,n;for(t=o[0],a=0;a<o.length-1;a++)n=L(this,s[i+a],e,a),n===F&&(n=this._$AH[a]),r||=!k(n)||n!==this._$AH[a],n===D?t=D:t!==D&&(t+=(n??"")+o[a+1]),this._$AH[a]=n}r&&!s&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class _ extends ${constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}}class tt extends ${constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==D)}}class et extends ${constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=L(this,t,e,0)??D)===F)return;const i=this._$AH,s=t===D&&i!==D||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==D&&(i===D||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const st=A.litHtmlPolyfillSupport;st?.(j,W),(A.litHtmlVersions??=[]).push("3.1.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ot extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new W(e.insertBefore(T(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}ot._$litElement$=!0,ot.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ot});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:ot}),(globalThis.litElementVersions??=[]).push("4.0.5");class at extends ot{static properties={chatbotId:{type:String,reflect:!0},config:{type:Object},loading:{type:Boolean},currentMessage:{type:String},conversation:{type:Array},quoteProgress:{type:Number},quoteData:{type:Object},selectedOptions:{type:Array},isInQuoteFlow:{type:Boolean},showSubmitButton:{type:Boolean},showFinalSubmitButton:{type:Boolean},isTyping:{type:Boolean},isOpen:{type:Boolean},themeColor:{type:String},position:{type:String}};static styles=r`
    :host {
      display: block;
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
    }

    /* Clase personalizada para el estilo del scroll */
    .custom-scrollbar {
        overflow-y: auto; /* Activa el scroll vertical */
        scrollbar-width: thin; /* Para Firefox */
        scrollbar-color: var(--theme-color, #0044cc); /* Para Firefox: color del scroll y el fondo */
    }

    /* Estilos específicos para navegadores basados en WebKit (Chrome, Safari, etc.) */
    .custom-scrollbar::-webkit-scrollbar {
        width: 12px; /* Ancho de la barra de scroll */
    }

    .custom-scrollbar::-webkit-scrollbar-track {
      background-color: var(--theme-color, #0044cc);
    }

    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: var(--theme-color, #0044cc);
        border-radius: 6px; /* Bordes redondeados del scroll */
        border: 3px solid #e5e7eb; /* Espacio entre el scroll y su contenedor */
    }

    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background-color: var(--theme-color, #0044cc);
    }

    .chat-container {
      position: fixed;
      margin:35px;
      width: 360px;
      max-height: 600px;
      background: white;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      font-family: "Arial", sans-serif;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
      opacity: 0;
      transform: translateY(20px);
    }

    .chat-container.open {
      opacity: 1;
      transform: translateY(0);
    }
    .chat-container.open.bottomright {
      right: 40px;
      bottom: 30px;
    }
    .chat-container.open.bottomleft {
      left: 40px;
      bottom: 30px;
    }
    .chat-container.open.topleft {
      left: 40px;
      top: 30px;
    }
    .chat-container.open.topright {
      right: 40px;
      top: 30px;
    }
    .chat-container.open.rightcenter {
      right: 50px;
      top: 30%;
    }
    .chat-container.open.leftcenter {
      left: 50px;
      top: 30%;
    }
    .header {
      display: flex;
      align-items: center;
      background-color: var(--theme-color, #0044cc);
      color: white;
      padding: 14px;
      font-size: 16px;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
    }
    .header img {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      margin-right: 10px;
      background: white;
      padding: 2px;
      object-fit: contain;
    }
    .chat-content {
      max-height: 400px;
      overflow-y: auto;
      padding: 16px;
      background: #f7f9fc;
      scroll-behavior: smooth;
    }
    .message {
      margin: 12px 0;
      padding: 12px;
      border-radius: 12px;
      font-size: 14px;
      position: relative;
      word-wrap: break-word;
      max-width: 80%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    .message.bot {
      background-color: #e6f7ff;
      text-align: left;
      align-self: flex-start;
    }
    .message.user {
      background-color: #d4edda;
      text-align: right;
      align-self: flex-end;
      margin-left: auto;
    }
    .message-time {
      font-size: 10px;
      color: #666;
      display: block;
      margin-top: 6px;
    }
    .input-area {
      display: flex;
      padding: 12px;
      background: #ffffff;
      border-top: 1px solid #e0e0e0;
    }
    .input-area input {
      flex: 1;
      padding: 12px;
      border-radius: 24px;
      border: 1px solid #ccc;
      font-size: 14px;
      outline: none;
    }
    .input-area button {
      background-color: var(--theme-color, #0044cc);
      color: white;
      padding: 12px 18px;
      border: none;
      margin-left: 8px;
      border-radius: 24px;
      cursor: pointer;
      font-size: 14px;
      transition: background-color 0.3s ease;
    }
    .input-area button:hover {
      background-color: var(--theme-hover-color, #0033aa);
    }
    .checkbox-option {
      display: flex;
      align-items: center;
      margin: 8px 0;
      padding: 10px;
      background-color: #e6f7ff;
      color: #333;
      border-radius: 10px;
      font-size: 14px;
    }
    .checkbox-option input {
      margin-right: 10px;
    }
    .option-button {
      display: block;
      width: 100%;
      margin: 8px 0;
      padding: 12px;
      background-color: var(--theme-color, #0044cc);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      text-align: center;
      font-size: 14px;
      transition: background-color 0.3s ease;
    }
    .option-button:hover {
      background-color: var(--theme-hover-color, #0033aa);
    }
    .list-item {
      padding-left: 16px;
      list-style: disc;
    }
    .faq-item {
      margin-bottom: 10px;
    }
    .faq-question {
      font-weight: bold;
    }
    .typing-indicator {
      display: flex;
      align-items: center;
      font-style: italic;
      color: #888;
      margin: 10px 0;
    }
    .typing-indicator .dot {
      width: 8px;
      height: 8px;
      background-color: #888;
      border-radius: 50%;
      margin: 0 2px;
      animation: bounce 1.5s infinite;
    }
    .typing-indicator .dot:nth-child(2) {
      animation-delay: 0.2s;
    }
    .typing-indicator .dot:nth-child(3) {
      animation-delay: 0.4s;
    }
    @keyframes bounce {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-6px);
      }
    }
    .chat-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
      background-color: var(--theme-color, #6200ea);
      border-radius: 50%;
      color: white;
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
      z-index: 1001;
    }

    .chat-button img {
      width: 40px;
    }

    

    @media (max-width: 500px) {
      .chat-container {
        position: fixed;
        bottom: 90px;
        right: 20px;
        width: 360px;
        max-height: 600px;
        background: white;
        border-radius: 16px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        font-family: "Arial", sans-serif;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        opacity: 0;
        transform: translateY(20px);
      }
      .header {
        font-size: 14px;
        padding: 10px;
      }
      .message {
        font-size: 12px;
        padding: 10px;
      }
      .input-area input,
      .input-area button {
        padding: 10px;
        font-size: 12px;
      }

      .chat-container.open.bottomright {
      right: -25px;
      bottom: 50px;
      }

    .chat-container.open.bottomleft,
    .chat-container.open.bottomcenter {
      left: -25px;
      bottom: 50px;
    }

    .chat-container.open.topleft,
    .chat-container.open.topcenter {
      left: -25px;
      top: 50px;
      height: 550px;

    }
    .chat-container.open.topright {
      right: -25px;
      top: 50px;
      height: 550px;

    }
    .chat-container.open.rightcenter {
      right: -25px;
      top: 50px;
      height: 550px;


    }
    .chat-container.open.leftcenter {
      left: -25px;
      top: 50px;
      max-height: 550px;

    }
    .chat-button.open.rightcenter,
    .chat-button.open.leftcenter{
      top: 50px;
    }
    
    }

    /* Positioning */
    .topleft {
      top: 20px;
      left: 20px;
    }

    .topcenter {
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
    }

    .topright {
      top: 20px;
      right: 20px;
    }

    .bottomleft {
      bottom: 20px;
      left: 20px;
    }

    .bottomcenter {
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }

    .bottomright {
      bottom: 20px;
      right: 20px;
    }

    .rightcenter {
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
    }

    .leftcenter {
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
    }
  `;constructor(){super(),this.chatbotId="",this.config=null,this.loading=!1,this.currentMessage="",this.conversation=[],this.quoteProgress=0,this.quoteData={},this.selectedOptions=[],this.isInQuoteFlow=!1,this.showSubmitButton=!1,this.showFinalSubmitButton=!1,this.isTyping=!1,this.isOpen=!1,this.themeColor="#0044cc",this.position="bottomright"}toggleChat(){this.isOpen=!this.isOpen}firstUpdated(){this.scrollToBottom()}updated(t){t.has("chatbotId")&&this.fetchChatbotConfig(),this.scrollToBottom()}async fetchChatbotConfig(){if(this.chatbotId){this.loading=!0;try{const t=await fetch(`https://api-inspired-4e322fa633ca.herokuapp.com/chat-bot/config/${this.chatbotId}`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);this.config=await t.json(),this.themeColor=this.config.color||"#0044cc",this.position=this.config.position||"bottomright",this.style.setProperty("--theme-color",this.themeColor),this.style.setProperty("--theme-hover-color",this.adjustColorBrightness(this.themeColor,-20)),this.addBotMessage(this.config.defaultMessages.find((t=>"welcome"===t.type)).message),console.log("Fetched Config:",this.config)}catch(t){console.error("Error fetching chatbot config:",t),this.config=null}finally{this.loading=!1}}}adjustColorBrightness(t,e){let i=!1;"#"==t[0]&&(t=t.slice(1),i=!0);const s=parseInt(t,16);let o=(s>>16)+e;o=o>255?255:o<0?0:o;let r=(s>>8&255)+e;r=r>255?255:r<0?0:r;let a=(255&s)+e;return a=a>255?255:a<0?0:a,(i?"#":"")+(o<<16|r<<8|a).toString(16).padStart(6,"0")}async addBotMessage(t,e=[],i=[]){this.isTyping=!0,this.requestUpdate(),await new Promise((t=>setTimeout(t,2e3)));const s=(new Date).toLocaleTimeString();this.conversation=[...this.conversation,{type:"bot",text:t,options:e,additionalContent:i,time:s}],this.isTyping=!1,this.requestUpdate(),this.scrollToBottom(),console.log("Added Bot Message:",t,e,i)}addUserMessage(t){const e=(new Date).toLocaleTimeString();this.conversation=[...this.conversation,{type:"user",text:t,time:e}],console.log("Added User Message:",t)}handleUserInput(t){"Enter"!==t.key&&"click"!==t.type||this.currentMessage.trim()&&(this.addUserMessage(this.currentMessage),this.isInQuoteFlow?this.saveQuoteData():this.handleBotResponse(this.currentMessage),this.currentMessage="")}async handleBotResponse(t){const e=this.config.defaultMessages.find((t=>"menu"===t.type));await this.addBotMessage(e.message,e.options)}async handleOptionClick(t){if("request_quote"===t.action||"show_services"===t.action)this.displayServices();else if("submit_quote"===t.action)await this.completeQuoteProcess();else if("send_whatsapp"===t.action){const t=`https://wa.me/${this.config.whatsappNumber||"+0000000000"}`;window.open(t,"_blank")}else if("show_menu"===t.action){const t=this.config.defaultMessages.find((t=>"menu"===t.type));t&&await this.addBotMessage(t.message,t.options)}else if(this.isInQuoteFlow=!1,t.response)for(let e of t.response)"text"===e.type?await this.addBotMessage(e.message):"list"===e.type?await this.addBotMessage(this.renderList(e.items)):"faq"===e.type&&await this.addBotMessage(this.renderFAQ(e.items));else console.error("No response found for this option:",t)}displayServices(){this.isInQuoteFlow=!0,this.quoteProgress=1;const t=this.config.defaultMessages.find((t=>"menu"===t.type)).options.find((t=>"request_quote"===t.action||"show_services"===t.action));if(t&&t.response&&t.response.length>1){const e=t.response[1].items;e&&e.length>0?(this.addBotMessage("",[],this.renderCheckboxOptions(e)),this.addBotMessage("Please select the Option you're interested in:")):this.addBotMessage("No options available at this time.")}}renderCheckboxOptions(t){return t.map((t=>K`
        <div class="checkbox-option">
          <input
            type="checkbox"
            value="${t}"
            @change=${this.handleCheckboxChange}
          />
          ${t}
        </div>
      `))}handleCheckboxChange(t){const e=t.target.value;t.target.checked?this.selectedOptions=[...this.selectedOptions,e]:this.selectedOptions=this.selectedOptions.filter((t=>t!==e)),console.log("Selected Options:",this.selectedOptions),this.showSubmitButton=this.selectedOptions.length>0}async saveQuoteData(){const t=[{label:"nameClient",message:"Please enter your name:"},{label:"email",message:"Please enter your email address:",validate:this.validateEmail},{label:"phone",message:"Please enter your phone number:",validate:this.validatePhone},{label:"address",message:"Please enter your address:"}];if(1===this.quoteProgress&&this.selectedOptions.length>0)await this.addBotMessage("You have selected the following options: "+this.selectedOptions.join(", ")),await this.addBotMessage(t[0].message),this.quoteProgress++;else if(this.quoteProgress>=2&&this.quoteProgress<=t.length+1){const e=t[this.quoteProgress-2],i=e.validate;i&&!i(this.currentMessage)?await this.addBotMessage(`Invalid input. ${e.message}`):(this.quoteData[e.label]=this.currentMessage,this.quoteProgress<t.length+1?await this.addBotMessage(t[this.quoteProgress-1].message):this.quoteProgress===t.length+1&&(this.showFinalSubmitButton=!0),this.quoteProgress++)}}validateEmail(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}validatePhone(t){return/^[0-9\- ]+$/.test(t)}async completeQuoteProcess(){const t=this.config.emails.join(",");this.quoteData.toEmail=t,this.quoteData.services=this.selectedOptions,console.log("Quote Data:",this.quoteData),await this.sendQuoteEmail(this.quoteData),await this.addBotMessage("Thank you! Your request has been submitted."),this.isInQuoteFlow=!1,this.showSubmitButton=!1,this.showFinalSubmitButton=!1,this.quoteProgress=0,this.quoteData={},this.selectedOptions=[],await new Promise((t=>setTimeout(t,2e3))),await this.addBotMessage("Is there anything else I can assist you with?",[],[]),await this.addBotMessage("",[{label:"Show Menu",action:"show_menu"}])}async sendQuoteEmail(t){this.isTyping=!0,this.requestUpdate();try{const e=await fetch("https://api-inspired-4e322fa633ca.herokuapp.com/chat-bot",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),i=await e.json();if("Email sent successfully"!==i.msg)throw new Error(i.msg);{const e={...t,emailFromChatBot:this.config.chatbotId},i=await fetch("https://api-inspired-4e322fa633ca.herokuapp.com/chat-bot/save-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),s=await i.json();if("Email guardado exitosamente"!==s.message)throw new Error(s.error||"Error al guardar los datos");this.isTyping=!1,this.requestUpdate()}}catch(t){this.isTyping=!1,this.addBotMessage("There was an error sending your request."),console.error("Error sending email or saving data:",t)}}renderList(t){return K`
      <ul>
        ${t.map((t=>K`<li class="list-item">${t}</li>`))}
      </ul>
    `}renderFAQ(t){return K`
      <div>
        ${t.map((t=>K`
            <div class="faq-item">
              <div class="faq-question">${t.question}</div>
              <div class="faq-answer">${t.answer}</div>
            </div>
          `))}
      </div>
    `}scrollToBottom(){const t=this.shadowRoot.querySelector(".chat-content");t&&(t.scrollTop=t.scrollHeight)}render(){const t="data:image/png;base64,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";return K`
      <div class="chat-button ${this.isOpen?"open":""}  ${this.position}" @click="${this.toggleChat}">
        <img src="${t}" alt="Chat Button" />
      </div>
      <div class="chat-container ${this.isOpen?"open":""} ${this.position}">
        <div class="header">
          <img src="${t}" class="chat-header-img" alt="Logo" />
          ${this.config?this.config.companyName:"Chatbot"}
        </div>
        <div class="chat-content custom-scrollbar">
          ${this.loading?K`<p>Loading...</p>`:this.conversation.map((t=>K`
                  <div class="message ${t.type}">
                    ${t.text}
                    ${t.options&&t.options.length>0?t.options.map((t=>K`
                            <button
                              class="option-button"
                              @click=${()=>this.handleOptionClick(t)}
                            >
                              ${t.label}
                            </button>
                          `)):""}
                    ${t.additionalContent&&t.additionalContent.length>0?t.additionalContent:""}
                    <span class="message-time">${t.time}</span>
                  </div>
                `))}
          ${this.isTyping?K`
                <div class="typing-indicator">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              `:""}
          ${this.isInQuoteFlow&&1===this.quoteProgress?K`
                ${this.renderCheckboxOptions(this.config.availableServices||[])}
                ${this.showSubmitButton?K`
                      <button
                        class="option-button"
                        @click=${()=>{this.saveQuoteData()}}
                      >
                        Submit Selected Option
                      </button>
                    `:""}
              `:""}
          ${this.showFinalSubmitButton?K`
                <button
                  class="option-button"
                  @click=${this.completeQuoteProcess}
                >
                  Send Information
                </button>
              `:""}
        </div>
        <div class="input-area">
          <input
            type="text"
            .value=${this.currentMessage}
            @input=${t=>this.currentMessage=t.target.value}
            @keypress=${this.handleUserInput}
            placeholder="Type a message..."
          />
          <button @click=${this.handleUserInput}>Send</button>
        </div>
      </div>
    `}}class nt extends ot{static properties={widgetId:{type:String,reflect:!0},activeTab:{type:String,reflect:!0},displayedReviewsCount:{type:Number},loading:{type:Boolean},overallRating:{type:String},totalReviews:{type:Number}};static styles=r`
    :host {
      display: block;
      padding: 16px;
      background: #f9f9f9;
      box-sizing: border-box;
    }
    .tabs {
      display: flex;
      gap: 8px;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }
    .tab {
      padding: 8px 16px;
      border-radius: 16px;
      cursor: pointer;
      text-transform: uppercase;
      background: #e0e0e0;
      transition: background 0.3s, color 0.3s;
      font-weight: bold;
    }
    .tab.active {
      background: var(--active-tab-bg, #007bff);
      color: #fff;
    }
    .reviews-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 16px;
    }
    .review-card {
      background: #fff;
      padding: 20px;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      transition: transform 0.3s;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .review-card:hover {
      transform: translateY(-1px);
    }
    .reviewer-info {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    }
    .review-card img,
    .default-user-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-bottom: 8px;
    }
    .review-card h3 {
      margin: 0 0 8px 0;
      font-size: 18px;
      color: #333;
    }
    .review-card p {
      margin: 8px 0;
      color: #555;
      line-height: 1.5;
    }
    .review-card .stars {
      color: #f5b50a;
      margin-bottom: 8px;
    }
    .default-user-icon {
      background-color: #ccc;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .review-text {
      overflow: hidden;
      max-height: 110px;
      text-overflow: ellipsis;
      position: relative;
    }
    .review-text.expanded {
      max-height: none;
    }
    .read-more {
      color: var(--active-tab-bg, #007bff);
      cursor: pointer;
      font-weight: bold;
      text-align: right;
    }
    .load-more {
      text-align: center;
      margin-top: 20px;
    }
    .load-more button {
      padding: 10px 20px;
      border: none;
      background-color: var(--active-tab-bg, #007bff);
      color: white;
      font-size: 16px;
      cursor: pointer;
      border-radius: 5px;
    }
    .write-review {
      text-align: right;
      margin-top: 20px;
    }
    .write-review a {
      padding: 10px 20px;
      background-color: var(--active-tab-bg, #007bff);
      color: white;
      font-size: 16px;
      text-decoration: none;
      border-radius: 5px;
      display: inline-block;
    }
    .header {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
    .rating-summary {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .rating-summary .stars {
      font-size: 24px;
      color: #f5b50a;
    }
    .overall-rating {
      margin-bottom: 16px;
      font-size: 20px;
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .spinner {
      border: 4px solid rgba(0, 0, 0, 0.1);
      border-left-color: var(--active-tab-bg, #007bff);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
      margin: 0 auto;
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;constructor(){super(),this.widgetId="",this.activeTab="",this.apiEndpoint="https://api-inspired-4e322fa633ca.herokuapp.com",this.reviews={gmb:{reviews:[],url:""},yelp:{reviews:[],url:""},homeadvisor:{reviews:[],url:""},angi:{reviews:[],url:""},thumbtack:{reviews:[],url:""},bbb:{reviews:[],url:""}},this.displayedReviewsCount=12,this.loading=!1,this.overallRating="0.0",this.totalReviews=0}updated(t){t.has("widgetId")&&(console.log(`Updated widgetId: ${this.widgetId}`),this.fetchReviews())}async fetchReviews(){if(!this.apiEndpoint||!this.widgetId)throw new Error("Missing apiEndpoint or widgetId");const t=`${this.apiEndpoint}/get-reviews/${this.widgetId}`;this.loading=!0;try{const e=await fetch(t);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const i=await e.json();this.reviews=i.reviews||{gmb:{reviews:[],url:""},yelp:{reviews:[],url:""},homeadvisor:{reviews:[],url:""},angi:{reviews:[],url:""},thumbtack:{reviews:[],url:""},bbb:{reviews:[],url:""}},this.calculateOverallRating(),this.setDefaultTab()}catch(t){console.error("Error fetching reviews:",t),this.reviews={gmb:{reviews:[],url:""},yelp:{reviews:[],url:""},homeadvisor:{reviews:[],url:""},angi:{reviews:[],url:""},thumbtack:{reviews:[],url:""},bbb:{reviews:[],url:""}}}finally{this.loading=!1,this.requestUpdate()}}calculateOverallRating(){const t=[...this.reviews.gmb.reviews,...this.reviews.yelp.reviews,...this.reviews.homeadvisor.reviews,...this.reviews.angi.reviews,...this.reviews.thumbtack.reviews,...this.reviews.bbb.reviews],e=t.reduce(((t,e)=>t+(e.stars.includes("stars")?parseInt(e.stars.split(" ")[0]):parseInt(e.stars))),0);this.totalReviews=t.length,this.overallRating=this.totalReviews>0?(e/this.totalReviews).toFixed(1):"0.0"}setDefaultTab(){const t=["gmb","yelp","homeadvisor","angi"];for(let e of t)if(this.reviews[e]&&this.reviews[e].reviews.length>0)return void(this.activeTab=e);this.activeTab=t[0]}handleTabClick(t){this.activeTab=t,this.displayedReviewsCount=12}toggleReadMore(t){const e=t.target.previousElementSibling;e.classList.toggle("expanded"),t.target.textContent=e.classList.contains("expanded")?"Hide":"Read more"}loadMoreReviews(){this.displayedReviewsCount+=12}renderTabs(t){return["gmb","yelp","homeadvisor","angi","thumbtack","bbb"].map((e=>{const i=this.calculateAverageStars(t[e].reviews);return t[e]&&t[e].reviews.length>0?K`<div
            class="tab ${this.activeTab===e?"active":""}"
            @click=${()=>this.handleTabClick(e)}
          >
            ${e.charAt(0).toUpperCase()+e.slice(1)} Reviews
            (${i}⭐)
          </div>`:""}))}calculateAverageStars(t){if(!t||0===t.length)return 0;return(t.reduce(((t,e)=>t+(e.stars.includes("stars")?parseInt(e.stars.split(" ")[0]):parseInt(e.stars))),0)/t.length).toFixed(1)}renderStars(t){const e=parseInt(t,10);return K`${"⭐".repeat(e)} ${e}.0`}renderReviews(t){return t[this.activeTab]&&t[this.activeTab].reviews&&0!==t[this.activeTab].reviews.length?t[this.activeTab].reviews.slice(0,this.displayedReviewsCount).map((t=>K`
          <div class="review-card">
            <div class="reviewer-info">
              ${t.profilePic?K`<img src="${t.profilePic}" alt="Profile" />`:K`<div class="default-user-icon">👤</div>`}
              <div>
                <h3>${t.author||"Anonymous"}</h3>
                <p>${t.time}</p>
              </div>
            </div>
            <div>
              <div class="stars">${this.renderStars(t.stars)}</div>
            </div>
            ${t.review?K`
                  <div class="review-text">${t.review}</div>
                  ${t.review.length>200?K`
                        <div class="read-more" @click=${this.toggleReadMore}>
                          Read more
                        </div>
                      `:""}
                `:""}
          </div>
        `)):K`<p>No reviews available for ${this.activeTab}</p>`}render(){const t=this.reviews[this.activeTab]||{reviews:[],url:""};return K`
      <div class="header">
        <div class="tabs">${this.renderTabs(this.reviews)}</div>
        ${t.url?K`<div class="write-review">
              <a href="${t.url}" target="_blank">Write a Review</a>
            </div>`:""}
      </div>
      ${this.loading?K`<div class="spinner"></div>`:K`
            <div class="overall-rating">
              Overall Rating: ${this.overallRating} ⭐ (${this.totalReviews}
              reviews)
            </div>
            <div class="reviews-grid">${this.renderReviews(this.reviews)}</div>
            ${t.reviews.length>this.displayedReviewsCount?K`
                  <div class="load-more">
                    <button @click=${this.loadMoreReviews}>Load More</button>
                  </div>
                `:""}
          `}
    `}}customElements.define("chat-bot",at),customElements.define("review-widget",nt);
//# sourceMappingURL=index.js.map
