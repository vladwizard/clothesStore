<script setup lang="ts">
import StarsVue from "./Stars.vue";
import heart from "../../assets/icons/Heart.vue";
import { useFavoriteStore } from "../../stores/favorites";
import { ref } from "vue";
import PriceBlockVue from "./PriceBlock.vue";
import SaleMark from "../common/SaleMark.vue";

const favoriteCounter = useFavoriteStore();

const props = defineProps<{
  item: ProductLittle;
}>();
const isFavorite = ref(favoriteCounter.isHere(props.item.id));

function handleFavoriteClick() {
  favoriteCounter.Add(props.item.id);
  isFavorite.value = !isFavorite.value;
}
</script>

<template>
  <article>
    <router-link :to="'/product/' + item.id">
      <SaleMark
        v-if="item.oldPrice != undefined"
        class="sale_mark"
        :price="item.price"
        :oldPrice="item.oldPrice"
      />
      <StarsVue class="stars" v-if="item.stars > 0" :stars="item.stars" />
      <div class="favorite-button" @click.prevent="handleFavoriteClick">
        <heart :fill="isFavorite" />
      </div>
      <img :src="item.image" alt="" />

      <p class="large gray800">{{ item.title }}</p>
      <PriceBlockVue>
        <h5>{{ "$" + item.price }}</h5>
        <span class="old_price" v-if="item.oldPrice">{{
          "$" + item.oldPrice
        }}</span>
      </PriceBlockVue>
    </router-link>
  </article>
</template>

<style lang="scss" scoped>
details {
  border-bottom: 1px solid var(--gray300);
}
.sale_mark {
  position: absolute;
  left: 24px;
  top: 17px;
}
.old_price {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
}
article {
  position: relative;
  width: 285px;
  height: 413px;
}
.stars {
  position: absolute;
  top: 16px;
  right: 16px;
}
.favorite-button {
  position: absolute;
  width: 32px;
  height: 32px;
  top: 272px;
  right: 16px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    height: 13.328858375549316px;
    width: 15.170741081237793px;
  }
}
img {
  padding-bottom: 16px;
}
img ~ * {
  padding-left: 16px;
}
p {
  margin-bottom: 8px;
}
</style>
