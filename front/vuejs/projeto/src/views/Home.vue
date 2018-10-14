<template>
  <div class="home" onselectstart="return false">
    <v-parallax fluid :src="defineImagem">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3" id="logo">Virtual Space</h1>  
        <h1 class="display-2 font-weight-thin mb-3" id="logo-baixo">Sua melhor loja de jogos!</h1>  
      </v-layout>
    </v-parallax>
  </div>
</template>
<script>

export default {
  name: 'Home',
  props: ['tokenUsuario'],
  computed: {
    defineImagem: function () {
      return this.tokenUsuario ? this.imagemLoja : this.imagemFliperama
    }
  },
  data () {
    return {
      imagemFliperama: require('@/assets/gifs/fliperama.gif'),
      imagemLoja: require('@/assets/gifs/loja.gif')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#back {
   background-color: rgb(10, 20, 24);
}
#logo {
  background-color: rgb(6, 3, 15);
  font-style: normal;
  color: rgb(233, 167, 113);
  font-variant: small-caps;
  opacity: 0.6;
  cursor: default;
}

#logo-baixo {
  background-color: rgb(6, 3, 15);
  font-style: normal;
  color: rgb(233, 167, 113);
  font-variant: small-caps;
  opacity: 0.3;
  cursor: default;
}


#footer {
  background-color: rgb(4, 33, 44);
  font-style: italic;
  border-color: rgb(27, 82, 10);
  opacity: 1;
}
</style>