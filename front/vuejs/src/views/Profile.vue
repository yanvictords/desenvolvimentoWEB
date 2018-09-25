<template>
  <div>
    <h1>Olá, {{$store.getters.user.name}}</h1>
    <p>Seu e-mail é: {{$store.getters.user.email}}</p>
    <p class="text-primary">Seu saldo é de ${{$store.getters.user.money}}</p>
  </div>
</template>
