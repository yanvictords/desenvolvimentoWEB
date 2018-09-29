import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // rota de cadastro de usuarios
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: () => import('./views/Register.vue')
    },
    // rota de perfil
    {
      path: '/perfil',
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/produtos',
      component: () => import('./views/ListaProdutos.vue')
    },
    {
      path: '*',
      component: () => import('./views/Error404.vue')
    }
  ]
})
