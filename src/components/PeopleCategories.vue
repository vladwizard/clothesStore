<script setup lang="ts">
const items =
  [{ title: 'Women’s', url: 'src/assets/backend/peopleCategories/image0.png' },
  { title: 'Men’s', url: 'src/assets/backend/peopleCategories/image1.png' },
  { title: 'Kids’', url: 'src/assets/backend/peopleCategories/image2.png' }]
</script>

<template>
  <article class="PeopleCategories">
    <div v-for="item in items">
      <img :src='item.url' height="390" width="390">
      <p class="lead bold gray800">{{ item.title }}</p>
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