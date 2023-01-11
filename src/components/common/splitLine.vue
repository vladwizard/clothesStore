<script setup lang="ts">

const props = defineProps<{
  fuzzy: boolean;
}>();
</script>

<template>
  <div
    class="split_line"
    :class="{
      fuzzy: fuzzy,
    }"
  ></div>
</template>

<style lang="scss">
.split_line{

  border: 1px solid var(--gray300);
  width: 100%;
  // &.vertical{
  //   display: inline-block;
  //   box-sizing: border-box;
  //   position: absolute;
  //   height: 100%;
  //   width: 55px;
  //   background: red;
  // }
  // &.horizontal{
  //   width: inherit;
  // }
  // &.horizontal.fuzzy {
  // background: linear-gradient(
  //   rgba(218, 219, 221, 0) 0%,
  //   rgba(218, 219, 221, 0.5) 12.33%,
  //   #dadbdd 51.91%,
  //   rgba(218, 219, 221, 0.5) 87.85%,
  //   rgba(218, 219, 221, 0) 100%
  // );
  // }
  // &.vertical.fuzzy {
  //   border: linear-gradient(
  //     270.01deg,
  //     rgba(218, 219, 221, 0) 0%,
  //     rgba(218, 219, 221, 0.5) 12.33%,
  //     #dadbdd 51.91%,
  //     rgba(218, 219, 221, 0.5) 87.85%,
  //     rgba(218, 219, 221, 0) 100%
  //   );
  // }

}
</style>
