<template>

  <div class="">
    <!-- <b-button id="show-btn" @click="showModal" variant="link">Devenir rédacteur</b-button>
    <b-button id="toggle-btn" @click="toggleBuyerModal" variant="primary" class="ml-3">Achetez du texte</b-button> -->
      
    <b-modal :visible="modal1Visible" @hide="onHide" id="simple" ref="my-modal" hide-footer hide-header-close title="Client registration" size="xl"> 
      <div class="d-block text-center">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">

          <b-form-group id="input-group-1">
            <b-row>
              <b-col cols="4" class="text-left"><label label-for="input-1">Email address:</label></b-col>
              <b-col cols="8" ><b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input></b-col>
            </b-row>
          </b-form-group>

          <b-form-group id="input-group-2">
            <b-row>
              <b-col cols="4" class="text-left"><label label-for="input-2">Your Name:</label></b-col>
              <b-col cols="8" ><b-form-input id="input-2" v-model="form.name" placeholder="Enter login" required></b-form-input></b-col>
            </b-row>
            
          </b-form-group>

          <b-form-group id="input-group-3">
            <b-row>
              <b-col cols="4" class="text-left"><label label-for="input-3">Password:</label></b-col>
              <b-col cols="8" ><b-form-input id="input-3" v-model="form.password" placeholder="Enter password" type="password" required></b-form-input></b-col>
            </b-row>
            
          </b-form-group>

          <b-form-group id="input-group-4" >
            <b-row>
              <b-col cols="4" class="text-left"><label label-for="input-4">Confirm password:</label></b-col>
              <b-col cols="8" ><b-form-input id="input-4" v-model="form.cnfrmpassword" placeholder="Confirm password" type="password" required></b-form-input></b-col>
            </b-row>
          </b-form-group>

          <b-form-group id="input-group-5">
            <b-row>
              <b-col cols="4" class="text-left"><label label-for="input-5">Confirm password:</label></b-col>
              <b-col cols="8" ><b-form-select id="input-5" v-model="form.country" :options="countries" required></b-form-select></b-col>
            </b-row>
          </b-form-group>

          <b-form-group id="input-group-6" v-slot="{ ariaDescribedby }" class="text-left">
            <b-form-checkbox-group v-model="form.checked" id="checkboxes-6" :aria-describedby="ariaDescribedby">
              <b-link href="#">Read ...</b-link>
            </b-form-checkbox-group>
            <b-form-checkbox-group v-model="form.checked" id="checkboxes-6" :aria-describedby="ariaDescribedby">
              <b-form-checkbox value="me">Check me out</b-form-checkbox>
            </b-form-checkbox-group>
            <b-form-checkbox-group v-model="form.checked" id="checkboxes-7" :aria-describedby="ariaDescribedby">
              <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
          <input type="hidden" v-model="form.role" value="writer">
          <b-button type="submit" variant="primary" class="mr-3" @click="registerCustomer">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>

        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal('simple')">Close Me</b-button>
    </b-modal>

    <b-modal :visible="modal2Visible" @hide="onHide" id="simple2" ref="my-buyer-modal" hide-footer hide-header-close title="Rédacteur registration" size="xl"> 
      <div class="d-block text-center">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">

          <b-form-group id="input-group-1">
            <b-row>
              <b-col cols="4" class="text-left"><label label-for="input-1">Email address:</label></b-col>
              <b-col cols="8" ><b-form-input id="input-1" v-model="sform.email" type="email" placeholder="Enter email" required></b-form-input></b-col>
            </b-row>
          </b-form-group>

          <b-form-group id="input-group-2">
            <b-row>
              <b-col cols="4" class="text-left"><label label-for="input-2">Your Name:</label></b-col>
              <b-col cols="8" ><b-form-input id="input-2" v-model="sform.name" placeholder="Enter login" required></b-form-input></b-col>
            </b-row>
            
          </b-form-group>

          <b-form-group id="input-group-3">
            <b-row>
              <b-col cols="4" class="text-left"><label label-for="input-3">Password:</label></b-col>
              <b-col cols="8" ><b-form-input id="input-3" v-model="sform.password" placeholder="Enter password" type="password" required></b-form-input></b-col>
            </b-row>
            
          </b-form-group>

          <b-form-group id="input-group-4" >
            <b-row>
              <b-col cols="4" class="text-left"><label label-for="input-4">Confirm password:</label></b-col>
              <b-col cols="8" ><b-form-input id="input-4" v-model="sform.cnfrmpassword" placeholder="Confirm password" type="password" required></b-form-input></b-col>
            </b-row>
          </b-form-group>

          <b-form-group id="input-group-5">
            <b-row>
              <b-col cols="4" class="text-left"><label label-for="input-5">Confirm password:</label></b-col>
              <b-col cols="8" ><b-form-select id="input-5" v-model="sform.country" :options="countries" required></b-form-select></b-col>
            </b-row>
          </b-form-group>

          <b-form-group id="input-group-6" v-slot="{ ariaDescribedby }" class="text-left">
            <b-form-checkbox-group v-model="sform.checked" id="checkboxes-6" :aria-describedby="ariaDescribedby">
              <b-link href="#">Read ...</b-link>
            </b-form-checkbox-group>
            <b-form-checkbox-group v-model="sform.checked" id="checkboxes-6" :aria-describedby="ariaDescribedby">
              <b-form-checkbox value="me">Check me out</b-form-checkbox>
            </b-form-checkbox-group>
            <b-form-checkbox-group v-model="sform.checked" id="checkboxes-7" :aria-describedby="ariaDescribedby">
              <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <input type="hidden" v-model="form.role" value="customer">
          <b-button type="submit" variant="primary" class="mr-3" @click="registerWriter">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>

        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal('simple2')">Close Me</b-button>
    </b-modal>

    <b-modal :visible="modal3Visible" @hide="onHide" id="simple3" ref="my-psreset-modal" hide-footer hide-header-close title="Rédacteur registration" size="xl"> 
      <div class="d-block text-center">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <h1>Password Reset...</h1>
          <b-form-group id="input-group-1">
            <b-row>
              <b-col cols="4" class="text-left"><label label-for="input-1">Email address:</label></b-col>
              <b-col cols="8" ><b-form-input id="input-1" v-model="pform.email" type="email" placeholder="Enter email" required></b-form-input></b-col>
            </b-row>
          </b-form-group>

          <b-button type="submit" variant="primary" class="mr-3" @click="resetPassword">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>

        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ pform }}</pre>
        </b-card>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal('simple3')">Close Me</b-button>
    </b-modal>

  </div>

