import './scale-large-d-tUo_Ma.js';
import './sp-button-n-ZLKQ9l.js';
import './sp-button-group-2-SmZQuE.js';
import './sp-switch-4bcn3Pfk.js';
import './sp-slider-tS8trcjY.js';
import { x } from './lit-html-GmIhAbMP.js';
import './lit-element-xBOPiTek.js';
import './define-element-b58XwwBM.js';
import './ButtonBase-8MKa1AnW.js';
import './like-anchor-SzCf8Fo9.js';
import './if-defined-pV6JZKXB.js';
import './focusable-XJQHb8mq.js';
import './focus-visible-68QWcOy-.js';
import './observe-slot-text-sowxnoY7.js';
import './mutation-controller-KeE5MDSl.js';
import './query-assigned-nodes-NJVGD18T.js';
import './base-STdhtiz1.js';
import './sizedMixin-SQxNgkJG.js';
import './query-JMOstM_r.js';
import './when-kvvOyHr2.js';
import './CheckboxMixin-y5AyDPUX.js';
import './LanguageResolution-433GhF-m.js';
import './import-mabg3nA1.js';
import './sp-field-label-WhBVoFu4.js';
import './custom-tag-z2Xx81l9.js';
import './IconBase-O-P913zU.js';
import './condition-attribute-with-id-nb2zon-s.js';
import './ElementResolution-TTOqkMM7.js';
import './class-map-Q7DIFm9x.js';
import './directive-C1gRZbRe.js';
import './style-map-ak5mT6xX.js';
import './streaming-listener-99YRN1c8.js';
import './async-directive-cHMFxS7f.js';
import './directive-helpers-WPlpPO1F.js';
import './repeat-ry-ySa1b.js';

