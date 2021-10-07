import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/pages/MainPage";
import CartPage from "@/pages/CartPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
