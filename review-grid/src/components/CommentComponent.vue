<template>
  <div id="app">
    <div class="comment-grid">
      <div class="container-alt">
        <div class="upvotes">
          <button @click="upvote" class="btn btn-sm outline-primary btn-like">
            <i class="bx bx-like icon"></i>
          </button>

          <div class="upvoted">
            {{ upvoted }}
          </div>
          <button
            @click="downvote"
            class="btn btn-sm outline-primary btn-dislike"
          >
            <i class="bx bx-dislike icon"></i>
          </button>
        </div>
        <div class="content">
          <div class="header">
            <div class="avatar">
              <b-avatar variant="secondary"></b-avatar>
            </div>
            <div class="username" v-b-modal="'my-modal' + cid">
              @{{ username }}
              <br />
            </div>
            <!-- The modal -->
            <b-modal centered ok-only :id="'my-modal' + cid">
              <div class="modal-container">
                <h1>{{ username }}</h1>
                <div class="modal-header">
                  <div class="customer-thumbnail">
                    <b-img
                      thumbnail
                      fluid
                      src="https://picsum.photos/70/70/?image=59"
                      alt="Image 3"
                    ></b-img>
                  </div>
                  <div class="customer-header-description">
                    <div class="customer-name">
                      <p>
                        {{ username }}
                      </p>
                    </div>
                    <div class="customer-description">
                      Sugarbay official vendor
                    </div>
                  </div>
                </div>
                <div class="customer-reputation">
                  <div class="customer-level market-leader">
                    <h3>Market leader</h3>
                  </div>
                  <p>Is a excellent vendor!</p>
                </div>
                <div class="ui-gauge">
                  <ul aria-hidden="true" class="ui-thermometer" value="5">
                    <li
                      class="ui-thermometer__level ui-thermometer__level--1"
                    ></li>
                    <li
                      class="ui-thermometer__level ui-thermometer__level--2"
                    ></li>
                    <li
                      class="ui-thermometer__level ui-thermometer__level--3"
                    ></li>
                    <li
                      class="ui-thermometer__level ui-thermometer__level--4"
                    ></li>
                    <li
                      class="ui-thermometer__level ui-thermometer__level--5"
                    ></li>
                  </ul>
                </div>

                <div class="customer-qualities">
                  <div class="customer-sales">
                    <div class="sales-number">
                      <h4>+{{ sales_number }}</h4>
                    </div>
                    <div class="sales-time">
                      <p>sales in the last 60 days!</p>
                    </div>
                  </div>
                  <div class="customer-service">
                    <i class="bx bx-conversation modal-icon"></i>
                    <p>provides good service.</p>
                  </div>
                  <div class="deliver-on-time">
                    <i class="bx bx-timer modal-icon"></i>
                    <p>deliver products on time.</p>
                  </div>
                </div>
                <br />
                <BR></BR>
                <a href="#" class="about-vendor">More about this vendor</a>
              </div>
            </b-modal>
            <div class="updated">
              {{ updated }}
            </div>
            <div class="reply-button">
              <button
                @click="reply"
                class="btn btn-sm outline-primary btn-reply"
              >
                <i class="bx bx-share"></i> reply
              </button>
            </div>
          </div>
          <div class="rating-form">
            <b-form-rating
              class="rating_form"
              variant="warning"
              v-model="value"
              precision="2"
            ></b-form-rating>
          </div>
          <div class="comment">
            {{ comment }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import Vue from "vue";
//import { LinearGaugePlugin } from "@syncfusion/ej2-vue-lineargauge";

//Vue.use(LinearGaugePlugin);
export default {
  name: "CommentComponent",
  props: ["cid"],
  mounted() {
    this.btn_like = document.getElementsByClassName("bx-like")[this.cid - 1];
    this.btn_dislike =
      document.getElementsByClassName("bx-dislike")[this.cid - 1];
      this.username += this.cid;
  },
  data() {
    return {
      sales_number: 10000,
      btn_like: null,
      btn_dislike: null,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      updated: "1 month ago",
      upvoted: 15,
      username: "User",
      value: 3.5,
      level_color: "green"
    };
  },
  methods: {
    upvote() {
      if (this.btn_like.className.indexOf("active") == -1) {
        this.btn_like.className = "bx bxs-like icon active";
        this.btn_dislike.className = "bx bx-dislike icon";
        this.upvoted++;
      }
    },
    downvote() {
      if (this.btn_dislike.className.indexOf("active") == -1) {
        this.btn_dislike.className = "bx bxs-dislike icon active";
        this.btn_like.className = "bx bx-like icon";
        this.upvoted--;
      }
    },
    reply() {
        this.$emit("reply-button", this.username);
    }
  },
  computed: {
    comment_lenght() {
      return this.comment.length;
    }
  }
};
</script>
<style scoped>
.ui-thermometer {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  height: auto;
  margin-left: -6px;
  overflow: hidden;
  vertical-align: baseline;
  width: 100%;
}
.modal-icon {
  display: flex;
  justify-content: center;
  font-size: 40px;
}
.sales-number {
  padding: 10px;
}
.deliver-on-time {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 10px;
  border-left: 1px solid black;
}
.customer-sales {
  padding-left: 5px;
  border-right: 1px solid black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.customer-service {
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.ui-thermometer__level {
  border-left: 6px solid #fff;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  float: left;
  height: 8px;
  margin-top: 2px;
  width: 20%;
}
.ui-thermometer__level--1 {
  background: #fff0f0;
}
.ui-thermometer__level--2 {
  background: #fff5e8;
}
.ui-thermometer__level--3 {
  background: #fffcda;
}
.ui-thermometer__level--4 {
  background: #f1fdd7;
}
.ui-thermometer__level--5 {
  background: #119933;
  height: 12px;
  margin: 0;
  /* 
    background: #edf8ee;
    */
}
.customer-qualities {
  display: flex;
  flex-flow: row nowrap;
}
.customer-reputation {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  padding-left: 15px;
}
.market-leader {
  color: green;
}
.customer-name {
  font-weight: bold;
}
.customer-header-description {
  padding-left: 15px;
}
.modal-header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
}
.comment-grid {
  display: flex;
  padding-left: 1vw;
}
.container-alt {
  display: flex;
  flex-flow: row nowrap;
  padding: 1vh;
  border-radius: 10px;
  background-color: white;
}
.upvotes {
  display: flex;
  flex-flow: column nowrap;
  margin: 0.2rem;
  border-radius: 10px;
  background-color: #e4e9f7;
  justify-content: space-between;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1vh;
  flex-flow: row wrap;
}
.content {
  display: flex;
  flex-direction: column;
  padding-left: 1vw;
}
.icon {
  font-size: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: #822e81;
}
.username {
  padding-left: 0.3rem;
  font-weight: bold;
}
.username:hover {
  color: #822e81;
}
.username:active {
  color: #822e81;
}
.about-vendor {
  color: #822e81;
  cursor: pointer;
}
.updated {
  padding-left: 0.3rem;
}
.rating-form {
  width: 38vw;
  min-width: 150px;
  margin: 5px;
  max-width: 218px;
}
.reply-button {
  margin-left: auto;
  margin-bottom: 0;
  right: 0;
}
.btn-reply {
  box-shadow: 0px 0px 1px #023047;
  font-weight: bold;
  font-size: 2.1vh;
  color: #822e81;
}
.upvoted {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.comment {
  padding-left: 1vh;
}
.rating_form {
  height: 3.3vh;
  opacity: 90%;
}
</style>
