import Home from "./views/Home.vue";
import About from "./views/About.vue";
import DetectDevice from "./views/DetectDevice.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/detect",
        component: DetectDevice,
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
