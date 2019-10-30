<template>
  <v-container>
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        <ul v-for="user in users" :key="user.id">
          <li>{{ user.name }}</li>
        </ul>
        <v-row justify="center" no-gutters>
          <v-col md="4">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                :counter="20"
                label="Nama"
                required
              />
              <v-text-field
                v-model="age"
                label="Age"
                type="number"
                min="0"
                required
              />
              <v-text-field
                v-model="username"
                :counter="20"
                label="Username"
                required
              />
              <v-text-field
                v-model="email"
                type="email"
                :counter="20"
                label="Email"
                required
              />
              <v-btn color="primary" class="mr-4" @click="submit">submit</v-btn>
              <v-btn color="warning" @click="reset">reset</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script charset="utf-8">
import { mapActions } from 'vuex'

export default {
  data: () => ({
    loading: false,
    title: 'Dealer',
    name: '',
    age: 0,
    username: '',
    email: '',
    users: []
  }),

  created() {
    this.fetchUsers()
  },

  methods: {
    ...mapActions('dealer', ['getUsers', 'createUser']),
    async fetchUsers() {
      const temp = await this.getUsers()
      this.users = [...temp]
    },
    async submit() {
      const user = {
        name: this.name,
        username: this.username,
        email: this.email
      }
      const result = await this.createUser(user)
      console.log(result)
    },
    reset() {
      this.$refs.form.reset()
    }
  }
}
</script>
