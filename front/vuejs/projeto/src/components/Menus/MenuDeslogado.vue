<template>
    <div>
    <v-navigation-drawer class="navegador-deslogado"
    v-model="menuVisivel"
    app
    temporary
    attach
    auto
    height="auto"
    close-on-click
    dark
    top
    transition
  >
    <v-parallax height="auto" :src="imagemFaseAgua">

    <v-list>
      <v-list-tile @click="inicio()">
        <v-list-tile-action>
          <v-icon color="#e9a771">ra-castle-emblem</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Início</v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile @click="login()">
        <v-list-tile-action>
          <v-icon color="pink">ra-hood</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Entrar</v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile @click="cadastro()">
        <v-list-tile-action>
          <v-icon color="#A3B8A9">ra-wooden-sign</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Criar Conta</v-list-tile-title>
      </v-list-tile>
  <MenuProdutos @fecharMenu="menuVisivel=false" :usuario-logado="false"/>
  </v-list>
</v-parallax>

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
        imagemFaseAgua: require('@/assets/gifs/faseAgua.gif'),
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

<style>
.navegador-deslogado {
  font-family: MedievalSharp;
  color: #e9a771;
}


</style>