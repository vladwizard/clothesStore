<script lang="ts" setup>
import { useFilterStore } from "../../stores/catalogFilter";

const filterStore = useFilterStore();
defineProps<{ list: string[]; peopleCategory: string }>();


</script>
<template>
  <router-link
    v-for="type in list"
    class="unstyle"
    to="/catalog/"
    @click="
      () => {
        filterStore.Set(peopleCategory, [type]);
      }
    "
    v-html="type"
  >
  </router-link>
</template>
