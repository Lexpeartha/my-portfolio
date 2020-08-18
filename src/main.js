import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueFormulate from "@braid/vue-formulate";
import "../node_modules/@braid/vue-formulate/themes/snow/snow.scss";

Vue.use(VueFormulate);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
