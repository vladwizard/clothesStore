<script setup lang="ts">
import starVue from '../../assets/icons/star.vue';
defineProps<{ stars: number }>();
</script>

<template>
  <div class="stars">
    <starVue :fill="index - 1 < stars" v-for="index in 5" />
  </div>
</template>

<style scoped>
div {
  display: flex;
  gap: 3px;
}
</style>
