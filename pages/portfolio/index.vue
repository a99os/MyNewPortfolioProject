<template lang="">
  <div :class="general.pageBg">
    <NuxtLayout name="custom" title="Projects" :page-name="$route.name">
      <div class="page-content">
        <a
          :href="links[i]"
          target="_blank"
          class="page-content__photo rounded-xl overflow-hidden hover-image"
          v-for="(_, i) in 4"
        >
          <img :src="`/images/${i + 1}.png`" alt="" />
        </a>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
definePageMeta(transition);

const links = [
  "https://anoratalks.uz",
  "http://prolegals.uz",
  // "http://vipairassist.com",
  "http://medstaffalliance.com",
  "http://bildir.uz",
];

watch(
  () => [general.isTransitionFinish, general.isPreloaderVisible],
  ([isTransitionFinish, preloaderVisiblity]) => {
    if (isTransitionFinish && !preloaderVisiblity) {
      contentAnimation({
        type: "image",
        element: ".page-content__photo",
      });
    }
  }
);
</script>
<style lang="scss" scoped>
.page-content {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  align-items: flex-start;
  padding-bottom: 70px;
}

@media only screen and (max-width: 768px) {
  .page-content {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    align-items: flex-start;
  }
}
</style>
