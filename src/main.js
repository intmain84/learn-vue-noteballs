import { createApp } from "vue";
import router from "./router/index";
import focus from "@/directives/focus.js";

import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.directive("focus", focus);
app.mount("#app");
