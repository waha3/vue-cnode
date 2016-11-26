<template>
  <div class="card">
    <div class="card_header">
      {{title}}
    </div>
    <div class="line"></div>
    <div class="card_content">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: {
      title: {
        type: String
      }
    }
  }
</script>

<style lang="less">
  @import "./index.less";
</style>
