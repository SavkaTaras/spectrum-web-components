import './sp-icon-nbUG1ZO_.js';
import './icons-demo-pIn2SH3l.js';
import { m } from './until-Dcj5TJ3M.js';
import { x } from './lit-html-GmIhAbMP.js';
import './IconBase-1lzddWrP.js';
import './lit-element-xBOPiTek.js';
import './define-element-z6bXN_P5.js';
import './if-defined-pV6JZKXB.js';
import './query-JMOstM_r.js';
import './base-STdhtiz1.js';
import './sp-search-ceM_h_M7.js';
import './sp-clear-button-0XhH_rVh.js';
import './spectrum-icon-cross.css-NAMb6F9U.js';
import './ButtonBase-xfo9cPrz.js';
import './like-anchor-iRdC2T2x.js';
import './focusable-M0S89eyW.js';
import './focus-visible-68QWcOy-.js';
import './observe-slot-text-MDYPopbw.js';
import './mutation-controller-KeE5MDSl.js';
import './query-assigned-nodes-qh-rhz36.js';
import './sizedMixin-IBQibr2z.js';
import './custom-tag-z2Xx81l9.js';
import './sp-icon-magnify-q4Fy0HZ6.js';
import './custom-tag-JXLWq-Sj.js';
import './Textfield-ynBlbbxQ.js';
import './manage-help-text-kfeeNmRL.js';
import './condition-attribute-with-id-nb2zon-s.js';
import './spectrum-icon-checkmark.css-F44WP9wj.js';
import './sp-icon-alert-IfxTE-S5.js';
import './directive-C1gRZbRe.js';
import './directive-helpers-WPlpPO1F.js';
import './state-qeP24jco.js';
import './sp-field-label-Tiv8xbEr.js';
import './ElementResolution-TTOqkMM7.js';
import './body-L3waIILQ.js';
import './spectrum-lang.css-2lWqTBNP.js';
import './sp-help-text-WqWiaQAk.js';
import './custom-element-4W0aDW2j.js';
import './async-directive-cHMFxS7f.js';

var iconsUi_stories = {
  title: "Icons/UI",
  argTypes: {
    color: { control: "color" },
    size: {
      control: {
        type: "inline-radio",
        options: ["s", "m", "l", "xl"]
      }
    }
  },
  args: {
    color: "#000000",
    size: "m"
  },
  swc_vrt: {
    preload: async () => {
      await import('./icon-manifest-jAfBPzyp.js');
    }
  }
};
const elements = ({ color, size }) => {
  const content = import('./icon-manifest-jAfBPzyp.js').then(
    (iconManifest) => x`
            <icons-demo
                style="color: ${color}"
                size=${size}
                .icons=${iconManifest.iconManifest}
            ></icons-demo>
        `
  );
  return x`
        <style>
            .icon {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            sp-icon {
                margin-bottom: 10px;
            }
        </style>
        <delayed-ready>
            ${m(
    content,
    x`
                    Loading...
                `
  )}
        </delayed-ready>
    `;
};
const Icons = ({ color, size }) => {
  const content = import('./index-ZTNT2e2f.js').then((icons) => {
    const iconTemplates = [];
    for (const icon in icons) {
      if (icon === "setCustomTemplateLiteralTag")
        continue;
      iconTemplates.push({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        template: icons[icon],
        name: icon
      });
    }
    return x`
            <icons-demo style="color: ${color}">
                ${iconTemplates.map(
      (icon) => x`
                        <bdo class="icon" dir="ltr">
                            <sp-icon size=${size}>${icon.template()}</sp-icon>
                            ${icon.name}
                        </bdo>
                    `
    )}
            </icons-demo>
        `;
  });
  return x`
        <style>
            .icon {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            sp-icon {
                margin-bottom: 10px;
            }
        </style>
        <delayed-ready>
            ${m(
    content,
    x`
                    Loading...
                `
  )}
        </delayed-ready>
    `;
};
const __namedExportsOrder = ['elements', 'Icons'];

export { Icons, __namedExportsOrder, iconsUi_stories as default, elements };
