<template>
  <div class="home">
    <mt-loadmore
      :top-method="loadTop"
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      ref="loadmore"
      @bottom-status-change="bottomChangeHandle"
    >
      <mt-cell v-for="item of topics"
        :title="item.title"
        :to="'/topic/' + item.id"
        :value="moment(createAt).fromNow()">
      </mt-cell>
    </mt-loadmore>
  </div>
</template>

<script>
  import moment from 'moment';
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
    },
    methods: {
      loadBottom(id) {
        this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded(id);
      },
      bottomChangeHandle() {
        // alert('here');
      }
    }
  }
</script>
