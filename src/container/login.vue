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
import { setToken } from '../util/auth.js';
export default {
  name: 'login',
  data() {
    return {
      token: ''
    }
  },
  computed: {
    loginInfo() {
      return this.$store.state.login;
    }
  },
  methods: {
    loginClickHandle() {
      this.$store.dispatch('postToken', this.token)
        .then(data => {
          if (data.success) {
            setToken(this.token);
          }
        })
        .catch(err => console.error(err));
    }
  }
}
</script>
