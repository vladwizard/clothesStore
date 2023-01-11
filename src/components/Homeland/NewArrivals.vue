<script setup lang="ts">
import ProductLittle from "../Product/ProductLittle.vue";
import productsJSON from "../../assets/data/products.json";

const products: Product[] = productsJSON.products;
const ids = [2, 4, 5, 6, 8, 1];
const items = products.filter((x) => x.id in ids);
</script>

<template>
  <article class="NewArrivals">
    <h1 class="gray900">New arrivals</h1>
    <p class="large">
      Check out our latest arrivals for the upcoming season<br />
      <a href="">See the collection here</a>
    </p>

    <main>
      <ProductLittle v-for="item in items" :item="item"> </ProductLittle>
    </main>
    <footer>
      <button></button>
    </footer>
  </article>
</template>

<style lang="scss" scoped>
article {
  > h1 {
    text-align: center;
    margin-bottom: 60px;
  }

  > p {
    text-align: center;
    margin-bottom: 60px;
  }

  a {
    color: lightseagreen;
  }

  main {
    display: flex;
    justify-content: space-evenly;

    p {
      margin-top: 16px;
    }

    h5 {
      margin-top: 8px;
    }
  }
}
</style>
