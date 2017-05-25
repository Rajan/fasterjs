<template lang="html">
  <div class="container">
    <h1>Register An Account</h1>
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
        <label for="firstName">First Name</label>
        <input v-validate.initial data-rules="required" type="text" class="form-control" v-model="body.firstName" name="firstName" id="firstName" placeholder="John" data-as="First Name">
        <span v-show="errors.has('firstName')" class="alert-danger">{{ errors.first('firstName') }}</span>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input v-validate.initial data-rules="required" data-as="Last Name" type="text" class="form-control" v-model="body.lastName" name="lastName" id="lastName" placeholder="Doe">
        <span v-show="errors.has('lastName')" class="alert-danger">{{ errors.first('lastName') }}</span>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-validate.initial data-rules="required|min:6" name="password" type="password" class="form-control" v-model="body.password" id="password" placeholder="********">
        <span v-show="errors.has('password')" class="alert-danger">{{ errors.first('password') }}</span>
      </div>
      <div class="form-group">
        <label for="password2">Password Confirmation</label>
        <input v-validate.initial data-as="password confirmation field" data-rules="required|min:6" name="passwordConfirmation" type="password" class="form-control" v-model="body.password2" id="password2" placeholder="********">
        <span v-show="errors.has('passwordConfirmation')" class="alert-danger">{{ errors.first('passwordConfirmation') }}</span>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
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
        firstName: '',
        lastName: '',
        password: '',
        password2: ''
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
            email: this.body.email,
            firstName: this.body.firstName,
            lastName: this.body.lastName,
            password: this.body.password
          };
          auth.signup(this, credentials, '/verify');
        }
        else {
          this.error = "Please enter the the same password in the 'Password Confirmation' field";
        }
      }
    }
  },
  components: {}
};
</script>

<style lang="css">
</style>
