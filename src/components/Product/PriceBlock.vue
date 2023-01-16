<script setup lang="ts"></script>

<template>
  <div class="prices_block">
    <slot> </slot>
  </div>
</template>

<style lang="scss">
.prices_block {
  display: flex;
  align-items: center;
  gap: 12px;

  //один елемент
  > *:first-child:last-child {
    color: var(--gray900);
  }

  //если два
  //первый
  > *:nth-last-child(2) {
    color: var(--danger);
    display: inline;
  }

  //второй
  > *:nth-child(2) {
    color: var(--gray700);
    text-decoration-line: line-through;
  }
}
</style>
