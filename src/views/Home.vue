<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button type="button" @click='signin'>Login</button>
    <div v-if="isAuth">
      <p> {{ user }} </p>
      <p> {{ classes }} </p>
    </div>
    <div v-else>
      <p> Loading .... </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import {login} from '../utils/api';
import {mapState } from 'vuex';

export default {
  name: 'Home',
  components: {

  },
  data(){
    return{
        stuff: "",
        loaded: false
    }
  },
  computed: 
    mapState({
      user: state => state.user,
      classes: state => state.classes,
      isAuth: state => state.isAuth
    })
  ,
  methods: {
    signin: function() {
 //     this.stuff = login();
        console.log("Button Pressed");
        let payload = {
          user:"sporkina@hotmail.com", 
          password:"sporks"
        }
        this.$store.dispatch('loginUser', payload);
    }
  }
}
</script>
