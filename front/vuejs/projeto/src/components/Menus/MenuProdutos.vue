<template>
<div>
    <v-divider></v-divider>
    <v-list-group prepend-icon="ra-gamepad-cross" value="true">
        <v-list-tile slot="activator">
        <v-list-tile-title>Jogos</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="verListaProdutos()">
            <v-list-tile-title v-text="'~> Lista de Jogos'"></v-list-tile-title>
            <v-list-tile-action>
                <v-icon color="#A3B8A9" v-text="'ra-book'"></v-icon>
            </v-list-tile-action>
        </v-list-tile>

        <v-list-tile v-if="usuarioLogado" @click="cadastrarProduto()">
            <v-list-tile-title v-text="'~> Cadastrar produto'"></v-list-tile-title>
            <v-list-tile-action>
                <v-icon color="#A3B8A9" v-text="'ra-wooden-sign'"></v-icon>
            </v-list-tile-action>
        </v-list-tile>

    </v-list-group>
</div>
</template>

<script>
export default {
    props: ['usuarioLogado'],
    data () {
      return {
          dialogoCadastrar: false
      }
    },
    methods: {
        verListaProdutos () {
            this.$router.push('/verProdutos')
            this.$emit('fecharMenu')
        },
        cadastrarProduto(methd){
            this.$router.push('/cadastrarProduto')
            this.$emit('fecharMenu')
        }
    }
}
</script>

<style>
.navegador-produtos {
  border-style: groove;
  border-color: rgb(2, 44, 30);
  font-family: MedievalSharp;
}
#cor-icone {
    color: blue;
}
.v-list__group__header__prepend-icon .v-icon {
    color: red;
}  
</style>