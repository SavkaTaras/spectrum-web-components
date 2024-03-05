import { s as spreadProps } from './lit-helpers-w3dXohpu.js';
import './sp-action-group-djPkcn0t.js';
import './sp-action-button-yK8oK-HS.js';
import './overlay-trigger-1hsX4oto.js';
import './sp-tooltip-3RhM_h5g.js';
import './sp-icon-view-all-tags-TGj8r4a8.js';
import './sp-icon-info-Pxwb2KYu.js';
import { x } from './lit-html-GmIhAbMP.js';
import './async-directive-cHMFxS7f.js';
import './directive-helpers-WPlpPO1F.js';
import './directive-C1gRZbRe.js';
import './RovingTabindex-LnbiEVTh.js';
import './FocusGroup-TIL3fP6n.js';
import './mutation-controller-KeE5MDSl.js';
import './lit-element-xBOPiTek.js';
import './sizedMixin-IBQibr2z.js';
import './define-element-z6bXN_P5.js';
import './base-STdhtiz1.js';
import './query-JMOstM_r.js';
import './sp-icon-corner-triangle300-oci86m4p.js';
import './CornerTriangle300-scOUseNi.js';
import './custom-tag-z2Xx81l9.js';
import './IconBase-1lzddWrP.js';
import './ButtonBase-xfo9cPrz.js';
import './like-anchor-iRdC2T2x.js';
import './if-defined-pV6JZKXB.js';
import './focusable-M0S89eyW.js';
import './focus-visible-68QWcOy-.js';
import './observe-slot-text-MDYPopbw.js';
import './query-assigned-nodes-qh-rhz36.js';
import './state-qeP24jco.js';
import './focusable-selectors-VCrFWGqo.js';
import './ViewAllTags-6po-UwZ8.js';
import './custom-tag-JXLWq-Sj.js';
import './Info-J8X0NVRu.js';

