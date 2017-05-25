export default {
  user: {
    authenticated: false,
    role: null
  },
  login (context, creds, redirect) {
    var self = this
    context.$http.post('auth/login', {
      email: creds.email,
      password: creds.password
    })
    .then(response => {
      localStorage.setItem('id_token', response.data.token)
      localStorage.setItem('user_role', response.data.role)
      self.user = { role: response.data.role }
      self.user.authenticated = true
      location.reload()
      if (self.user.role === 'regular') {
        context.$router.push('/')
      } else if (self.user.role === 'admin') {
        context.$router.push('/users')
      }
    })
		.catch(function (error) {
  console.log(error)
  context.error = error.body.error
})
  },
  signup (context, creds, redirect) {
    context.$http.post('auth/register', {
      email: creds.email,
      firstName: creds.firstName,
      lastName: creds.lastName,
      password: creds.password
    })
		.then(response => {
  if (response.data.success === true) {
    context.$router.push('/verify')
  };
})
		.catch(function (error) {
  context.error = error.body.data
})
  },
  forgot (context, creds, redirect) {
    context.$http.post('auth/reset', {
      email: creds.email
    })
		.then(response => {
  if (redirect) {
    this.$router.push('/')
  };
})
		.catch(function (error) {
  context.error = error.body.error
})
  },
  reset (context, creds, redirect) {
    context.$http.post('auth/reset/' + creds.token + '', {
      password: creds.password
    })
		.then(response => {
  if (redirect) {
    this.$router.push('/login')
  };
})
		.catch(function (error) {
  if (error) {
    context.error = error.body.error
  }
})
  },
  logout (context) {
    localStorage.removeItem('id_token')
    this.user.authenticated = false
    context.$router.push('/login')
  },
  checkAuth () {
    var jwt = localStorage.getItem('id_token')
    var role = localStorage.getItem('user_role')
    if (jwt) {
      this.user.authenticated = true
      this.user.role = role
    } else {
      this.user.authenticated = false
    }
  },
  getAuthHeader () {
    return {
      'Authorization': localStorage.getItem('id_token')
    }
  }
}
