import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    {
      path: "/jobs",
      name: "jobs",
      component: () => import("@/views/JobsView.vue"),
    },
    {
      path: "/jobs/add",
      name: "add-jobs",
      component: () => import("@/views/AddJobView.vue"),
    },
    {
      path: "/jobs/:id",
      name: "job",
      component: () => import("@/views/JobView.vue"),
    },
    {
      path: "/:cathAll(.*)",
      name: "404 || Not Found",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

export default router;
