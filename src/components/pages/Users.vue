<template lang="html">
  <div class="container">
    <h2 class="title is-2">Users</h2>
    <hr>
    <table class="table">
      <thead class="thead thead-inverse">
        <tr>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>ID</th>
          <th>Verified</th>
        </tr>
      </thead>
      <tbody v-for="user in users">
        <tr>
          <td>{{ user.email }}</td>
          <td>{{ user.firstname }}</td>
          <td>{{ user.lastname }}</td>
          <td>{{ user.id }}</td>
          <td>{{ user.verified_email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import auth from '../../auth.js'
export default {
  data () {
    return {
      users: []
    }
  },
  created () {
    this.$http.get('users').then(response => {
      this.users = response.data;
    });
  },
  methods: {
    remove (id) {
      this.$http.delete('auth/users/' + id).then(response => {
        if (response.status == 200) {
           location.reload(true);
        }
      })
    },
  }
}
</script>

<style lang="css">
</style>
