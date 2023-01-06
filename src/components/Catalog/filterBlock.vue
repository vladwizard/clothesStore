<script setup lang="ts">
defineProps<{ title: string, findline: boolean }>();
</script>

<template>
  <details class="filter_block">
    <summary class="base bold">{{ title }}</summary>
    <input-search v-if="findline"
      class="search extrasmall"
      placeholder="Search the clothes type"
    />

    <slot></slot>
  </details>
</template>

<style lang="scss" >
.filter_block {
  width: 255px;
  padding-bottom: 20px;

  > *:nth-child(2) {
    margin-top: 20px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--gray300);
    margin-bottom: 20px;
  }
  .search{
    margin-bottom: 22.5px;
  }
  > *:last-child {
    max-height: 180px;
    overflow: auto;
  }
}
</style>
