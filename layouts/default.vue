<script setup>
// import { useSmoothScroll } from "../composables/useSmoothScroll";

onMounted(() => {
  useSmoothScroll();
});
</script>
<template>
  <div id="viewport">
    <ThePreloader />
    <slot />
  </div>
</template>
<style lang="scss" scoped></style>
