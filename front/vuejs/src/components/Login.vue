<template>
  <div class="hello">
    <p>
      {{msg}}
    </p>
    <div class="row">
      <div class="col-xs-12 col-sm-3"></div>
      <div class="col-xs-12 col-sm-6 login">
        <div class="form-group">
          <label>E-mail: *</label>
          <input type="email" v-model="email" class="form-control">
        </div>
        <div class="form-group">
          <label>Senha: *</label>
          <input type="password" v-model="password" class="form-control">
        </div>
        <button class="btn btn-primary" @click="sendForm">Login</button>
        <p>
          Não tem uma conta? Cadastre-se
          <router-link to="/cadastro">Aqui</router-link>
        </p>
      </div>
      <div class="col-xs-12 col-sm-3"></div>
    </div>
  </div>
</template>

<script>
import { loginAction } from '../actions'
export default {
  name: 'Login',
  props: {
    msg: String
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async sendForm () {
      try {
        await loginAction(this.$data)
        this.$router.push('/produtos')
      } catch (error) {
        alert(error.response.data.error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
.login {
  text-align: left;
}
</style>
