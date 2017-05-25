<template>
	<div class="container">
		<h1>Reset Password</h1>
		<hr>
	    <form v-on:submit.prevent="submit">
	      <div v-show="error" class="alert alert-danger" role="alert">
	        <strong>Oh snap!</strong> {{ error }}
	      </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input v-validate.initial data-rules="required|min:6" name="password" type="password" class="form-control" v-model="body.password" id="password" placeholder="********">
          <span v-show="errors.has('password')" class="alert-danger">{{ errors.first('password') }}</span>
        </div>
        <div class="form-group">
          <label for="passwordConfirmation">Password Confirmation</label>
          <input v-validate.initial data-rules="required|min:6" name="passwordConfirmation" type="password" class="form-control" v-model="body.password2" id="passwordConfirmation" placeholder="********">
          <span v-show="errors.has('passwordConfirmation')" class="alert-danger">{{ errors.first('passwordConfirmation') }}</span>
        </div>
	      <button type="submit" class="btn btn-primary">Reset Password</button>
	    </form>
	</div>	
</template>

<script>
import auth from '../../auth'
export default {
  name: 'ResetPassword',
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
        if (this.body.password === this.body.password2) {
          var credentials = {
            password: this.body.password,
            token: this.$route.params.token
          };
          auth.reset(this, credentials, '/login');
        }
        else {
          this.error = "Please enter the the same password in the 'Password Confirmation' field";
        }
      }
    }
  },
};
</script>

<style lang="css" scoped>
</style>