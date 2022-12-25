<script setup lang="ts">
import Header2Vue from './components/Header2.vue';
import Header1Vue from './components/Header1.vue';
import PreviewVue from './components/Preview.vue';
import PeopleCategoriesVue from './components/PeopleCategories.vue';
import NewArrivalsVue from './components/NewArrivals.vue';
import BlockAreasVue from './components/BlockAreas.vue';
import PopularCategoriesVue from './components/PopularCategories.vue';
import TrendingNowVue from './components/TrendingNow.vue';
import SalesVue from './components/Sales.vue';
import MobileOfferVue from './components/MobileOffer.vue';
import ArchivmentVue from './components/Archivment.vue';
import FollowInstagramVue from './components/FollowInstagram.vue';
import FashionBlogVue from './components/FashionBlog.vue';
import PatnerCompaniesVue from './components/PatnerCompanies.vue';
import SubscribeOfferVue from './components/SubscribeOffer.vue';
import Footer1Vue from './components/Footer1.vue';
import Footer2Vue from './components/Footer2.vue';
</script>

<template>
  <Header1Vue class="Header1" />
  <Header2Vue class="Header2" />
  <PreviewVue class="Preview" />
  <PeopleCategoriesVue class="PeopleCategories" />
  <NewArrivalsVue class="NewArrivals" />
  <BlockAreasVue class="BlockAreas" />
  <PopularCategoriesVue class="PopularCategories" />
  <TrendingNowVue class="TrendingNow" />
  <SalesVue class="Sales" />
  <MobileOfferVue class="MobileOffer" />
  <ArchivmentVue class="Archivment" />
  <FollowInstagramVue class="FollowInstagram" />
  <FashionBlogVue class="FashionBlog" />
  <PatnerCompaniesVue class="PatnerCompanies" />
  <SubscribeOfferVue class="SubscribeOffer" />
  <Footer1Vue class="Footer1" />
  <Footer2Vue class="Footer2" />
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
