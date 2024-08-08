import './sp-textfield-CzL0xtaq.js';
import './sp-field-label-BIZFvuFw.js';
import './sp-help-text-C3terx83.js';
import { x } from './lit-html-COgVUehj.js';
import './Textfield-B9xppFgm.js';
import './manage-help-text-83_bseGo.js';
import './condition-attribute-with-id-Cnyhr7Mp.js';
import './random-id-BST1Puzz.js';
import './if-defined-DDJGFaN4.js';
import './focusable-DH4iFM4s.js';
import './focus-visible-D29Av9Xb.js';
import './define-element-DfDMCiEa.js';
import './lit-element-BL-po2DW.js';
import './spectrum-icon-checkmark.css-aJBgz3nt.js';
import './custom-tag-B5IH9PTE.js';
import './IconBase-Fm5B4nA1.js';
import './sp-icon-alert-BytVFlW2.js';
import './custom-tag-Diwq7nXX.js';
import './directive-Bn5c4u4M.js';
import './directive-helpers-icdnqxxc.js';
import './sizedMixin-Cgw04SVn.js';
import './state-Bu2qBYzT.js';
import './query-DQF6X5qW.js';
import './base-u8Z1Hrsd.js';
import './ElementResolution-B9KteuX8.js';

var textfield_stories = {
  component: "sp-textfield",
  title: "Textfield"
};
const Default = () => {
  return x`
        <sp-textfield placeholder="Enter your name"></sp-textfield>
        <sp-textfield placeholder="Enter your name" disabled></sp-textfield>
        <sp-textfield
            placeholder="Enter your name"
            pattern="[\\w\\s]*"
            required
            value="A valid input"
        ></sp-textfield>
        <sp-textfield
            placeholder="Enter your name"
            pattern="[\\w\\s]*"
            required
            value="A valid input"
            disabled
        ></sp-textfield>
        <sp-textfield
            placeholder="Enter your name"
            pattern="[\\d]*"
            value="Not a valid input"
        ></sp-textfield>
        <sp-textfield
            placeholder="Enter your name"
            pattern="^[\\d]$"
            required
            value="Not a valid input"
            disabled
        ></sp-textfield>
    `;
};
const growsOnly = () => {
  return x`
        <sp-field-label for="grows-only">
            This Textfield has the "grows" attribute without the "multiline"
            attribute
        </sp-field-label>
        <sp-textfield
            grows
            id="grows-only"
            placeholder="Does not grow or display incorrectly"
        ></sp-textfield>
    `;
};
const quiet = () => {
  return x`
        <sp-field-label for="name">Enter your name</sp-field-label>
        <sp-textfield
            autofocus
            id="name"
            placeholder="This Text Field doesn't make much noise"
            quiet
        ></sp-textfield>
    `;
};
const notRequiredWithPattern = () => {
  return x`
        <sp-textfield
            placeholder="Enter z, x, c, or v"
            pattern="[zxcv]+"
        ></sp-textfield>
    `;
};
const allowedKeys = () => {
  return x`
        <sp-textfield
            placeholder="Enter your name"
            allowed-keys="a-z"
        ></sp-textfield>
    `;
};
const withNameAttribute = () => {
  return x`
        <sp-textfield
            name="name"
            placeholder="Enter your name"
            allowed-keys="a-z"
        ></sp-textfield>
    `;
};
const readonly = () => x`
    <sp-textfield
        label="Enter your life story"
        value="A readonly textfield"
        readonly
        placeholder="Enter your life story"
    ></sp-textfield>
`;
const types = () => x`
    <sp-textfield label="Default" placeholder="default (text)"></sp-textfield>
    <sp-textfield label="Text" type="text" placeholder="text"></sp-textfield>
    <sp-textfield label="URL" type="url" placeholder="url"></sp-textfield>
    <sp-textfield label="Tel" type="tel" placeholder="tel"></sp-textfield>
    <sp-textfield
        label="E-Mail"
        type="email"
        placeholder="email"
    ></sp-textfield>
    <sp-textfield
        label="Password"
        type="password"
        placeholder="password"
    ></sp-textfield>
`;
const empty = () => x`
    <sp-field-label for="empty">
        This textfield hasn't been used yet
    </sp-field-label>
    <sp-textfield id="empty" placeholder="You can type here" autofocus>
        <sp-help-text slot="help-text">
            Even empty Textfield display correctly while waiting for content.
        </sp-help-text>
    </sp-textfield>
`;
const sized = () => x`
    <sp-field-label for="sized">
        This textfield hasn't been used yet
    </sp-field-label>
    <sp-textfield
        id="sized"
        placeholder="You can type here"
        autofocus
        style="width: 400px"
    >
        <sp-help-text slot="help-text">
            Even empty Textfield display correctly while waiting for content.
        </sp-help-text>
    </sp-textfield>
`;
const __namedExportsOrder = ['Default', 'growsOnly', 'quiet', 'notRequiredWithPattern', 'allowedKeys', 'withNameAttribute', 'readonly', 'types', 'empty', 'sized'];

export { Default, __namedExportsOrder, allowedKeys, textfield_stories as default, empty, growsOnly, notRequiredWithPattern, quiet, readonly, sized, types, withNameAttribute };
