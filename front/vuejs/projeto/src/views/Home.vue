<template>
  <div class="home">
    <v-parallax fluid :src="defineImagem">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3" id="logo">Virtual Space</h1>  
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
  font-family: "Times New Roman", Times, serif;
  font-style: normal;
  font-variant: small-caps;
  opacity: 0.6;
}

#footer {
  background-color: rgb(4, 33, 44);
  border-style: solid;
  font-style: italic;
  border-color: rgb(27, 82, 10);
  opacity: 1;
}
</style>