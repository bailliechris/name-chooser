import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '../utils/api';
//import axios from 'axios';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    apiUrl: 'http://localhost:5000/',
    classes: [],
    isAuth: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuth(state, payload) {
      state.isAuth = payload;
    },
    setClasses(state, payload) {
      state.classes = payload;
    }
  },
  actions: {
    async loginUser({ commit }, data) {
      // Call login function from User API
      let res = await login(data.user, data.password);

      // Commit changes to State
      commit('setUser', {
        user: res.user,
        _id: res._id
      });
      commit('setClasses',
        res.classes
      );
      commit('setIsAuth', true);
    }
  },
  modules: {
  }
})
