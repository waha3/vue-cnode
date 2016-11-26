<template>
  <div id="app">
    <router-link to="/">
      <div class="header">
        <mt-header fixed title="cnodejs"></mt-header>
      </div>
    </router-link>
    <router-view class="container"></router-view>
    <mt-tabbar fixed class="footer">
      <mt-tab-item id="tab1">
        <router-link to="/">首页</router-link>
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <router-link to="/login">登录</router-link>
      </mt-tab-item>
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
