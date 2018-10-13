<template>
    <div>
    <v-navigation-drawer
    v-model="menuVisivel"
    absolute
    temporary
    attach
    auto
    close-on-click
    dark
    top
    transition
  >
    <v-list>
      <v-list-tile @click="inicio()">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Início</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="login()">
        <v-list-tile-action>
          <i class="material-icons">account_circle</i>
        </v-list-tile-action>
        <v-list-tile-title>Entrar</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="cadastro()">
        <v-list-tile-action>
          <i class="material-icons">face</i>
        </v-list-tile-action>
        <v-list-tile-title>Cadastrar</v-list-tile-title>
      </v-list-tile>

  <MenuProdutos @fecharMenu="menuVisivel=false" :usuario-logado="false"/>
  </v-list>

  </v-navigation-drawer>
  </div>
</template>

<script>
import MenuProdutos from './MenuProdutos.vue'
  export default {
    components: {
      MenuProdutos
    },
    props: ['mostrarMenu'],
    watch: {
        mostrarMenu: function () {
            this.menuVisivel = this.mostrarMenu
        },
        menuVisivel: function () {
            if(!this.menuVisivel) this.$emit('menuFechado')
        }
    },
    data () {
      return {
        admins: [
          ['Ver Produtos', 'store'],
          ['Settings', 'settings']
        ],
        menuVisivel: false
      }
    },
    methods: {
      login() {
        this.$router.push('/login')
        this.menuVisivel = false
      },
      cadastro() {
        this.$router.push('/cadastro')
        this.menuVisivel = false
      },
      inicio() {
        this.$router.push('/')
        this.menuVisivel = false
      }
    }
  }
</script>
