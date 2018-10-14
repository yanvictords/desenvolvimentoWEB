<template>
<div>
  <v-layout row child-flex wrap>
    <div style="flex-basis: 30%">
      <v-toolbar light dark app > 
        <v-toolbar-side-icon id="botao-toolbar" @click="menuVisivel=true" ></v-toolbar-side-icon>
        <v-spacer>
        <h1 class="medieval-style" v-if="!usuarioLogado">Seja Bem-Vindo!</h1>
        <h1 class="medieval-style" v-if="usuarioLogado">Seja Bem-vindo, {{tokenUsuario.name}}!</h1>  
        </v-spacer>
        <v-avatar v-if="usuarioLogado">
        <v-img
          :src="imagem"
          alt="Usuario"
        ></v-img>
        </v-avatar>
      </v-toolbar>
    </div>
    <MenuDeslogado 
      v-if="!usuarioLogado" 
      :mostrar-menu="menuVisivel" 
      @menuFechado="menuVisivel=false"/>
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
    font-style: italic;
  }
  .medieval-style { color: rgb(233, 167, 113); font-family: MedievalSharp; font-size: 24px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 26.4px; }
  #botao-toolbar {
    color: rgb(240, 191, 150);
  }
</style>