<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
defineProps<{ color: string }>();
let toggle = ref(false);
</script>

<template>
  <div class="start" @click="toggle = !toggle">
    <div
      v-show="toggle"
      class="content"
      :style="{ background: $props.color }"
    ></div>
  </div>
</template>

<style scoped>
.start,
.content {
  border-radius: 100%;
  display: block;
}

.start {
  width: 32px;
  height: 32px;
  border: 1px solid var(--gray400);
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 75%;
  height: 75%;
}
</style>
