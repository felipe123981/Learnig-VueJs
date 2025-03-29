<template>
<input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="John">John</label>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="Jack">Jack</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="Jack">Mike</label><br>
    <span>Checked names: {{checkedNames}}</span>
</template>
  

<script>

export default {
  name: 'App',

data(){
  return{
  checkedNames: []
  }
}
} 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
