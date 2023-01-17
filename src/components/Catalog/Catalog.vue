<script setup lang="ts">
import home from "../../assets/icons/home.vue";
import setting from "../../assets/icons/setting.vue";
import lineArrowVue from "../../assets/icons/lineArrow.vue";
import FiltersVue from "./Filters.vue";
import SettingPagging from "./SettingsPagging.vue";
import { ref } from "vue";
import productsJSON from "../../assets/data/products.json";
import ProductVue from "../Product/ProductLittle.vue";
import { useFilterStore } from "../../stores/catalogFilter";

const products: Product[] = productsJSON.products;

const paggingList = ref({
  sortBy: "popularity",
  showPerPage: 12,
  pageNumber: 1,
});

const filterStore = useFilterStore();

// for backend request

let markedList = filterStore.markedList

const hidedFilter = ref(false);
</script>

<template>
  {{ markedList }}
  <header>
    <div>
      <home />
      <lineArrowVue class="arrow" />
      <p>
        {{
          markedList.peopleCategory
            .split("&")
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join("&")
        }}
      </p>
    </div>
  </header>

  <main :class="{ hided_filter: hidedFilter }">
    <button
      class="hide-button filled"
      style="grid-area: hideButton"
      @click="hidedFilter = !hidedFilter"
    >
      <setting />Hide filters
    </button>
    <SettingPagging
      class="pagging"
      :pagging-list="paggingList"
      style="grid-area: pagging1"
    />
    <FiltersVue
      class="filters"
      :marked-list="markedList"
      style="grid-area: filters"
    />

    <article class="products" style="grid-area: products">
      <ProductVue v-for="item in products" :item="item" />
    </article>
    <SettingPagging
      class="pagging"
      :pagging-list="paggingList"
      style="grid-area: pagging2"
    />
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
    "hideButton pagging1 " 44px
    "filters products " auto
    ". pagging2 " auto/ 255px 915px;
  .products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 413px;

    border-radius: 4px;
    gap: 60px 30px;
  }

  &.hided_filter {
    grid-template:
      "hideButton pagging1 " 44px
      "products products " auto
      ". pagging2 " auto/ 255px 915px;
    .products {
      grid-template-columns: repeat(4, 1fr);
    }
    .filters {
      display: none;
    }
  }
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
