<template lang="html">
  <div class="container">
    <h2 class="title is-2">Verify Your Email</h2>
    <hr>
    <p>
      {{this.response}}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      response: ''
    }
  },
  created () {
    if (this.$route.params.id) {
      this.$http.get('verify/' + this.$route.params.id + '/' + this.$route.params.token).then(response => {
        this.response = response.data.message;
      });
    } else {
      this.response = "Please check your inbox for your verification email";
    }
  },
}
</script>

<style lang="css">
</style>
