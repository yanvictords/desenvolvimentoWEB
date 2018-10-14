<template>
<div class="cadastro-usuario">
  <v-parallax height="auto" fluid :src="imagemSpace">
  <v-divider/>
  <v-container>
  <v-layout row wrap>
  <v-flex xs8 offset-xs2>
  <v-card color="#FAECD0" height="auto" class="card-cadastro-usuario">
    <v-img class="white--text" height="70px" :src="imagemMoto"/>
    <v-divider/>
    <v-divider/>
    <v-divider/>
  <h1 id="cadastro-usuario"> Criar Conta </h1>
  <v-form v-model="valid">
    <v-text-field error
      prepend-icon="ra-book"
      v-model="nome"
      label="Nome"
      required
    ></v-text-field>
    <v-text-field
      prepend-icon="ra-crown"
      v-model="email"
      label="E-mail / Usuário"
      required
    ></v-text-field>
    <v-text-field
      prepend-icon="ra-key"
      v-model="senha"
      label="Senha"
      type="password"
      required
    ></v-text-field>
        <v-text-field
      prepend-icon="ra-aura"
      v-model="idade"
      label="Idade"
      required
    ></v-text-field>
      <v-text-field
      prepend-icon="ra-double-team"
      v-model="sexo"
      label="Sexo"
      required
    ></v-text-field>
            <v-text-field
      prepend-icon="ra-sunbeams"
      v-model="foto"
      label="Url Foto"
      required
    ></v-text-field>
    <div class="text-xs-center">
      <v-btn @click="cadastrar()" round color="black" font-family='Courier New' dark>Cadastrar</v-btn>
    </div>
    <v-layout justify-center>
      <v-flex xs2>
        <v-progress-circular v-if="carregando" indeterminate color="black"/>
      </v-flex>
    </v-layout>
  </v-form>

  </v-card>
    <v-alert class="cadastro-usuario" :value="cadastroComSucesso" color="#97B143" type="success">
        Usuário cadastrado com Sucesso!
    </v-alert>
    <v-alert id="cadastro-usuario" :value="campoFaltando" color="#C96040" type="error">
        Por favor, preencha todos os campos!
    </v-alert>
  </v-flex>
  </v-layout>
</v-container>
</v-parallax>
</div>
</template>


<script>
import HttpService from '../services/HttpService'
import BrowserService from '../services/BrowserService'

export default {
    data () {
        return {
            valid: true,
            email: undefined,
            senha: undefined,
            foto: undefined,
            nome: undefined,
            idade: undefined,
            sexo: undefined,
            campoFaltando: false,
            cadastroComSucesso: false,
            carregando: false,
            imagemSpace: require('@/assets/gifs/space.gif'),
            imagemMoto: require('@/assets/gifs/moto.gif')
       }
    },
    methods: {
        setarFlags (campoFaltando, cadastroComSucesso) {
            this.campoFaltando = campoFaltando
            this.cadastroComSucesso = cadastroComSucesso
        },
        cadastrar () {
          if(this.email && this.senha && this.foto && this.nome && this.idade && this.sexo) {
            let novoUsuario = {
                email: this.email,
                password: this.senha,
                name: this.nome,
                age: this.idade,
                pictureUrl: this.foto,
                gender: this.sexo
            }
            this.carregando = true
            HttpService.postMethod('/user', novoUsuario).then(resposta => {
                if(resposta){
                    BrowserService.setToken(resposta.data)
                    this.setarFlags(false, true)
                }
                this.carregando=false
            }).catch(error => {
                this.setarFlags(false, false)
                this.carregando=false
            })
          }else{
              this.setarFlags(true, false)
          }
      }
    }
}
</script>

<style>
.outset {border-style: outset;}
.card-cadastro-usuario {
  border-style: ridge;
  color: rgb(27, 24, 20);
  font-family: MedievalSharp;
}
#cadastro-usuario {
  color: black;
  font-family: 'Courier New', Courier, monospace;
}
</style>