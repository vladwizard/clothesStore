<script setup lang="ts">
import { createRouter, createWebHashHistory } from "vue-router";
import HomeVue from "./pages/Homepage.vue";
import CatalogVue from "./pages/Catalog.vue";
import Header2Vue from "./components/Header2.vue";
import Header1Vue from "./components/Header1.vue";
import Header3Vue from "./components/Header3.vue";

const routes = [
  { path: "/", component: HomeVue },
  { path: "/about", component: CatalogVue },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
</script>

<template>
  <Header1Vue class="Header1" />
  <Header2Vue class="Header2" />
  <Header3Vue />
  <!-- <HomeVue /> -->
  <header></header>
</template>

<style lang="scss" scoped></style>
