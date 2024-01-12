<script setup>
const props = defineProps({ title: String, pageName: String });
useSeoMeta({
  title: `${
    props.title == "Abbos Ashirboyev"
      ? props.title
      : props.title + " of Abbos Ashorboyev"
  }`,
  ogTitle: "Abbos Ashirboyev || Frontend Vuejs developer",
  description:
    "Abbos Ashirboyev Fullstack developer focused on creating Websites and Web applications. I really like different projects that solve real problems.",
  ogDescription:
    "I'm Abbos, I'm 23 years old and I live in Uzbekistan, Tashkent. Fullstack developer",
  ogImage: "https://a99os.uz/Image_Portfolio.png",
  twitterCard: "summary_large_image",
});
watch(
  () => [general.isTransitionStart, general.isPreloaderVisible],
  ([transitionStart, preloaderVisiblity]) => {
    if (transitionStart && !preloaderVisiblity) {
      firstScreenAnimation({ parent: `.${props.pageName}` });
    }
  }
);
</script>
<template>
  <div :class="`page ${props.pageName}`">
    <TheHeader />
    <div class="page-wrap _container">
      <PageMask />
      <TheTitle :text="props.title" />
      <slot />
    </div>
    <TheFooter />
  </div>
</template>
<style lang="scss" scoped>
._container {
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
}
@media only screen and (max-width: 768px) {
  ._container {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
