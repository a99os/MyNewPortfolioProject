export default defineNuxtRouteMiddleware((to, from) => {
  from.meta.pageTransition.onLeave = (el, done) => {
    general.isTransitionStart = true;
    general.isTransitionFinish = false;
    general.scrollLenis.stop();

    const tl = gsap.timeline({
      onComplete() {
        gsap.set(
          [
            el,
            el.querySelector(".page-wrap"),
            el.querySelector(".header"),
            el.querySelector(".footer"),
            el.querySelector(".page-mask"),
          ],
          {
            clearProps: "all",
          }
        );

        ScrollTrigger.getAll().filter((st) => {
          if (from.name.includes("-id")) {
            if (
              st.trigger &&
              st.trigger.closest(`.project-${from.params.id}`)
            ) {
              st.kill();
            }
          } else {
            if (st.trigger && st.trigger.closest(`.${from.name}`)) {
              st.kill();
            }
          }
        });
        done();
      },
    });

    tl.set(el, {
      position: "relative",
      zIndex: 2,
      pointerEvents: "none",
    });
    tl.fromTo(
      el,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        duration: 1,
      },
      0
    );
    tl.to(
      el.querySelector(".page-wrap"),
      {
        xPercent: -20,
        duration: 1,
      },
      0
    );
    tl.to(
      el.querySelector(".page-mask"),
      {
        opacity: 1,
        duration: 1,
      },
      0
    );

    tl.to(
      el.querySelector(".header"),
      {
        yPercent: -100,
        duration: 0.3,
      },
      0
    );
    tl.to(
      el.querySelector(".footer"),
      {
        yPercent: 100,
        duration: 0.3,
      },
      0
    );
  };
  to.meta.pageTransition.onEnter = (el, done) => {
    useChangePageBg();
    const tl = gsap.timeline({
      onComplete() {
        gsap.set(el, {
          clearProps: "all",
        });
        general.isTransitionStart = false;

        general.isTransitionFinish = true;
        general.scrollLenis.start();
        done();
      },
    });

    tl.set(el, {
      position: "fixed",
      width: "100%",
      top: 0,
      left: 0,
      pointerEvents: "none",
    });
    tl.from(el.querySelector(".page-wrap"), {
      xPercent: 20,
      duration: 1,
    });
  };
});
