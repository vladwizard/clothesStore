<script setup lang="ts">
import Logo from "../assets/logo.vue";
import HeaderDrop from "./HeaderDrop.vue";
import heart from "../assets/icons/heart.vue";
import { ref } from "vue";
const clickIndex = ref(-1);
</script>
<template>
  <header>
    <Logo />
    <div class="categories">
      <button
        class="unstyle gray800"
        v-for="(item, index) in ['Women', 'Men', 'Girls', 'Boys', 'Sale']"
        @click="clickIndex == index ? (clickIndex = -1) : (clickIndex = index)"
        :class="{ active: clickIndex == index }"
      >
        {{ item }}
      </button>
    </div>
    <input-search class="search small" placeholder="Search for products..." />

    <div class="counters base">
      <div>
        <heart />
        <p>2</p>
      </div>
      <span></span>
      <div>
        <img src="src/assets/cart.svg" />
        <p>4</p>
      </div>
    </div>
  </header>
  <HeaderDrop v-if="clickIndex != -1" />
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
    
    svg{
      fill: var(--gray800);
    }
  }
}

.counters {
  div {
    gap: 8.5px;
  }

  span {
    height: 22px;
    width: 1px;
    background: linear-gradient(
      270.01deg,
      rgba(218, 219, 221, 0) 0%,
      rgba(218, 219, 221, 0.5) 12.33%,
      #dadbdd 51.91%,
      rgba(218, 219, 221, 0.5) 87.85%,
      rgba(218, 219, 221, 0) 100%
    );
    margin: 0 20px;
  }

  > div:last-child {
    p.notzero {
      width: 23px;
      background: #03cea4;
      border-radius: 4px;
      text-align: center;
      line-height: 20px;
    }
  }
}
</style>
