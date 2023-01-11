import { createApp } from "vue";
import App from "./App.vue";

import InputFindVue from "./components/common/InputFind.vue";
import InputCheckboxVue from "./components/common/InputCheckbox.vue";
import SplitLine from "./components/common/SplitLine.vue";

import { createRouter, createWebHashHistory } from "vue-router";

import { createPinia } from "pinia";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import Catalog from "./components/Catalog/Catalog.vue";
import Homeland from "./components/Homeland/Homeland.vue";
import ProductVue from "./components/Product/Product.vue";

const routes = [
  { path: "", component: Homeland },
  { path: "/product/:id", component: ProductVue },
  { path: "/catalog/:peopleCategory", component: Catalog },

];
const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.component("input-search", InputFindVue);
app.component("input-checkbox", InputCheckboxVue);
app.component("split-line", SplitLine);
app.mount("#app");
