<script setup lang="ts">
import star from "../assets/icons/star.vue";
import heart from "../assets/icons/heart.vue";
let a = defineProps<{
  image: string;
  stars: number;
  price: string;
  title: string;
}>();
</script>

<template>
  <article>
    <div class="stars" v-if="stars > 0">
      <star fill v-for="star in stars" />
      <star v-for="star in 5 - stars" />
    </div>
    <div class="favorite-button">
      <heart />
    </div>
    <img :src="image" alt="" />

    <p class="large gray800">{{ title }}</p>
    <h5 class="gray900">{{ price }}</h5>
  </article>
</template>

<style lang="scss" scoped>
article {
  position: relative;
  width: 285px;
  height: 413px;
}
.stars {
  position: absolute;
  display: flex;
  gap: 3px;
  top: 16px;
  right: 16px;
}
.favorite-button {
  position: absolute;
  width: 32px;
  height: 32px;
  top: 272px;
  right: 16px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    height: 13.328858375549316px;
    width: 15.170741081237793px;
  }
}
img {
  padding-bottom: 16px;
}
img ~ * {
  padding-left: 16px;
}
p {
  margin-bottom: 8px;
}
</style>
