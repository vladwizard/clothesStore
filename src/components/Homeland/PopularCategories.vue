<script setup lang="ts">
const items =
  [
    { title: 'Tops', url: 'src/assets/images/popularCategories/image0.png' },
    { title: 'T-shirts', url: 'src/assets/images/popularCategories/image1.png' },
    { title: 'Caps', url: 'src/assets/images/popularCategories/image2.png' },
    { title: 'Sandals', url: 'src/assets/images/popularCategories/image3.png' },
    { title: 'Jackets', url: 'src/assets/images/popularCategories/image4.png' },
    { title: 'Coats', url: 'src/assets/images/popularCategories/image5.png' },
  ]

</script>

<template>
  <article class="PopularCategories">
    <h1>Popular categories</h1>
    <main>
      <article v-for="item in items">

        <img :src="item.url" alt="">
  
        <p class="lead bold gray900">{{ item.title }}</p>
      </article>
    </main>
    <footer>
      <button></button>
    </footer>
  </article>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
  margin-bottom: 60px;
}

main {
  width: max-content;
  margin: 0 auto;
  display: flex;
  gap: 30px;
}

p {
  margin: 24px auto 0 auto;
  text-align: center;
}
</style>