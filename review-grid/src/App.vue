<template>
  <div id="app">
    <div class="catalog">
      <div v-for="i in 3" :key="i" :id="i">
        <Comment @reply-button="reply" :cid="i"></Comment>
      </div>
    </div>
    <div class="post-content">
      <div class="avatar">
        <b-avatar variant="secondary"></b-avatar>
      </div>
      <div class="post-body">
        <div class="rating-form-post">
          <b-form-rating
            class="rating_form-post"
            variant="warning"
            v-model="form.rating"
            precision="2"
            required
          ></b-form-rating>
        </div>
        <div class="post-form">
          <b-form-input
            id="post-input"
            v-model="form.comment"
            placeholder="Send your review!"
          ></b-form-input>
          <b-button class="post-button" variant="success"
            ><i class="bx bxs-send"></i
          ></b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "./components/CommentComponent.vue";

export default {
  name: "App",
  components: {
    Comment
  },
  data() {
    return {
      form: {
        comment: null,
        rating: 0,
      }
    };
  },
  methods: {
    reply(username) {
      this.form.comment = "";
      this.form.comment += "@" + username ;
    }
  }
};
</script>

<style scoped>
#app {
  background-color: #e4e9f7;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#post-input {
  box-shadow: 1px 1px 0px black;
  width: 40vw;
  min-width: 210px;
  height: 5vh;
}
.post-content {
  display: flex;
  flex-flow: row wrap;
  padding: 10px;
}
.post-body {
  display: flex;
  flex-flow: column wrap;
}
.rating_form-post {
  height: 4vh;
  opacity: 90%;
}
.rating-form-post {
  width: 38vw;
  min-width: 150px;
  margin: 5px;
  max-width: 218px;
}
.post-form {
  display: flex;
  flex-flow: row wrap;
}
.post-button {
  margin-left: 10px;
  border-radius: 10px;
}
.avatar {
  padding: 5px;
}
.catalog {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.7px);
  -webkit-backdrop-filter: blur(1.7px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  overflow-y: scroll;
  height: 490px;
  padding: 2px;
  /*
            height: 490px;
            overflow-y: scroll;
            
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            
            padding: 5px;
            background-color: var(--body-color);
        */
}
</style>
