<template>
  <div class="login">
    <mt-field
      label="登录"
      placeholder="请输入你的accesstokne"
      v-model="token">
    </mt-field>
    <div class="button">
      <mt-button
        type="primary"
        size="large"
        @click.native="loginClickHandle()">
        登录
      </mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      token: '90821d3b-f348-4e74-8fb3-10d765114d20'
    }
  },
  methods: {
    loginClickHandle() {
      this.$store.dispatch('postToken', this.token)
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }
  }
}
</script>
