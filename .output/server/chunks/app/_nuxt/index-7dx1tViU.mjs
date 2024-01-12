import { g as general, _ as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext, watch, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { c as contentAnimation } from './contentAnimation-i78QNaKb.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      "https://anoratalks.uz",
      "http://prolegals.uz",
      // "http://vipairassist.com",
      "http://medstaffalliance.com",
      "http://bildir.uz"
    ];
    watch(
      () => [general.isTransitionFinish, general.isPreloaderVisible],
      ([isTransitionFinish, preloaderVisiblity]) => {
        if (isTransitionFinish && !preloaderVisiblity) {
          contentAnimation({
            type: "image",
            element: ".page-content__photo"
          });
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ("general" in _ctx ? _ctx.general : unref(general)).pageBg
      }, _attrs))} data-v-87ed97d6>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "custom",
        title: "Projects",
        "page-name": _ctx.$route.name
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="page-content" data-v-87ed97d6${_scopeId}><!--[-->`);
            ssrRenderList(4, (_2, i) => {
              _push2(`<a${ssrRenderAttr("href", links[i])} target="_blank" class="page-content__photo rounded-xl overflow-hidden hover-image" data-v-87ed97d6${_scopeId}><img${ssrRenderAttr("src", `/images/${i + 1}.png`)} alt="" data-v-87ed97d6${_scopeId}></a>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "page-content" }, [
                (openBlock(), createBlock(Fragment, null, renderList(4, (_2, i) => {
                  return createVNode("a", {
                    href: links[i],
                    target: "_blank",
                    class: "page-content__photo rounded-xl overflow-hidden hover-image"
                  }, [
                    createVNode("img", {
                      src: `/images/${i + 1}.png`,
                      alt: ""
                    }, null, 8, ["src"])
                  ], 8, ["href"]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-87ed97d6"]]);

export { index as default };
//# sourceMappingURL=index-7dx1tViU.mjs.map
