<template>
  <div id="app">
    <!-- <mt-header fixed title="固定在顶部"></mt-header> -->
    <router-link to="/">首页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Header } from 'minu-ui';
  // Vue.component(Header.name, Header);
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
}
</style>
