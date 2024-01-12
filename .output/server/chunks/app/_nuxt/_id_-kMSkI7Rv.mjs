import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { g as general, _ as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-CXWnO8QZ.mjs';
import { useSSRContext, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { c as contentAnimation } from './contentAnimation-i78QNaKb.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + publicAssetsURL("photo.jpeg");
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    watch(
      () => [general.isTransitionFinish, general.isPreloaderVisible],
      ([isTransitionFinish, preloaderVisiblity]) => {
        if (isTransitionFinish && !preloaderVisiblity) {
          contentAnimation({
            type: "image",
            element: ".page-content__block-photo"
          });
          contentAnimation({
            type: "text",
            element: ".page-content__block-text"
          });
          contentAnimation({
            type: "text",
            element: ".page-next__project"
          });
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ("general" in _ctx ? _ctx.general : unref(general)).pageBg
      }, _attrs))} data-v-9183d0c5>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "custom",
        title: `Project ${_ctx.$route.params.id}`,
        "page-name": `project-${_ctx.$route.params.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="page-content" data-v-9183d0c5${_scopeId}><!--[-->`);
            ssrRenderList(3, (_2) => {
              _push2(`<div class="page-content__block" data-v-9183d0c5${_scopeId}><div class="page-content__block-photo" data-v-9183d0c5${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-9183d0c5${_scopeId}></div><div class="page-content__block-text p1" data-v-9183d0c5${_scopeId}> Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolor sunt molestiae ex molestias optio repudiandae recusandae quo earum adipisci exercitationem unde cumque quia repellendus error, animi accusantium nobis. Ad? </div></div>`);
            });
            _push2(`<!--]--><div class="page-next__project" data-v-9183d0c5${_scopeId}>`);
            _push2(ssrRenderComponent(_component_nuxt_link, {
              to: `/gallery/${+_ctx.$route.params.id + 1}`,
              class: "page-next__project-link hover-fadein h2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`next project- ${ssrInterpolate(+_ctx.$route.params.id + 1)}`);
                } else {
                  return [
                    createTextVNode("next project- " + toDisplayString(+_ctx.$route.params.id + 1), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "page-content" }, [
                (openBlock(), createBlock(Fragment, null, renderList(3, (_2) => {
                  return createVNode("div", { class: "page-content__block" }, [
                    createVNode("div", { class: "page-content__block-photo" }, [
                      createVNode("img", {
                        src: _imports_0,
                        alt: ""
                      })
                    ]),
                    createVNode("div", { class: "page-content__block-text p1" }, " Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolor sunt molestiae ex molestias optio repudiandae recusandae quo earum adipisci exercitationem unde cumque quia repellendus error, animi accusantium nobis. Ad? ")
                  ]);
                }), 64)),
                createVNode("div", { class: "page-next__project" }, [
                  createVNode(_component_nuxt_link, {
                    to: `/gallery/${+_ctx.$route.params.id + 1}`,
                    class: "page-next__project-link hover-fadein h2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("next project- " + toDisplayString(+_ctx.$route.params.id + 1), 1)
                    ]),
                    _: 1
                  }, 8, ["to"])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9183d0c5"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-kMSkI7Rv.mjs.map