var actionGroup_stories = {
  title: "Action Group",
  component: "sp-action-group",
  args: {
    compact: false,
    emphasized: false,
    justified: false,
    quiet: false,
    vertical: false,
    size: "m"
  },
  argTypes: {
    compact: {
      name: "compact",
      description: "Visually joins the buttons together to clarify their relationship to one another.",
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false }
      },
      control: {
        type: "boolean"
      }
    },
    emphasized: {
      name: "emphasized",
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false }
      },
      control: {
        type: "boolean"
      }
    },
    justified: {
      name: "justified",
      description: "Aligns the action group items to use all the available space on that line.",
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false }
      },
      control: {
        type: "boolean"
      }
    },
    quiet: {
      name: "quiet",
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false }
      },
      control: {
        type: "boolean"
      }
    },
    vertical: {
      name: "vertical",
      description: "Changes the orientation of the action group.",
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false }
      },
      control: {
        type: "boolean"
      }
    },
    size: {
      name: "size",
      description: "The size at which to display the action group.",
      type: { name: "string", required: true },
      table: {
        type: { summary: '"s" | "m" | "l" | "xl"' },
        defaultValue: { summary: "m" }
      },
      control: {
        type: "select",
        options: ["s", "m", "l", "xl"]
      }
    }
  }
};
function renderIconButtons(args) {
  return x`
        <sp-action-group ${spreadProps(args)}>
            <sp-action-button label="Properties">
                <sp-icon-properties slot="icon"></sp-icon-properties>
            </sp-action-button>
            <sp-action-button label="Info">
                <sp-icon-info slot="icon"></sp-icon-info>
            </sp-action-button>
            <sp-action-button label="View All Tags">
                <sp-icon-view-all-tags slot="icon"></sp-icon-view-all-tags>
            </sp-action-button>
        </sp-action-group>
    `;
}
function renderButtons(args) {
  return x`
        <sp-action-group ${spreadProps(args)}>
            <sp-action-button>Button 1</sp-action-button>
            <sp-action-button>Longer Button 2</sp-action-button>
            <sp-action-button>Short 3</sp-action-button>
        </sp-action-group>
    `;
}
function displaySelectionState() {
  const group = document.querySelector("sp-action-group");
  const selectedDiv = group.nextElementSibling;
  if (selectedDiv) {
    selectedDiv.textContent = `Selected: ${JSON.stringify(group.selected)}`;
  }
}
const Default = (args) => renderButtons(args);
const selectsSingle = (args) => {
  requestAnimationFrame(displaySelectionState);
  return x`
        <sp-action-group
            ?compact=${args.compact}
            ?emphasized=${args.emphasized}
            ?quiet=${args.quiet}
            ?justified=${args.justified}
            ?vertical=${args.vertical}
            size=${args.size}
            label="Favorite Color"
            selects="single"
            @change=${({ target }) => {
    const next = target.nextElementSibling;
    next.textContent = `Selected: ${JSON.stringify(
      target.selected
    )}`;
  }}
        >
            <sp-action-button>Red</sp-action-button>
            <sp-action-button>Green</sp-action-button>
            <sp-action-button>Blue</sp-action-button>
            <sp-action-button selected>Yellow</sp-action-button>
        </sp-action-group>
        <div>Selected:</div>
    `;
};
const selectsMultiple = (args) => {
  requestAnimationFrame(displaySelectionState);
  return x`
        <sp-action-group
            ${spreadProps(args)}
            label="Favorite Colors"
            selects="multiple"
            size=${args.size}
            @change=${({ target }) => {
    const next = target.nextElementSibling;
    next.textContent = `Selected: ${JSON.stringify(
      target.selected
    )}`;
  }}
        >
            <sp-action-button>Red</sp-action-button>
            <sp-action-button selected>Green</sp-action-button>
            <sp-action-button selected>Blue</sp-action-button>
            <sp-action-button>Yellow</sp-action-button>
        </sp-action-group>
        <div>Selected:</div>
    `;
};
const selectsMultipleWithTooltips = (args) => {
  return x`
        <sp-action-group
            ${spreadProps(args)}
            label="Favorite Color"
            selects="multiple"
            size=${args.size}
            @change=${({ target }) => {
    const next = target.nextElementSibling;
    next.textContent = `Selected: ${JSON.stringify(
      target.selected
    )}`;
  }}
        >
            <overlay-trigger>
                <sp-action-button slot="trigger">Red</sp-action-button>
                <sp-tooltip slot="hover-content">
                    This is a cool color.
                </sp-tooltip>
            </overlay-trigger>
            <overlay-trigger>
                <sp-action-button slot="trigger">Green</sp-action-button>
                <sp-tooltip slot="hover-content">
                    You wouldn't be wrong.
                </sp-tooltip>
            </overlay-trigger>
            <overlay-trigger>
                <sp-action-button slot="trigger">Blue</sp-action-button>
                <sp-tooltip slot="hover-content">The sky in spring.</sp-tooltip>
            </overlay-trigger>
            <overlay-trigger>
                <sp-action-button slot="trigger">Yellow</sp-action-button>
                <sp-tooltip slot="hover-content">The sun at noon.</sp-tooltip>
            </overlay-trigger>
        </sp-action-group>
        <div>Selected:</div>
    `;
};
const selectsMultipleControlled = (args) => {
  requestAnimationFrame(displaySelectionState);
  return x`
        <sp-action-group
            ${spreadProps(args)}
            selects="multiple"
            .selected=${["donuts", "crepecakes"]}
            label="Favorite Dessert"
            size=${args.size}
            @change=${({ target }) => {
    const next = target.nextElementSibling;
    next.textContent = `Selected: ${JSON.stringify(
      target.selected
    )}`;
  }}
        >
            <sp-action-button value="lavacakes">Lava Cakes</sp-action-button>
            <sp-action-button value="donuts">Donuts</sp-action-button>
            <sp-action-button value="crepecakes">Crepe Cake</sp-action-button>
            <sp-action-button value="fruittarts">Fruit Tarts</sp-action-button>
        </sp-action-group>
        <div>Selected:</div>
    `;
};
const iconsOnly = (args) => renderIconButtons(args);
const quietIconsOnly = (args) => renderIconButtons(args);
quietIconsOnly.args = {
  quiet: true
};
const compact = (args) => renderButtons(args);
compact.args = {
  compact: true
};
const compactIconsOnly = (args) => renderIconButtons(args);
compactIconsOnly.args = {
  compact: true
};
const compactQuietIconsOnly = (args) => renderIconButtons(args);
compactQuietIconsOnly.args = {
  compact: true,
  quiet: true
};
const vertical = (args) => renderButtons(args);
vertical.args = {
  vertical: true
};
const verticalIconsOnly = (args) => renderIconButtons(args);
verticalIconsOnly.args = {
  vertical: true
};
const verticalQuietIconsOnly = (args) => renderIconButtons(args);
verticalQuietIconsOnly.args = {
  quiet: true,
  vertical: true
};
const compactVertical = (args) => renderButtons(args);
compactVertical.args = {
  compact: true,
  vertical: true
};
const compactVerticalIconsOnly = (args) => renderIconButtons(args);
compactVerticalIconsOnly.args = {
  compact: true,
  vertical: true
};
const compactQuietVerticalIconsOnly = (args) => renderIconButtons(args);
compactQuietVerticalIconsOnly.args = {
  compact: true,
  quiet: true,
  vertical: true
};
const justified = (args) => renderButtons(args);
justified.args = {
  justified: true
};
const justifiedIconsOnly = (args) => renderIconButtons(args);
justifiedIconsOnly.args = {
  justified: true
};
const compactJustifiedIconsOnly = (args) => renderIconButtons(args);
compactJustifiedIconsOnly.args = {
  compact: true,
  justified: true
};
const __namedExportsOrder = ['Default', 'selectsSingle', 'selectsMultiple', 'selectsMultipleWithTooltips', 'selectsMultipleControlled', 'iconsOnly', 'quietIconsOnly', 'compact', 'compactIconsOnly', 'compactQuietIconsOnly', 'vertical', 'verticalIconsOnly', 'verticalQuietIconsOnly', 'compactVertical', 'compactVerticalIconsOnly', 'compactQuietVerticalIconsOnly', 'justified', 'justifiedIconsOnly', 'compactJustifiedIconsOnly'];

export { Default, __namedExportsOrder, compact, compactIconsOnly, compactJustifiedIconsOnly, compactQuietIconsOnly, compactQuietVerticalIconsOnly, compactVertical, compactVerticalIconsOnly, actionGroup_stories as default, iconsOnly, justified, justifiedIconsOnly, quietIconsOnly, selectsMultiple, selectsMultipleControlled, selectsMultipleWithTooltips, selectsSingle, vertical, verticalIconsOnly, verticalQuietIconsOnly };
