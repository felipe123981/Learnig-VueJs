import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/*
export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
*/

const store = new Vuex.Store({
  modules: {
    account: {
      namespaced: true,
      modules: {
        user: {
          namespaced: true,
          state: () => ({
            user: [
              {
                username: "Username",
                email: "",
                avatar_url: ""
              }
            ]
          }),
          actions: {
            login(commit) {
              commit("login");
            }
          },
          mutations: {
            login(state) {
              state.user = [
                {
                  username: "Senpai",
                  email: "filipe.timachine@gmail.com",
                  avatar_url:
                    "https://i.pinimg.com/originals/d8/ff/01/d8ff01e716df9a0f54517be4a7cc1b0b.png"
                }
              ];
            }
          },
          getters: {
            getUsername(state) {
              return state.user.username;
            },
            getEmail(state) {
              return state.user.email;
            },
            getAvatarURL(state) {
              return state.user.avatar_url;
            }
          }
        },

        cart: {
          state: () => ({
            cart: []
          }),
          actions: {},
          mutations: {},
          getters: {}
        }
      }
    }
  }
});

export default store;
