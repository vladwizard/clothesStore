<script setup lang="ts">
import { FilterCell } from './classes';
defineProps<{item:FilterCell}>()
</script>

<template>
  <section>
    <input-checkbox :value="item.value" @click="item.toggle()" />
    <label class="small">{{ item.title }}</label>
  </section>
</template>

<style lang="scss" scoped></style>
