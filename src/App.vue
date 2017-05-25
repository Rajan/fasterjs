<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue';

export default {
  components: {
    Navbar,
  }
}
</script>

<style>
html, p, h1, h2, h3, h4, h5, a {
    font-family: 'Noto Sans', sans-serif !important;
}

.container {
  padding-top: 2%;
}
</style>
