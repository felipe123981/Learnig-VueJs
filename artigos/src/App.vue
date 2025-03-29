<template>
  <MyNavbar/>
  <MyArtigos msg="Meus artigos"/>
</template>

<script>
import MyArtigos from './components/MyArtigos.vue'
import MyNavbar from './components/MyNavbar.vue'

export default {
  name: 'App',
  components: {
    MyArtigos,
    MyNavbar
}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
