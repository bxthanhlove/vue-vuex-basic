<template>
<div class="container">
  <h3>Add user</h3>
      <div class="form-group" :class="{'has-danger': invalid}">
        <input type="text" class="form-control" :class="{'is-invalid': invalid}" @keyup.enter="addUser()" v-model="user.name" placeholder="Enter your name">
        <div class="invalid-feedback">Please enter your name</div>
      </div>
      <p class="text-danger" v-if="exists">Name exist!</p>
      <p v-show="loading" class="buttonload">
        <i  class="fa fa-spinner fa-spin"></i> Loading
      </p>
      <button type="button" class="btn btn-primary" @click="addUser()">Add</button>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      user: { name: "" },
      invalid: false,
      exists: false,
      loading: false
    };
  },
  methods: {
    async addUser() {
      //reset
      this.invalid = false;
      this.exists = false;

      if (!this.user.name) {
        this.invalid = true;
        return false;
      }

      await this.$store.dispatch("checkExistUser", this.user.name).then(x => {
        if (x) {
          this.exists = true;
        }
      });

      if (this.exists) {
        return false;
      }

      var data = {
        id: this.$store.getters.getNextUserId,
        name: this.user.name,
        registered: false
      };

      this.loading = true;
      await this.$store.dispatch("addUser", data);
      this.loading = false;
      this.user.name = "";
    }
  }
};
</script>

<style scoped>
.buttonload {
    background-color: #4CAF50; /* Green background */
    border: none; /* Remove borders */
    color: white; /* White text */
    padding: 12px 16px; /* Some padding */
    font-size: 16px /* Set a font size */
}
</style>

