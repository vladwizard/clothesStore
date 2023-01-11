<script setup lang="ts">
import lineArrowVue from '../../assets/icons/lineArrow.vue';
</script>
<template>
  <header class="small">
    <p>Available 24/7 at <b>(405) 555-0128</b></p>

    <div class="center">
      <p v-for="item in ['Delivery & returns', 'Track order', 'Blog', 'Contacts']">
        {{ item }}
      </p>

    </div>
    <div>
      <div class="lang">
        <img class="notOpacity" src="../../assets/icons/flag-usa.svg" height="12" width="20">
        <p>Eng / $</p>
        <lineArrowVue class="down" />
      </div>
      <div class="account">
        <img src="../../assets/icons/man.svg">
        <p>Log in / Register</p>
      </div>
    </div>

  </header>
</template>
<style lang="scss" scoped>
p,
svg,
img {
  &:not(.notOpacity) {
    opacity: 0.8;
  }
}

header {
  background: var(--gray900);
  height: 44px;

  color: white;
  justify-content: space-evenly;
  &,
  div {
    display: flex;
    align-items: center;
  }

  svg {
    fill: white;
  }

  >div:nth-child(2) {
    gap: 32px;
  }

  >div:last-child {
    gap: 63px;

    .lang {
      p {
        margin: 0 6px 0 12px;
      }
    }

    .account {
      gap: 9px
    }
  }


}
</style>