<template>
<div>
    <v-divider></v-divider>
    <v-list-group prepend-icon="shopping_cart" value="true">
        <v-list-tile slot="activator">
        <v-list-tile-title>Produtos</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="verListaProdutos()">
            <v-list-tile-title v-text="'Lista de Produtos'"></v-list-tile-title>
            <v-list-tile-action>
                <v-icon v-text="'store'"></v-icon>
            </v-list-tile-action>
        </v-list-tile>
        <v-list-tile v-if="usuarioLogado" @click="cadastrarProduto()">
            <v-list-tile-title v-text="'Cadastrar novo'"></v-list-tile-title>
            <v-list-tile-action>
                <v-icon v-text="'store'"></v-icon>
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