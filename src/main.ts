import { createApp } from "vue";
import router from "./router/router";
import App from "./App.vue";

// Temporary datatable while waiting on Vuetify 3.1: https://github.com/vuetifyjs/vuetify/issues/13479
import "vue3-easy-data-table/dist/style.css";

import i18n from "./plugins/i18n";
import { vuetify } from "./plugins/vuetify";

const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(vuetify);

router.isReady().then(() => {
  app.mount("#app");
});
