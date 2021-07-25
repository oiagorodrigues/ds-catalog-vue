import { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/catalogo',
    name: 'Store',
    component: () =>
      import(/* webpackChunkName: "store" */ '@/views/Store.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () =>
      import(/* webpackChunkName: "admin" */ '@/views/Admin.vue'),
  },
]

export default routes
