<template lang="html">
  <nav class="navbar navbar-full navbar-dark bg-inverse">
    <a class="navbar-brand" href="/">Vue Boilerplate</a>
    <ul class="nav navbar-nav pull-xs-right">
      <li class="nav-item">
        <router-link to="/"><a class="nav-link">Home</a></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/notes"><a class="nav-link">Notes</a></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/login" v-if="!user.authenticated"><a class="nav-link">Login</a></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/register" v-if="!user.authenticated"><a class="nav-link">Register</a></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/users" v-if="user.authenticated && user.role == 'admin'"><a class="nav-link">Admin</a></router-link>
      </li>
      <li class="nav-item">
        <a href="#" @click="logout()" v-if="user.authenticated" class="nav-link">Log Out</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import auth from '../../auth';
export default {
  data() {
    return {
      user: auth.user
    }
  },
  methods: {
    logout() {
      auth.logout(this)
    }
  }
};
</script>

<style lang="css">
</style>
