import { createRouter, createWebHistory } from 'vue-router'; 

import VueHome from './views/VueHome.vue';
import VueSobre from './views/VueSobre.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: VueHome
    },
    {
        path: '/sobre',
        name: 'sobre',
        component: VueSobre
    },
];
const router = createRouter({
    history: createWebHistory(), routes
});
export default router;