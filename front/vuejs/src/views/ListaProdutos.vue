<template>
  <div class="col-sm-12">
    <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item"
    ></v-carousel-item>
  </v-carousel>
    <div class="text-xs-center">
      <h4 class="text-center">Produtos Cadastrados:</h4>
      <!-- precisamos colocar a condição inicial, para caso não haja usuários -->
      <div v-if="produtos">
        <!-- Estrutura de repetição em Vue -->
        <div :key="key" v-for="(produto, key) in produtos">
          <v-card :color="black" :width="200">
          <div v-if="mostraCarregamento">
                <v-progress-circular
                  :size="30"
                  color="primary"
                  indeterminate
                ></v-progress-circular>
          </div>
          <div class="text-xs-center">
              <v-card-title primary-title class="text-center">
              </v-card-title>
              <p><b>Nome: {{produto.nome}}</b></p>
              <p>Validade: {{produto.validade}}</p>
              <p>Preço: {{produto.valor}}</p>
          </div>
          <v-btn @click="excluirProduto(produto)" color="red">excluir</v-btn>
          <div class="separator"/>
         </v-card>
        </div>
        <v-alert v-if="mostrarAlertaSucesso" :value="true" type="blue">
            Produto criado com sucesso
          </v-alert>
         <v-alert v-if="mostrarAlertaExcluir" :value="true" type="orange">
            Produto excluido com sucesso
          </v-alert>
        <div>
          <v-btn @click="novoProduto()" color="green">Novo Produto</v-btn>
          <CadastroProdutos  @escondeForm="esconderFormulario()" v-if="mostrarForm"> </CadastroProdutos>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import { getObjState, showProdutosAction, deleteProdutoAction } from '../actions'
import CadastroProdutos from './CadastroProdutos.vue'

export default {
  components: {CadastroProdutos},
  data () {
    return {
      produto: {},
      produtos: null,
      mostrarForm: false,
      mostrarAlertaSucesso: false,
      mostrarAlertaExcluir: false,
      mostraCarregamento: false,
      items: ["https://scontent.fbsb8-1.fna.fbcdn.net/v/t1.0-9/18199433_981766961926201_81526242405397551_n.jpg?_nc_cat=100&oh=30a8c8bbdc9791756dda6046cf7fdc78&oe=5C16B6E8", "https://scontent.fbsb8-1.fna.fbcdn.net/v/t1.0-9/14915287_835817596521139_5920555520249178714_n.jpg?_nc_cat=110&oh=c6d8f4758f8b21d53a89de482c975335&oe=5C5BDBCD"]
    }
  },
  methods: {
    novoProduto () {
      this.mostrarAlertaSucesso = false
      this.mostrarAlertaExcluir = false
      this.mostrarForm = !this.mostrarForm
    },
    async excluirProduto (produto) {
      this.mostrarAlertaSucesso = false
      try{
        await deleteProdutoAction(produto._id)
        this.buscarProdutos()
        this.mostrarAlertaExcluir = true
      } catch (error) {
        alert(error.response.data.error.message)
      }
    },
    esconderFormulario () {
      this.mostrarForm = false,
      this.mostrarAlertaSucesso = true
      this.mostrarAlertaExcluir = false
      this.buscarProdutos()
    },
    buscarProdutos () {
      this.mostraCarregamento = true
      showProdutosAction().then(produtos => {
        this.produtos = produtos
        this.mostraCarregamento = false
      }).catch(error => {
        alert(error.response.data.error.message)
        this.mostraCarregamento = false
      })
    }
  },
  mounted () {
    this.produtos = getObjState()
    if (!this.produto) {
      window.location.replace('/')
      return
    }
    this.buscarProdutos()
  }
}
</script>
<style scoped>
.card {
  margin-top: 20px;
  padding: 30px;
  background-color: rgba(214, 224, 226, 0.2);
  -webkit-border-top-left-radius:5px;
  -moz-border-top-left-radius:5px;
  border-top-left-radius:5px;
  -webkit-border-top-right-radius:5px;
  -moz-border-top-right-radius:5px;
  border-top-right-radius:5px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.card.hovercard {
  position: relative;
  padding-top: 0;
  overflow: hidden;
  text-align: center;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 1);
}
.card.hovercard .card-background {
  height: 130px;
}
.card-background img {
  -webkit-filter: blur(25px);
  -moz-filter: blur(25px);
  -o-filter: blur(25px);
  -ms-filter: blur(25px);
  filter: blur(25px);
  margin-left: -100px;
  margin-top: -200px;
  min-width: 130%;
}
.card.hovercard .produtoavatar {
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
}
.card.hovercard .produtoavatar img {
  width: 100px;
  height: 100px;
  max-width: 100px;
  max-height: 100px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 0.5);
}
.card.hovercard .card-info {
  position: absolute;
  bottom: 14px;
  left: 0;
  right: 0;
}
.card.hovercard .card-info .card-title {
  padding:0 5px;
  font-size: 20px;
  line-height: 1;
  color: #262626;
  background-color: rgba(255, 255, 255, 0.1);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}
.card.hovercard .card-info {
  overflow: hidden;
  font-size: 12px;
  line-height: 20px;
  color: #737373;
  text-overflow: ellipsis;
}
.profile-list {
  border-style: solid;
  border-width: 1px;
  border-color: #262626;
  padding: 10px;
}
.separator {
  width: calc(100% - 20px);
  border: solid #262626 1px;
  margin: 10px;
}
</style>

