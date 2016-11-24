<template>
  <div id="app">
    <router-link to="/">
      <div class="header">
        <mt-header fixed title="cnodejs"></mt-header>
      </div>
    </router-link>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
  import Vue from 'vue';

</script>

<style>
@import 'assets/less/style.less';
</style>
