<template lang="">
  <div :class="general.pageBg">
    <NuxtLayout
      name="custom"
      :title="`Project ${$route.params.id}`"
      :page-name="`project-${$route.params.id}`"
    >
      <div class="page-content">
        <div v-for="_ in 3" class="page-content__block">
          <div class="page-content__block-photo">
            <img src="/photo.jpeg" alt="" />
          </div>
          <div class="page-content__block-text p1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolor
            sunt molestiae ex molestias optio repudiandae recusandae quo earum
            adipisci exercitationem unde cumque quia repellendus error, animi
            accusantium nobis. Ad?
          </div>
        </div>
        <div class="page-next__project">
          <nuxt-link
            :to="`/gallery/${+$route.params.id + 1}`"
            class="page-next__project-link hover-fadein h2"
            >next project- {{ +$route.params.id + 1 }}
          </nuxt-link>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
definePageMeta(transition);

watch(
  () => [general.isTransitionFinish, general.isPreloaderVisible],
  ([isTransitionFinish, preloaderVisiblity]) => {
    if (isTransitionFinish && !preloaderVisiblity) {
      contentAnimation({
        type: "image",
        element: ".page-content__block-photo",
      });
      contentAnimation({
        type: "text",
        element: ".page-content__block-text",
      });
      contentAnimation({
        type: "text",
        element: ".page-next__project",
      });
    }
  }
);
</script>
<style lang="scss" scoped>
.page-content__block {
  padding: 32px 0;
}
.page-content__block-text {
  margin-top: 10px;
}
.page-next__project {
  margin-top: 32px;
  padding-bottom: 32px;
}
</style>
