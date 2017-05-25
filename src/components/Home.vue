<template>
  <div class="container">
    <h1>Some Developer Thing</h1>
    <button class="btn btn-primary">Test It</button>
  </div>
</template>

<script>
// import Axios from 'axios'
// const urlPrefix = process.env.NODE_ENV === 'production' ? '/api/' : `http://${window.location.hostname}:3000`
export default {
  name: 'Home',
  props: ['budgets', 'clients', 'getBudgets'],
  data () {
    return {
      chosenClient: {},
      isBudgetHidden: true,
      isBudgetVisible: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
