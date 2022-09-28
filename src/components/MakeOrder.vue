<template>

  <div class="">
    <!-- <b-button id="show-btn" @click="showModal" variant="link">Devenir rédacteur</b-button>
      <b-button id="toggle-btn" @click="toggleBuyerModal" variant="primary" class="ml-3">Achetez du texte</b-button> -->
    <div class="d-flex align-items-center justify-content-center h-100 my-5">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">

        <b-form-group id="input-group-1">
          <b-row class="justify-content-center align-items-center">
            <b-col cols="4" class="text-left"><label label-for="input-1">Identifiant de la commande</label></b-col>
            <b-col cols="8">
              <b-form-input id="input-1" v-model="form.orderId" type="text" placeholder="" required></b-form-input>
            </b-col>
          </b-row>
        </b-form-group>

        <b-form-group id="input-group-2">
          <b-row>
            <b-col cols="4" class="text-left"><label label-for="input-2">Date de livraison</label></b-col>
            <b-col cols="8">
              <b-form-input id="input-2" v-model="form.deliveryDate" type="date" placeholder="" required></b-form-input>
            </b-col>
          </b-row>

        </b-form-group>

        <b-form-group id="input-group-3">
          <b-row>
            <b-col cols="4" class="text-left"><label label-for="input-3">Titre du texte:</label></b-col>
            <b-col cols="8">
              <b-form-input id="input-3" v-model="form.textTitle" type="text" placeholder="" required></b-form-input>
            </b-col>
          </b-row>

        </b-form-group>

        <b-form-group id="input-group-4">
          <b-row>
            <b-col cols="4" class="text-left"><label label-for="input-4">Nombre des mots</label></b-col>
            <b-col cols="8">
              <b-form-input id="input-4" v-model="form.wordsCount" type="number" placeholder="" required></b-form-input>
            </b-col>
          </b-row>
        </b-form-group>

        <b-form-group id="input-group-5">
          <b-row>
            <b-col cols="4" class="text-left"><label label-for="input-5">Language</label></b-col>
            <b-col cols="8">
              <b-form-input id="input-5" v-model="form.language" :options="countries" required></b-form-input>
            </b-col>
          </b-row>
        </b-form-group>

        <b-form-group id="input-group-5">
          <b-row>
            <b-col cols="4" class="text-left"><label label-for="input-5">Mot clé principale</label></b-col>
            <b-col cols="8">
              <b-form-input id="input-5" v-model="form.mainKeyWord" :options="countries" required></b-form-input>
            </b-col>
          </b-row>
        </b-form-group>

        <b-form-group id="input-group-5">
          <b-row>
            <b-col cols="4" class="text-left"><label label-for="input-5">Mots clés secondaires</label></b-col>
            <b-col cols="2">
              <b-form-input id="input-5" v-model="form.secondaryKeyWord" :options="countries" required></b-form-input>
            </b-col>
            <b-col cols="2"><label label-for="input-5">Nombre d'apparition</label></b-col>
            <b-col cols="2">
              <b-form-input id="input-5" type="number" required></b-form-input>
            </b-col>
            <b-col cols="2">
              <b-form-input id="input-5" type="number" required></b-form-input>
            </b-col>
          </b-row>
        </b-form-group>

        <b-form-group id="input-group-5">
          <b-row>
            <b-col cols="4" class="text-left"><label label-for="input-5">Qualité du texte</label></b-col>
            <b-col cols="8" class="text-left">
              <b-form-rating v-model="form.textQuality" variant="warning" class="mb-2 mr-3" inline></b-form-rating>
            </b-col>
          </b-row>
        </b-form-group>

        <b-form-group id="input-group-5">
          <b-row>
            <b-col cols="4" class="text-left"><label label-for="input-5">Consignes au rédacteur</label></b-col>
            <b-col cols="8">
              <b-form-textarea id="textarea" v-model="form.consigne" placeholder="" rows="3" max-rows="6">
              </b-form-textarea>
            </b-col>
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
        <b-button type="submit" variant="primary" class="mr-3" @click="makeOrder">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>

      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </div>

</template>
  
<script>
const countries = require('i18n-iso-countries')
countries.registerLocale(require('i18n-iso-countries/langs/en.json'))
export default {
  name: 'RegisterModal',

  components: {

  },
  data() {
    return {
      form: {
        orderId: '',
        deliveryDate: '',
        textTitle: '',
        wordsCount: '',
        language: '',
        mainKeyWord: '',
        secondaryKeyWord: '',
        textQuality: 2,
        consigne:''
      },

      allcountries: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
      showBuyer: true
    }
  },

  computed: {

    countries() {
      const list = countries.getNames('en', { select: 'official' })
      return list
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
      this.form.country = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    makeOrder() {
      this.$store.dispatch('makeOrder', { order: this.form})
    },


  }

}
</script>
  
<style>

</style>