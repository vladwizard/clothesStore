<script setup lang="ts">

defineProps<{ item: FilterCell }>();
</script>

<template>
  <section>
    <input-checkbox :value="item.value" @click="item.toggle()" />
    <label class="small">{{ item.title }}</label>
  </section>
  <slot></slot>
</template>

<style lang="scss" scoped></style>
