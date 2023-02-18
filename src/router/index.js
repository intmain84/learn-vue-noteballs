import { createRouter, createWebHistory } from "vue-router";
import ViewNotes from "@/views/ViewNotes.vue";
import ViewStats from "@/views/ViewStats.vue";
import ViewNewNote from "@/views/ViewNewNote.vue";
import ViewEditNote from "@/views/ViewEditNote.vue";

const routes = [
  {
    path: "/",
    name: "notes",
    component: ViewNotes,
    alias: "/notes",
  },
  {
    path: "/editnote/:id",
    name: "editnote",
    component: ViewEditNote,
    props: true,
  },
  {
    path: "/stats",
    name: "stats",
    component: ViewStats,
  },
  {
    path: "/newnote",
    name: "newnote",
    component: ViewNewNote,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "is-active",
});

export default router;
