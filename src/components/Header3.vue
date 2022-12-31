<script setup lang="ts">
import lineArrow from '../assets/lineArrow.vue'
</script>

<template>
  <header>
    <lineArrow />
    <div class="extrasmall">
      <span class="bold">Up to 70% Off.</span>
      <span>Shop our latest sale styles</span>
    </div>
    <lineArrow />

  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 34px;
  background: #17696A;

  >div {
    margin: 17px;
    display: flex;
    gap: 4px;

    >*:last-child {
      text-decoration-line: underline;
    }
  }

  svg {
    fill: white;
  }

  svg:first-child {
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

}
</style>