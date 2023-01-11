<script setup lang="ts">
import arrowVue from "../../assets/icons/arrow.vue";
import { ref } from "vue";
interface PaggingList {
  sortBy: string;
  showPerPage: number;
  pageNumber: number;
}
defineProps<{ paggingList: PaggingList }>();
const sortOptions = ["popularity", "rating", "price"];
</script>

<template>
  <article class="base bold">
    <div>
      <div class="sort-by">
        <span>Sort by</span>

        <select v-model="paggingList.sortBy" placeholder="Select">
          <option v-for="item in sortOptions">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="show">
        <span>Show</span>
        <input type="number" v-model="paggingList.showPerPage" />
        <span class="small regular"> products per page </span>
      </div>
    </div>
    <div class="pages">
      <div><span> 1 2 3 ... 10 </span></div>

      <arrowVue />
    </div>
  </article>
</template>

<style lang="scss" scoped>
article,
div {
  display: flex;
  align-items: center;
}

article {
  justify-content: space-between;
  color: var(--gray800);

  > div:first-child {
    gap: 60px;

    > div {
      display: flex;
      gap: 12px;

      > *:nth-child(2) {
        height: 44px;
        border: 1px solid var(--gray400);
        border-radius: 4px;
        padding: 0 16px;
      }

      > *:nth-child(3) {
        color: var(--gray700);
      }
    }
  }
}

.pages {
  div {
    gap: 20px;
  }

  gap: 23px;
}
</style>
