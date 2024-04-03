import './sp-checkbox-j4ZFpjrl.js';
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

var checkboxSizes_stories = {
  component: "sp-checkbox",
  title: "Checkbox/Sizes",
  argTypes: {
    onClick: { action: "click" },
    onChange: { action: "change" }
  }
};
const checkbox = ({
  size,
  checked,
  indeterminate,
  onClick,
  onChange
}) => {
  return x`
        <sp-checkbox
            size=${size}
            ?checked=${checked}
            ?indeterminate=${indeterminate}
            @click="${onClick}"
            @change="${onChange}"
        >
            Checkbox
        </sp-checkbox>
    `;
};
const s = (args) => checkbox({ ...args, size: "s" });
const sChecked = (args) => checkbox({ ...args, size: "s", checked: true });
const sIndeterminate = (args) => checkbox({ ...args, size: "s", indeterminate: true });
const m = (args) => checkbox({ ...args, size: "m" });
const mChecked = (args) => checkbox({ ...args, size: "m", checked: true });
const mIndeterminate = (args) => checkbox({ ...args, size: "m", indeterminate: true });
const l = (args) => checkbox({ ...args, size: "l" });
const lChecked = (args) => checkbox({ ...args, size: "l", checked: true });
const lIndeterminate = (args) => checkbox({ ...args, size: "l", indeterminate: true });
const XL = (args) => checkbox({ ...args, size: "xl" });
const XLChecked = (args) => checkbox({ ...args, size: "xl", checked: true });
const XLIndeterminate = (args) => checkbox({ ...args, size: "xl", indeterminate: true });
const __namedExportsOrder = ['s', 'sChecked', 'sIndeterminate', 'm', 'mChecked', 'mIndeterminate', 'l', 'lChecked', 'lIndeterminate', 'XL', 'XLChecked', 'XLIndeterminate'];

export { XL, XLChecked, XLIndeterminate, __namedExportsOrder, checkboxSizes_stories as default, l, lChecked, lIndeterminate, m, mChecked, mIndeterminate, s, sChecked, sIndeterminate };
