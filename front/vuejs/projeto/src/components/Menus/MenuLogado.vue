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

      <v-list-tile @click="perfil()">
        <v-list-tile-action>
          <i class="material-icons">account_circle</i>
        </v-list-tile-action>
        <v-list-tile-title>Meu Perfil</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="sair()">
        <v-list-tile-action>
          <i class="material-icons">exit_to_app</i>
        </v-list-tile-action>
        <v-list-tile-title>Sair</v-list-tile-title>
      </v-list-tile>

      <MenuProdutos @fecharMenu="menuVisivel=false" :usuario-logado="true"/>
    </v-list>
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
        admins: [
          ['Management', 'people_outline'],
          ['Settings', 'settings']
        ],
        cruds: [
          ['Create', 'add'],
          ['Read', 'insert_drive_file'],
          ['Update', 'update'],
          ['Delete', 'delete']
        ],
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
