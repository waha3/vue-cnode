<template>
  <div class="post">
    <mt-checklist
      title="选择版块"
      v-model="tab"
      :max="1"
      :options="options">
    </mt-checklist>
    <mt-field label="标题" placeholder="标题字数 10 字以上" v-model="title"></mt-field>
    <editor ref="node"></editor>
    <mt-button
      type="primary"
      size="large"
      @click.native="onClickHandle()">
      发布
    </mt-button>
  </div>
</template>

<script>
  import editor from '../components/richeditor';
  import { getToken } from '../util/auth.js'
  export default {
    name: 'post',
    components: {
      editor
    },
    data() {
      return {
        tab: [],
        title: '',
        content: '',
        options: [
          {
            label: '分享',
            value: 'share',
          },
          {
            label: '问答',
            value: 'ask'
          },
          {
            label: '招聘',
            value: 'job'
          }
        ]
      }
    },
    methods: {
      onClickHandle() {
        this.content = $(this.$refs.node.$el).find('#editor').html();
        let data = {
          title: this.title,
          tab: this.tab[0],
          content: this.content,
          accesstoken: getToken('accesstoken')
        };
        this.$store.dispatch('postTopics', data)
        .then(res => {
          console.log(res);
        });
      }
    }
  }
</script>
