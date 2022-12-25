<script setup lang="ts">
import ButtonArrowVue from './ButtonArrow.vue';
import lineArrow from '../assets/lineArrow.vue'

import collectionsJson from '../assets/data/collections.json'
import { Collection } from '../types'
import { ref } from 'vue';
const collections: Collection[] = collectionsJson.collections;
const index = ref(0);
function changeCollection(increase: boolean) {
  if (increase) {
    if (index.value < collections.length - 1) index.value++;
  }
  else {

    if (index.value > 0) index.value--;
  }

}
</script>

<template>
  <header>
    <lineArrow />
    <div class="extrasmall">
      <span class="bold">Up to 70% Off.</span>
      <span>Shop our latest sale styles</span>
    </div>
    <lineArrow />

  </header>
  <main :style="{ 'background-image': 'url(' + collections[index].image + ')' }">

    <ButtonArrowVue class="left" @click="changeCollection(false)" />
    <div class="data">
      <p>{{ collections[index].category }}</p>
      <div>
        <nobr>
          <h1 class="display1">{{ collections[index].title }}</h1>
        </nobr>
        <div>
          <button class="empty">Shop sale</button>
          <button class="filled">Shop the menswear</button>
        </div>

      </div>
      <div class="variants"></div>
    </div>
    <ButtonArrowVue @click="changeCollection(true)" />
    <!-- <img :src="collections[index].image" alt=""> -->
  </main>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 34px;
  background: #17696A;

  >div {
    margin: 17px;
    display: flex;
    gap: 4px;

    >*:last-child {
      text-decoration-line: underline;
    }
  }

  svg {
    fill: white;
  }

  svg:first-child {
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

}

main {
  height: 800px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
  align-items: center;

  // img {
  //   position: absolute;
  //   height: 100%;
  //   width: 100%;
  // }

  svg {
    fill: #424551;
  }

  >button:first-child {
    svg {
      transform: rotate(-180deg);
    }
  }
}

.data {
  color: #1E212C;
  position: absolute;
  left: 345px;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  >p {
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
  }

  >div {
    position: absolute;
    top: 39px;

    >div {
      display: flex;
      gap: 24px;

      button {
        font-weight: 700;
        font-size: 16px;
        line-height: 52px;
        padding: 0 40px;
      }

    }

  }
}
</style>