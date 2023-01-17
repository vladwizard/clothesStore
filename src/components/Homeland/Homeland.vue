<script setup lang="ts">
import PreviewVue from "./Preview.vue";
import PeopleCategoriesVue from "./PeopleCategories.vue";
import NewArrivalsVue from "./NewArrivals.vue";
import BlockAreasVue from "./BlockAreas.vue";
import PopularCategoriesVue from "./PopularCategories.vue";
import TrendingNowVue from "./TrendingNow.vue";

import { onMounted, onUnmounted, ref, onUpdated } from "vue";

onMounted(() => {
  HandleEndScroll();
  window.addEventListener("scroll", HandleEndScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", HandleEndScroll);
});

const permissionsRender = ref(new Array());
const wrapper = ref();

function HandleEndScroll() {
  if (wrapper.value) {
    let arr = wrapper.value.children;
    let last = arr[arr.length - 1];

    let cord = last.getBoundingClientRect();
    let bottom = cord.y + cord.height;
    if (bottom - 50 < document.documentElement.clientHeight)
      permissionsRender.value.push(true);
  }
}
const onlyStartRender = ref(true);
const lastChildrenLength = ref(Infinity);
onUpdated(() => {
  if (onlyStartRender.value == true) {
    HandleEndScroll();
    if (lastChildrenLength.value == wrapper.value.children.length) {
      onlyStartRender.value = false;
    }

    lastChildrenLength.value = wrapper.value.children.length;
  }
});
</script>

<template>
  <div ref="wrapper">
    <PreviewVue class="Preview" />
    <PeopleCategoriesVue v-if="permissionsRender[0]" class="PeopleCategories" />
    <NewArrivalsVue v-if="permissionsRender[1]" class="NewArrivals" />
    <BlockAreasVue v-if="permissionsRender[2]" class="BlockAreas" />
    <PopularCategoriesVue
      v-if="permissionsRender[3]"
      class="PopularCategories"
    />
    <TrendingNowVue v-if="permissionsRender[4]" class="TrendingNow" />
  </div>
</template>

<style lang="scss" scoped>
.PeopleCategories {
  margin: -60px auto 0 auto;
}

.BlockAreas {
  padding: 0 30px;
}

.NewArrivals {
  height: 1051px;
  padding: 180px 0;
}

.PopularCategories {
  height: 714px;
  padding: 180px 0;
}
</style>
