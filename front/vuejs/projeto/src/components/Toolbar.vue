<template>
<div>
  <v-layout row child-flex wrap>
    <div style="flex-basis: 30%">
      <v-toolbar light dark app > 
        <v-toolbar-side-icon @click="menuVisivel=true" ></v-toolbar-side-icon>
        <v-spacer>
        <h1 v-if="!usuarioLogado" class="toolbar-title">Seja Bem-Vindo!</h1>
        <h1 v-if="usuarioLogado" class="toolbar-title">Seja Bem-vindo, {{tokenUsuario.name}}!</h1>  
        </v-spacer>
        <v-avatar v-if="usuarioLogado">
        <v-img
          :src="imagem"
          alt="Usuario"
        ></v-img>
        </v-avatar>
      </v-toolbar>
    </div>
    <MenuDeslogado v-if="!usuarioLogado" :mostrar-menu="menuVisivel" @menuFechado="menuVisivel=false"/>
    <MenuLogado
      v-if="usuarioLogado"
      :mostrar-menu="menuVisivel" 
      @menuFechado="menuVisivel=false"/>

  </v-layout>
  <v-system-bar height="64" dark></v-system-bar>
  </div>
</template>
<script>
import MenuDeslogado from './Menus/MenuDeslogado.vue'
import MenuLogado from './Menus/MenuLogado.vue'
import BrowserService from '../services/BrowserService'
  export default {
    components: {MenuDeslogado, MenuLogado},
    props: ['tokenUsuario'],
    data () {
      return {
        menuVisivel: false,
        imagemVazia: require('@/assets/images/nonPicture.png')
      }
    },
    computed: {
      usuarioLogado: function () {
        return this.tokenUsuario
      },
      imagem: function () {
        if (this.tokenUsuario.pictureUrl)
          return this.tokenUsuario.pictureUrl
        else
          return this.imagemVazia
      }
    }
}
</script>

<style>
  .toolbar-title {
    color: white;
    font-style: initial;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }
</style>