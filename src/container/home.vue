<template>
  <div class="home">
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <mt-cell v-for="item of formatTopics"
        :title="item.title"
        :to="'/topic/' + item.id"
        :value="item.create_at">
      </mt-cell>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';
  import { mapGetters } from 'vuex';
  moment.locale('zh-cn');
  export default {
    name: 'home',
    data() {
      return {
        loadMorePayload: {
          page: 1,
          type: 'all'
        },
        loading: false
      }
    },
    computed: {
      ...mapGetters({
        topics: 'getterTopics'
      }),
      formatTopics() {
        return this.topics.map(v => Object.assign(v, {
          create_at: moment(v.create_at).fromNow()
        }));
      }
    },
    methods: {
      loadMore() {
        this.loading = true;
        this.$store.dispatch('getTopics', this.loadMorePayload)
          .then(() => {
            this.loading = false;
            this.loadMorePayload.page += 1;
          });
      }
    }
  }
</script>
