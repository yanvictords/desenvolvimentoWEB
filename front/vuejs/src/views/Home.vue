<template>
  <div class="home" id="default">
    <h1>Aula de Desenvolvimento WEB</h1>
    <h2>Loja virtual</h2>
    <img alt="Vue logo" src="../assets/logo.png">
    <Login msg="Bem-vindo(a) à nossa Loja Virtual"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'home',
  components: {
    Login
  }
}
</script>
