<template lang="">
  <header class="header">
    <nuxt-link
      v-for="link in links"
      :to="link.href"
      class="header-link hover-fadein"
      >{{ link.text }}
    </nuxt-link>
  </header>
</template>
<script setup>
const links = [
  { href: "/", text: "main" },
  { href: "/about", text: "about" },
  { href: "/portfolio", text: "portfolio" },
];
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0 20px;
  z-index: $z-header;
}

.header-link {
  margin: 0 20px;
  text-transform: uppercase;
}

.page_white .header {
  background: $color-white;
}
.page_black .header {
  background: $color-black;
}
</style>
