import { c as create_ssr_component, b as compute_rest_props, g as get_current_component, d as getContext, v as validate_component, m as missing_component, f as spread, i as escape_object, j as add_attribute, h as escape_attribute_value, s as setContext, o as onDestroy, e as globals, k as subscribe, w as set_store_value, x as compute_slots, u as escape, y as each } from "../../../chunks/index3.js";
import { c as contentfulFetch } from "../../../chunks/styles.js";
import { f as forwardEventsBuilder, c as classMap, S as SmuiElement, R as Ripple } from "../../../chunks/SmuiElement.js";
import { w as writable } from "../../../chunks/index2.js";
import { MDCIconButtonToggleFoundation } from "@material/icon-button";
import "@contentful/rich-text-html-renderer";
function dispatch(element, eventType, detail, eventInit = { bubbles: true }, duplicateEventForMDC = false) {
  if (typeof Event !== "undefined" && element) {
    const event = new CustomEvent(eventType, Object.assign(Object.assign({}, eventInit), { detail }));
    element === null || element === void 0 ? void 0 : element.dispatchEvent(event);
    if (duplicateEventForMDC && eventType.startsWith("SMUI")) {
      const duplicateEvent = new CustomEvent(eventType.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, eventInit), { detail }));
      element === null || element === void 0 ? void 0 : element.dispatchEvent(duplicateEvent);
      if (duplicateEvent.defaultPrevented) {
        event.preventDefault();
      }
    }
    return event;
  }
}
const CommonIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "on", "component", "tag", "getElement"]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { on = false } = $$props;
  let element;
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? "i" : void 0 } = $$props;
  const svg = component === Svg;
  const context = getContext("SMUI:icon:context");
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.on === void 0 && $$bindings.on && on !== void 0)
    $$bindings.on(on);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        { tag },
        { use: [forwardEvents, ...use] },
        {
          class: classMap({
            [className]: true,
            "mdc-button__icon": context === "button",
            "mdc-fab__icon": context === "fab",
            "mdc-icon-button__icon": context === "icon-button",
            "mdc-icon-button__icon--on": context === "icon-button" && on,
            "mdc-tab__icon": context === "tab",
            "mdc-banner__icon": context === "banner",
            "mdc-segmented-button__icon": context === "segmented-button"
          })
        },
        { "aria-hidden": "true" },
        svg ? { focusable: "false", tabindex: "-1" } : {},
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<svg${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</svg>`;
});
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "multiple", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { multiple = false } = $$props;
  let element;
  let withOpenDialog = false;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "smui-accordion": true,
          "smui-accordion--multiple": multiple,
          "smui-accordion--with-open-dialog": withOpenDialog
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const Paper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "variant", "square", "color", "elevation", "transition", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "raised" } = $$props;
  let { square = false } = $$props;
  let { color = "default" } = $$props;
  let { elevation = 1 } = $$props;
  let { transition = false } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.square === void 0 && $$bindings.square && square !== void 0)
    $$bindings.square(square);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.elevation === void 0 && $$bindings.elevation && elevation !== void 0)
    $$bindings.elevation(elevation);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "smui-paper": true,
          "smui-paper--raised": variant === "raised",
          "smui-paper--unelevated": variant === "unelevated",
          "smui-paper--outlined": variant === "outlined",
          ["smui-paper--elevation-z" + elevation]: elevation !== 0 && variant === "raised",
          "smui-paper--rounded": !square,
          ["smui-paper--color-" + color]: color !== "default",
          "smui-paper-transition": transition
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const { Object: Object_1$1 } = globals;
const internals = {
  component: SmuiElement,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
const ClassAdder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "component", "tag", "getElement"]);
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  const smuiClass = internals.class;
  const smuiClassMap = {};
  const smuiClassUnsubscribes = [];
  const contexts = internals.contexts;
  const props = internals.props;
  let { component = internals.component } = $$props;
  let { tag = component === SmuiElement ? internals.tag : void 0 } = $$props;
  Object.entries(internals.classMap).forEach(([name, context]) => {
    const store = getContext(context);
    if (store && "subscribe" in store) {
      smuiClassUnsubscribes.push(store.subscribe((value) => {
        smuiClassMap[name] = value;
      }));
    }
  });
  const forwardEvents = forwardEventsBuilder(get_current_component());
  for (let context in contexts) {
    if (contexts.hasOwnProperty(context)) {
      setContext(context, contexts[context]);
    }
  }
  onDestroy(() => {
    for (const unsubscribe of smuiClassUnsubscribes) {
      unsubscribe();
    }
  });
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object_1$1.assign(
        {},
        { tag },
        { use: [forwardEvents, ...use] },
        {
          class: classMap({
            [className]: true,
            [smuiClass]: true,
            ...smuiClassMap
          })
        },
        props,
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const defaults = Object.assign({}, internals);
function classAdderBuilder(props) {
  return new Proxy(ClassAdder, {
    construct: function(target, args) {
      Object.assign(internals, defaults, props);
      return new target(...args);
    },
    get: function(target, prop) {
      Object.assign(internals, defaults, props);
      return target[prop];
    }
  });
}
const Content$1 = classAdderBuilder({
  class: "smui-paper__content",
  tag: "div"
});
classAdderBuilder({
  class: "smui-paper__title",
  tag: "h5"
});
classAdderBuilder({
  class: "smui-paper__subtitle",
  tag: "h6"
});
const Panel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let usePass;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "variant",
    "color",
    "elevation",
    "open",
    "disabled",
    "nonInteractive",
    "extend",
    "extendedElevation",
    "isOpen",
    "setOpen",
    "getElement"
  ]);
  let $openStore, $$unsubscribe_openStore;
  let $nonInteractiveStore, $$unsubscribe_nonInteractiveStore;
  let $disabledStore, $$unsubscribe_disabledStore;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "raised" } = $$props;
  let { color = "default" } = $$props;
  let { elevation = 1 } = $$props;
  let { open = false } = $$props;
  let { disabled = false } = $$props;
  let { nonInteractive = false } = $$props;
  let { extend = false } = $$props;
  let { extendedElevation = 3 } = $$props;
  let element;
  let accessor;
  let opened = open;
  const disabledStore = writable(disabled);
  $$unsubscribe_disabledStore = subscribe(disabledStore, (value) => $disabledStore = value);
  setContext("SMUI:accordion:panel:disabled", disabledStore);
  const nonInteractiveStore = writable(nonInteractive);
  $$unsubscribe_nonInteractiveStore = subscribe(nonInteractiveStore, (value) => $nonInteractiveStore = value);
  setContext("SMUI:accordion:panel:nonInteractive", nonInteractiveStore);
  const openStore = writable(open);
  $$unsubscribe_openStore = subscribe(openStore, (value) => $openStore = value);
  setContext("SMUI:accordion:panel:open", openStore);
  let previousOpen = open;
  function isOpen() {
    return open;
  }
  function setOpen(value) {
    open = value;
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.elevation === void 0 && $$bindings.elevation && elevation !== void 0)
    $$bindings.elevation(elevation);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.nonInteractive === void 0 && $$bindings.nonInteractive && nonInteractive !== void 0)
    $$bindings.nonInteractive(nonInteractive);
  if ($$props.extend === void 0 && $$bindings.extend && extend !== void 0)
    $$bindings.extend(extend);
  if ($$props.extendedElevation === void 0 && $$bindings.extendedElevation && extendedElevation !== void 0)
    $$bindings.extendedElevation(extendedElevation);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.setOpen === void 0 && $$bindings.setOpen && setOpen !== void 0)
    $$bindings.setOpen(setOpen);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    usePass = [forwardEvents, ...use];
    set_store_value(disabledStore, $disabledStore = disabled, $disabledStore);
    set_store_value(nonInteractiveStore, $nonInteractiveStore = nonInteractive, $nonInteractiveStore);
    set_store_value(openStore, $openStore = open, $openStore);
    {
      if (previousOpen !== open) {
        previousOpen = open;
        Array.from(getElement().children).forEach((child) => {
          if (child.classList.contains("smui-paper__content")) {
            const content = child;
            if (open) {
              content.classList.add("smui-accordion__content--no-transition");
              content.classList.add("smui-accordion__content--force-open");
              const { height } = content.getBoundingClientRect();
              content.classList.remove("smui-accordion__content--force-open");
              content.getBoundingClientRect();
              content.classList.remove("smui-accordion__content--no-transition");
              content.style.height = height + "px";
              content.addEventListener(
                "transitionend",
                () => {
                  if (content) {
                    content.style.height = "";
                  }
                  opened = open;
                  dispatch(getElement(), "SMUIAccordionPanel:opened", { accessor });
                },
                { once: true }
              );
            } else {
              content.style.height = content.getBoundingClientRect().height + "px";
              content.getBoundingClientRect();
              requestAnimationFrame(() => {
                if (content) {
                  content.style.height = "";
                }
                dispatch(getElement(), "SMUIAccordionPanel:closed", { accessor });
              });
              opened = false;
            }
            content.setAttribute("aria-hidden", open ? "false" : "true");
          }
        });
        dispatch(
          getElement(),
          open ? "SMUIAccordionPanel:opening" : "SMUIAccordionPanel:closing",
          { accessor }
        );
      }
    }
    $$rendered = `${validate_component(Paper, "Paper").$$render(
      $$result,
      Object.assign(
        {},
        { use: usePass },
        {
          class: classMap({
            [className]: true,
            "smui-accordion__panel": true,
            "smui-accordion__panel--open": open,
            "smui-accordion__panel--opened": opened,
            "smui-accordion__panel--disabled": disabled,
            "smui-accordion__panel--non-interactive": nonInteractive,
            "smui-accordion__panel--raised": variant === "raised",
            "smui-accordion__panel--extend": extend,
            ["smui-accordion__panel--elevation-z" + (extend && open ? extendedElevation : elevation)]: elevation !== 0 && variant === "raised" || extendedElevation !== 0 && variant === "raised" && extend && open
          })
        },
        { color },
        {
          variant: variant === "raised" ? "unelevated" : variant
        },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_openStore();
  $$unsubscribe_nonInteractiveStore();
  $$unsubscribe_disabledStore();
  return $$rendered;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "style", "ripple", "getElement"]);
  let $$slots = compute_slots(slots);
  let $nonInteractive, $$unsubscribe_nonInteractive;
  let $$unsubscribe_disabled;
  let $open, $$unsubscribe_open;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  const disabled = getContext("SMUI:accordion:panel:disabled");
  $$unsubscribe_disabled = subscribe(disabled, (value) => value);
  const nonInteractive = getContext("SMUI:accordion:panel:nonInteractive");
  $$unsubscribe_nonInteractive = subscribe(nonInteractive, (value) => $nonInteractive = value);
  const open = getContext("SMUI:accordion:panel:open");
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  $$unsubscribe_nonInteractive();
  $$unsubscribe_disabled();
  $$unsubscribe_open();
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "smui-accordion__header": true,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      { role: "button" },
      {
        tabindex: escape_attribute_value($nonInteractive ? -1 : 0)
      },
      {
        "aria-expanded": escape_attribute_value($open ? "true" : "false")
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${ripple ? `<div class="${"smui-accordion__header__ripple"}"></div>` : ``}
  <div${add_attribute(
    "class",
    classMap({
      "smui-accordion__header__title": true,
      "smui-accordion__header__title--with-description": $$slots.description
    }),
    0
  )}>${slots.default ? slots.default({}) : ``}</div>
  ${$$slots.description ? `<div class="${"smui-accordion__header__description"}">${slots.description ? slots.description({}) : ``}</div>` : ``}
  ${$$slots.icon ? `<div class="${"smui-accordion__header__icon"}">${slots.icon ? slots.icon({}) : ``}</div>` : ``}
</div>`;
});
const { Object: Object_1 } = globals;
const IconButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let actionProp;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "toggle",
    "pressed",
    "ariaLabelOn",
    "ariaLabelOff",
    "touch",
    "displayFlex",
    "size",
    "href",
    "action",
    "component",
    "tag",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { color = void 0 } = $$props;
  let { toggle = false } = $$props;
  let { pressed = uninitializedValue } = $$props;
  let { ariaLabelOn = void 0 } = $$props;
  let { ariaLabelOff = void 0 } = $$props;
  let { touch = false } = $$props;
  let { displayFlex = true } = $$props;
  let { size = "normal" } = $$props;
  let { href = void 0 } = $$props;
  let { action = void 0 } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let context = getContext("SMUI:icon-button:context");
  let ariaDescribedby = getContext("SMUI:icon-button:aria-describedby");
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? href == null ? "button" : "a" : void 0 } = $$props;
  let previousDisabled = $$restProps.disabled;
  setContext("SMUI:icon:context", "icon-button");
  let oldToggle = null;
  onDestroy(() => {
    instance && instance.destroy();
  });
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function getAttr(name) {
    var _a;
    return name in internalAttrs ? (_a = internalAttrs[name]) !== null && _a !== void 0 ? _a : null : getElement().getAttribute(name);
  }
  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }
  function handleChange(evtData) {
    pressed = evtData.isOn;
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.pressed === void 0 && $$bindings.pressed && pressed !== void 0)
    $$bindings.pressed(pressed);
  if ($$props.ariaLabelOn === void 0 && $$bindings.ariaLabelOn && ariaLabelOn !== void 0)
    $$bindings.ariaLabelOn(ariaLabelOn);
  if ($$props.ariaLabelOff === void 0 && $$bindings.ariaLabelOff && ariaLabelOff !== void 0)
    $$bindings.ariaLabelOff(ariaLabelOff);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.displayFlex === void 0 && $$bindings.displayFlex && displayFlex !== void 0)
    $$bindings.displayFlex(displayFlex);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    actionProp = (() => {
      if (context === "data-table:pagination") {
        switch (action) {
          case "first-page":
            return { "data-first-page": "true" };
          case "prev-page":
            return { "data-prev-page": "true" };
          case "next-page":
            return { "data-next-page": "true" };
          case "last-page":
            return { "data-last-page": "true" };
          default:
            return { "data-action": "true" };
        }
      } else if (context === "dialog:header" || context === "dialog:sheet") {
        return { "data-mdc-dialog-action": action };
      } else {
        return { action };
      }
    })();
    {
      if (previousDisabled !== $$restProps.disabled) {
        const elem = getElement();
        if ("blur" in elem) {
          elem.blur();
        }
        previousDisabled = $$restProps.disabled;
      }
    }
    {
      if (element && getElement() && toggle !== oldToggle) {
        if (toggle && !instance) {
          instance = new MDCIconButtonToggleFoundation({
            addClass,
            hasClass,
            notifyChange: (evtData) => {
              handleChange(evtData);
              dispatch(getElement(), "SMUIIconButtonToggle:change", evtData, void 0, true);
            },
            removeClass,
            getAttr,
            setAttr: addAttr
          });
          instance.init();
        } else if (!toggle && instance) {
          instance.destroy();
          instance = void 0;
          internalClasses = {};
          internalAttrs = {};
        }
        oldToggle = toggle;
      }
    }
    {
      if (instance && !isUninitializedValue(pressed) && instance.isOn() !== pressed) {
        instance.toggle(pressed);
      }
    }
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object_1.assign(
        {},
        { tag },
        {
          use: [
            [
              Ripple,
              {
                ripple,
                unbounded: true,
                color,
                disabled: !!$$restProps.disabled,
                addClass,
                removeClass,
                addStyle
              }
            ],
            forwardEvents,
            ...use
          ]
        },
        {
          class: classMap({
            [className]: true,
            "mdc-icon-button": true,
            "mdc-icon-button--on": !isUninitializedValue(pressed) && pressed,
            "mdc-icon-button--touch": touch,
            "mdc-icon-button--display-flex": displayFlex,
            "smui-icon-button--size-button": size === "button",
            "smui-icon-button--size-mini": size === "mini",
            "mdc-icon-button--reduced-size": size === "mini" || size === "button",
            "mdc-card__action": context === "card:action",
            "mdc-card__action--icon": context === "card:action",
            "mdc-top-app-bar__navigation-icon": context === "top-app-bar:navigation",
            "mdc-top-app-bar__action-item": context === "top-app-bar:action",
            "mdc-snackbar__dismiss": context === "snackbar:actions",
            "mdc-data-table__pagination-button": context === "data-table:pagination",
            "mdc-data-table__sort-icon-button": context === "data-table:sortable-header-cell",
            "mdc-dialog__close": (context === "dialog:header" || context === "dialog:sheet") && action === "close",
            ...internalClasses
          })
        },
        {
          style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
        },
        {
          "aria-pressed": !isUninitializedValue(pressed) ? pressed ? "true" : "false" : null
        },
        {
          "aria-label": pressed ? ariaLabelOn : ariaLabelOff
        },
        { "data-aria-label-on": ariaLabelOn },
        { "data-aria-label-off": ariaLabelOff },
        { "aria-describedby": ariaDescribedby },
        { href },
        actionProp,
        internalAttrs,
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="${"mdc-icon-button__ripple"}"></div>
  ${slots.default ? slots.default({}) : ``}${touch ? `<div class="${"mdc-icon-button__touch"}"></div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const content_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "h3.svelte-1lu3zyt{margin:0;color:var(--color-theme-2)}.content.svelte-1lu3zyt{padding:0;box-shadow:none}.summary.svelte-1lu3zyt{padding:1rem;border:4px solid var(--color-theme-2)}.literature.svelte-1lu3zyt{margin-top:2rem;padding:1rem;border:4px solid purple}",
  map: null
};
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  let { articleIndex } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.articleIndex === void 0 && $$bindings.articleIndex && articleIndex !== void 0)
    $$bindings.articleIndex(articleIndex);
  $$result.css.add(css$4);
  return `<section class="${"content svelte-1lu3zyt"}">${articleIndex ? `<h3 class="${"svelte-1lu3zyt"}">${escape(content.chapterNumber)}.${escape(content.sectionNumber)}.${escape(articleIndex)}: ${escape(content.headline)}</h3>` : `<h3 class="${"svelte-1lu3zyt"}">${escape(content.chapterNumber)}.${escape(content.sectionNumber)}: ${escape(content.headline)}</h3>`}
	${content.textContent ? `<div><!-- HTML_TAG_START -->${content.textContent}<!-- HTML_TAG_END --></div>` : ``}
	${content.summary ? `<div class="${"summary svelte-1lu3zyt"}"><h4>Zusammenfassung:</h4>
			<div><!-- HTML_TAG_START -->${content.summary}<!-- HTML_TAG_END --></div></div>` : ``}
	${content.literature ? `<div class="${"literature svelte-1lu3zyt"}"><h4>Literaturtipps:</h4>
			<div><!-- HTML_TAG_START -->${content.literature}<!-- HTML_TAG_END --></div></div>` : ``}
</section>`;
});
const article_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".content-wrapper.svelte-1l1jgln{margin:0;padding:0;padding-left:1rem;box-shadow:none}",
  map: null
};
const Article = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sectionIndex } = $$props;
  let { chapterIndex } = $$props;
  let { articleIndex } = $$props;
  let { article } = $$props;
  if ($$props.sectionIndex === void 0 && $$bindings.sectionIndex && sectionIndex !== void 0)
    $$bindings.sectionIndex(sectionIndex);
  if ($$props.chapterIndex === void 0 && $$bindings.chapterIndex && chapterIndex !== void 0)
    $$bindings.chapterIndex(chapterIndex);
  if ($$props.articleIndex === void 0 && $$bindings.articleIndex && articleIndex !== void 0)
    $$bindings.articleIndex(articleIndex);
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  $$result.css.add(css$3);
  return `${article ? `<section class="${"content-wrapper svelte-1l1jgln"}">${validate_component(Content, "Content").$$render($$result, { articleIndex, content: article }, {}, {})}</section>` : ``}`;
});
const section_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".content.svelte-18jwcjq{padding:0;box-shadow:none}",
  map: null
};
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sectionIndex } = $$props;
  let { chapterIndex } = $$props;
  let { section } = $$props;
  let articles = [];
  if ($$props.sectionIndex === void 0 && $$bindings.sectionIndex && sectionIndex !== void 0)
    $$bindings.sectionIndex(sectionIndex);
  if ($$props.chapterIndex === void 0 && $$bindings.chapterIndex && chapterIndex !== void 0)
    $$bindings.chapterIndex(chapterIndex);
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  $$result.css.add(css$2);
  return `<section class="${"content svelte-18jwcjq"}">${validate_component(Content, "Content").$$render(
    $$result,
    {
      content: section,
      articleIndex: void 0
    },
    {},
    {}
  )}
	${articles.length ? each(articles, (article) => {
    return `${validate_component(Article, "Article").$$render(
      $$result,
      {
        article,
        sectionIndex,
        chapterIndex,
        articleIndex: article.articleNumber
      },
      {},
      {}
    )}`;
  }) : ``}
</section>`;
});
const chapter_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".headline.svelte-1w6rqyt{color:var(--color-theme-2);font-size:1.25rem}",
  map: null
};
const Chapter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { chapterIndex } = $$props;
  let { chapter } = $$props;
  let panel1Open = false;
  let sections = [];
  if ($$props.chapterIndex === void 0 && $$bindings.chapterIndex && chapterIndex !== void 0)
    $$bindings.chapterIndex(chapterIndex);
  if ($$props.chapter === void 0 && $$bindings.chapter && chapter !== void 0)
    $$bindings.chapter(chapter);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"accordion-container"}">${validate_component(Accordion, "Accordion").$$render($$result, { multiple: true }, {}, {
      default: () => {
        return `${validate_component(Panel, "Panel").$$render(
          $$result,
          { open: panel1Open },
          {
            open: ($$value) => {
              panel1Open = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
                icon: () => {
                  return `${validate_component(IconButton, "IconButton").$$render(
                    $$result,
                    {
                      slot: "icon",
                      toggle: true,
                      pressed: panel1Open
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons", on: true }, {}, {
                          default: () => {
                            return `expand_less`;
                          }
                        })}
					${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                          default: () => {
                            return `expand_more`;
                          }
                        })}`;
                      }
                    }
                  )}`;
                },
                default: () => {
                  return `<h2 class="${"headline svelte-1w6rqyt"}">${escape(chapter.chapter + " " + chapter.headline)}</h2>`;
                }
              })}
			${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
                default: () => {
                  return `${chapter.textContent ? `<div><!-- HTML_TAG_START -->${chapter.textContent}<!-- HTML_TAG_END --></div>` : ``}
				${sections.length ? each(sections, (section) => {
                    return `${validate_component(Section, "Section").$$render(
                      $$result,
                      {
                        section,
                        sectionIndex: section.sectionNumber,
                        chapterIndex
                      },
                      {},
                      {}
                    )}`;
                  }) : ``}`;
                }
              })}`;
            }
          }
        )}`;
      }
    })}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const chapterModelQuery = `{
    mainChapterCollection {
        items {
          sys {
            id
          }
          headline
          chapter
          textContent{json}
        }
      }
    }
  `;
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import '../../styles/layout.scss';h1.svelte-1i7kcgo{color:var(--color-theme-2)}li.svelte-1i7kcgo{color:var(--color-theme-2);list-style:none}.content.svelte-1i7kcgo{margin-top:0;padding:1rem 1rem}",
  map: null
};
async function load() {
  const response = await contentfulFetch(chapterModelQuery);
  const data = await response.json();
  return data.data;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let chapters = [];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1xyzd3y_START -->${$$result.title = `<title>Konzept</title>`, ""}<meta name="${"description"}" content="${"workshop-concept"}"><!-- HEAD_svelte-1xyzd3y_END -->`, ""}

<section><h1 class="${"svelte-1i7kcgo"}">Inhaltsverzeichnis</h1>
	<ul>${chapters.length ? each(chapters, (chapter) => {
    return `<li class="${"svelte-1i7kcgo"}"><h2>${escape(chapter.chapter + " - " + chapter.headline)}</h2>
			</li>`;
  }) : `<p>loading</p>`}</ul></section>

<section class="${"content svelte-1i7kcgo"}">${chapters.length ? each(chapters, (chapter) => {
    return `${validate_component(Chapter, "Chapter").$$render(
      $$result,
      {
        chapter,
        chapterIndex: chapter.chapter.toString()
      },
      {},
      {}
    )}`;
  }) : `<p>loading</p>`}
</section>`;
});
export {
  Page as default,
  load
};
