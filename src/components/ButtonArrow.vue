<script setup lang="ts">
import Arrow from '../assets/arrow.vue';
</script>

<template>
  <button>
    <Arrow />
  </button>
</template>

<style lang="scss" scoped>
button {
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

svg {
  fill: #424551;
}
</style>
