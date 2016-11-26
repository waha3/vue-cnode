<template>
  <div class="detail">
    <mt-cell :title="detail.title">
      <router-link v-if="detail.author" :to="{path: '/user/' + detail.author.loginname}" append>
        <avator></avator>
      </router-link>
    </mt-cell>
    <div class="content" v-html="detail.content"></div>
  </div>
</template>

<script>
  import avator from '../components/avator';
  export default {
    name: 'detail',
    components: {
      avator
    },
    computed: {
      detail() {
        return this.$store.state.detail;
      }
    },
    created() {
      let id = this.$route.params.id;
      this.$store.dispatch('getTopicDetail', id);
    }
  }
</script>
