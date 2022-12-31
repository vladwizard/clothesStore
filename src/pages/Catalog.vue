<script setup lang="ts">
import home from "../assets/icons/home.vue";
import setting from "../assets/icons/setting.vue";
import lineArrowVue from "../assets/lineArrow.vue";
import FiltersVue from "../components/Filters.vue";
import SettingPagging from "../components/SettingsPagging.vue";
import { ref, Ref, onMounted, reactive } from "vue";
import productsJSON from "../assets/data/products.json";
import ProductVue from "../components/ProductLittle.vue";

onMounted(() => {
  let saveValue = localStorage.getItem("catalogStart");
  if (saveValue) filterList.type = [saveValue as string];
});

const products: Product[] = productsJSON.products;

const paggingList = ref({
  sortBy: "popularity",
  showPerPage: 12,
  pageNumber: 1,
});
const filterList = reactive({
  type: [],
  size: [],
  color: [],
  material: [],
  brand: [],
  price: [],
} as FilterList);
</script>

<template>
  {{ filterList }}
  <header>
    <div>
      <home />
      <lineArrowVue class="arrow" />
    </div>
  </header>
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
        :stars="+item.stars"
        :price="item.price"
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
