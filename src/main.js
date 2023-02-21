import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "@/router/index";
import focus from "@/directives/focus.js";

import App from "@/App.vue";
import NoteForm from "@/components/Notes/NoteForm.vue";

const app = createApp(App);
const pinia = createPinia();

app.component("NoteForm", NoteForm);

app.use(router);
app.use(pinia);
app.directive("focus", focus);
app.mount("#app");
