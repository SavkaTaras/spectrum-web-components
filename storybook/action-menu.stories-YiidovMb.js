import './sp-action-menu-Oqrjl9vJ.js';
import './sp-menu-fUm6H3kk.js';
import './sp-menu-item-6ynCq98U.js';
import './sp-menu-group-ZOYXvU4Z.js';
import './sp-menu-divider-4ENnd-xz.js';
import './sp-tooltip-CFA-Rw4-.js';
import { s as slottableRequest } from './slottable-request-directive-Lv19myUx.js';
import { A as ActionMenuMarkup } from './index-vGjD0NHb.js';
import { m as makeOverBackground } from './index-lYZioepf.js';
import { i as isOverlayOpen } from './index-X5nIn6KY.js';
import './sp-icon-settings-pb8UVeNj.js';
import { x } from './lit-html-GmIhAbMP.js';
import { l } from './if-defined-pV6JZKXB.js';
import './sp-action-button-XdC2aqha.js';
import './lit-element-xBOPiTek.js';
import './sp-icon-corner-triangle300-WaZEcosI.js';
import './CornerTriangle300-scOUseNi.js';
import './custom-tag-z2Xx81l9.js';
import './IconBase-6HeAKn4X.js';
import './define-element-2SKaLcgv.js';
import './ButtonBase-75QTpX6n.js';
import './like-anchor-aNXO7yKS.js';
import './focusable-n0Bfj6en.js';
import './focus-visible-68QWcOy-.js';
import './observe-slot-text-mc0YsU0d.js';
import './mutation-controller-KeE5MDSl.js';
import './query-assigned-nodes-jGvx5qKR.js';
import './base-STdhtiz1.js';
import './query-assigned-elements-1m6Cs7Ix.js';
import './query-JMOstM_r.js';
import './sizedMixin-i8vReDsT.js';
import './observe-slot-presence-tyJ_SCNf.js';
import './sp-icon-more--guHacSU.js';
import './More-RXlxfRbl.js';
import './custom-tag-JXLWq-Sj.js';
import './slottable-request-event-SQgFLN7g.js';
import './Picker-5zHIcXlB.js';
import './spectrum-icon-chevron.css-hA8DP86t.js';
import './sp-icon-chevron100-nm_fX2AN.js';
import './Chevron100-ok1mOHjI.js';
import './sp-icon-alert-vqzws53s.js';
import './MatchMedia-SMh19R1m.js';
import './DependencyManger-0SYmL--C.js';
import './class-map-Q7DIFm9x.js';
import './directive-C1gRZbRe.js';
import './style-map-ak5mT6xX.js';
import './when-kvvOyHr2.js';
import './state-q_CC9QX6.js';
import './spectrum-icon-checkmark.css-1U1WWTA-.js';
import './random-id-M2k-wjyE.js';
import './divider.css-J1TsgOfe.js';
import './focusable-selectors-VCrFWGqo.js';
import './async-directive-cHMFxS7f.js';
import './directive-helpers-WPlpPO1F.js';
import './sp-icon-ahQVpxKt.js';
import './sp-button-sPWnnZvf.js';
import './sp-icon-help-2j4uQuID.js';
import './Help-MUMRCGeh.js';
import './Settings-MheZWnPA.js';

