<b-container
  :toast="{root: true}"
  fluid="sm"
  position="position-fixed"
  style="top:50px; left : -200px"
></b-container>
<b-button class="" @click="show1">Show Toast</b-button>
<b-button class="ms-2" @click="show2">Show Toast with Body</b-button>

<script lang="ts">
  import {useToast} from 'BootstrapVue/ToastPlugin'
  export default {
    data: {
      toast: useToast()
    },
    methods: {
      
    show1() {
    this.toast.show({title: 'example title'})
  }

 show2() {
    this.toast.show({title: 'example title', body: 'This is a toast'})
  }
    }
  }
</script>