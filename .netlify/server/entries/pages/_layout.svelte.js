import { c as create_ssr_component, b as compute_rest_props, g as get_current_component, d as getContext, v as validate_component, m as missing_component, s as setContext, e as globals, o as onDestroy, f as spread, h as escape_attribute_value, i as escape_object, j as add_attribute, k as subscribe } from "../../chunks/index3.js";
import { p as page } from "../../chunks/stores.js";
import { f as forwardEventsBuilder, c as classMap, S as SmuiElement, R as Ripple } from "../../chunks/SmuiElement.js";
const logo = "/_app/immutable/assets/CG_Logo-29bb4959.png";
const CommonLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "component", "tag", "getElement"]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? "span" : void 0 } = $$props;
  const context = getContext("SMUI:label:context");
  const tabindex = getContext("SMUI:label:tabindex");
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
      Object.assign(
        {},
        { tag },
        { use: [forwardEvents, ...use] },
        {
          class: classMap({
            [className]: true,
            "mdc-button__label": context === "button",
            "mdc-fab__label": context === "fab",
            "mdc-tab__text-label": context === "tab",
            "mdc-image-list__label": context === "image-list",
            "mdc-snackbar__label": context === "snackbar",
            "mdc-banner__text": context === "banner",
            "mdc-segmented-button__label": context === "segmented-button",
            "mdc-data-table__pagination-rows-per-page-label": context === "data-table:pagination",
            "mdc-data-table__header-cell-label": context === "data-table:sortable-header-cell"
          })
        },
        context === "snackbar" ? { "aria-atomic": "false" } : {},
        { tabindex },
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
const { Object: Object_1 } = globals;
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let actionProp;
  let defaultProp;
  let secondaryProp;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "variant",
    "touch",
    "href",
    "action",
    "defaultAction",
    "secondary",
    "component",
    "tag",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { color = "primary" } = $$props;
  let { variant = "text" } = $$props;
  let { touch = false } = $$props;
  let { href = void 0 } = $$props;
  let { action = "close" } = $$props;
  let { defaultAction = false } = $$props;
  let { secondary = false } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let context = getContext("SMUI:button:context");
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? href == null ? "button" : "a" : void 0 } = $$props;
  let previousDisabled = $$restProps.disabled;
  setContext("SMUI:label:context", "button");
  setContext("SMUI:icon:context", "button");
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
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.defaultAction === void 0 && $$bindings.defaultAction && defaultAction !== void 0)
    $$bindings.defaultAction(defaultAction);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
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
    actionProp = context === "dialog:action" && action != null ? { "data-mdc-dialog-action": action } : { action: $$props.action };
    defaultProp = context === "dialog:action" && defaultAction ? { "data-mdc-dialog-button-default": "" } : { default: $$props.default };
    secondaryProp = context === "banner" ? {} : { secondary: $$props.secondary };
    {
      if (previousDisabled !== $$restProps.disabled) {
        const el = getElement();
        if ("blur" in el) {
          el.blur();
        }
        previousDisabled = $$restProps.disabled;
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
                unbounded: false,
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
            "mdc-button": true,
            "mdc-button--raised": variant === "raised",
            "mdc-button--unelevated": variant === "unelevated",
            "mdc-button--outlined": variant === "outlined",
            "smui-button--color-secondary": color === "secondary",
            "mdc-button--touch": touch,
            "mdc-card__action": context === "card:action",
            "mdc-card__action--button": context === "card:action",
            "mdc-dialog__button": context === "dialog:action",
            "mdc-top-app-bar__navigation-icon": context === "top-app-bar:navigation",
            "mdc-top-app-bar__action-item": context === "top-app-bar:action",
            "mdc-snackbar__action": context === "snackbar:actions",
            "mdc-banner__secondary-action": context === "banner" && secondary,
            "mdc-banner__primary-action": context === "banner" && !secondary,
            "mdc-tooltip__action": context === "tooltip:rich-actions",
            ...internalClasses
          })
        },
        {
          style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
        },
        actionProp,
        defaultProp,
        secondaryProp,
        { href },
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
          return `<div class="${"mdc-button__ripple"}"></div>
  ${slots.default ? slots.default({}) : ``}${touch ? `<div class="${"mdc-button__touch"}"></div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const MenuSurface = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "static",
    "anchor",
    "fixed",
    "open",
    "managed",
    "fullWidth",
    "quickOpen",
    "anchorElement",
    "anchorCorner",
    "anchorMargin",
    "maxHeight",
    "horizontallyCenteredOnViewport",
    "openBottomBias",
    "isOpen",
    "setOpen",
    "setAbsolutePosition",
    "setIsHoisted",
    "isFixed",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { static: isStatic = false } = $$props;
  let { anchor = true } = $$props;
  let { fixed = false } = $$props;
  let { open = isStatic } = $$props;
  let { managed = false } = $$props;
  let { fullWidth = false } = $$props;
  let { quickOpen = false } = $$props;
  let { anchorElement = void 0 } = $$props;
  let { anchorCorner = void 0 } = $$props;
  let { anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 } } = $$props;
  let { maxHeight = 0 } = $$props;
  let { horizontallyCenteredOnViewport = false } = $$props;
  let { openBottomBias = 0 } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  setContext("SMUI:list:role", "menu");
  setContext("SMUI:list:item:role", "menuitem");
  onDestroy(() => {
  });
  function isOpen() {
    return open;
  }
  function setOpen(value) {
    open = value;
  }
  function setAbsolutePosition(x, y) {
    return instance.setAbsolutePosition(x, y);
  }
  function setIsHoisted(isHoisted) {
    return instance.setIsHoisted(isHoisted);
  }
  function isFixed() {
    return instance.isFixed();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.static === void 0 && $$bindings.static && isStatic !== void 0)
    $$bindings.static(isStatic);
  if ($$props.anchor === void 0 && $$bindings.anchor && anchor !== void 0)
    $$bindings.anchor(anchor);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.managed === void 0 && $$bindings.managed && managed !== void 0)
    $$bindings.managed(managed);
  if ($$props.fullWidth === void 0 && $$bindings.fullWidth && fullWidth !== void 0)
    $$bindings.fullWidth(fullWidth);
  if ($$props.quickOpen === void 0 && $$bindings.quickOpen && quickOpen !== void 0)
    $$bindings.quickOpen(quickOpen);
  if ($$props.anchorElement === void 0 && $$bindings.anchorElement && anchorElement !== void 0)
    $$bindings.anchorElement(anchorElement);
  if ($$props.anchorCorner === void 0 && $$bindings.anchorCorner && anchorCorner !== void 0)
    $$bindings.anchorCorner(anchorCorner);
  if ($$props.anchorMargin === void 0 && $$bindings.anchorMargin && anchorMargin !== void 0)
    $$bindings.anchorMargin(anchorMargin);
  if ($$props.maxHeight === void 0 && $$bindings.maxHeight && maxHeight !== void 0)
    $$bindings.maxHeight(maxHeight);
  if ($$props.horizontallyCenteredOnViewport === void 0 && $$bindings.horizontallyCenteredOnViewport && horizontallyCenteredOnViewport !== void 0)
    $$bindings.horizontallyCenteredOnViewport(horizontallyCenteredOnViewport);
  if ($$props.openBottomBias === void 0 && $$bindings.openBottomBias && openBottomBias !== void 0)
    $$bindings.openBottomBias(openBottomBias);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.setOpen === void 0 && $$bindings.setOpen && setOpen !== void 0)
    $$bindings.setOpen(setOpen);
  if ($$props.setAbsolutePosition === void 0 && $$bindings.setAbsolutePosition && setAbsolutePosition !== void 0)
    $$bindings.setAbsolutePosition(setAbsolutePosition);
  if ($$props.setIsHoisted === void 0 && $$bindings.setIsHoisted && setIsHoisted !== void 0)
    $$bindings.setIsHoisted(setIsHoisted);
  if ($$props.isFixed === void 0 && $$bindings.isFixed && isFixed !== void 0)
    $$bindings.isFixed(isFixed);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `

<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-menu-surface": true,
          "mdc-menu-surface--fixed": fixed,
          "mdc-menu-surface--open": isStatic,
          "smui-menu-surface--static": isStatic,
          "mdc-menu-surface--fullwidth": fullWidth,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'header.svelte-1rauzba.svelte-1rauzba{display:flex;background-color:white}img.svelte-1rauzba.svelte-1rauzba{position:absolute;left:0.5rem;top:0.5rem;height:4rem}.svelte-1rauzba .button{width:100%;display:flex;align-items:center}nav.svelte-1rauzba.svelte-1rauzba{display:flex;width:100%;justify-content:flex-end;margin-right:1rem;--background:rgba(255, 255, 255, 0.7)}ul.svelte-1rauzba.svelte-1rauzba{position:flex;margin:0;height:4.5em;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}.mobile-nav.svelte-1rauzba.svelte-1rauzba{margin:auto 0;min-width:200px;display:flex;justify-content:end}li.svelte-1rauzba.svelte-1rauzba{display:none;position:relative}li.svelte-1rauzba+li.svelte-1rauzba{margin-left:1rem}li[aria-current=page].svelte-1rauzba.svelte-1rauzba::before{--size:6px;content:"";width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--color-theme-1)}@media(min-width: 1024px){.tablet-desktop-navigation.svelte-1rauzba.svelte-1rauzba{justify-content:center}nav.svelte-1rauzba.svelte-1rauzba{justify-content:center}}@media(min-width: 716px){header.svelte-1rauzba.svelte-1rauzba{align-items:flex-end}li.svelte-1rauzba.svelte-1rauzba{display:flex}.tablet-desktop-navigation.svelte-1rauzba.svelte-1rauzba{display:flex}.mobile-nav.svelte-1rauzba.svelte-1rauzba{display:none}}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let surface;
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<header class="${"svelte-1rauzba"}"><nav class="${"svelte-1rauzba"}"><img${add_attribute("src", logo, 0)} alt="${"logo"}" class="${"svelte-1rauzba"}">
		<ul class="${"tablet-desktop-navigation svelte-1rauzba"}"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="${"svelte-1rauzba"}">${validate_component(Button, "Button").$$render($$result, { href: "/", variant: "outlined" }, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Willkommen`;
          }
        })}`;
      }
    })}</li>
			<li${add_attribute("aria-current", $page.url.pathname === "/concept" ? "page" : void 0, 0)} class="${"svelte-1rauzba"}">${validate_component(Button, "Button").$$render($$result, { href: "/concept", variant: "outlined" }, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Unser Konzept`;
          }
        })}`;
      }
    })}</li>
			<li${add_attribute(
      "aria-current",
      $page.url.pathname.startsWith("/sverdle") ? "page" : void 0,
      0
    )} class="${"svelte-1rauzba"}">${validate_component(Button, "Button").$$render(
      $$result,
      {
        href: "https://coloredglasses.de/",
        target: "blank",
        variant: "outlined"
      },
      {},
      {
        default: () => {
          return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Zur Homepage`;
            }
          })}`;
        }
      }
    )}</li></ul>
		<div class="${"mobile-nav svelte-1rauzba"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Menü`;
      }
    })}
			${validate_component(MenuSurface, "MenuSurface").$$render(
      $$result,
      {
        anchorCorner: "BOTTOM_START",
        class: "surface",
        this: surface
      },
      {
        this: ($$value) => {
          surface = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              class: "button",
              href: "/",
              variant: "outlined",
              width: "100%"
            },
            {},
            {
              default: () => {
                return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `Willkommen`;
                  }
                })}`;
              }
            }
          )}
				${validate_component(Button, "Button").$$render(
            $$result,
            {
              class: "button",
              href: "/concept",
              variant: "outlined"
            },
            {},
            {
              default: () => {
                return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `Unser Konzept`;
                  }
                })}`;
              }
            }
          )}
				${validate_component(Button, "Button").$$render(
            $$result,
            {
              class: "button",
              href: "https://coloredglasses.de/",
              target: "blank",
              variant: "outlined"
            },
            {},
            {
              default: () => {
                return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `Zur Homepage`;
                  }
                })}`;
              }
            }
          )}`;
        }
      }
    )}</div></nav>
</header>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const smui = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-1cwabsx{display:flex;flex-direction:column;min-height:100vh}main.svelte-1cwabsx{flex:1;display:flex;flex-direction:column;width:98%;margin:0 auto;box-sizing:border-box}@media(min-width: 1024px){main.svelte-1cwabsx{max-width:64rem}}@media(min-width: 800px){main.svelte-1cwabsx{width:100%;max-width:48rem}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app svelte-1cwabsx"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<main class="${"svelte-1cwabsx"}">${slots.default ? slots.default({}) : ``}</main>
</div>`;
});
export {
  Layout as default
};
