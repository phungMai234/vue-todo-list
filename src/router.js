import Home from "./components/Home.vue";
import About from "./components/About.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
