import './sp-underlay-JqwB1eta.js';
import './sp-button-k0B6adN0.js';
import './sp-dialog-NYoaWY3i.js';
import { i } from './lit-element-xBOPiTek.js';
import { v } from './modal.css-JF8KQ-ZN.js';
import { f as firstFocusableIn } from './first-focusable-in-LZ7hcu4z.js';
import { F as FocusVisiblePolyfillMixin } from './focus-visible-68QWcOy-.js';
import { x, A } from './lit-html-GmIhAbMP.js';
import { n, S as SpectrumElement } from './define-element-tO8-r1bu.js';

const e=i`
    :host{box-sizing:border-box;visibility:hidden;pointer-events:none;z-index:2;transition:visibility 0s linear var(--mod-modal-transition-animation-duration,var(--spectrum-modal-transition-animation-duration));justify-content:center;align-items:center;block-size:stretch;inline-size:100vw;display:flex;position:fixed;top:0;left:0}:host([open]){visibility:visible}@media only screen and (device-width<=400px),only screen and (device-height<=350px){:host([responsive]){inline-size:100%;height:100%;max-inline-size:100%;border-radius:0;max-height:100%;margin-top:0}}
`;var m = e;

var p=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var o=(n,s,e,i)=>{for(var t=i>1?void 0:i?h(s,e):s,a=n.length-1,l;a>=0;a--)(l=n[a])&&(t=(i?l(s,e,t):l(t))||t);return i&&t&&p(s,e,t),t};class DialogBase extends FocusVisiblePolyfillMixin(SpectrumElement){constructor(){super(...arguments);this.dismissable=!1;this.open=!1;this.responsive=!1;this.transitionPromise=Promise.resolve();this.resolveTransitionPromise=()=>{};this.underlay=!1;this.animating=!1;}static get styles(){return [m,v]}get dialog(){return this.shadowRoot.querySelector("slot").assignedElements()[0]||this}async focus(){if(this.shadowRoot){const e=firstFocusableIn(this.dialog);e?(e.updateComplete&&await e.updateComplete,e.focus()):this.dialog.focus();}else super.focus();}overlayWillCloseCallback(){return this.open?(this.close(),!0):this.animating}dismiss(){this.dismissable&&this.close();}handleClose(e){e.stopPropagation(),this.close();}close(){this.open=!1;}dispatchClosed(){this.dispatchEvent(new Event("close",{bubbles:!0}));}handleTransitionEvent(e){this.dispatchEvent(new TransitionEvent(e.type,{bubbles:!0,composed:!0,propertyName:e.propertyName}));}handleUnderlayTransitionend(e){!this.open&&e.propertyName==="visibility"&&this.resolveTransitionPromise(),this.handleTransitionEvent(e);}handleModalTransitionend(e){(this.open||!this.underlay)&&this.resolveTransitionPromise(),this.handleTransitionEvent(e);}update(e){e.has("open")&&e.get("open")!==void 0&&(this.animating=!0,this.transitionPromise=new Promise(i=>{this.resolveTransitionPromise=()=>{this.animating=!1,i();};}),this.open||this.dispatchClosed()),super.update(e);}renderDialog(){return x`
            <slot></slot>
        `}render(){return x`
            ${this.underlay?x`
                      <sp-underlay
                          ?open=${this.open}
                          @close=${this.dismiss}
                          @transitionrun=${this.handleTransitionEvent}
                          @transitionend=${this.handleUnderlayTransitionend}
                          @transitioncancel=${this.handleTransitionEvent}
                      ></sp-underlay>
                  `:A}
            <div
                class="modal ${this.mode}"
                @transitionrun=${this.handleTransitionEvent}
                @transitionend=${this.handleModalTransitionend}
                @transitioncancel=${this.handleTransitionEvent}
                @close=${this.handleClose}
            >
                ${this.renderDialog()}
            </div>
        `}updated(e){e.has("open")&&this.open&&"updateComplete"in this.dialog&&"shouldManageTabOrderForScrolling"in this.dialog&&this.dialog.updateComplete.then(()=>{this.dialog.shouldManageTabOrderForScrolling();});}async getUpdateComplete(){const e=await super.getUpdateComplete();return await this.transitionPromise,e}}o([n({type:Boolean,reflect:!0})],DialogBase.prototype,"dismissable",2),o([n({type:Boolean,reflect:!0})],DialogBase.prototype,"open",2),o([n({type:String,reflect:!0})],DialogBase.prototype,"mode",2),o([n({type:Boolean})],DialogBase.prototype,"responsive",2),o([n({type:Boolean})],DialogBase.prototype,"underlay",2);

export { DialogBase as D };
