<template>
<div class="login">
  <v-parallax height="500" fluid :src="imagemRua">
  <v-divider/>
 <v-container>
  <v-layout row wrap>
  <v-flex xs4 offset-xs4 >
  <v-card color="#FAECD0" height=320 class="card-login">
    <v-img class="white--text" height="60px" :src="imagemParada"
    />
    <v-divider/>
    <v-divider/>
    <v-divider/>
    <h1 class="login"> Acessar </h1>
  <v-form v-model="valid">
     
    <v-text-field
      prepend-icon="person"
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      prepend-icon="lock"
      type="password"
      v-model="senha"
      label="Senha"
      required
    ></v-text-field>
  </v-form>
  <v-divider/>
  <v-divider/>
  <v-divider/>
  <v-container>
  <v-layout  justify-end>
  <div class="text-xs-center">
    <v-btn @click="entrar()" round color="black" font-family='Courier New' dark>Entrar</v-btn>
  </div>
  </v-layout>
  </v-container>
  </v-card>
    <v-alert :value="loginSucesso" color="green" type="success">
      Usuário/senha conferem!
    </v-alert>
    <v-alert :value="credenciaisIncorretas" color="red" type="error">
      Usuário/senha não conferem!
    </v-alert>
    <v-progress-circular v-if="carregando" indeterminate color="primary"/>
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
            email: null,
            senha: null,
            usuario: null,
            credenciaisIncorretas: false,
            loginSucesso: false,
            carregando: false,
            imagemRua: require('@/assets/gifs/rua.gif'),
            imagemParada: require('@/assets/gifs/parada.gif')

       }
    },
    methods: {
      setarFlags (credenciaisIncorretas, loginSucesso) {
        this.credenciaisIncorretas = credenciaisIncorretas
        this.loginSucesso = loginSucesso
      },
      entrar (){
        if(this.email && this.senha) {
          let usuario = {
            email: this.email,
            password: this.senha
          }
          this.carregando = true
          HttpService.postMethod('/login', usuario).then(resposta => {
            if (resposta) {
              this.usuario = resposta.data
              this.setarFlags(false, true)
              BrowserService.setToken(resposta.data)
            } else {
              this.setarFlags(true, false)
            }
            this.carregando=false
          }).catch(error => {
            this.setarFlags(false, false)
            this.carregando=false
          })
        } else {
          this.setarFlags(true, false)
        }
      }
    }
}
</script>

<style>
.outset {border-style: outset;}
.card-login {
  border-style: ridge;
}
.login {
  color: black;
  font-family: 'Courier New', Courier, monospace;
}
</style>