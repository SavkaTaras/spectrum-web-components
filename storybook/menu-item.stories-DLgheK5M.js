import './sp-icon-edit-t0rX_G5S.js';
import './sp-menu-Bj8DrbR9.js';
import './sp-menu-item-FIdNp82T.js';
import { x } from './lit-html-COgVUehj.js';
import './custom-tag-Diwq7nXX.js';
import './Edit-prqhnpZR.js';
import './IconBase-sFh2_uG3.js';
import './lit-element-BulMEkr1.js';
import './state-DWB0FQGh.js';
import './define-element-BacrH-dd.js';
import './sizedMixin-D27dvb1g.js';
import './query-DQF6X5qW.js';
import './base-u8Z1Hrsd.js';
import './icon-checkmark-overrides.css-DQNJ1kXI.js';
import './custom-tag-B5IH9PTE.js';
import './like-anchor-BTdhD6VU.js';
import './if-defined-DDJGFaN4.js';
import './focusable-Qk_nX99k.js';
import './focus-visible-D29Av9Xb.js';
import './sp-icon-chevron100-D9IXAw32.js';
import './Chevron100-OyV1wQMZ.js';
import './icon-chevron-overrides.css-Bz8Nk10Z.js';
import './DependencyManger-Dpkh1Bse.js';
import './mutation-controller-D2lT1xZk.js';
import './slottable-request-event-DXuuyGoq.js';
import './observe-slot-text-CG33WdGp.js';
import './query-assigned-nodes-DAYI4epk.js';
import './observe-slot-presence-Ceiwt-jV.js';
import './random-id-BST1Puzz.js';

var menuItem_stories = {
  component: "sp-menu-item",
  title: "Menu Item"
};
const Default = () => {
  return x`
        <sp-menu>
            <sp-menu-item>Menu Item</sp-menu-item>
        </sp-menu>
    `;
};
const noWrap = () => {
  return x`
        <sp-menu style="width: 150px;">
            <sp-menu-item no-wrap>
                Select a Country with a very long label, too long, in fact
            </sp-menu-item>
        </sp-menu>
    `;
};
const descriptionSlot = () => {
  return x`
        <sp-menu>
            <sp-menu-item>
                Quick export
                <span slot="description">Share a snapshot</span>
            </sp-menu-item>
        </sp-menu>
    `;
};
const valueSlot = () => {
  return x`
        <style>
            kbd {
                font-family: var(--spectrum-alias-body-text-font-family);
                white-space: nowrap;
            }
        </style>
        <sp-menu style="width: 150px;" selects="single">
            <sp-menu-item>
                Save
                <kbd slot="value">⌘​S</kbd>
            </sp-menu-item>
            <sp-menu-item selected>
                Save As...
                <kbd slot="value">⇧​⌘​S</kbd>
            </sp-menu-item>
            <sp-menu-item disabled>
                Save All
                <kbd slot="value">⌥​⌘​S</kbd>
            </sp-menu-item>
        </sp-menu>
    `;
};
const href = () => {
  return x`
        <sp-menu style="width: 150px;">
            <sp-menu-item
                href="https://opensource.adobe.com/spectrum-web-components"
            >
                <sp-icon-edit slot="icon"></sp-icon-edit>
                Edit the Documentation Site
            </sp-menu-item>
        </sp-menu>
    `;
};
const __namedExportsOrder = ['Default', 'noWrap', 'descriptionSlot', 'valueSlot', 'href'];

export { Default, __namedExportsOrder, menuItem_stories as default, descriptionSlot, href, noWrap, valueSlot };
