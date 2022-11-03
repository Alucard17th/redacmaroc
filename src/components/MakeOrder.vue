<template>

  <div class="">
    <!-- <b-button id="show-btn" @click="showModal" variant="link">Devenir rédacteur</b-button>
      <b-button id="toggle-btn" @click="toggleBuyerModal" variant="primary" class="ml-3">Achetez du texte</b-button> -->
    <div class="d-flex align-items-center justify-content-center h-100 my-5">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <div v-if="currentStep == 1">
          <div v-for="order in form" :key="order.deliveryDate">
            <b-form-group id="input-group-1">
              <b-row class="justify-content-center align-items-center">
                <b-col cols="4" class="text-left"><label label-for="input-1">Identifiant de la commande</label></b-col>
                <b-col cols="8">
                  <b-form-input id="input-1" v-model="order.orderId" type="text" placeholder="" required></b-form-input>
                </b-col>
              </b-row>
            </b-form-group>

            <b-form-group id="input-group-2">
              <b-row>
                <b-col cols="4" class="text-left"><label label-for="input-2">Date de livraison</label></b-col>
                <b-col cols="8">
                  <b-form-input id="input-2" v-model="order.deliveryDate" type="date" placeholder="" required>
                  </b-form-input>
                </b-col>
              </b-row>

            </b-form-group>

            <b-form-group id="input-group-3">
              <b-row>
                <b-col cols="4" class="text-left"><label label-for="input-3">Titre du texte:</label></b-col>
                <b-col cols="8">
                  <b-form-input id="input-3" v-model="order.textTitle" type="text" placeholder="" required>
                  </b-form-input>
                </b-col>
              </b-row>

            </b-form-group>

            <b-form-group id="input-group-4">
              <b-row>
                <b-col cols="4" class="text-left"><label label-for="input-4">Nombre de mots</label></b-col>
                <b-col cols="8">
                  <b-form-input id="input-4" v-model="order.wordsCount" type="number" placeholder="" required>
                  </b-form-input>
                </b-col>
              </b-row>
            </b-form-group>

            <b-form-group id="input-group-5">
              <b-row>
                <b-col cols="4" class="text-left"><label label-for="input-5">Language</label></b-col>
                <b-col cols="8">
                  <b-form-select v-model="order.language" :options="countries" required></b-form-select>
                </b-col>
              </b-row>
            </b-form-group>

            <b-form-group id="input-group-5">
              <b-row>
                <b-col cols="4" class="text-left"><label label-for="input-5">Mot clé principale</label></b-col>
                <b-col cols="8">
                  <b-form-input id="input-5" v-model="order.mainKeyWord" :options="countries" required></b-form-input>
                </b-col>
              </b-row>
            </b-form-group>

            <b-form-group id="input-group-5">
              <b-row class="mb-3" v-for="secondaryWord in order.secondaryKeyWord" :key="secondaryWord">
                <b-col cols="4" class="text-left"><label label-for="input-5">Mots clés secondaires</label></b-col>
                <b-col cols="2">
                  <b-form-input id="input-5" v-model="secondaryWord.key" :options="countries" required></b-form-input>
                </b-col>
                <b-col cols="2"><label label-for="input-5">Nombre d'apparition</label></b-col>
                <b-col cols="2">
                  <b-form-input id="input-5" v-model="secondaryWord.from" type="number" required></b-form-input>
                </b-col>
                <b-col cols="2">
                  <b-form-input id="input-5" v-model="secondaryWord.to" type="number" required></b-form-input>
                </b-col>
              </b-row>
              <b-button variant="primary" class="mr-3" @click="addNewSecondaryKeyword(order)">+ Add</b-button>
            </b-form-group>

            <b-form-group id="input-group-5">
              <b-row>
                <b-col cols="4" class="text-left"><label label-for="input-5">Qualité du texte</label></b-col>
                <b-col cols="8" class="text-left">
                  <b-form-rating v-model="order.textQuality" variant="warning" class="mb-2 mr-3" inline></b-form-rating>
                </b-col>
              </b-row>
            </b-form-group>

            <b-form-group id="input-group-5">
              <b-row>
                <b-col cols="4" class="text-left"><label label-for="input-5">Consignes au rédacteur</label></b-col>
                <b-col cols="8">
                  <b-form-textarea id="textarea" v-model="order.consigne" placeholder="" rows="3" max-rows="6">
                  </b-form-textarea>
                </b-col>
              </b-row>
            </b-form-group>

            <!-- <b-form-group id="input-group-6" v-slot="{ ariaDescribedby }" class="text-left">
              <b-form-checkbox-group v-model="order.checked" id="checkboxes-6" :aria-describedby="ariaDescribedby">
                <b-link href="#">Read ...</b-link>
              </b-form-checkbox-group>
              <b-form-checkbox-group v-model="order.checked" id="checkboxes-6" :aria-describedby="ariaDescribedby">
                <b-form-checkbox value="me">Check me out</b-form-checkbox>
              </b-form-checkbox-group>
              <b-form-checkbox-group v-model="order.checked" id="checkboxes-7" :aria-describedby="ariaDescribedby">
                <b-form-checkbox value="that">Check that out</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group> -->
          </div>
        </div>

        <div v-if="currentStep == 2">
          <h1>Order Summary</h1>
          <b-card class="mt-3" header="Form Data Result">
            <!-- <pre class="m-0">{{ form }}</pre> -->
            <div v-for="(order, index) in form" :key="index">
              <div class="mb-3">
                <b-button @click="toggleVisible(index)">Submit</b-button>
                <p>Order ID : {{order.orderId}} - Text title : {{order.textTitle}} - Text quality : {{order.textQuality}} - Words count : {{order.wordsCount}}</p>
              </div>

              <div v-if="toggleV === index">
                <b-card title="Collapsible card">

                  <b-row>
                    <b-col cols="4">Identifiant de la commande</b-col>
                    <b-col cols="8"><p>{{order.orderId}}</p></b-col>

                    <b-col cols="4">Date de livraison</b-col>
                    <b-col cols="8"><p>{{order.deliveryDate}}</p></b-col>

                    <b-col cols="4">Titre du texte</b-col>
                    <b-col cols="8"><p>{{order.textTitle}}</p></b-col>

                    <b-col cols="4">Nombre de mots</b-col>
                    <b-col cols="8"><p>{{order.wordsCount}}</p></b-col>

                    <b-col cols="4">Language</b-col>
                    <b-col cols="8"><p>{{order.language}}</p></b-col>

                    <b-col cols="4">Mot clé principale</b-col>
                    <b-col cols="8"><p>{{order.mainKeyWord}}</p></b-col>

                    <b-col cols="4">Mots clés secondaires</b-col>
                    <b-col cols="8"><p v-for="secondKeyWord in order.secondaryKeyWord" :key="secondKeyWord">{{secondKeyWord.key}}</p></b-col>

                    <b-col cols="4">Qualité du texte</b-col>
                    <b-col cols="8"><p>{{order.textQuality}}</p></b-col>

                    <b-col cols="4">Consignes au rédacteur</b-col>
                    <b-col cols="8"><p>{{order.consigne}}</p></b-col>
                  </b-row>

                </b-card>
              </div>
            </div>
          </b-card>
        </div>

        <b-button v-if="currentStep == 1" variant="primary" class="mr-3" @click="createNewOrder">New Order</b-button>
        <b-button v-if="currentStep == 1" variant="primary" class="mr-3" @click="goToStep(2)">Next</b-button>
        <b-button v-if="currentStep == 2" variant="primary" class="mr-3" @click="goToStep(1)">Next</b-button>
        <b-button v-if="currentStep ==2" type="submit" variant="primary" class="mr-3" @click="makeOrder">Submit
        </b-button>
        <b-button v-if="currentStep == 1" type="reset" variant="danger">Reset</b-button>

      </b-form>

      <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card> -->
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
      form: [
        {
          orderId: '',
          deliveryDate: '',
          textTitle: '',
          wordsCount: '',
          language: '',
          mainKeyWord: '',
          secondaryKeyWord: [{ key: '', from: '', to: '' }, { key: '', from: '', to: '' }],
          textQuality: 2,
          consigne: ''
        }
      ],
      count: 1,
      allcountries: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
      showBuyer: true,
      currentStep: 1,
      visible: true,
      toggleV:null
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
      // alert(JSON.stringify(this.form))
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
    createNewOrder() {
      this.form.push({
        orderId: '',
        deliveryDate: '',
        textTitle: '',
        wordsCount: '',
        language: '',
        mainKeyWord: '',
        secondaryKeyWord: [{ key: '', from: '', to: '' }],
        textQuality: 2,
        consigne: '',
        toggleV:null
      });
      this.count++;
      console.log(this.count)
    },
    makeOrder() {
      console.log(this.form)
      this.$store.dispatch('makeOrder', { order: this.form })
    },
    addNewSecondaryKeyword(currentForm) {
      console.log(currentForm)
      currentForm.secondaryKeyWord.push({ key: '', from: '', to: '' })
    },
    goToStep(step) {
      this.currentStep = step;
    },
    toggleVisible(idx){
      this.toggleV === idx ? (this.toggleV = null) : (this.toggleV = idx);
      console.log(idx)
      console.log(this.toggleV)
    }


  }

}
</script>
  
<style>

</style>