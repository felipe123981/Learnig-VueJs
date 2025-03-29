<template>
  <div @click="onClickMenu">
    <h4>{{ title }}</h4>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyMenu',
  props: ['title'],
  methods: {
    onClickMenu: function(){
      this.$emit('menu-click', "Emit event from menu");
    }
  }
}
</script>

