<script setup lang="ts">
import CheckboxColorVue from "../common/CheckboxColor.vue";

import Slider from "./slider.vue";
import filterBlock from "./filterBlock.vue";
import { colors } from "../data";
import { FilterList} from "./classes"
import asd from "./asd.vue"
defineProps<{ filterList: FilterList }>();


</script>

<template>
  <article>
    <filterBlock title="Clothes" findline>
      <main class="list">
        <asd :item="item" v-for="item in filterList.types">

        </asd>
      </main>
    </filterBlock>
    <filterBlock title="Size">
      <main class="list">
        <section v-for="item in filterList.sizes">
          <input-checkbox :id="item" :value="filterList.sizes.includes(item)" @click="filterList.add('sizes', item)" />
          <label class="small" :for="item">{{ item }}</label>
        </section>
      </main>
    </filterBlock>
    <filterBlock title="Color" open>
      <main class="table">
        <section v-for="item in colors" red>
          <CheckboxColorVue
            :value="filterList.colors.includes(item.title)"
            :color="item.style"
            @click="filterList.add('colors', item.title)"
          />
          <label class="extrasmall">{{ item.title }}</label>
        </section>
      </main>
    </filterBlock>
    <filterBlock title="Material" findline>
      <main class="list">
        <section v-for="item in materials">
          <input-checkbox :value="filterList.materials.includes(item)"
            :id="item"
            @click="filterList.add('materials', item)"
          />
          <label class="small" :for="item">{{ item }}</label>
        </section>
      </main>
    </filterBlock>
    <filterBlock title="Brand" findline>
      <main class="list">
        <section v-for="item in brands">
          <input-checkbox  :value="filterList.brands.includes(item)" :id="item" @click="filterList.add('brands', item)" />
          <label class="small" :for="item">{{ item }}</label>
        </section>
      </main>
    </filterBlock>
    <filterBlock title="Price" open>
      <Slider style="overflow: visible" v-model:value="filterList.prices" />
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
