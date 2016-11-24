<template>
  <div class="home">
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <mt-cell v-for="item of topics"
        :title="item.title"
        :to="'/topic/' + item.id"
        :value="item.author.loginname">
      </mt-cell>
    </mt-loadmore>
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
    },
    methods: {
      loadBottom(id) {
        this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded(id);
      }
    }
  }
</script>
