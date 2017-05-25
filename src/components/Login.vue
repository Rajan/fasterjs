<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <span class="anchor" id="formLogin"></span>

            <!-- form card login -->
            <div class="card card-outline-secondary">
              <div class="card-header">
                <h3 class="mb-0">Login</h3>
              </div>
              <div class="card-block">
                <form class="form" role="form" autocomplete="off" id="formLogin">
                  <div class="form-group">
                    <label for="uname1">Username</label>
                    <input type="text" class="form-control" name="uname1" id="uname1" required="">
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" id="pwd1" required="" autocomplete="new-password">
                  </div>
                  <div class="form-check small">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input"> <span>Remember me on this computer</span>
                    </label>
                  </div>
                  <button type="button" class="btn btn-success btn-lg float-right">Login</button>
                </form>
              </div>
              <!--/card-block-->
            </div>
            <!-- /form card login -->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Axios from 'axios'
// const urlPrefix = process.env.NODE_ENV === 'production' ? '/api/' : `http://${window.location.hostname}:3000`
export default {
  name: 'Login',
  props: [],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
