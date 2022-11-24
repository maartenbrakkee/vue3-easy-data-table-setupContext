/* istanbul ignore file */
import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const loadView = (view: string) => {
  return () => import(`../views/${view}/${view}.vue`);
};

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "Home",
    meta: {
      requiresAuth: true,
      layout: DefaultLayout,
    },
    component: loadView("Home"),
  },

  { path: "/:pathMatch(.*)*", redirect: "/home" },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
