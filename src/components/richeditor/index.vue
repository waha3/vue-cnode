<template>
  <div class="richeditor">
    <div id="editor"></div>
  </div>
</template>

<script>
  import { init } from './init.js';
  export default {
    name: 'richeditor',
    mounted() {
      init();
    }
  }
</script>

<style lang="less">
  @import "./index.less";
</style>
