<script lang="ts" setup>
import splitLine from './splitLine.vue'

const asideData = { url: 'src/assets/backend/schoolchild.png', title: 'Back to school. Sale up to 50%' }

function newColumn(title: string, subCategories: string[]) {
  return { title, subCategories }
}
const items = [
  newColumn('CLOTHES', ['Coats', 'Jackets', 'Suits', 'Dresses', 'Cardigans & sweaters', 'Sweatshirts & hoodies', 'T-shirts & tops', 'Pants', 'Jeans', 'Shorts', 'Skirts', 'Lingerie & nightwear', 'Sportswear', 'Swimwear']),
  newColumn('SHOES', ['Boots', 'Flat shoes', 'Heels', 'Sandals', 'Mules', 'Sliders', 'Slippers', 'Sneakers', 'Leather']),
  newColumn('ACCESSORIES', ['Bags & bagpacks', 'Hats & scarves', 'Hair accessories', 'Belts', 'Jewellery', 'Watches', 'Sunglasses', 'Purses', 'Gloves', 'Socks & tights']),
]
</script>
<template>
  <article class="shadow-large">
    <main class="small gray 800">
      <div>
        <p v-for="item in ['New collection', 'Best Sellers', 'Plus Size', 'Sale up to 70%']">
          {{ item }}
        </p>
      </div>
      <div v-for="category in items">
        <p class="title gray900">{{ category.title }}</p>
        <p v-for="sub in category.subCategories">
          {{ sub }}</p>
      </div>
    </main>
    <splitLine style="width: 1px; height: 427px; margin: 0 68px;" />
    <aside>
      <img :src="asideData.url" alt="" height="285" width="285">
      <p class="small bold">{{ asideData.title }}</p>
      <button class="empty">See offers</button>
    </aside>
  </article>
</template>
<style lang="scss" scoped>
article {
  @import '../common';
  position: absolute;
  width: 100%;
  z-index: 100;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  height: 487px;
  background: #FFFFFF;
  border: 1px solid $gray300;
  border-radius: 0px 0px 4px 4px;
}

main {
  font-size: 14px;
  display: flex;

  >div {
    width: 210px;

  }

  p {
    height: 21px;
    margin-bottom: 8px;
  }

  >div:first-child {
    >*:last-child {
      color: #FF4242;
    }
  }
}

aside {
  >button {
    font-size: 12px;
    padding: 0 24px;
  }

  >p {
    margin: 16px 0;
  }
}

.title {
  font-weight: 700;
  letter-spacing: 1px;
}
</style>