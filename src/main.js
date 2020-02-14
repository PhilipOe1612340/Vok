import Vue from "vue";
import App from "./App.vue";
import Vuetify, {
  VLayout,
  VBtn,
  VInput,
  VList,
  VTextField,
  VSwitch,
  VFlex,
  VIcon,
  VCard,
  VCardActions,
  VCardTitle
} from "vuetify/lib";

import "./registerServiceWorker";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Vuetify, {
  components: {
    VLayout,
    VTextField,
    VBtn,
    VInput,
    VList,
    VSwitch,
    VFlex,
    VIcon,
    VCard,
    VCardActions,
    VCardTitle
  },
  breakpoint: {
    thresholds: {
      xs: 360,
      md: 600
    },
    scrollbarWidth: 10
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
