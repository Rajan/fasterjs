<template>
	<div class="container">
		<h1>Forgot Your Password?</h1>
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
	      <button type="submit" class="btn btn-primary">Reset Password</button>
	    </form>
	</div>	
</template>

<script>
import auth from '../../auth'
export default {
  name: 'ForgotPassword',
  data () {
    return {
      error: null,
      body: {
        email: ''
      }
    };
  },
  computed: {},
  methods: {
    submit() {
      this.$validator.validateAll();
      if (!this.errors.any()) {
        var credentials = {
          email: this.body.email
        };
        auth.forgot(this, credentials, '/');
      }
    }
  },
};
</script>

<style lang="css" scoped>
</style>