import { a as args, b as argTypes, r as renderButtonSet, c as renderWithIcon, d as renderWithIconOnly, e as renderMinWidthButton, f as renderLink, g as renderLinkWithTarget } from './index-s1iVQUwz.js';
import './sp-icon-help-9fuKVybr.js';
import './sp-button-qhC4v0uH.js';
import './ButtonBase-DjpCcxMx.js';
import './like-anchor-BTdhD6VU.js';
import './define-element-BacrH-dd.js';
import './lit-element-BulMEkr1.js';
import './lit-html-COgVUehj.js';
import './if-defined-DDJGFaN4.js';
import './focusable-Qk_nX99k.js';
import './focus-visible-D29Av9Xb.js';
import './observe-slot-text-CG33WdGp.js';
import './mutation-controller-D2lT1xZk.js';
import './query-assigned-nodes-DAYI4epk.js';
import './base-u8Z1Hrsd.js';
import './query-DQF6X5qW.js';
import './PendingState-Dc-7wEUb.js';
import './get-label-from-slot-Cg6mfN40.js';
import './sizedMixin-D27dvb1g.js';
import './sp-icon-Cr3qyNV8.js';
import './IconBase-sFh2_uG3.js';
import './state-DWB0FQGh.js';
import './custom-tag-Diwq7nXX.js';
import './Help-DwXA_pCu.js';

const variant = "negative";
const treatment = "outline";
var buttonNegativeOutline_stories = {
  component: "sp-button",
  title: "Button/Negative/Outline",
  args: {
    ...args,
    variant,
    treatment
  },
  argTypes
};
const Default = (props) => renderButtonSet(props);
const withIcon = (props) => renderWithIcon(props);
const withIconOnly = (props) => renderWithIconOnly(props);
const minWidthButton = (props) => renderMinWidthButton(props);
minWidthButton.storyName = "min-width";
const link = (props) => renderLink(props);
link.storyName = "href";
const linkWithTarget = (props) => renderLinkWithTarget(props);
linkWithTarget.storyName = 'href with target="_blank"';
const __namedExportsOrder = ['Default', 'withIcon', 'withIconOnly', 'minWidthButton', 'link', 'linkWithTarget'];

export { Default, __namedExportsOrder, buttonNegativeOutline_stories as default, link, linkWithTarget, minWidthButton, withIcon, withIconOnly };
