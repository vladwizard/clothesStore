<script setup lang="ts">

import PreviewVue from './Preview.vue';
import PeopleCategoriesVue from './PeopleCategories.vue';
import NewArrivalsVue from './NewArrivals.vue';
import BlockAreasVue from './BlockAreas.vue';
import PopularCategoriesVue from './PopularCategories.vue';
import TrendingNowVue from './TrendingNow.vue';
import SalesVue from './Sales.vue';
import MobileOfferVue from './MobileOffer.vue';
import ArchivmentVue from './Archivment.vue';
import FollowInstagramVue from './FollowInstagram.vue';
import FashionBlogVue from './FashionBlog.vue';
import PatnerCompaniesVue from './PatnerCompanies.vue';
import SubscribeOfferVue from './SubscribeOffer.vue';
import Footer1Vue from '../footers/Footer1.vue';
import Footer2Vue from '../footers/Footer2.vue';
</script>

<template>
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
