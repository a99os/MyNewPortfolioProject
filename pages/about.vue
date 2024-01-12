<template lang="">
  <div :class="general.pageBg">
    <NuxtLayout name="custom" title="About" :page-name="$route.name">
      <div class="page-content">
        <div class="page-content__block p1" v-for="text in data">
          {{ text }}
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
definePageMeta(transition);

const data = [
  `I am Abbas Ashirboyev, ${
    new Date().getFullYear() - 1999
  } years old, I live in Tashkent, Uzbekistan. I am a frontend developer. I like football very much and I am a fan of Real Madrid."`,
  ,
  `Men Abbos Ashirboyev, ${
    new Date().getFullYear() - 1999
  } yoshdaman, O'zbekistonda, Toshkent viloyatida yashayman. Men frontend dasturchisiman. Menga Futbol sport turi juda yoqadi va Real Madrid jamoasining muhlisiman.`,
  ,
  `In the period of 2022-2023, I studied the "Vue Js" training center "Najot Ta'lim"`,
  ,
  `2022-2023-yillar oralig'ida "Najot Ta'lim" o'quv markazini "Vue Js" kursini o'qidim`,
  ,
  `Since 2023, I have been working as a frontend developer at AlulAstra IT company.`,
  ,
  `2023-yildan buyon AlulAstra IT companiyasida frontend dasturchi bo'lib ishlab kelayapman.`,
];

watch(
  () => [general.isTransitionFinish, general.isPreloaderVisible],
  ([isTransitionFinish, preloaderVisiblity]) => {
    if (isTransitionFinish && !preloaderVisiblity) {
      contentAnimation({
        type: "text",
        element: ".page-content__block",
      });
    }
  }
);
</script>
<style lang="scss" scoped>
.page-content__block {
  padding-bottom: 30px;
}
.page-content__block:last-child {
  padding-bottom: 70px;
}
</style>
