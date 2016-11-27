<template>
  <div class="post">
    <editor></editor>
  </div>
</template>

<script>
  import editor from '../components/richeditor';
  export default {
    name: 'post',
    components: {
      editor
    }
  }
</script>
