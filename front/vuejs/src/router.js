import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

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
    // Criação da nova rota de cadastro de usuarios
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/perfil',
      beforeEnter: (to, from, next) => {
        store.state.user ? next() : next({ path: '/' })
      },
      component: () => import('./views/Profile.vue')
    },
    {
      path: '*',
      component: () => import('./views/Error404.vue')
    }
  ]
})
