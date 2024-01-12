import { S as ScrollTrigger, a as gsapWithCSS } from '../server.mjs';

function useAnimateText(el) {
  const element = typeof el === "string" ? (void 0).querySelector(el) : el;
  const tl = gsapWithCSS.timeline();
  if (element) {
    tl.from(element, {
      opacity: 0,
      y: 50,
      duration: 0.7,
      delay: 0.1
    });
  }
  return tl;
}
function useAnimateImage(el) {
  const element = typeof el === "string" ? (void 0).querySelector(el) : el;
  const tl = gsapWithCSS.timeline();
  if (element) {
    tl.set(element, {
      overflow: "hidden",
      pointerEvent: "none"
    });
    tl.fromTo(
      element,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
      },
      {
        transition: "unset",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.7,
        delay: 0.1,
        clearProps: "all"
      }
    );
  }
  return tl;
}
function contentAnimation({ type, element }) {
  const elements = (void 0).querySelectorAll(element);
  elements.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      animation: type === "text" ? useAnimateText(el) : useAnimateImage(el)
    });
  });
}

export { contentAnimation as c };
//# sourceMappingURL=contentAnimation-i78QNaKb.mjs.map
