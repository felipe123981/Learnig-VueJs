<template>
  <div id="app">
    <MyNavbar />
    <MyArtigos msg="Meu artigo"/>
  </div>
</template>

<script>
import MyArtigos from './MyArtigos.vue';
import MyNavbar from './MyNavbar.vue';
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    components: { MyArtigos, MyNavbar }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#pp {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
