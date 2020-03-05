import Vue from "vue";
import SuiVue from "semantic-ui-vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
// import foo_counter from "./foo_counter";
import Rail from "./components/RailExample";

// Configs
Vue.config.productionTip = false;
Vue.use(SuiVue);

// Components
// Vue.component("foo_counter", foo_counter);
Vue.component("rail", Rail);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
