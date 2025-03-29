import { createRouter, createWebHistory } from 'vue-router';

import MyCard from './views/MyCard.vue';
import MyButton from './views/MyButton.vue';

const routes = [
    {
        path: '/card',
        name: 'card',
        component: MyCard,
        auth: true
    },
    {
        path: '/buttons',
        name: 'buttons',
        component: MyButton
    },
];


const router = createRouter({
    history: createWebHistory(), routes
});



export default router;