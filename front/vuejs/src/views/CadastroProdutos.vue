<template> 
<div> 
    <h4 class="text-center">
        Cadastrar Novo Produto
    </h4>
    <v-form v-model="valid">
    <v-text-field
      v-model="produto.nome"
      label="Nome"
      required
    ></v-text-field>
    <v-text-field
      v-model="produto.valor"
      label="Valor"
      required
    ></v-text-field>
    <v-text-field
      v-model="produto.validade"
      label="Validade"
      required
    ></v-text-field>
  </v-form>
  <v-btn @click="criarProduto()" color="green">Criar</v-btn>
    <v-alert
        :value="faltaCampo"
        type="red"
    > 
        Por favor, preencha todos os campos!
    </v-alert>
</div>
</template>

<script>
import { createProdutoAction } from '../actions/index'
export default {
    data () {
        return {
            produto: {
                nome: null,
                valor: null,
                validade: null,
                id: null
            },
            faltaCampo: false
        }
    },
    methods: {
        async criarProduto(){
            this.validaCampo = false
            let produtoFinal = {
                nome: this.produto.nome,
                valor: this.produto.valor,
                validade: this.produto.validade
            }
            if (!produtoFinal.nome || !produtoFinal.valor || !produtoFinal.validade) {
                this.faltaCampo = true
            } else {
                try {
                    await createProdutoAction(produtoFinal)
                    this.sucesso = true
                    this.$emit('escondeForm')
                    this.$router.push('/produtos')
                } catch (error) {
                    alert(error.response.data.error.message)
                }
            }
        }
    }
}
</script>
<style scoped>