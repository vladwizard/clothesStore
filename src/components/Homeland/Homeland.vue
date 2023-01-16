<script setup lang="ts">
import PreviewVue from "./Preview.vue";
import PeopleCategoriesVue from "./PeopleCategories.vue";
import NewArrivalsVue from "./NewArrivals.vue";
import BlockAreasVue from "./BlockAreas.vue";
import PopularCategoriesVue from "./PopularCategories.vue";
import TrendingNowVue from "./TrendingNow.vue";
import SalesVue from "./Sales.vue";
import MobileOfferVue from "./MobileOffer.vue";
import ArchivmentVue from "./Archivment.vue";
import FollowInstagramVue from "./FollowInstagram.vue";
import FashionBlogVue from "./FashionBlog.vue";
import PatnerCompaniesVue from "./PatnerCompanies.vue";
import SubscribeOfferVue from "./SubscribeOffer.vue";
import Footer1Vue from "../footers/Footer1.vue";
import Footer2Vue from "../footers/Footer2.vue";
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
onUpdated(() => {
  if (onlyStartRender) HandleEndScroll();
  else onlyStartRender.value = false;
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
    <SalesVue class="Sales" />
    <MobileOfferVue class="MobileOffer" />
    <ArchivmentVue class="Archivment" />
    <FollowInstagramVue class="FollowInstagram" />
    <FashionBlogVue class="FashionBlog" />
    <PatnerCompaniesVue class="PatnerCompanies" />
    <SubscribeOfferVue class="SubscribeOffer" />
    <Footer1Vue class="Footer1" />
    <Footer2Vue class="Footer2" />
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
