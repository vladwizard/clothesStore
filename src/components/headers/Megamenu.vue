<script lang="ts" setup>
import splitLine from "../common/SplitLine.vue";
import { useFilterStore } from "../../stores/catalogFilter";
import TypeCell from "./TypeCell.vue";

const filterStore = useFilterStore();
class LinkCell {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
  click() {
    filterStore.Set(peopleCategory as string, [this.title]);
  }
}
const items = {
  CLOTHES: [
    "Coats",
    "Jackets",
    "Suits",
    "Dresses",
    "Cardigans & sweaters",
    "Sweatshirts & hoodies",
    "T-shirts & tops",
    "Pants",
    "Jeans",
    "Shorts",
    "Skirts",
    "Lingerie & nightwear",
    "Sportswear",
    "Swimwear",
  ],
  SHOES: [
    "Boots",
    "Flat shoes",
    "Heels",
    "Sandals",
    "Mules",
    "Sliders",
    "Slippers",
    "Sneakers",
    "Leather",
  ],
  ACCESSORIES: [
    "Bags & bagpacks",
    "Hats & scarves",
    "Hair accessories",
    "Belts",
    "Jewellery",
    "Watches",
    "Sunglasses",
    "Purses",
    "Gloves",
    "Socks & tights",
  ],
};
const asideData = {
  url: "src/assets/images/schoolchild.png",
  title: "Back to school. Sale up to 50%",
};

const peopleCategory = "women";
defineProps<{ peopleCategory?: string }>();
</script>
<template>
  <article class="shadow-large megamenu">
    <main class="small gray 800">
      <div>
        <p
          v-for="item in [
            'New collection',
            'Best Sellers',
            'Plus Size',
            'Sale up to 70%',
          ]"
        >
          {{ item }}
        </p>
      </div>
      <div v-for="(types, people) in items">
        <p>
          <span class="title gray900">{{ people }}</span>
        </p>
        <div @click="$emit('close')">
          <TypeCell :list="types" people-category="men"></TypeCell>
        </div>
      </div>
    </main>
    <splitLine style="width: 1px; height: 427px; margin: 0 68px" />
    <aside>
      <img :src="asideData.url" alt="" height="285" width="285" />
      <p class="small bold">{{ asideData.title }}</p>
      <button class="empty">See offers</button>
    </aside>
  </article>
</template>
<style lang="scss">
.megamenu {
  position: absolute;
  width: 100%;
  z-index: 100;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  height: 487px;
  background: #ffffff;
  border: 1px solid var(--gray300);
  border-radius: 0px 0px 4px 4px;

  > main {
    font-size: 14px;
    display: flex;

    > div {
      width: 210px;
    }

    p,
    span,
    a {
      height: 21px;
      margin-bottom: 8px;
    }
    a {
      display: block;
    }
    > div:first-child {
      > *:last-child {
        color: #ff4242;
      }
    }
  }

  > aside {
    > button {
      font-size: 12px;
      padding: 0 24px;
    }

    > p {
      margin: 16px 0;
    }
  }
}
</style>
