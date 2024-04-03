import './sp-checkbox-j4ZFpjrl.js';
import './sp-field-group-gVlrbEym.js';
import { x } from './lit-html-GmIhAbMP.js';
import './CheckboxMixin-kidUFubh.js';
import './define-element-2SKaLcgv.js';
import './lit-element-xBOPiTek.js';
import './query-JMOstM_r.js';
import './base-STdhtiz1.js';
import './if-defined-pV6JZKXB.js';
import './sp-icon-checkmark300-om5e-DYg.js';
import './Checkmark300-WAcytU8S.js';
import './custom-tag-z2Xx81l9.js';
import './IconBase-6HeAKn4X.js';
import './spectrum-icon-checkmark.css-1U1WWTA-.js';
import './sp-icon-dash300-eD3Pp0lE.js';
import './Dash300-GtH_7nnW.js';
import './spectrum-icon-dash.css-itJ-5huq.js';
import './sizedMixin-i8vReDsT.js';
import './query-assigned-elements-1m6Cs7Ix.js';
import './FieldGroup-RQbVJGfw.js';
import './manage-help-text-f9KNpcsn.js';
import './condition-attribute-with-id-nb2zon-s.js';
import './random-id-M2k-wjyE.js';

var checkbox_stories = {
  component: "sp-checkbox",
  title: "Checkbox"
};
const Default = () => {
  return x`
        <sp-checkbox>Checkbox</sp-checkbox>
    `;
};
const readonly = () => {
  return x`
        <sp-checkbox checked readonly>Checkbox</sp-checkbox>
    `;
};
const Indeterminate = () => {
  return x`
        <sp-checkbox indeterminate>
            Checkbox, indeterminate, not checked
        </sp-checkbox>
        <br />
        <sp-checkbox indeterminate checked>
            Checkbox, indeterminate, checked
        </sp-checkbox>
    `;
};
const Checked = () => {
  return x`
        <sp-checkbox checked>Checkbox</sp-checkbox>
    `;
};
const emphasized = () => {
  return x`
        <sp-checkbox emphasized>Checkbox</sp-checkbox>
    `;
};
const emphasizedIndeterminate = () => {
  return x`
        <sp-checkbox emphasized indeterminate>Checkbox</sp-checkbox>
    `;
};
const emphasizedChecked = () => {
  return x`
        <sp-checkbox emphasized checked>Checkbox</sp-checkbox>
    `;
};
const emphasizedInvalid = () => {
  return x`
        <sp-checkbox emphasized invalid>Checkbox</sp-checkbox>
    `;
};
const emphasizedInvalidIndeterminate = () => {
  return x`
        <sp-checkbox emphasized invalid indeterminate>Checkbox</sp-checkbox>
    `;
};
const emphasizedInvalidChecked = () => {
  return x`
        <sp-checkbox emphasized invalid checked>Checkbox</sp-checkbox>
    `;
};
const Invalid = () => {
  return x`
        <sp-checkbox invalid>Checkbox</sp-checkbox>
    `;
};
const invalidIndeterminate = () => {
  return x`
        <sp-checkbox invalid indeterminate>Checkbox</sp-checkbox>
    `;
};
const invalidChecked = () => {
  return x`
        <sp-checkbox invalid checked>Checkbox</sp-checkbox>
    `;
};
const Autofocus = () => {
  return x`
        <sp-checkbox autofocus>Checkbox</sp-checkbox>
    `;
};
const Disabled = () => {
  return x`
        <sp-checkbox disabled>Checkbox</sp-checkbox>
    `;
};
const disabledChecked = () => {
  return x`
        <sp-checkbox disabled checked>Checkbox</sp-checkbox>
    `;
};
const disabledIndeterminate = () => {
  return x`
        <sp-checkbox disabled indeterminate>Checkbox</sp-checkbox>
    `;
};
const emphasizedDisabled = () => {
  return x`
        <sp-checkbox emphasized disabled>Checkbox</sp-checkbox>
    `;
};
const emphasizedDisabledIndeterminate = () => {
  return x`
        <sp-checkbox emphasized disabled indeterminate>Checkbox</sp-checkbox>
    `;
};
const emphasizedDisabledChecked = () => {
  return x`
        <sp-checkbox emphasized checked>Checkbox</sp-checkbox>
    `;
};
const tabIndexExample = () => {
  return x`
        <sp-field-group horizontal>
            <sp-checkbox tabindex="0">Checkbox 0</sp-checkbox>
            <sp-checkbox disabled tabindex="3">Checkbox 3</sp-checkbox>
            <sp-checkbox tabindex="4">Checkbox 4</sp-checkbox>
            <sp-checkbox tabindex="2" autofocus>Checkbox 2</sp-checkbox>
            <sp-checkbox tabindex="1">Checkbox 1</sp-checkbox>
        </sp-field-group>
    `;
};
const verticalTabIndexExample = () => {
  return x`
        <sp-field-group vertical>
            <sp-checkbox tabindex="0">Checkbox 0</sp-checkbox>
            <sp-checkbox disabled tabindex="3">Checkbox 3</sp-checkbox>
            <sp-checkbox tabindex="4">Checkbox 4</sp-checkbox>
            <sp-checkbox tabindex="2" autofocus>Checkbox 2</sp-checkbox>
            <sp-checkbox tabindex="1">Checkbox 1</sp-checkbox>
        </sp-field-group>
    `;
};
const __namedExportsOrder = ['Default', 'readonly', 'Indeterminate', 'Checked', 'emphasized', 'emphasizedIndeterminate', 'emphasizedChecked', 'emphasizedInvalid', 'emphasizedInvalidIndeterminate', 'emphasizedInvalidChecked', 'Invalid', 'invalidIndeterminate', 'invalidChecked', 'Autofocus', 'Disabled', 'disabledChecked', 'disabledIndeterminate', 'emphasizedDisabled', 'emphasizedDisabledIndeterminate', 'emphasizedDisabledChecked', 'tabIndexExample', 'verticalTabIndexExample'];

export { Autofocus, Checked, Default, Disabled, Indeterminate, Invalid, __namedExportsOrder, checkbox_stories as default, disabledChecked, disabledIndeterminate, emphasized, emphasizedChecked, emphasizedDisabled, emphasizedDisabledChecked, emphasizedDisabledIndeterminate, emphasizedIndeterminate, emphasizedInvalid, emphasizedInvalidChecked, emphasizedInvalidIndeterminate, invalidChecked, invalidIndeterminate, readonly, tabIndexExample, verticalTabIndexExample };
