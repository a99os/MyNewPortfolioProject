<template lang="">
  <div class="default-title h1">
    <div class="default-title__wrap">{{ props.text }}</div>
  </div>
</template>
<script setup>
const props = defineProps({ text: String });
</script>
<style lang="scss" scoped>
.default-title {
  height: 100vh;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.default-title__wrap {
  will-change: transform;
}
</style>