var actionMenu_stories = {
  component: "sp-action-menu",
  title: "Action menu",
  argTypes: {
    onChange: { action: "change" },
    disabled: {
      name: "disabled",
      type: { name: "boolean", required: false },
      description: "Disable this control. It will not receive focus or events.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false }
      },
      control: {
        type: "boolean"
      }
    },
    open: {
      name: "open",
      type: { name: "boolean", required: false },
      description: "Whether the menu is open or not.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false }
      },
      control: "boolean"
    },
    visibleLabel: {
      name: "Visible Label",
      description: "The placeholder content for the picker.",
      type: { name: "string", required: false },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" }
      },
      control: "text"
    },
    tooltipDescription: {
      name: "Tooltip Description",
      type: { name: "string", required: false },
      description: "Tooltip description",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" }
      },
      control: {
        type: "text"
      }
    },
    tooltipPlacement: {
      name: "Tooltip Placement",
      type: { name: "string", required: false },
      description: "Tooltip Placement.",
      table: {
        defaultValue: { summary: "bottom" }
      },
      control: {
        options: [
          "auto",
          "auto-start",
          "auto-end",
          "top",
          "bottom",
          "right",
          "left",
          "top-start",
          "top-end",
          "bottom-start",
          "bottom-end",
          "right-start",
          "right-end",
          "left-start",
          "left-end",
          "none"
        ],
        type: "select"
      }
    },
    quiet: {
      name: "quiet",
      type: { name: "boolean", required: false },
      description: "Quiet rendering",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false }
      },
      control: {
        type: "boolean"
      }
    },
    staticValue: {
      name: "static",
      type: { name: "string", required: false },
      description: "The visual static variant to apply to the button.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "none" }
      },
      control: {
        type: "select",
        labels: {
          white: "white",
          black: "black",
          none: void 0
        },
        options: ["white", "black", "none"]
      }
    },
    align: {
      name: "align",
      type: { name: "string", required: false },
      description: "Alignment of the Action Menu",
      table: {
        defaultValue: { summary: "start" }
      },
      control: {
        type: "select",
        labels: {
          start: "start",
          end: "end"
        }
      },
      options: ["start", "end"]
    }
  },
  args: {
    align: "start",
    visibleLabel: "More Actions",
    disabled: false,
    open: false,
    quiet: false,
    tooltipDescription: "",
    tooltipPlacement: "bottom",
    static: void 0
  }
};
const Template = (args = {}) => ActionMenuMarkup(args);
const Default = (args = {}) => Template(args);
const staticWhite = (args = {}) => Template(args);
staticWhite.args = {
  staticValue: "white"
};
staticWhite.decorators = [makeOverBackground()];
const staticBlack = (args = {}) => Template(args);
staticBlack.args = {
  staticValue: "black"
};
staticBlack.decorators = [makeOverBackground()];
const quiet = (args = {}) => Template(args);
quiet.args = {
  quiet: true
};
const labelOnly = ({
  align = "start",
  changeHandler = () => void 0,
  disabled = false,
  open = false,
  size = "m",
  selects: selects2 = "",
  selected = false
} = {}) => x`
    <sp-action-menu
        ?disabled=${disabled}
        ?open=${open}
        size=${size}
        @change=${(event) => {
  navigator.clipboard.writeText(event.target.value);
  changeHandler(event);
}}
        .selects=${selects2 ? selects2 : void 0}
        value=${selected ? "Select Inverse" : ""}
        style=${l(align === "end" ? "float: inline-end;" : void 0)}
    >
        <span slot="label-only">Label Only</span>
        <sp-menu-item>Deselect</sp-menu-item>
        <sp-menu-item ?selected=${selected}>Select Inverse</sp-menu-item>
        <sp-menu-item>Feather...</sp-menu-item>
        <sp-menu-item>Select and Mask...</sp-menu-item>
        <sp-menu-divider></sp-menu-divider>
        <sp-menu-item>Save Selection</sp-menu-item>
        <sp-menu-item disabled>Make Work Path</sp-menu-item>
    </sp-action-menu>
`;
const selects = (args = {}) => Template({
  ...args,
  selects: "single",
  selected: true
});
selects.args = {
  open: true
};
selects.decorators = [isOverlayOpen];
const iconOnly = (args = {}) => Template(args);
iconOnly.args = {
  visibleLabel: ""
};
const tooltipDescriptionAndPlacement = (args = {}) => Template(args);
tooltipDescriptionAndPlacement.args = {
  tooltipDescription: "Your tooltip string here",
  visibleLabel: "",
  tooltipPlacement: "bottom"
};
const customIcon = (args) => Template(args);
customIcon.args = {
  customIcon: x`
        <sp-icon-settings slot="icon"></sp-icon-settings>
    `,
  visibleLabel: ""
};
const submenu = ({ align = "start" } = {}) => {
  return x`
        <sp-action-menu
            label="More Actions"
            style=${l(
    align === "end" ? "float: inline-end;" : void 0
  )}
        >
            <sp-menu-item>One</sp-menu-item>
            <sp-menu-item>Two</sp-menu-item>
            <sp-menu-item>
                Select some items
                <sp-menu slot="submenu" selects="multiple">
                    <sp-menu-item>A</sp-menu-item>
                    <sp-menu-item selected>B</sp-menu-item>
                    <sp-menu-item>C</sp-menu-item>
                </sp-menu>
            </sp-menu-item>
        </sp-action-menu>
    `;
};
const controlled = ({ align = "start" } = {}) => {
  const state = {
    snap: true,
    grid: false,
    guides: true,
    latestChange: ""
  };
  function toggle(prop) {
    return (event) => {
      const item = event.target;
      state[prop] = !state[prop];
      item.selected = state[prop];
    };
  }
  function onChange(event) {
    state.latestChange = event.target.value;
    logState();
  }
  function logState() {
    document.getElementById(
      "state-json"
    ).textContent = `application state: ${JSON.stringify(state)}`;
  }
  return x`
        <sp-action-menu
            label="View"
            @change=${onChange}
            style=${l(
    align === "end" ? "float: inline-end;" : void 0
  )}
        >
            <sp-menu-item value="action" @click=${() => alert("action")}>
                Non-selectable action
            </sp-menu-item>
            <sp-menu-item
                value="snap"
                ?selected=${state.snap}
                @click=${toggle("snap")}
            >
                Snap
            </sp-menu-item>
            <sp-menu-item>
                Show
                <sp-menu
                    slot="submenu"
                    selects="multiple"
                    @change=${(event) => event.preventDefault()}
                >
                    <sp-menu-item
                        value="grid"
                        ?selected=${state.grid}
                        @click=${toggle("grid")}
                    >
                        Grid
                    </sp-menu-item>
                    <sp-menu-item
                        value="guides"
                        ?selected=${state.guides}
                        @click=${toggle("guides")}
                    >
                        Guides
                    </sp-menu-item>
                </sp-menu>
            </sp-menu-item>
        </sp-action-menu>
        <span id="state-json"></span>
    `;
};
const groups = ({
  align = "start",
  onChange
}) => x`
    <sp-action-menu
        @change=${({ target: { value } }) => onChange(value)}
        open
        style=${l(align === "end" ? "float: inline-end;" : void 0)}
    >
        <sp-menu-group id="cms">
            <span slot="header">cms</span>
            <sp-menu-item value="updateAllSiteContent">
                Update All Content
            </sp-menu-item>
            <sp-menu-item value="refreshAllXDs">Refresh All XDs</sp-menu-item>
        </sp-menu-group>
        <sp-menu-group id="ssg">
            <span slot="header">ssg</span>
            <sp-menu-item value="clearCache">Clear Cache</sp-menu-item>
        </sp-menu-group>
        <sp-menu-group id="vrt">
            <span slot="header">vrt</span>
            <sp-menu-item value="vrt-contributions">Contributions</sp-menu-item>
            <sp-menu-item value="vrt-internal">Internal</sp-menu-item>
            <sp-menu-item value="vrt-public">Public</sp-menu-item>
            <sp-menu-item value="vrt-patterns">Patterns</sp-menu-item>
            <sp-menu-item value="vrt">All</sp-menu-item>
        </sp-menu-group>
        <sp-menu-divider></sp-menu-divider>
        <sp-menu-group id="misc">
            <sp-menu-item value="logout">Logout</sp-menu-item>
        </sp-menu-group>
    </sp-action-menu>
`;
groups.decorators = [isOverlayOpen];
const directive = () => {
  const renderSubmenu = () => x`
        <sp-menu-item>Submenu Item 1</sp-menu-item>
        <sp-menu-item>Submenu Item 2</sp-menu-item>
        <sp-menu-item>Submenu Item 3</sp-menu-item>
        <sp-menu-item>Submenu Item 4</sp-menu-item>
    `;
  const renderOptions = () => x`
        <sp-menu-item>Deselect</sp-menu-item>
        <sp-menu-item>Select Inverse</sp-menu-item>
        <sp-menu-item>
            Feather...
            <sp-menu
                slot="submenu"
                ${slottableRequest(renderSubmenu)}
            ></sp-menu>
        </sp-menu-item>
        <sp-menu-item>Select and Mask...</sp-menu-item>
        <sp-menu-divider></sp-menu-divider>
        <sp-menu-item>Save Selection</sp-menu-item>
        <sp-menu-item disabled>Make Work Path</sp-menu-item>
    `;
  return x`
        <sp-action-menu ${slottableRequest(renderOptions)}>
            <span slot="label">
                Select a Country with a very long label, too long in fact
            </span>
        </sp-action-menu>
    `;
};
directive.swc_vrt = {
  skip: true
};
const __namedExportsOrder = ['Default', 'staticWhite', 'staticBlack', 'quiet', 'labelOnly', 'selects', 'iconOnly', 'tooltipDescriptionAndPlacement', 'customIcon', 'submenu', 'controlled', 'groups', 'directive'];

export { Default, __namedExportsOrder, controlled, customIcon, actionMenu_stories as default, directive, groups, iconOnly, labelOnly, quiet, selects, staticBlack, staticWhite, submenu, tooltipDescriptionAndPlacement };
