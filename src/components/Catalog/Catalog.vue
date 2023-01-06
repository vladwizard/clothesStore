<script setup lang="ts">
import home from "../../assets/icons/home.vue";
import setting from "../../assets/icons/setting.vue";
import lineArrowVue from "../../assets/icons/lineArrow.vue";
import FiltersVue from "./Filters.vue";
import SettingPagging from "./SettingsPagging.vue";
import { ref, watch, reactive } from "vue";
import productsJSON from "../../assets/data/products.json";
import ProductVue from "../common/ProductLittle.vue";
import { useRoute } from "vue-router";
import { has } from "lodash";

const products: Product[] = productsJSON.products;

const paggingList = ref({
  sortBy: "popularity",
  showPerPage: 12,
  pageNumber: 1,
});
const route = useRoute();
const filterList = reactive({
  peopleCategory: route.params.peopleCategory,
  types: [],
  sizes: [],
  colors: [],
  materials: [],
  brands: [],
  prices: [200, 1000],
  add: function (category: string, value: string) {
    if (category in this) {
      let arr = this[category];
      let index = arr.indexOf(value);
      if (index != -1) {
        arr.splice(index, 1);
      } else arr.push(value);
    }
  },
} as FilterList);
watch(
  () => route.params.peopleCategory,
  () => {
    filterList.peopleCategory = route.params.peopleCategory as string;
  }
);
</script>

<template>
  <header>
    <div>
      <home />
      <lineArrowVue class="arrow" />
      <p>
        {{
          filterList.peopleCategory[0].toUpperCase() +
          filterList.peopleCategory.slice(1)
        }}
      </p>
    </div>
  </header>
  <p>{{ filterList }}</p>
  <main>
    <button class="hide-button filled" style="grid-area: a">
      <setting />Hide filters
    </button>
    <SettingPagging
      class="pagging"
      :pagging-list="paggingList"
      style="grid-area: b"
    />
    <FiltersVue
      class="filters"
      :filter-list="filterList"
      style="grid-area: c"
    />

    <article class="products" style="grid-area: d">
      <ProductVue
        v-for="item in products"
        :title="item.title"
        :image="item.image"
        :stars="item.stars"
        :price="item.price"
        :id="item.id"
      />
    </article>
    <!-- <SettingPagging class="pagging" :pagging-list="paggingList" /> -->
  </main>
</template>

<style lang="scss" scoped>
details {
  list-style: none;
}

header {
  background: var(--gray200);
}
header > div {
  height: 53px;

  gap: 13px;
  display: flex;
  align-items: center;

  .arrow,
  > *:last-child {
    fill: var(--gray600);
  }
}

main {
  padding-top: 32px;
  padding-bottom: 180px;
  display: grid;

  gap: 32px 60px;
  grid-template:
    "a b " 44px
    "c d " auto/ 255px 915px;
}
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 413px;

  border-radius: 4px;
  gap: 60px 30px;
}

main,
header > div {
  width: 1230px;
  margin: auto;
}

.hide-button {
  > * {
    margin-right: 8px;
  }
}
</style>
