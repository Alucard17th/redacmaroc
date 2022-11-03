<template>
  <div>
    {{currentUser}}
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-row>
        <b-col cols="4">
          <div class="d-flex justify-content-center">
            <b-img class="mb-3 user-avatar" src="https://picsum.photos/1024/400/?image=41" alt="Responsive image">
            </b-img>
          </div>
          <b-form-file v-model="userAvatar" :state="Boolean(userAvatar)" placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."></b-form-file>
        </b-col>

        <b-col cols="8">
          <b-form-group id="input-group-1" label="Email address:" label-for="input-1"
            description="We'll never share your email with anyone else.">
            <b-form-input id="input-1" v-model="currentUser.email" type="email" placeholder="Enter email" required>
            </b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input id="input-2" v-model="currentUser.name" placeholder="Enter name" required></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Food:" label-for="input-3">
            <b-form-select id="input-3" v-model="form.food" :options="foods" required></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-3" label="Description:" label-for="input-3">
            <b-form-textarea id="textarea" v-model="form.description" placeholder="Enter something..." rows="3"
              max-rows="6">
            </b-form-textarea>
          </b-form-group>

          <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group v-model="form.checked" id="checkboxes-4" :aria-describedby="ariaDescribedby">
              <b-form-checkbox value="me">Check me out</b-form-checkbox>
              <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
        </b-col>
      </b-row>

      <b-button type="submit" variant="primary" @click="editUser">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>

</template>
  
<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        description: '',
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
      userAvatar: null,
    }
  },
  computed: {
    currentUser: function () {
      return this.$store.getters.getCurrentUser
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    editUser() {
      console.log("THE USER EDITED : ")
      console.log(this.currentUser)
      this.$store.dispatch("editUser", this.currentUser)
    }
  }
}
</script>
  
<style>
.user-avatar {
  width: 150px;
  height: 150px !important;
  border-radius: 50%;
  vertical-align: middle;
}
</style>