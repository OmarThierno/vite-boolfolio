import {createRouter, createWebHistory} from 'vue-router';
import HomePage from './pages/HomePage.vue'
import CardPage from './pages/CardPage.vue'
import SinglePage from './pages/SinglePage.vue'
import NotFound from './pages/NotFound.vue'
import ContactsPage from './pages/ContactsPage.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/projects',
      name: 'projects',
      component: CardPage
    },
    {
      path: '/projects/:slug',
      name: 'single-project',
      component: SinglePage
    },
    ,
    {
      path: '/contact-us',
      name: 'contacts',
      component: ContactsPage
    },
    {
      path: '/projects/not-found',
      name: 'not-found',
      component: NotFound
    }
  ]
})