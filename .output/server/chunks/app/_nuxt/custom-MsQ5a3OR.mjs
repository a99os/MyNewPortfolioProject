import { _ as __nuxt_component_0$1 } from './nuxt-link-CXWnO8QZ.mjs';
import { useSSRContext, watch, mergeProps, withCtx, createTextVNode, toDisplayString, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import { u as useSeoMeta, g as general, a as gsapWithCSS } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$4 = {
  __name: "TheHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      { href: "/", text: "main" },
      { href: "/about", text: "about" },
      { href: "/portfolio", text: "portfolio" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-fbe4f619><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: link.href,
          class: "header-link hover-fadein"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></header>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-fbe4f619"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-mask" }, _attrs))}></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageMask.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "TheTitle",
  __ssrInlineRender: true,
  props: { text: String },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "default-title h1" }, _attrs))} data-v-3a7171f9><div class="default-title__wrap" data-v-3a7171f9>${ssrInterpolate(props.text)}</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheTitle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3a7171f9"]]);
const _sfc_main$1 = {
  __name: "TheFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      {
        name: "telegram",
        class: "bxl-telegram",
        link: "https://t.me/A99oc",
        tel: false
      },
      {
        name: "email",
        class: "bx-envelope",
        link: "mailto:abbosashirboev@gmail.com",
        tel: false
      },
      {
        name: "phone",
        class: "bxs-phone-call",
        link: "#+998993147571",
        tel: true
      },
      {
        name: "Resume",
        class: "bxs-file-doc",
        link: "https://docs.google.com/document/d/1_LKEuvaYOdLyTyRuQz0QHuWpgw1K3c0emEYI8VeYAVA/edit",
        tel: false
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: `footer fixed z-[2] bottom-0 gap-5 flex left-0  ${("general" in _ctx ? _ctx.general : unref(general)).pageBg} w-full justify-center items-center`
      }, _attrs))}><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(`<li><a target="_blank"${ssrRenderAttr("href", link.link)} class="${ssrRenderClass(`pt-2 flex flex-col items-center pb-4 hover-fadein`)}"><i class="${ssrRenderClass(` bx ${link.class} text-2xl`)}"></i><p class="capitalize text-[12px]">${ssrInterpolate(link.name)}</p></a></li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$1;
function firstScreenAnimation({ parent }) {
  const parentEl = (void 0).querySelector(parent);
  const header = parentEl.querySelector(".header");
  const footer = parentEl.querySelector(".footer");
  const title = parentEl.querySelector(".default-title__wrap");
  const mask = parentEl.querySelector(".page-mask");
  const tl = gsapWithCSS.timeline();
  tl.to(mask, {
    opacity: 0
  });
  tl.from(title, {
    yPercent: 100,
    opacity: 0,
    clearProps: "all"
  });
  tl.from(
    header,
    {
      yPercent: -100,
      clearProps: "all"
    },
    "<"
  );
  tl.from(
    footer,
    {
      yPercent: 100,
      clearProps: "all"
    },
    "<"
  );
}
const _sfc_main = {
  __name: "custom",
  __ssrInlineRender: true,
  props: { title: String, pageName: String },
  setup(__props) {
    const props = __props;
    useSeoMeta({
      title: `${props.title == "Abbos Ashirboyev" ? props.title : props.title + " of Abbos Ashorboyev"}`,
      ogTitle: "Abbos Ashirboyev || Frontend Vuejs developer",
      description: "Abbos Ashirboyev Fullstack developer focused on creating Websites and Web applications. I really like different projects that solve real problems.",
      ogDescription: "I'm Abbos, I'm 23 years old and I live in Uzbekistan, Tashkent. Fullstack developer",
      ogImage: "https://a99os.uz/Image_Portfolio.png",
      twitterCard: "summary_large_image"
    });
    watch(
      () => [general.isTransitionStart, general.isPreloaderVisible],
      ([transitionStart, preloaderVisiblity]) => {
        if (transitionStart && !preloaderVisiblity) {
          firstScreenAnimation({ parent: `.${props.pageName}` });
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheHeader = __nuxt_component_0;
      const _component_PageMask = __nuxt_component_1;
      const _component_TheTitle = __nuxt_component_2;
      const _component_TheFooter = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: `page ${props.pageName}`
      }, _attrs))} data-v-cef10fc9>`);
      _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
      _push(`<div class="page-wrap _container" data-v-cef10fc9>`);
      _push(ssrRenderComponent(_component_PageMask, null, null, _parent));
      _push(ssrRenderComponent(_component_TheTitle, {
        text: props.title
      }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/custom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const custom = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cef10fc9"]]);

export { custom as default };
//# sourceMappingURL=custom-MsQ5a3OR.mjs.map
