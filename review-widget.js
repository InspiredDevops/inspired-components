/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(s,t,i)},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:h,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:c,getPrototypeOf:p}=Object,u=globalThis,v=u.trustedTypes,g=v?v.emptyScript:"",$=u.reactiveElementPolyfillSupport,f=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!a(t,e),w={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&h(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const o=s?.call(this);r.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...d(t),...c(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:m).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=s,this[s]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??b)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[f("elementProperties")]=new Map,_[f("finalized")]=new Map,$?.({ReactiveElement:_}),(u.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const y=globalThis,A=y.trustedTypes,x=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+S,R=`<${C}>`,T=document,P=()=>T.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,H="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,O=/>/g,I=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,L=/"/g,j=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),V=new WeakMap,q=T.createTreeWalker(T,129);function F(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":"",n=N;for(let e=0;e<i;e++){const i=t[e];let a,h,l=-1,d=0;for(;d<i.length&&(n.lastIndex=d,h=n.exec(i),null!==h);)d=n.lastIndex,n===N?"!--"===h[1]?n=M:void 0!==h[1]?n=O:void 0!==h[2]?(j.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=I):void 0!==h[3]&&(n=I):n===I?">"===h[0]?(n=r??N,l=-1):void 0===h[1]?l=-2:(l=n.lastIndex-h[2].length,a=h[1],n=void 0===h[3]?I:'"'===h[3]?L:z):n===L||n===z?n=I:n===M||n===O?n=N:(n=I,r=void 0);const c=n===I&&t[e+1].startsWith("/>")?" ":"";o+=n===N?i+R:l>=0?(s.push(a),i.slice(0,l)+E+i.slice(l)+S+c):i+S+(-2===l?e:c)}return[F(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[h,l]=J(t,e);if(this.el=K.createElement(h,i),q.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=q.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(E)){const e=l[o++],i=s.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?X:"?"===n[1]?tt:"@"===n[1]?et:Q}),s.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(j.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],P()),q.nextNode(),a.push({type:2,index:++r});s.append(t[e],P())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)a.push({type:7,index:r}),t+=S.length-1}r++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){if(e===B)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const o=U(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Z(t,r._$AS(t,e.values),r,s)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);q.currentNode=s;let r=q.nextNode(),o=0,n=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new G(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new it(r,this,t)),this._$AV.push(e),a=i[++n]}o!==a?.index&&(r=q.nextNode(),o++)}return q.currentNode=T,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),U(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>k(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==W&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(F(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Y(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new K(t)),e}k(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new G(this.S(P()),this.S(P()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=Z(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==B,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=Z(this,s[i+n],e,n),a===B&&(a=this._$AH[n]),o||=!U(a)||a!==this._$AH[n],a===W?t=W:t!==W&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class tt extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class et extends Q{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??W)===B)return;const i=this._$AH,s=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==W&&(i===W||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const st=y.litHtmlPolyfillSupport;st?.(K,G),(y.litHtmlVersions??=[]).push("3.1.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class rt extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new G(e.insertBefore(P(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}rt._$litElement$=!0,rt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:rt});const ot=globalThis.litElementPolyfillSupport;ot?.({LitElement:rt}),(globalThis.litElementVersions??=[]).push("4.0.5");class nt extends rt{static properties={widgetId:{type:String,reflect:!0},activeTab:{type:String,reflect:!0},displayedReviewsCount:{type:Number},loading:{type:Boolean},overallRating:{type:String},totalReviews:{type:Number}};static styles=o`
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
  `;constructor(){super(),this.widgetId="",this.activeTab="",this.apiEndpoint="https://api-inspired-4e322fa633ca.herokuapp.com",this.reviews={gmb:{reviews:[],url:""},yelp:{reviews:[],url:""},homeadvisor:{reviews:[],url:""},angi:{reviews:[],url:""},thumbtack:{reviews:[],url:""},bbb:{reviews:[],url:""}},this.displayedReviewsCount=12,this.loading=!1,this.overallRating="0.0",this.totalReviews=0}updated(t){t.has("widgetId")&&(console.log(`Updated widgetId: ${this.widgetId}`),this.fetchReviews())}async fetchReviews(){if(!this.apiEndpoint||!this.widgetId)throw new Error("Missing apiEndpoint or widgetId");const t=`${this.apiEndpoint}/get-reviews/${this.widgetId}`;this.loading=!0;try{const e=await fetch(t);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const i=await e.json();this.reviews=i.reviews||{gmb:{reviews:[],url:""},yelp:{reviews:[],url:""},homeadvisor:{reviews:[],url:""},angi:{reviews:[],url:""},thumbtack:{reviews:[],url:""},bbb:{reviews:[],url:""}},this.calculateOverallRating(),this.setDefaultTab()}catch(t){console.error("Error fetching reviews:",t),this.reviews={gmb:{reviews:[],url:""},yelp:{reviews:[],url:""},homeadvisor:{reviews:[],url:""},angi:{reviews:[],url:""},thumbtack:{reviews:[],url:""},bbb:{reviews:[],url:""}}}finally{this.loading=!1,this.requestUpdate()}}calculateOverallRating(){const t=[...this.reviews.gmb.reviews,...this.reviews.yelp.reviews,...this.reviews.homeadvisor.reviews,...this.reviews.angi.reviews,...this.reviews.thumbtack.reviews,...this.reviews.bbb.reviews],e=t.reduce(((t,e)=>t+(e.stars.includes("stars")?parseInt(e.stars.split(" ")[0]):parseInt(e.stars))),0);this.totalReviews=t.length,this.overallRating=this.totalReviews>0?(e/this.totalReviews).toFixed(1):"0.0"}setDefaultTab(){const t=["gmb","yelp","homeadvisor","angi"];for(let e of t)if(this.reviews[e]&&this.reviews[e].reviews.length>0)return void(this.activeTab=e);this.activeTab=t[0]}handleTabClick(t){this.activeTab=t,this.displayedReviewsCount=12}toggleReadMore(t){const e=t.target.previousElementSibling;e.classList.toggle("expanded"),t.target.textContent=e.classList.contains("expanded")?"Hide":"Read more"}loadMoreReviews(){this.displayedReviewsCount+=12}renderTabs(t){return["gmb","yelp","homeadvisor","angi","thumbtack","bbb"].map((e=>{const i=this.calculateAverageStars(t[e].reviews);return t[e]&&t[e].reviews.length>0?D`<div
            class="tab ${this.activeTab===e?"active":""}"
            @click=${()=>this.handleTabClick(e)}
          >
            ${e.charAt(0).toUpperCase()+e.slice(1)} Reviews
            (${i}⭐)
          </div>`:""}))}calculateAverageStars(t){if(!t||0===t.length)return 0;return(t.reduce(((t,e)=>t+(e.stars.includes("stars")?parseInt(e.stars.split(" ")[0]):parseInt(e.stars))),0)/t.length).toFixed(1)}renderStars(t){const e=parseInt(t,10);return D`${"⭐".repeat(e)} ${e}.0`}renderReviews(t){return t[this.activeTab]&&t[this.activeTab].reviews&&0!==t[this.activeTab].reviews.length?t[this.activeTab].reviews.slice(0,this.displayedReviewsCount).map((t=>D`
          <div class="review-card">
            <div class="reviewer-info">
              ${t.profilePic?D`<img src="${t.profilePic}" alt="Profile" />`:D`<div class="default-user-icon">👤</div>`}
              <div>
                <h3>${t.author||"Anonymous"}</h3>
                <p>${t.time}</p>
              </div>
            </div>
            <div>
              <div class="stars">${this.renderStars(t.stars)}</div>
            </div>
            ${t.review?D`
                  <div class="review-text">${t.review}</div>
                  ${t.review.length>200?D`
                        <div class="read-more" @click=${this.toggleReadMore}>
                          Read more
                        </div>
                      `:""}
                `:""}
          </div>
        `)):D`<p>No reviews available for ${this.activeTab}</p>`}render(){const t=this.reviews[this.activeTab]||{reviews:[],url:""};return D`
      <div class="header">
        <div class="tabs">${this.renderTabs(this.reviews)}</div>
        ${t.url?D`<div class="write-review">
              <a href="${t.url}" target="_blank">Write a Review</a>
            </div>`:""}
      </div>
      ${this.loading?D`<div class="spinner"></div>`:D`
            <div class="overall-rating">
              Overall Rating: ${this.overallRating} ⭐ (${this.totalReviews}
              reviews)
            </div>
            <div class="reviews-grid">${this.renderReviews(this.reviews)}</div>
            ${t.reviews.length>this.displayedReviewsCount?D`
                  <div class="load-more">
                    <button @click=${this.loadMoreReviews}>Load More</button>
                  </div>
                `:""}
          `}
    `}}customElements.define("review-widget",nt);
//# sourceMappingURL=review-widget.js.map
