<script setup lang="ts">
import Logo from "../../assets/icons/logo.vue";
import Megamenu from "./Megamenu.vue";
import { ref } from "vue";
import { useCartStore } from "../../stores/cart";
import { useFavoriteStore } from "../../stores/favorites";

const clickIndex = ref(-1);
const categories = ["Women", "Men", "Girls", "Boys", "Sale"];
// stores/counter.js

const cartCounter = useCartStore();
const favoriteCounter = useFavoriteStore();

function close() {
  clickIndex.value = -1;
}
</script>
<template>
  <header>
    <router-link to="/">
      <Logo @click="close" />
    </router-link>

    <div class="categories">
      <button
        class="unstyle gray800"
        v-for="(item, index) in categories"
        @click="clickIndex == index ? (clickIndex = -1) : (clickIndex = index)"
        :class="{ active: clickIndex == index }"
      >
        {{ item }}
      </button>
    </div>
    <input-search class="search small" placeholder="Search for products..." />

    <div class="counters extrasmall color800">
      <div>
        <img src="src/assets/icons/heart.svg" />
        <p>{{ favoriteCounter.count }}</p>
      </div>
      <span></span>
      <div>
        <img src="src/assets/icons/cart.svg" />
        <p :class="{ active: cartCounter.count > 0 }">
          {{ cartCounter.count }}
        </p>
      </div>
    </div>
  </header>
  <Megamenu
    v-show="clickIndex != -1"
    @close="()=>close()"
    :peopleCategory="categories[clickIndex]"
  />
</template>
<style lang="scss" scoped>
header {
  margin: auto;
  width: 1920-700px;
  height: 84px;
  font-size: 16px;
  line-height: 160%;

  &,
  div {
    display: flex;
    align-items: center;
  }

  .categories {
    gap: 40px;
    margin: 0 132px 0 60px;

    > * {
      font-weight: 700;
      font-size: 16px;
      line-height: 160%;

      &:last-child {
        color: var(--danger);
      }

      &.active {
        color: var(--primary);
      }
    }
  }

  .search {
    margin-right: 48px;
    width: 380px;
    height: 44px;
    padding: 0 16px;

    svg {
      fill: var(--gray800);
    }
  }
}

.counters {
  > *:not(:nth-child(2)) {
    gap: 8.5px;
  }
  > *:nth-child(2) {
    margin: 0 20px;
    height: 22px;
    width: 1px;
    background: linear-gradient(
      rgba(218, 219, 221, 0) 0%,
      rgba(218, 219, 221, 0.5) 12.33%,
      #dadbdd 51.91%,
      rgba(218, 219, 221, 0.5) 87.85%,
      rgba(218, 219, 221, 0) 100%
    );
  }

  > div:last-child {
    p {
      width: 23px;
      height: 20px;
      border-radius: 4px;
      text-align: center;
      line-height: 20px;
      &.active {
        background: var(--success);
        color: white;
      }
    }
  }
}
</style>
