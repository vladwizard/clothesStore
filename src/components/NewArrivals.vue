<script setup lang="ts">
const items =
  [
    { title: 'Black and white sport cap', price: '$18.15', stars: '5', url: 'src/assets/backend/newArrivals/image0.png' },
    { title: 'Metal bridge sunglasses', price: '$89.95', stars: '', url: 'src/assets/backend/newArrivals/image1.png' },
    { title: 'Green baby romper', price: '$20.40', stars: '4', url: 'src/assets/backend/newArrivals/image2.png' },
    { title: 'Mid-rise slim cropped fit jeans', price: '$40.00', stars: '', url: 'src/assets/backend/newArrivals/image3.png' },
    { title: 'Red dangle earrings', price: '$29.95', stars: '5', url: 'src/assets/backend/newArrivals/image4.png' },
    { title: 'Baby shoes with laces', price: '$30.60', stars: '', url: 'src/assets/backend/newArrivals/image5.png' },
  ]

</script>

<template>
  <article class="NewArrivals">

    <h1 class="gray900">New arrivals</h1>
    <p class="large">Check out our latest arrivals for the upcoming season<br>
      <a href="">See the collection here</a>
    </p>

    <main>
      <div v-for="item in items">

        <img :src="item.url" alt="">
        <div class="starts" v-if="item.stars > ''" v-for="star in item.stars">
        </div>
        <p class="large gray800">{{ item.title }}</p>
        <h5 class="gray900">{{ item.price }}</h5>
      </div>
    </main>
    <footer>
      <button></button>
    </footer>
  </article>
</template>

<style lang="scss" scoped>
article {

  >h1 {
    margin: 180px auto 24px auto;
  }

  >p {
    margin: auto;
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