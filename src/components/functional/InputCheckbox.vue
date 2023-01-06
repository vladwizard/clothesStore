<script setup lang="ts">
import { ref } from "vue";
// let props = defineProps<{ value: boolean }>();
// defineEmits(["update:modelValue"]);
// props.value ? props.value :
const value = ref(false);
</script>

<template>
  <div @click="value = !value" :class="{ filled: value }">
    <svg v-if="value" width="10" height="9" viewBox="0 0 10 9" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.82771 0.695262C10.0574 0.955612 10.0574 1.37772 9.82771 1.63807L3.94536 8.30474C3.71564 8.56509 3.34319 8.56509 3.11347 8.30474L0.17229 4.9714C-0.05743 4.71105 -0.05743 4.28894 0.17229 4.0286C0.40201 3.76825 0.77446 3.76825 1.00418 4.0286L3.52941 6.89052L8.99582 0.695262C9.22554 0.434913 9.59799 0.434913 9.82771 0.695262Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
div {
  height: 16px;
  width: 16px;
  position: relative;
  top: 1px;
  left: 1px;
  border: 1px solid var(--gray500);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.filled {
    background: var(--primary);
    border-color: var(--primary);
  }
}
</style>
