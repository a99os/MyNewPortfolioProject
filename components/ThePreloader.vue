<template>
  <div class="preloader">
    <div class="preloader-percent h2">{{ percentage }}%</div>
  </div>
</template>
<script setup>
const percentage = ref(0);
onMounted(() => {
  const tl = gsap.timeline();
  tl.to(percentage, {
    progress: 100,
    duration: 1,
    onUpdate() {
      percentage.value = Math.floor(percentage.progress);
    },
    onComplete() {
      general.isPreloaderVisible = false;
      general.scrollLenis.start();
    },
  });

  tl.fromTo(
    ".preloader",
    {
      // opacity: 100,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
    {
      clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      // opacity: 0,
      duration: 1,
    }
  );
});
</script>
<style lang="scss">
.preloader {
  position: fixed;
  inset: 0;
  background: $color-white;
  z-index: $z-preloader;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
