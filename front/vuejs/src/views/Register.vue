<template>
  <div>
    <h1>
      Registro de Usuários
    </h1>
    <!-- Uso do 'ref' para identificar o elemento -->
    <p class="text-primary" ref="responseText">{{responseMessage}}</p>
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
      </div>
      <div class="form-group">
        <label>E-mail: *</label>
        <input type="email" v-model="email" class="form-control">
      </div>
      <div class="form-group">
        <label>Senha: *</label>
        <input type="password" v-model="password" class="form-control">
      </div>
      <div class="form-group">
        <label>Confirmar Senha: *</label>
        <input type="password" v-model="confirmPassword" class="form-control">
      </div>
      <div class="form-group">
        <label>Idade: *</label>
        <input type="text" v-model="age" class="form-control">
      </div>
      <div class="form-group">
        <label>Gênero: *</label>
        <select class="form-control" v-model="gender">
          <option :key="key" :value='gen' v-for="(gen, key) in genderList">{{gen}}</option>
        </select>
      </div>
      <button @click="send" class="btn btn-primary">Submit</button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      name: 'victor',
      email: 'victor@email.com',
      password: '123123',
      age: '22',
      confirmPassword: '123123',
      genderList: [
        'Male',
        'Feminino',
        'Outro'
      ],
      gender: 'Male',
      responseMessage: ''
    }
  },
  methods: {
    ...mapActions([
      'createUser'
    ]),
    async send () {
      let userToSendToAPI = {
        name: this.name,
        email: this.email,
        password: this.password,
        age: this.age,
        gender: this.gender
      }
      try {
        await this.createUser(userToSendToAPI)
        // mostra que o usuário foi cadastrado com sucesso
        alert('Usuário cadastrado com sucesso')
        this.$router.push('/')
      } catch (error) {
        this.responseMessage = `Ocorreu um erro no cadastro: codigo - ${error.response.status}`
        this.$refs.responseText.className = 'text-danger'
      }
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  }
}
</script>
<style scoped>

</style>
