<script setup lang="ts">
import { Ref,computed } from "vue";
const props = defineProps(["value"]);
const emit = defineEmits(["update:value"]);


const myvalue = computed({
  get() {
    return props.value
  },
  set(value) {
    emit('update:value', value)
  }
})



const min = 0;
const max = 1100;

</script>

<template>
  <article>
    <el-slider v-model="myvalue" range :min="min" :max="max" />
    <div class="inputs extrasmall">
      <input :value="myvalue[0]" :min="min" :max="myvalue[2]" />—
      <input
        v-model="myvalue[1]"
        :min="myvalue[0]"
        :max="max"
      />
    </div>
  </article>
</template>

<style lang="scss" scoped>
.inputs {
  color: var(--gray800);
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > * {
    width: 110px;
    border: 1px solid var(--gray400);
    border-radius: var(--border-radius);
    padding: 9px 12px;
    box-sizing: border-box;
  }
}
</style>
