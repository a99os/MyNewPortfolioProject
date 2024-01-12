<template lang="">
  <ul
    :class="`footer fixed z-[2] bottom-0 gap-5 flex left-0  ${general.pageBg} w-full justify-center items-center`"
  >
    <li v-for="link in links">
      <a
        target="_blank"
        @click="copy(link.tel)"
        :href="link.link"
        :class="`pt-2 flex flex-col items-center pb-4 hover-fadein`"
      >
        <i :class="` bx ${link.class} text-2xl`"></i>
        <p class="capitalize text-[12px]">{{ link.name }}</p>
      </a>
    </li>
  </ul>
</template>
<script setup>
function copy(tel) {
  if (tel) {
    navigator.clipboard.writeText("+998993147571");
    window.location.href = `tel:${+998993147571}`;
  }
}
const links = [
  {
    name: "telegram",
    class: "bxl-telegram",
    link: "https://t.me/A99oc",
    tel: false,
  },
  {
    name: "email",
    class: "bx-envelope",
    link: "mailto:abbosashirboev@gmail.com",
    tel: false,
  },
  {
    name: "phone",
    class: "bxs-phone-call",
    link: "#+998993147571",
    tel: true,
  },
  {
    name: "Resume",
    class: "bxs-file-doc",
    link: "https://docs.google.com/document/d/1_LKEuvaYOdLyTyRuQz0QHuWpgw1K3c0emEYI8VeYAVA/edit",
    tel: false,
  },
];
</script>
<style lang=""></style>