</template>

<script>
const countries = require('i18n-iso-countries')
countries.registerLocale(require('i18n-iso-countries/langs/en.json'))
// import firebase from "firebase/app";
// import { db } from '../main';
export default {
  name: 'RegisterModal',

  components: {

  },
  data() {
    return {
      form: {
        email: '',
        name: '',
        password:'',
        cnfrmpassword:'',
        country: null,
        checked: [],
        role:'customer'
      },
      sform:{
        email: '',
        name: '',
        password:'',
        cnfrmpassword:'',
        country: null,
        checked: [],
        role:'redactor'
      },
      pform:{
        email: '',
      },
      allcountries: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
      showBuyer: true
    }
  },
  // beforeMount() {
  //   firebase.auth().onAuthStateChanged((user)=>{
  //     if(!user){
  //       this.$route.replace('/login')
  //     }else if(this.$route.path =='/login' || this.$route.path =='/register'){
  //       this.$route.replace('/')
  //     }
  //   })
  // },
  computed: {
    modal1Visible() {
      return this.$store.getters.active === 'simple';
    },
    modal2Visible() {
      return this.$store.getters.active === 'simple2';
    },
    modal3Visible() {
      return this.$store.getters.active === 'simple3';
    },
    countries () {
      const list = countries.getNames('en', { select: 'official' })
      return list
    }
  },
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal(name) {
      this.$store.dispatch("close", name)
      // this.$refs['my-modal'].hide()
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
    showBuyerModal() {
      this.$refs['my-buyer-modal'].show()
    },
    hideBuyerModal() {
      this.$refs['my-buyer-modal'].hide()
    },
    toggleBuyerModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-buyer-modal'].toggle('#toggle-btn')
    },
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.country = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    onHide(evt) {
      if(evt.trigger === "backdrop"){
        evt.preventDefault();
        this.handleBackdrop(evt.target.id);
        console.log(evt)
      }
    },
    handleBackdrop(name) {
      this.$store.dispatch("close", name)
    },
    registerCustomer(){
      this.$store.dispatch('registerUser', {email : this.form.email, password : this.form.password, role:this.form.role})
    },
    registerWriter(){
      this.$store.dispatch('registerUser', {email : this.sform.email, password : this.sform.password, role:this.sform.role})
    },
    resetPassword(){
      this.$store.dispatch('resetPassword', this.pform.email)
    }
    
  }

}
</script>

<style>
</style>