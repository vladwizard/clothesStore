<script setup lang="ts">

</script>

<template>
  <article class="BlockAreas">
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
    <div id="delivery">
    </div>
  </article>
</template>

<style lang="scss" scoped>
article {
  gap: 16px;

  >* {
    box-sizing: border-box;
    border-radius: 4px;
    min-height: 500px;
  }

  >*:nth-child(3n+1) {
    background: black;

  }

  >*:not(:nth-child(3n+1)) {
    background: blue;

  }

  display: grid;
  grid-template: "a a b b b" 1fr
  "c c c d d" 1fr/ 1fr 1fr 1fr 1fr 1fr;

  >*:nth-child(1) {
    grid-area: a;
    background: url("/images/offerBlocks/image0.png");
    background-size: cover;
  }

  >*:nth-child(2) {
    grid-area: b;
    background: url("/images/offerBlocks/image1.png");
    background-size: cover;
  }

  >*:nth-child(3) {
    grid-area: c;
    background: url("/images/offerBlocks/image2.png");
    background-size: cover;
  }

  >*:nth-child(4) {
    grid-area: d;
    background-size: cover;
  }

}

#delivery {

  position: relative;
  background: #E5E8ED;

  &::after {
    content: "";
    width: 439px;
    height: 380px;
    background: url("/images/offerBlocks/image3.png");
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>