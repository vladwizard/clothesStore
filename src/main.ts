import { createApp } from "vue";
import App from "./App.vue";
import InputFindVue from "./components/global/InputFind.vue";
import InputCheckboxVue from "./components/global/InputCheckbox.vue";
import HomeVue from "./pages/Homepage.vue";
import CatalogVue from "./pages/Catalog.vue";
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  { path: "/", component: HomeVue },
  // { path: "/catalog", component: CatalogVue },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

const app = createApp(App);
app.use(router)
app.component("input-search", InputFindVue);
app.component("input-checkbox", InputCheckboxVue);
app.mount("#app");
