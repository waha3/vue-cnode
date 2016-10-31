<template>
  <div class="home">
    <button type="button" @click="onClickHandle">111</button>
  </div>
</template>

<script>
  import { getTopics } from '../vuex/actions.js';

  export default {
    name: 'home',
    vuex: {
      getters: {
        list: state => state.home.topics
      },
      actions: {
        getTopics
      }
    },
    methods: {
      onClickHandle() {
        console.log('here');
        getTopics(dispatch());
        // this.$store.dispatch(getTopics());
      }
    }
  }
</script>
