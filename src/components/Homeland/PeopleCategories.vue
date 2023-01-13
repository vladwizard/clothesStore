<script setup lang="ts">
const items =
  [{ title: 'Women’s', url: 'src/assets/images/peopleCategories/image0.png',to:'women' },
  { title: 'Men’s', url: 'src/assets/images/peopleCategories/image1.png',to:'men'},
  { title: 'Kids’', url: 'src/assets/images/peopleCategories/image2.png', to:'boys&girls'}]
</script>

<template>
  <article class="PeopleCategories">
    <div v-for="item in items">
      <router-link :to="(() => '/catalog/' + item.to)()">
      <img :src='item.url' height="390" width="390">
      <p class="lead bold gray800">{{ item.title }}</p>
    </router-link>
    </div>
  </article>
</template>

<style lang="scss" scoped>
article {
  width: max-content;
  display: flex;
  justify-content: center;
  display: flex;
  gap: 30px;

  img {
    position: relative;
  }

  p {
    margin-left: auto;
    margin-right: auto;
    margin-top: 16px;

    text-align: center;
  }

}
</style>