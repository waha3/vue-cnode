<template>
  <div class="avator">
    <img :src="image">
  </div>
</template>

<script>
export default {
  name: 'avator',
  props: {
    image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less">
  @import "./index.less";
</style>
