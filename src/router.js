
// Routes
export var router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Hello
  },
  {
    path: '/users',
    component: Users,
    meta: {
      requiresAuth: true,
      requiresAdmin: true
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      checksAuth: true
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      checksAuth: true
    }
  },
  {
    path: '/notes',
    component: Notes
  },
  {
    path: '/verify',
    component: Verify
  },
  {
    path: '/verify/:id/:token',
    component: Verify
  },
  {
    name: 'noteSingle',
    path: '/notes/:id',
    component: NoteSingle
  }
  ]
})

// Protect authenticated routes with Route Meta tags.
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.user.authenticated) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  }
  if (to.matched.some(record => record.meta.requiresAdmin)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (auth.user.role == 'admin') {
      next()
    } else {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
  if (to.matched.some(record => record.meta.checksAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (auth.user.authenticated) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})
