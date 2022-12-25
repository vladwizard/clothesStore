<script setup lang="ts">
import lineArrowVue from '../assets/lineArrow.vue';
</script>
<template>
  <header class="small">
    <p>Available 24/7 at <b>(405) 555-0128</b></p>

    <div>
      <p v-for="item in ['Delivery & returns', 'Track order', 'Blog', 'Contacts']">
        {{ item }}
      </p>

    </div>
    <div>
      <div class="lang">
        <img src="src/assets/flag-usa.svg" height="12px" width="20px">
        <p>Eng / $</p>
        <lineArrowVue />
      </div>
      <div>
        <img src="src/assets/man.svg">
        <p>Log in / Register</p>
      </div>
    </div>

  </header>
</template>
<style lang="scss" scoped>
header {
  svg {
    fill: white;
  }

  background: #1E212C;
  height: 44px;
  display: flex;
  width: 100%;
  color: white;
  justify-content: space-evenly;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  >div:nth-child(2) {
    gap: 32px;
  }

  >div:nth-child(3) {
    gap: 63px;

    >div:nth-child(1) {
      p {
        margin: 0 6px 0 12px;
      }
    }

    >div:nth-child(2) {
      gap: 9px
    }
  }
}

.lang {
  svg {
    transform: rotate(90deg);
  }
}
</style>