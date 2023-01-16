<script setup lang="ts">
import { EnumerableList } from "../../stores/catalogFilter";
import { watch, ref, DefineComponent } from "vue";
import FilterLine from "./FilterLine.vue";

class FilterCell {
  private title: string;
  value: boolean;

  private markedCategoryList: EnumerableList;
  constructor(title: string, markedCategoryList: EnumerableList) {
    this.markedCategoryList = markedCategoryList;

    this.title = title;
    this.value = props.markedList.list.includes(title);
  }
  toggle() {
    if (this.value == false) this.markedCategoryList.list.push(this.title);
    else
      this.markedCategoryList.list.splice(
        this.markedCategoryList.list.indexOf(this.title),
        1
      );
    this.value = !this.value;
  }
}

let props = defineProps({
  component: {
    default: FilterLine,
  },
  list: {
    type: Array<string>,
    required: true,
  },
  markedList: {
    type: EnumerableList,
    required: true,
  },
});

function ComputeList() {
  let newList = {};
  props.list.forEach(
    (title) => (newList[title] = new FilterCell(title, props.markedList))
  );
  props.markedList.list.forEach((title) => (newList[title].value = true));
  return newList;
}
let computedList = ref(ComputeList());

watch(
  () => props.markedList.list,
  () => {
    computedList.value = ComputeList();
  }
);

</script>

<template>
  <main>
    <props.component :item="item" v-for="item in computedList" />
  </main>
</template>

<style lang="scss" scoped></style>
