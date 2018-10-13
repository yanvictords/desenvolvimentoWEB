<template>
<div>
  <v-parallax fluid :src="imagemLoja">
    <v-container>
    <v-layout row justify-center>

      <v-dialog v-model="dialog" overlay dark max-width="490">
					<v-card>
						<v-card-title class="headline">Virtual Space Jogos!</v-card-title>
						<v-card-text color="green">...aproveite os melhores preços...</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="orange darken-1" flat="flat" @click.native="dialog = false">Fechar</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>

    <v-flex v-if="i<2" :v-for="(produto, i) in produtos" :key="i">
    <v-card color="#FAEGD0" width="250" class="card-produtos">
         <v-img class="white--text" height="150px" :src="produto.pictureUrl"
        >
        </v-img>
        <v-divider/>
        <v-divider/>
        <v-divider/>
        <v-layout align-center justify-center>
        <v-card-title center>
          <div>
            <span class="blue--text">{{produto.nome}}</span><br>
            <span>Usuário: {{produto.dono}}</span><br>
            <span>Descrição: {{produto.descricao}}</span><br>
            <span>Valor: {{produto.valor}} R$</span>
          </div>
        </v-card-title>
        </v-layout>
        <v-divider/>
        <v-layout v-if="!meuProduto(produto.email)" align-center justify-center>
        <v-card-actions color="orange">
          <v-btn flat color="green">Comprar</v-btn>
        </v-card-actions>   
        </v-layout>
        <v-divider/>
        <v-divider/>
        <v-divider/>   
    </v-card>
    </v-flex>
    </v-layout>
    </v-container>
  </v-parallax>
</div>
</template>

<script>
import HttpService from '../../services/HttpService'

export default {
  props: ['tokenUsuario', 'teste'],
  data () {
    return {
      imagemLoja: require('@/assets/gifs/loja.gif'),
      produtos: [],
      dialog: false
    }
  },
  mounted () {
    HttpService.getMethod('/produto').then(resposta => {
      if (resposta) this.produtos = resposta.data
    })
  },
  methods: {
    meuProduto (emailProduto) {
      return this.tokenUsuario.email === emailProduto
    }
  }
}

</script>

<style>
.card-produtos {
  border-style: ridge;
}
</style>