<template>
  <div>
    <h1>
      Registro de Usuários
    </h1>
    <!--
      -> DICA RÁPIDA:
        Divisão de colunas no bootstrap.
        - Aqui, em telas tamanho 'lg' (large), e 'md' (medium),
        a div irá ocupar 6 das 12 colunas da tela, ou seja, metade da tela.
        - Já as telas em tamanho 'sm' (small), e 'xs' (extra small),
        a div irá ocupar 12 das 12 colunas da tela, ou seja, a tela inteira.
    -->
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
      <div class="form-group">
        <label>Nome: *</label>
        <input type="text" v-model="name" class="form-control">
        <label>E-mail: *</label>
        <input type="email" v-model="email" class="form-control">
        <label>Senha: *</label>
        <input type="password" v-model="password" class="form-control">
        <label>Confirmar Senha: *</label>
        <input type="password" v-model="confirmPassword" class="form-control">
        <label>Idade: *</label>
        <input type="text" v-model="age" class="form-control">
        <label>Gênero: *</label>
        <select class="form-control" v-model="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <label>Url de Imagem de Perfil: *</label>
        <input type="text" v-model="pictureUrl" class="form-control">
      </div>
      <button @click="send" class="btn btn-primary">Cadastro</button>
    </div>
  </div>
</template>
<script>
import { createUserAction } from '../actions'
export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      age: '',
      confirmPassword: '',
      pictureUrl: '',
      gender: '',
      responseMessage: ''
    }
  },
  methods: {
    async send () {
      // Validador que verifica se a senha e a senha confirmada são iguais
      if (this.password === this.confirmPassword) {
        let userToSendToAPI = {
          name: this.name,
          email: this.email,
          password: this.password,
          age: this.age,
          gender: this.gender,
          pictureUrl: this.pictureUrl
        }
        try {
          // faz a chamada da action createUser
          await createUserAction(userToSendToAPI)
          // mostra que o usuário foi cadastrado com sucesso
          alert('Usuário cadastrado com sucesso')
          this.$router.push('/')
        } catch (error) {
          alert(error.response.data.error.message)
        }
      } else {
        alert('Você precisa confirmar sua senha!')
      }
    }
  }
}
</script>
<style scoped>

</style>
