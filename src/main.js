import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router/index";
import focus from "@/directives/focus.js";

import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.directive("focus", focus);
app.mount("#app");
