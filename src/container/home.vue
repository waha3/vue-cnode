<template>
  <div class="home">
    <div v-for="item1 in topics">
      <div v-for="item2 in item1.data">
        {{item2.title}}
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'home',
    computed: {
      ...mapGetters({
        topics: 'getterTopics'
      })
    },
    created() {
      this.$store.dispatch('getTopics');
    }
  }
</script>

<style media="screen">
  .home {
    margin-top: 3rem;
  }
</style>
