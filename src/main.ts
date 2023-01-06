import { createApp } from "vue";
import App from './App.vue'
import InputFindVue from "./components/functional/InputFind.vue";
import InputCheckboxVue from "./components/functional/InputCheckbox.vue";
import HomePage from "./components/pages/HomePage.vue";
import Page from "./components/pages/CatalogPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

import { createPinia } from "pinia";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const routes = [
  { path: "/", component: HomePage },
  { path: "/:main:/:peopleCategory", component: Page },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
const pinia = createPinia()

const app = createApp(App);
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.component("input-search", InputFindVue);
app.component("input-checkbox", InputCheckboxVue);
app.mount("#app");
