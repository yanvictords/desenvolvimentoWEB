<template>
<div>
  <v-parallax height="auto" fluid :src="imagemLoja">
  <v-container>
  <v-layout row justify-center>
  <v-flex xs8 offset-xs1>
  <v-card color="#FAECD0" height=460 class="card-cadastro-produto">
  <v-img class="white--text" height="75px" :src="imagemMoto"/>
    <v-divider/>
    <v-divider/>
    <v-divider/>
    <h1 class="cadastro-produto"> Cadastrar Produto </h1>
  <v-form v-model="valid">
    <v-text-field error
      prepend-icon="ra-wooden-sign"
      v-model="nome"
      label="Nome do Produto"
      required
    ></v-text-field>
    <v-text-field error
      prepend-icon="ra-quill-ink"
      v-model="descricao"
      label="Descrição do Produto"
      required
    ></v-text-field>
    <v-text-field
      prepend-icon="ra-diamond"
      v-model="valor"
      label="Preço"
      required
    ></v-text-field>
    <v-text-field
      prepend-icon="ra-sunbeams"
      v-model="imagem"
      label="Url Foto"
      required
    ></v-text-field>
      <div class="text-xs-center">
    <v-btn @click="cadastrar()" round color="black" font-family='Courier New' dark>Cadastrar</v-btn>
  </div>
  </v-form>
  </v-card>
  <v-alert class="cadastro-produto" :value="campoFaltando" color="#C96040" type="error">
        Por favor, preencha todos os campos!
  </v-alert>
  </v-flex>
  </v-layout>
  </v-container>
  </v-parallax>

  <v-dialog v-model="cadastroComSucesso" width="500">
    <v-card color="#FAECD0">
      <v-img height="100px" :src="imagemPost"/>
      <!-- <v-card-title class="headline grey lighten-2" primary-title> Sucesso </v-card-title> -->
      <v-card-text class="cadastro-produto"> O produto foi cadastrado com SUCESSO! </v-card-text>
      <v-divider/>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green" flat @click="irParaListaProdutos" > Fechar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
import HttpService from '../../services/HttpService'
  export default {
    props: ['tokenUsuario'],
    data () {
        return {
          valid: true,
          nome: null,
          dono: null,
          descricao: null,
          valor: null,
          imagem: null,
          campoFaltando: false,
          cadastroComSucesso: false,
          imagemPost: require('@/assets/gifs/post.gif'),
          imagemLoja: require('@/assets/gifs/fliperama.gif'),
          imagemMoto: require('@/assets/gifs/moto.gif')
        }
    },
    methods: {
        fecharDialogo () {
          this.$emit('fecharDialogo')
        },
        irParaListaProdutos () {
          this.cadastroComSucesso = false
          this.$router.push('/verProdutos')
        },
        cadastrar () {
            if (this.nome && this.valor && this.descricao && this.imagem) {
                let novoProduto = {
                    nome: this.nome,
                    dono: this.tokenUsuario.email,
                    descricao: this.descricao,
                    valor: this.valor,
                    pictureUrl: this.imagem
                }
                HttpService.postMethod('produto', novoProduto).then(resposta => {
                    if(novoProduto) this.cadastroComSucesso = true
                    this.dialogoCadastrarProduto = false
                    this.fecharDialogo()
                })
            } else {
                this.campoFaltando = true
            }
        }
    }
  }
</script>

<style>
.outset {border-style: outset;}
.card-cadastro-produto {
  border-style: ridge;
  border-color: black;
  font-family: MedievalSharp;
}
.cadastro-produto {
  color: black;
  font-family: 'Courier New', Courier, monospace;
}
.cadastro-produto-medieval {
  color: black;
  font-family: MedievalSharp;
}
</style>