<script setup lang="ts">

const props = defineProps<{ color: string; value: boolean }>();
</script>

<template>
  <div
    class="checkbox_color"
    :style="{
      background: $props.color,
      'outline-color': value ? 'var(--primary)' : 'var(--gray400)',
    }"
  ></div>
</template>

<style lang="scss">
.checkbox_color {
  margin: 2px;
  border-radius: 100%;
  display: block;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  outline: 2px solid;
  border: 4px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
