<script setup lang="ts">
import CheckboxColorVue from "./CheckboxColor.vue";
import { ref } from "vue";
import SliderDoubleVue from "./SliderDouble.vue";


defineProps<{ filterList: FilterList }>();

const type = [
'Coats', 'Jackets', 'Suits', 'Dresses', 'Cardigans & sweaters', 'Sweatshirts & hoodies', 'T-shirts & tops', 'Pants', 'Jeans', 'Shorts', 'Skirts', 'Lingerie & nightwear', 'Sportswear', 'Swimwear','Boots', 'Flat shoes', 'Heels', 'Sandals', 'Mules', 'Sliders', 'Slippers', 'Sneakers', 'Leather','Bags & bagpacks', 'Hats & scarves', 'Hair accessories', 'Belts', 'Jewellery', 'Watches', 'Sunglasses', 'Purses', 'Gloves', 'Socks & tights'
];
const size = ["XS", "S", "M", "L ", "XL", "Plus Size"];
const color = [
  { title: "Black", style: "black" },
  { title: "Blue-gray", style: "#C0DDED" },
  { title: "Yellow", style: "#FCD164" },
  { title: "Red", style: "#F75151" },
  { title: "Dark blue", style: "#0C2C7E" },
  { title: "Beige", style: "#D8C1AD" },
  { title: "Brown", style: "#874E19" },
  { title: "Gray", style: "#9A9494" },
  { title: "Purple", style: "#A27AC9" },
  { title: "Green", style: "#67BA92" },
  { title: "Orange", style: "#FB9620" },
  { title: "White", style: "#F1F1F1" },
];
const material = ["Cotton", "Synthetics", "Nappa leather", "Cashmere", "Denim"];
const brand = [
  "Adidas",
  "Ann Taylor",
  "Armani",
  "Banana Republic ",
  "Calvin Klein",
  "Columbia",
];
function print() {
  console.log(asd.value);
}
let asd = ref("");
</script>

<template>
  <article>
    <details open>
      <summary class="base bold">Type</summary>
      <input-search
        class="search extrasmall"
        placeholder="Search the clothes type"
      />
      <main class="list">
        <section v-for="item in type">
          <input-checkbox :id="item" />
          <label class="small" :for="item">{{ item }}</label>
        </section>
      </main>
    </details>
    <details>
      <summary class="base bold">Size</summary>
      <input-search
        class="search extrasmall"
        placeholder="Search the clothes type"
      />
      <main class="list">
        <section v-for="item in size">
          <input-checkbox :id="item" />
          <label class="small" :for="item">{{ item }}</label>
        </section>
      </main>
    </details>
    <details open>
      <summary class="base bold">Color</summary>
      <main class="table">
        <section v-for="item in color" red>
          <CheckboxColorVue @click="print" :color="item.style" />
          <label class="extrasmall">{{ item.title }}</label>
        </section>
      </main>
    </details>
    <details>
      <summary class="base bold">Material</summary>
      <input-search
        class="search extrasmall"
        placeholder="Search the clothes type"
      />
      <main class="list">
        <section v-for="item in material">
          <input-checkbox :id="item" />
          <label class="small" :for="item">{{ item }}</label>
        </section>
      </main>
    </details>
    <details>
      <summary class="base bold">Brand</summary>
      <input-search
        class="search extrasmall"
        placeholder="Search the clothes type"
      />
      <main class="list">
        <section v-for="item in brand">
          <input-checkbox :id="item" />
          <label class="small" :for="item">{{ item }}</label>
        </section>
      </main>
    </details>
    <details open>
      <summary class="base bold">Price</summary>
      <SliderDoubleVue />
    </details>
  </article>
</template>

<style lang="scss" scoped>
article {
  display: flex;
  flex-direction: column;
}

details {
  width: 255px;
  padding-bottom: 20px;

  > *:nth-child(2) {
    margin-top: 20px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--gray300);
    margin-bottom: 20px;
  }

  main {
    max-height: 180px;
    overflow: auto;
  }
}

.list {
  > * {
    display: flex;
    align-items: center;
    gap: 12px;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
}

.table {
  display: grid;
  grid-template-columns: repeat(4, 52px);
  gap: 8px 10px;
  overflow-x: hidden;

  > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }
}

.search {
  height: 36px;
  padding: 12px;
  margin-bottom: 16px;
  .icon {
    fill: var(--gray400);
  }
}
</style>
