<script setup lang="ts">
import { useFilterStore } from "../../stores/catalogFilter";

const filterList = useFilterStore();

const items = [
  {
    filterValue: "T-shirts & tops",
    title: "Tops",
    url: "/images/popularCategories/image0.png",
  },
  {
    filterValue: "T-shirts & tops",
    title: "T-shirts",
    url: "/images/popularCategories/image1.png",
  },
  {
    filterValue: "Hats & scarves",
    title: "Caps",
    url: "/images/popularCategories/image2.png",
  },
  {
    filterValue: "Sandals",
    title: "Sandals",
    url: "/images/popularCategories/image3.png",
  },
  {
    filterValue: "Jackets",
    title: "Jackets",
    url: "/images/popularCategories/image4.png",
  },
  {
    filterValue: "Coats",
    title: "Coats",
    url: "/images/popularCategories/image5.png",
  },
];
</script>

<template>
  <article class="PopularCategories">
    <h1>Popular categories</h1>
    <main>
      <router-link
        to="/catalog"
        v-for="item in items"
        @click="filterList.SetTypes([item.filterValue])"
      >
        <img :src="item.url" alt="" />

        <p class="lead bold gray900">{{ item.title }}</p>
      </router-link>
    </main>
    <footer>
      <button></button>
    </footer>
  </article>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
  margin-bottom: 60px;
}

main {
  width: max-content;
  margin: 0 auto;
  display: flex;
  gap: 30px;
}

p {
  margin: 24px auto 0 auto;
  text-align: center;
}
</style>
