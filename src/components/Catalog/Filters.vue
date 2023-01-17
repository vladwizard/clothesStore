<script setup lang="ts">
import EnumerableBlock from "./EnumerableBlock.vue";
import Slider from "./slider.vue";
import filterBlock from "./filterBlock.vue";
import FilterColorCell from "./FilterColorCell.vue";
import enumeratedFilterData from "../data";
import { MarkedList } from "../../stores/catalogFilter";

defineProps<{ markedList: MarkedList }>();
</script>

<template>
  <article class="filters_block">
    <filterBlock title="Clothes" findline open>
      <EnumerableBlock
        class="list"
        :marked-list="markedList.types"
        :list="enumeratedFilterData.types"
      />
    </filterBlock>
    <filterBlock title="Size">
      <EnumerableBlock
        class="list"
        :marked-list="markedList.sizes"
        :list="enumeratedFilterData.sizes"
      />
    </filterBlock>

    <filterBlock title="Color" open>
      <EnumerableBlock
        class="table"
        :component="(FilterColorCell as any)"
        :marked-list="markedList.colors"
        :list="enumeratedFilterData.colors"
      />
    </filterBlock>
    <filterBlock title="Material" findline>
      <EnumerableBlock
        class="list"
        :marked-list="markedList.materials"
        :list="enumeratedFilterData.materials"
      />
    </filterBlock>
    <filterBlock title="Brand" findline>
      <EnumerableBlock
        class="list"
        :marked-list="markedList.brands"
        :list="enumeratedFilterData.brands"
      />
    </filterBlock>
    <filterBlock title="Price" open>
      <Slider style="overflow: visible" v-model:value="markedList.prices" />
    </filterBlock>
  </article>
</template>

<style lang="scss">
.filters_block {
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
