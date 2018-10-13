import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './components/Login.vue'
import Cadastro from './components/Cadastro.vue'
import VisualizarProdutos from './components/Produtos/VisualizarProdutos.vue'
import CadastrarProduto from './components/Produtos/CadastrarProduto.vue'
import Erro from './components/Error.vue'
import BrowserService from './services/BrowserService.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: {tokenUsuario: BrowserService.getToken()}
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (BrowserService.getToken())
          next('/')
        else
          next()
      }
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro,
      beforeEnter: (to, from, next) => {
        if (BrowserService.getToken())
          next('/')
        else
          next()
      }
    },
    {
      path: '/verProdutos',
      name: 'visualizar produtos',
      component: VisualizarProdutos,
      props: (route) => ({tokenUsuario: BrowserService.getToken(), teste: route.query._id})
    },
    {
      path: '/cadastrarProduto',
      name: 'cadastrar produto',
      component: CadastrarProduto,
      props: (route) => ({tokenUsuario: BrowserService.getToken()})
    },
    {
      path: '*',
      name: 'error',
      component: Erro
    }
  ]
})