var theme_stories = {
  component: "sp-theme",
  title: "Theme",
  argTypes: {
    colorStop: {
      control: {
        type: "inline-radio",
        options: ["light", "dark"]
      }
    }
  },
  args: {
    colorStop: "light"
  }
};
const storyStyles = x`
    <style type="text/css">
        #outer,
        #example {
            width: 500px;
            padding: 3em;
            background-color: var(--spectrum-global-color-gray-100);
            color: var(--spectrum-global-color-gray-800);
        }

        #inner {
            margin-top: 2em;
            padding: 2em;
            background-color: var(--spectrum-global-color-gray-100);
            color: var(--spectrum-global-color-gray-800);
        }

        #buttons {
            margin-top: 2em;
        }
    </style>
`;
const Default = ({
  colorStop: color
}) => {
  return x`
        ${storyStyles}
        <sp-theme
            color="${color}"
            theme=${window.__swc_hack_knobs__.defaultThemeVariant}
        >
            <div id="example">
                <div>
                    <sp-slider
                        value="5"
                        step="1"
                        min="1"
                        max="11"
                        label="Volume"
                        id="volume-slider"
                    ></sp-slider>
                </div>
                <div><sp-switch>Overdrive</sp-switch></div>
                <sp-button-group id="buttons">
                    <sp-button variant="primary" treatment="outline">
                        Cancel
                    </sp-button>
                    <sp-button variant="accent">Continue</sp-button>
                </sp-button-group>
            </div>
        </sp-theme>
    `;
};
const displayFlex = () => x`
    <style type="text/css">
        #flex-theme {
            display: flex;
            flex-direction: row;
        }
        #flex-theme sp-button {
            flex: 0 0;
        }
        #flex-theme #middle-button {
            flex: 1 0;
        }
    </style>
    <sp-theme
        id="flex-theme"
        color="dark"
        theme=${window.__swc_hack_knobs__.defaultThemeVariant}
    >
        <sp-button>Start</sp-button>
        <sp-button id="middle-button">Middle</sp-button>
        <sp-button>End</sp-button>
    </sp-theme>
`;
const none = () => x`
    ${storyStyles}
    <div id="example">
        <div>
            <sp-slider
                value="5"
                step="1"
                min="1"
                max="11"
                label="Volume"
                id="volume-slider"
            ></sp-slider>
        </div>
        <div><sp-switch>Overdrive</sp-switch></div>
        <sp-button-group id="buttons">
            <sp-button variant="primary" treatment="outline">Cancel</sp-button>
            <sp-button variant="accent">Continue</sp-button>
        </sp-button-group>
    </div>
    <sp-theme></sp-theme>
`;
const nestedTheme = ({
  colorStop: outer
}) => {
  const inner = outer === "light" ? "dark" : "light";
  return x`
        ${storyStyles}
        <sp-theme
            color="${outer}"
            theme=${window.__swc_hack_knobs__.defaultThemeVariant}
        >
            <div id="outer">
                <div>
                    <sp-slider
                        value="5"
                        step="1"
                        min="1"
                        max="11"
                        label="Volume"
                        id="volume-slider"
                    ></sp-slider>
                </div>
                <div><sp-switch>Overdrive</sp-switch></div>
                <sp-button-group id="buttons">
                    <sp-button variant="primary" treatment="outline">
                        Cancel
                    </sp-button>
                    <sp-button variant="accent">Continue</sp-button>
                </sp-button-group>
                <sp-theme
                    color="${inner}"
                    dir="ltr"
                    theme=${window.__swc_hack_knobs__.defaultThemeVariant}
                >
                    <div id="inner">
                        <div>
                            <sp-slider
                                value="5"
                                step="1"
                                min="1"
                                max="11"
                                label="Volume"
                                id="volume-slider-inner"
                            ></sp-slider>
                        </div>
                        <div><sp-switch>Overdrive</sp-switch></div>
                        <sp-button-group id="buttons-inner">
                            <sp-button variant="primary" treatment="outline">
                                Cancel
                            </sp-button>
                            <sp-button variant="accent">Continue</sp-button>
                        </sp-button-group>
                    </div>
                </sp-theme>
            </div>
        </sp-theme>
    `;
};
const reverseColorNestedTheme = ({
  colorStop: outer
}) => {
  const inner = outer === "light" ? "dark" : "light";
  return x`
        <style type="text/css">
            #outer {
                width: 500px;
                padding: 3em;
                background-color: var(--spectrum-global-color-gray-100);
                color: var(--spectrum-global-color-gray-800);
            }

            #inner {
                margin-top: 2em;
                padding: 2em;
                background-color: var(--spectrum-global-color-gray-100);
                color: var(--spectrum-global-color-gray-800);
            }

            #buttons {
                margin-top: 2em;
            }
        </style>
        <sp-theme
            color="${inner}"
            theme=${window.__swc_hack_knobs__.defaultThemeVariant}
        >
            <div id="outer">
                <div>
                    <sp-slider
                        value="5"
                        step="1"
                        min="1"
                        max="11"
                        label="Volume"
                        id="volume-slider"
                    ></sp-slider>
                </div>
                <div><sp-switch>Overdrive</sp-switch></div>
                <sp-button-group id="buttons">
                    <sp-button variant="primary" treatment="outline">
                        Cancel
                    </sp-button>
                    <sp-button variant="accent">Continue</sp-button>
                </sp-button-group>
                <sp-theme
                    color="${outer}"
                    dir="rtl"
                    theme=${window.__swc_hack_knobs__.defaultThemeVariant}
                >
                    <div id="inner">
                        <div>
                            <sp-slider
                                value="5"
                                step="1"
                                min="1"
                                max="11"
                                label="Volume"
                                id="volume-slider-inner"
                            ></sp-slider>
                        </div>
                        <div><sp-switch>Overdrive</sp-switch></div>
                        <sp-button-group id="buttons-inner">
                            <sp-button variant="primary" treatment="outline">
                                Cancel
                            </sp-button>
                            <sp-button variant="accent">Continue</sp-button>
                        </sp-button-group>
                    </div>
                </sp-theme>
            </div>
        </sp-theme>
    `;
};
const __namedExportsOrder = ['Default', 'displayFlex', 'none', 'nestedTheme', 'reverseColorNestedTheme'];

export { Default, __namedExportsOrder, theme_stories as default, displayFlex, nestedTheme, none, reverseColorNestedTheme };
