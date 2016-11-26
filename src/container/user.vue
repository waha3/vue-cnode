<template>
  <div class="user">
    <card></card>
  </div>
</template>

<script>
import card from '../components/card';
export default {
  name: 'user',
  components: {
    card
  },
  computed() {
    user: this.$store.state.user
  },
  created() {
    let name = this.$route.params.name;
    this.$store.dispatch('getUserInfo', name);
  }
}
</script>
