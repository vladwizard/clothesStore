<script setup lang="ts">
import CheckboxColor from "../common/CheckboxColor.vue";
import { FilterCell } from "./structures";
defineProps<{ item: FilterCell; color: string }>();
</script>

<template>
  <section>
    <CheckboxColor :value="item.value" :color="color" @click="item.toggle()" />
    <label class="extrasmall">{{ item.title }}</label>
  </section>
</template>

<style lang="scss" scoped></style>
