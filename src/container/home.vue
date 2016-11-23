<template>
  <div class="home">
    <div v-for="item in topics">
      <!-- <mt-cell title="{{item.title}}"></mt-cell> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    created() {
      this.$store.dispatch('getTopics');
    },
    computed: {
      topics() {
        return this.$store.state.home;
      }
    }
  }
</script>

<style media="screen">
  .home {
    margin-top: 3rem;
  }
</style>
