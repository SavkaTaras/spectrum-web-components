import { C as CopyIcon, D as DeleteIcon } from './Delete-VyjDFNcI.js';
import { s as setCustomTemplateLiteralTag } from './custom-tag-JXLWq-Sj.js';
import { I as IconBase } from './IconBase-YN3-eQCN.js';
import { x } from './lit-html-GmIhAbMP.js';
import { d as defineElement } from './define-element-lju0qz2P.js';

class IconCopy extends IconBase{render(){return setCustomTemplateLiteralTag(x),CopyIcon({hidden:!this.label,title:this.label})}}

defineElement("sp-icon-copy",IconCopy);

class IconDelete extends IconBase{render(){return setCustomTemplateLiteralTag(x),DeleteIcon({hidden:!this.label,title:this.label})}}

defineElement("sp-icon-delete",IconDelete);
