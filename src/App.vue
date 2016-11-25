<template>
  <div id="app">
    <router-link to="/">
      <div class="header">
        <mt-header fixed title="cnodejs"></mt-header>
      </div>
    </router-link>
    <router-view class="container"></router-view>
    <mt-tabbar fixed>
      <mt-tab-item id="tab1">首页</mt-tab-item>
      <mt-tab-item id="tab2">登录</mt-tab-item>
      <mt-tab-item id="tab3">3</mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="less">
  @import "./assets/less/style.less";
</style>
