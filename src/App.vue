<script setup lang="ts">
import HeaderUser from "./components/headers/Topbar.vue";
import HeaderMain from "./components/headers/HeaderMain.vue";
import HeaderSales from "./components/headers/SpecialOffers.vue";

</script>

<template>
  <HeaderUser />
  <HeaderMain />
  <HeaderSales />
  <router-view></router-view>
</template>

<style lang="scss">

</style>