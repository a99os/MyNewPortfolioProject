import { g as general, _ as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, watch, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { c as contentAnimation } from './contentAnimation-i78QNaKb.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
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

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      `I am Abbas Ashirboyev, ${(/* @__PURE__ */ new Date()).getFullYear() - 1999} years old, I live in Tashkent, Uzbekistan. I am a frontend developer. I like football very much and I am a fan of Real Madrid."`,
      ,
      `Men Abbos Ashirboyev, ${(/* @__PURE__ */ new Date()).getFullYear() - 1999} yoshdaman, O'zbekistonda, Toshkent viloyatida yashayman. Men frontend dasturchisiman. Menga Futbol sport turi juda yoqadi va Real Madrid jamoasining muhlisiman.`,
      ,
      `In the period of 2022-2023, I studied the "Vue Js" training center "Najot Ta'lim"`,
      ,
      `2022-2023-yillar oralig'ida "Najot Ta'lim" o'quv markazini "Vue Js" kursini o'qidim`,
      ,
      `Since 2023, I have been working as a frontend developer at AlulAstra IT company.`,
      ,
      `2023-yildan buyon AlulAstra IT companiyasida frontend dasturchi bo'lib ishlab kelayapman.`
    ];
    watch(
      () => [general.isTransitionFinish, general.isPreloaderVisible],
      ([isTransitionFinish, preloaderVisiblity]) => {
        if (isTransitionFinish && !preloaderVisiblity) {
          contentAnimation({
            type: "text",
            element: ".page-content__block"
          });
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ("general" in _ctx ? _ctx.general : unref(general)).pageBg
      }, _attrs))} data-v-9e73b07c>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "custom",
        title: "About",
        "page-name": _ctx.$route.name
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="page-content" data-v-9e73b07c${_scopeId}><!--[-->`);
            ssrRenderList(data, (text) => {
              _push2(`<div class="page-content__block p1" data-v-9e73b07c${_scopeId}>${ssrInterpolate(text)}</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "page-content" }, [
                (openBlock(), createBlock(Fragment, null, renderList(data, (text) => {
                  return createVNode("div", { class: "page-content__block p1" }, toDisplayString(text), 1);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9e73b07c"]]);

export { about as default };
//# sourceMappingURL=about-hDS66sd8.mjs.map
