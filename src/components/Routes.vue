<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
interface Route {
  path: string;
  component: any;
}

const props = defineProps<{
  param: string;
}>();
const route = useRoute();
const dynamicSlotName = ref("");

if (route.params[props.param] == undefined) dynamicSlotName.value = "default";
else dynamicSlotName.value = route.params[props.param] as string;

watch(
  () => route.params[props.param],
  () => {
    if (route.params[props.param] == undefined) dynamicSlotName.value = "default";
    else dynamicSlotName.value = route.params[props.param] as string;
  }
);

</script>
<template>
  <slot :name="dynamicSlotName"></slot>
</template>
<style lang="scss" scoped></style>
