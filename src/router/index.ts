import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/stats",
    name: "stats",
    component: () => import("../views/MonitoringView.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../views/UsersView.vue"),
  },
  {
    path: "/tasks",
    name: "tasks",
    component: () => import("../views/TasksView.vue"),
  },
  {
    path: "/workers",
    name: "workers",
    component: () => import("../views/WorkersView.vue"),
  },
  {
    path: "/karma",
    name: "karma",
    component: () => import("../views/KarmaView.vue"),
  },
  {
    path: "/messages",
    name: "messages",
    component: () => import("../views/MessagesView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
