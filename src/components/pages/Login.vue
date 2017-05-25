<template lang="html">
  <div class="container">
    <h1>Login</h1>
    <hr>
    <form v-on:submit.prevent="submit">
      <div v-show="error" class="alert alert-danger" role="alert">
        <strong>Oh snap!</strong> {{ error }}
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-validate.initial data-rules="required|email" type="text" class="form-control" v-model="body.email" name="email" id="email" placeholder="sample@email.com" data-as="email">
        <span v-show="errors.has('email')" class="alert-danger">{{ errors.first('email') }}</span>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-validate.initial data-rules="required|min:6" name="password" type="password" class="form-control" v-model="body.password" id="password" placeholder="********">
        <span v-show="errors.has('password')" class="alert-danger">{{ errors.first('password') }}</span>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
      <hr>
      <a href="/forgotpassword">Forgot your password?</a>
    </form>
  </div>
</template>

<script>
import auth from '../../auth'

export default {
  data () {
    return {
      error: null,
      body: {
        email: '',
        password: ''
      }
    };
  },
  computed: {},
  methods: {
    submit() {
      this.$validator.validateAll();
      if (!this.errors.any()) {
        var credentials = {
          email: this.body.email,
          password: this.body.password
        };
        auth.login(this, credentials, '/');
      }
    }
  },
  components: {}
};
</script>

<style lang="css">
</style>
