<template>
    <div>
    <v-navigation-drawer class="navegador-logado"
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
      <v-list-tile @click="perfil()">
        <v-list-tile-action>
          <v-icon color="#A3B8A9">ra-helmet </v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Meu Perfil</v-list-tile-title>
      </v-list-tile>
      <MenuProdutos @fecharMenu="menuVisivel=false" :usuario-logado="true"/>
      <v-divider></v-divider>
      <v-list-tile @click="sair()">
        <v-list-tile-action>
       <v-icon color="#AA2C10">ra-falling</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Sair</v-list-tile-title>
      </v-list-tile>
    </v-list>
    </v-parallax>
  </v-navigation-drawer>
  </div>
</template>

<script>
import MenuProdutos from './MenuProdutos.vue'
import BrowserService from '../../services/BrowserService';
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
      sair() {
        this.$router.push('/')
        BrowserService.clearStorage()
        this.menuVisivel = false
      },
      perfil() {
        this.$router.push('/perfil')
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
.navegador-logado {
 font-family: MedievalSharp;
}

</style>