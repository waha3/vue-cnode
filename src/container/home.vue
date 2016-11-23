<template>
  <div class="home">
    <button type="button" @click="onClickHandle">111</button>
    <mt-cell title="标题文字"></mt-cell>
  </div>
</template>

<script>
  // import { getTopics } from '../vuex/actions.js';

  export default {
    name: 'home',
    computed: {
      page() {
        return this.$store.state.home.page;
      }
    },
    methods: {
      onClickHandle() {
        return this.$store.dispatch('getTopics');
      }
    }
  }
</script>

<style media="screen">
  .home {
    margin-top: 3rem;
  }
</style>
