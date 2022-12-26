<script setup lang="ts">
import ButtonArrowVue from './ButtonArrow.vue';
import lineArrow from '../assets/lineArrow.vue'

import collectionsJson from '../assets/data/collections.json'
import { Collection } from '../types'
import { ref } from 'vue';

const collections: Collection[] = collectionsJson.collections;
const indexC = ref(0);
function changeCollection(increase: boolean) {
  if (increase) {
    if (indexC.value < collections.length - 1) indexC.value++;
  }
  else {
    if (indexC.value > 0) indexC.value--;
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
  <main :style="{ 'background-image': 'url(' + collections[indexC].image + ')' }">

    <ButtonArrowVue class="left" @click="changeCollection(false)" />
    <div class="data">
      <p class="category">{{ collections[indexC].category }}</p>
      <p class="display1 title">{{ collections[indexC].title }}</p>

      <div class="buttons">
        <button class="empty">Shop sale</button>
        <button class="filled">Shop the {{ collections[indexC].title.split(' ').slice(0,-1).join(' ') }}</button>
      </div>
      <div class="switch-block">
        <div v-for="index in collections.length" :class="{ unshow: index != indexC + 1 }" @click="indexC = index - 1">
          <h3 class="gray800">{{ index < 10 ? '0' + index : index }}</h3>
              <div class="gray800-background"></div>
        </div>
      </div>

    </div>

    <ButtonArrowVue @click="changeCollection(true)" />
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
  width: 700px;
  background: --var(--asd);
  >* {
    position: absolute;
  }

  .category {
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
  }

  .title {
    top: 39px;
  }

  .buttons {
    top: 166px + 27px;
    display: flex;
    gap: 24px;

    >button {
      font-weight: 700;
      font-size: 16px;
      line-height: 52px;
      padding: 0 40px;
    }
  }

  >.switch-block {
    top: 399+27px;
    display: flex;
    gap: 4px;

    >div {
      &.unshow {
        opacity: 0.6;
      }

      >h3 {
        margin-bottom: 12px;
      }

      >div {
        width: 178px;
        height: 2px;
        border-radius: 2px;

      }
    }

  }
}
</style>