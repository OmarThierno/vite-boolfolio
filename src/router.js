import {createRouter, createWebHistory} from 'vue-router';
import HomePage from './pages/HomePage.vue'
import CardPage from './pages/CardPage.vue'
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/card-page',
      name: 'card-page',
      component: CardPage
    }
  ]
})