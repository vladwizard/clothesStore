<script setup lang="ts">
import ButtonArrowVue from "../common/ButtonArrow.vue";
import collectionsJson from "../../assets/data/collections.json";
import { ref } from "vue";

type Collection = {
  title: string;
  category: string;
  image: string;
};

const collections: Collection[] = collectionsJson.collections;

const indexC = ref(0);
function changeCollection(increase: boolean) {
  if (increase) {
    if (indexC.value < collections.length - 1) indexC.value++;
  } else {
    if (indexC.value > 0) indexC.value--;
  }
}
</script>

<template>
  <main :style="{ 'background-image': 'url(' + collections[indexC].image+ ')' }">
    <ButtonArrowVue class="left" @click="changeCollection(false)" />
    <div class="data">
      <p class="category">{{ collections[indexC].category }}</p>
      <p class="display1 title">{{ collections[indexC].title }}</p>

      <div class="buttons">
        <button class="empty">Shop sale</button>
        <button class="filled">
          Shop the
          {{ collections[indexC].title.split(" ").slice(0, -1).join(" ") }}
        </button>
      </div>
      <div class="switch-block">
        <div
          v-for="index in collections.length"
          :class="{ selected: index == indexC + 1 }"
          @click="indexC = index - 1"
        >
          <h3>{{ index < 10 ? "0" + index : index }}</h3>
          <div></div>
        </div>
      </div>
    </div>

    <ButtonArrowVue @click="changeCollection(true)" />
  </main>
</template>

<style lang="scss" scoped>
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

  svg {
    fill: #424551;
  }

  > button:first-child {
    svg {
      transform: rotate(-180deg);
    }
  }
}

.data {
  color: #1e212c;
  position: absolute;
  left: 345px;
  height: 480px;
  width: 700px;

  > * {
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

    > button {
      font-weight: 700;
      font-size: 16px;
      line-height: 52px;
      padding: 0 40px;
    }
  }

  > .switch-block {
    top: 399+27px;
    display: flex;
    gap: 4px;

    > div {
      &:not(.selected) {
        opacity: 0.6;
      }

      > h3 {
        margin-bottom: 12px;
        color: var(--gray800);
      }

      > div {
        width: 178px;
        height: 2px;
        border-radius: 2px;
        background: var(--gray800);
      }
    }
  }
}
</style>
