<script setup lang="ts">
import magnifierVue from "../../assets/icons/magnifier.vue";
defineProps(["modelValue", "placeholder"]);
defineEmits(["update:modelValue"]);

</script>
<template>
  <span>
    <input
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
    <magnifierVue class="icon444" />
  </span>
</template>

<style lang="scss" scoped>
span {
  height: 36px;
  width: 255px;
  padding: 12px;
  position: relative;
  align-items: center;
  display: flex;
  border: 1px solid var(--gray400);
  border-radius: 4px;
  box-sizing: border-box;
}

input {
  box-sizing: border-box;
  width: 100%;
  border: none;
  outline: none;
}
</style>
