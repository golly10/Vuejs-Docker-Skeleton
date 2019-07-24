import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import ElementUI from "element-ui";

Vue.config.productionTip = false;
Vue.use(Router);
Vue.use(ElementUI);

import router from "./router";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
