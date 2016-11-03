<template>
  <div id="app">
    <router-link to="/">
      <div class="header">
        <mt-header fixed title="cnodejs"></mt-header>
      </div>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue';
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
