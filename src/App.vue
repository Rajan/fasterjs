<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Axios from 'axios'
const urlPrefix = process.env.NODE_ENV === 'production' ? '/api/' : `http://${window.location.hostname}:3000`
export default {
  name: 'app',
  data () {
    return {
      budgets: [],
      clients: []
    }
  },
  created: function () {
    this.getBudgets()
    this.getClients()
  },
  methods: {
    getBudgets () {
      Axios.get(`${urlPrefix}/api/budgets`).then((res) => {
        this.budgets = []
        for (let i in res.data) {
          let budgets = this.budgets
          budgets.push(res.data[i])
        }
      })
    },
    getClients: function () {
      Axios.get(`${urlPrefix}/api/clients`).then((res) => {
        for (let i in res.data) {
          let clients = this.clients
          clients.push(res.data[i])
        }
      })
    },
    getBudgetsFromStatus: function (link) {
      Axios.get(`${urlPrefix}/api/budgets/status/` + link.value).then((res) => {
        this.budgets = []
        for (let i in res.data) {
          let budgets = this.budgets
          budgets.push(res.data[i])
        }

        if (link.value === 'all') {
          this.getBudgets()
        }
      })
    }
  }
}
</script>

<style lang="scss">

</style>
