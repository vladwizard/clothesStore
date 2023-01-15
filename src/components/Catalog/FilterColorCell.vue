<script setup lang="ts">
import CheckboxColor from "../common/CheckboxColor.vue";
import { colorsDictionary } from "../data";
defineProps<{ item: FilterCell}>();
</script>

<template>
  <section>
    <CheckboxColor :value="item.value" :color="colorsDictionary[item.title]" @click="item.toggle()" />
    <label class="extrasmall">{{ item.title }}</label>
  </section>
</template>

<style lang="scss" scoped></style>
