<template lang="html">
  <div class="container">
    <br>
    <form v-on:submit.prevent="edit">
      <div v-show="error" class="alert alert-danger" role="alert">
        <strong>Oh snap!</strong> {{ error }}
      </div>
      <h3>ID: <small>{{note.id}}</small></h3>
      <div class="form-group">
        <input type="text" class="form-control" v-model="note.title" id="text">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-model="note.text" id="text">
      </div>
      <button type="submit" class="btn btn-primary">Edit Item</button>
    </form>
    <hr>
    <div class="alert alert-danger" role="alert">
      <strong>Delete Note</strong>
    </div>
    <button v-on:click="remove(note.id)" type="button" class="btn btn-block btn-outline-danger">Yes, I want to delete this note forever.</button>
    <hr>
  </div>
</template>

<script>

export default {
  data () {
    return {
      error: null,
      note: [],
    };
  },
  created () {
    this.$http.get('notes/' + this.$route.params.id).then(response => {
      this.note = response.data[0];
    });
  },
  computed: {},
  methods: {
    remove (id) {
      this.$http.delete('notes/' + id).then(response => {
        if (response.status == 200) {
          this.router.push('/notes')
        }
      })
    },
    edit() {
      this.$http.put('notes/' + this.note.id, {
        title: this.note.title,
        text: this.note.text,
      })
      .then(function (response) {
        if (response.status == 200) {
           location.reload(true);
        }
      })
      .catch(function (error) {
        this.error = error;
      });
    }
  },
  components: {}
};
</script>

<style lang="css">
</style>
