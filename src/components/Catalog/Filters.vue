<script setup lang="ts">
import CheckboxColorVue from "../common/CheckboxColor.vue";

import Slider from "./slider.vue";
import filterBlock from "./filterBlock.vue";
import { colorsDictionary } from "../data";
import { FilterList, MarkedList } from "./structures";
import FilterLine from "./FilterLine.vue";
import FilterColorCell from "./FilterColorCell.vue";
defineProps<{ filterList: FilterList}>();
</script>

<template>
  <article>
    <filterBlock title="Clothes" findline>
      <main class="list">
        <FilterLine :item="item" v-for="item in filterList.types" />
      </main>
    </filterBlock>
    <filterBlock title="Size">
      <main class="list">
        <FilterLine :item="item" v-for="item in filterList.sizes" />
      </main>
    </filterBlock>
    <filterBlock title="Color" open>
      <main class="table">
          <FilterColorCell :item="item" v-for="item in filterList.colors" :color="colorsDictionary[item.title]"/>
      </main>
    </filterBlock>
    <filterBlock title="Material" findline>
      <main class="list">
        <FilterLine :item="item" v-for="item in filterList.materials" />
      </main>
    </filterBlock>
    <filterBlock title="Brand" findline>
      <main class="list">
        <FilterLine :item="item" v-for="item in filterList.brands" />
      </main>
    </filterBlock>
    <filterBlock title="Price" open>
      <Slider style="overflow: visible" v-model:value="filterList.markedList.prices" />
    </filterBlock>
  </article>
</template>

<style lang="scss" scoped>
article {
  display: flex;
  flex-direction: column;
}

.table {
  display: grid;
  grid-template-columns: repeat(4, 52px);
  gap: 8px 10px;
  overflow-x: hidden;

  > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }
}

.search {
  height: 36px;
  padding: 12px;
  margin-bottom: 16px;
  .icon {
    fill: var(--gray400);
  }
}
.list {
  > * {
    display: flex;
    align-items: center;
    gap: 12px;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
}
</style>
