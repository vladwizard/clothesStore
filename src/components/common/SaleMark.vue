<script setup lang="ts">
defineProps<{ price: number; oldPrice: number  | undefined }>();
</script>

<template>
  <div class="base bold sale_mark" v-if="oldPrice != undefined">
    {{ Math.floor(-(1 - price / oldPrice) * 100) + "%" }}
  </div>
</template>

<style lang="scss" scoped>
div {
  display: inline-block;
  background: var(--danger);
  color: white;

  width: 54px;
  height: 28px;
  text-align: center;
  border-radius: var(--border-radius);
}
</style>
