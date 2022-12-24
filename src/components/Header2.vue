<script setup lang="ts">
</script>
<template>
  <header class="header2">
    <div>
      <img src="src/assets/logo1.svg">
      <img src="src/assets/logo2.svg">
    </div>
    <div>
      <p v-for="item in ['Women', 'Men', 'Girls', 'Boys', 'Sale']">
        {{ item }}

      </p>
    </div>
    <div>
      <input type="text" placeholder="Search for products...">
      <img src="src/assets/magnifier.svg">
    </div>
    <div>
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
</template>
<style lang="scss">
.header2 {
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
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      border: 1px solid #D7DADD;
      border-radius: 4px;
      padding: 0 10px;
    }

    img {
      position: absolute;
      right: 15px;
    }
  }

  >div:last-child {
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
}
</style>