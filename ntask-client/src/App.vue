<template>
<div id="app">
    <h1>Consuming API Rest with axios</h1>
    <ul v-for="lista in list" v-bind:key="lista.id">
      <li>
        {{ lista.title }} <br>
        {{ lista.content }}   
      </li>
    </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',

  data() {
    return {
      list: null
    }
  },
  mounted() {
        axios.get("http://localhost:3333/tasks")
          .then(resp => (
            this.list = resp.data.tasks
          ));
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
