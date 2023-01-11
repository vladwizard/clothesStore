<script setup lang="ts">
import productsJSON from "../../assets/data/products.json";
import { ref, reactive } from "vue";
import PriceBlockVue from "./PriceBlock.vue";
import SaleMark from "../common/SaleMark.vue";
import StarsVue from "./Stars.vue";
import { colors } from "../data";
import CheckboxColorVue from "../common/CheckboxColor.vue";
import { useCartStore } from "../../stores/cart";
import { useRoute } from "vue-router";

// const props = defineProps<{ id: number }>();
const cartCounter = useCartStore();
const route = useRoute();
const id = Number(route.params.id);

const products: Product[] = productsJSON.products;
let item = products.find((x) => x.id == id);
if (item == undefined) item = new Object() as Product;
const myColors = colors.filter((x) => item?.colors.includes(x.title));
const selectedSection = ref(0);

const settings = reactive({
  color: myColors[0].title,
  size: item.sizes[0],
  count: 1,
});
</script>

<template>
  <article class="product_page" v-if="item != undefined">
    <header>
      <h1>
        {{ item.title }}
      </h1>
      <p class="art_number">Art. No.<span></span>{{ id }}</p>
    </header>
    <div class="sections_button">
      <button
        v-for="(item, index) in ['General info', 'Product details', 'Reviews']"
        class="base bold"
        :class="{
          empty: selectedSection == index,
          unstyle: selectedSection != index,
        }"
        @click="selectedSection = index"
      >
        {{ item }}
      </button>
    </div>
    <split-line />
    <div class="data">
      <img :src="item.image" alt="" />

      <aside>
        <div class="settings_block">
          <section class="price_block">
            <div>
              <PriceBlockVue v-if="item.oldPrice">
                <h5 class="gray900 price">{{ "$" + item.price }}</h5>
                <span class="old_price" v-if="item.oldPrice">{{
                  "$" + item.oldPrice
                }}</span>
              </PriceBlockVue>
              <h5 class="gray900" v-else>{{ "$" + item.price }}</h5>
              <SaleMark :price="item.price" :old-price="item.oldPrice" />
            </div>
            <StarsVue class="stars" :stars="item.stars" />
          </section>
          <section class="color_block">
            <p class="label gray800 small">Color</p>
            <div>
              <CheckboxColorVue
                v-for="(color, index) in myColors"
                :color="color.style"
                :value="settings.color == color.title"
                @click="settings.color = color.title"
              />
              <p class="small gray600">{{ settings.color }}</p>
            </div>
          </section>
          <section class="size_block">
            <p class="gray800 small">Size</p>
            <div>
              <select name="" id="">
                <option v-for="size in item.sizes">{{ size }}</option>
              </select>
              <button class="size_chart unstyle">Size chart</button>
            </div>
          </section>
        </div>
        <section class="action_block">
          <input type="number" min="1" v-model="settings.count" />
          <button
            class="filled"
            @click="
              cartCounter.Add(settings.count, Object.assign({}, settings, item))
            "
          >
            Add to cart
          </button>
          <button class="empty">Favorite</button>
        </section>
      </aside>
    </div>
  </article>
</template>

<style lang="scss">
.sections_button {
  display: flex;
  gap: 20px;
  button {
    padding: 10px 20px;
  }
}
.settings_block {
  gap: 24px;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  .label {
    margin-bottom: 8px;
  }
  .price_block {
    display: flex;
    justify-content: space-between;
    > div:first-child {
      display: flex;
      gap: 24px;
    }

    .old_price {
      font-size: 18px;
      line-height: 150%;
    }
  }
  .color_block {
    > *:first-child {
      margin-bottom: 8px;
    }
    > div {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      > *:last-child {
        margin-left: 8px;
      }
      .checkbox_color {
        width: 24px;
        height: 24px;
      }
    }
  }

  .size_block {
    > *:first-child {
      margin-bottom: 8px;
    }
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    select {
      width: 348px;
    }
    .size_chart {
      font-weight: 700;
      font-size: 14px;
      line-height: 44px;
    }
  }
}
.action_block {
  display: grid;
  grid-template-columns: 80px 244px 153px;
  grid-template-rows: 44px;
  gap: 24px;
}

.product_page {
  width: var(--contentWidth);
  padding: 32px 0 100px 0;
  margin: auto;
  > header:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .art_number {
      color: var(--gray700);
      > span {
        display: inline-block;
        width: 4px;
      }
    }
  }
  > *:nth-child(1) {
    margin-bottom: 32px;
  }
  > *:nth-child(2) {
    margin-bottom: 20px;
  }
  > *:nth-child(3) {
    margin-bottom: 32px;
  }
}

.data {
  display: grid;
  gap: 105px;
  grid-template-columns: 600px 525px;
  > *:first-child {
    width: 100%;
  }
}
</style>
