import Vue from "vue";
import VueGoogleCharts from "vue-google-charts";
import App from "./App.vue";
import store from "./store";

Vue.use(VueGoogleCharts);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
