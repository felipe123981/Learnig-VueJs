<template>
  <div class="container">
    <div class="row text-center">
        <h3>Clicked: {{ getCount }} times, count is {{ evenOrOdd }}.</h3>
        <button class="btn btn-success" @click="increment">+</button>
        <button class="btn btn-danger" @click="decrement">-</button>
        <button class="btn" @click="incrementIfOdd">Increment if odd</button>
        <button class="btn" @click="incrementAsync">Increment async</button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'hello',
  computed: mapGetters([
    'evenOrOdd',
    'getCount'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>
