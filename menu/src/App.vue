<template>
  <MyMenu title="My App" v-on:menu-click="onClickMenu">
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </MyMenu>
  <h1>{{msg}}</h1>
</template>

<script>
import MyMenu from './components/MyMenu.vue'

export default {
  name: 'App',
  components: {
    MyMenu
  },
  data(){
    return {
      msg: 'Hello Vue'
    }
  },
  methods: {
    onClickMenu: function(e){
      alert(e);
    }
  }
}
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
