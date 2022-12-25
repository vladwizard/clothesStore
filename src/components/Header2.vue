<script setup lang="ts">
import Logo from '../assets/logo.vue';
import HeaderDrop from './HeaderDrop.vue'
import { ref } from 'vue';
const clickIndex = ref(-1)

</script>
<template>
  <header>
    <Logo class="asd" />
    <div>
      <button class="unstyle gray800" v-for="item, index in ['Women', 'Men', 'Girls', 'Boys', 'Sale']"
        @click="clickIndex == index ? clickIndex = -1 : clickIndex = index"
        :class="{ primaryColor: clickIndex == index }">
        {{ item }}
      </button>
    </div>
    <div>
      <input class="small" type="text" placeholder="Search for products...">
      <img src="src/assets/magnifier.svg">
    </div>
    <div class="counters base">
      <div>
        <img src="src/assets/heart.svg">
        <p>2</p>
      </div>
      <span></span>
      <div>
        <img src="src/assets/cart.svg">
        <p>4</p>
      </div>

    </div>
  </header>
  <HeaderDrop v-if="clickIndex != -1" />
</template>
<style lang="scss" scoped>
header {
  margin: auto;
  width: 1920-700px;
  height: 84px;
  font-size: 16px;
  line-height: 160%;

  &,
  div {
    display: flex;
    align-items: center;
  }

  >div:nth-child(2) {
    font-weight: 700;
    gap: 40px;
    margin: 0 132px 0 60px;

    p:last-child {
      color: #FF4242;
    }
  }

  >div:nth-child(3) {
    position: relative;
    margin-right: 48px;

    input[type='text'] {
      width: 380px;
      height: 44px;
      border: 1px solid #D7DADD;
      border-radius: 4px;
      padding: 0 10px;
    }

    img {
      position: absolute;
      right: 15px;
    }
  }
}

.counters {
  div {
    gap: 8.5px
  }

  span {
    height: 22px;
    width: 1px;
    background: linear-gradient(270.01deg, rgba(218, 219, 221, 0) 0%, rgba(218, 219, 221, 0.5) 12.33%, #DADBDD 51.91%, rgba(218, 219, 221, 0.5) 87.85%, rgba(218, 219, 221, 0) 100%);
    margin: 0 20px;
  }

  >div:last-child {
    p.notzero {
      width: 23px;
      background: #03CEA4;
      border-radius: 4px;
      text-align: center;
      line-height: 20px;
    }
  }
}
</style>