import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/destination/:id',
        name: 'Destination',
        component: () => import('../views/DestinationView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router