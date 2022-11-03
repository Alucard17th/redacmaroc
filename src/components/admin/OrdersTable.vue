<template>
  <div>
    <h2 class="py-3">All Orders</h2>

    <b-skeleton-table v-if="!allOrders.length" :rows="5" :columns="4" :table-props="{ bordered: true, striped: true }" animation="wave"></b-skeleton-table>

    <b-table v-else v-show="allOrders" :items="allOrders" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" sort-icon-left
      responsive="sm">

      <template #cell(actions)="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          <b-icon icon="info"></b-icon>
        </b-button>
        <b-button size="sm" @click="row.toggleDetails" class="mr-1">
          {{ row.detailsShowing ? 'Hide' : 'Show' }}
        </b-button>
        <b-button size="sm" @click="showMsgBoxTwo(row.item.id)" class="mr-1">
          <b-icon icon="trash"></b-icon>
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>

    </b-table>

    <div>
      Sorting By: <b>{{ sortBy }}</b>, Sort Direction:
      <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
    </div>

    <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <!-- <pre>{{ infoModal.content }}</pre> -->

      <b-form @reset="onReset" @submit.prevent="editOrder">

        <b-form-group id="input-group-1" label="Email address:" label-for="datepicker" description="">
          <label for="datepicker">Choose a date</label>
          <b-form-datepicker id="datepicker" v-model="infoEdit.deliveryDate" class="mb-2"></b-form-datepicker>
        </b-form-group>

        <b-form-group id="input-group-1" label="Email address:" label-for="orderName" description="">
          <b-form-input id="orderName" type="text" v-model="infoEdit.textTitle" required>
          </b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4">
          <b-row>
            <b-col cols="4" class="text-left"><label label-for="input-4">Nombre de mots</label></b-col>
            <b-col cols="8">
              <b-form-input id="input-4" v-model="infoEdit.wordsCount" type="number" placeholder="" required>
              </b-form-input>
            </b-col>
          </b-row>
        </b-form-group>

        <b-form-group id="input-group-5">
          <b-row>
            <b-col cols="4" class="text-left"><label label-for="input-5">Language</label></b-col>
            <b-col cols="8">
              <b-form-select :value="lang" :options="countries"></b-form-select>

              <b-form-select v-model="lang">
                <option v-for="country in countries" :key="country">
                  {{country}}
                </option>
              </b-form-select>
              <!-- <b-form-input id="input-5" v-model="infoEdit.language" :options="countries" required></b-form-input> -->
            </b-col>
          </b-row>
        </b-form-group>

        <b-form-group id="input-group-5">
          <b-row>
            <b-col cols="4" class="text-left"><label label-for="input-5">Mot clé principale</label></b-col>
            <b-col cols="8">
              <b-form-input id="input-5" v-model="infoEdit.mainKeyWord" required></b-form-input>
            </b-col>
          </b-row>
        </b-form-group>

        <b-form-group id="input-group-5">
          <b-row>
            <b-col cols="4" class="text-left"><label label-for="input-5">Qualité du texte</label></b-col>
            <b-col cols="8" class="text-left">
              <b-form-rating v-model="infoEdit.textQuality" variant="warning" class="mb-2 mr-3" inline></b-form-rating>
            </b-col>
          </b-row>
        </b-form-group>

        <b-form-group id="input-group-5">
          <b-row>
            <b-col cols="4" class="text-left"><label label-for="input-5">Consignes au rédacteur</label></b-col>
            <b-col cols="8">
              <b-form-textarea id="textarea" v-model="infoEdit.consigne" placeholder="" rows="3" max-rows="6">
              </b-form-textarea>
            </b-col>
          </b-row>
        </b-form-group>
        <!-- <div class="mb-1">
          <b-button @click="showMsgBoxTwo">msgBoxConfirm with options</b-button>
          Return value: {{ String(boxTwo) }}
        </div> -->
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>

      </b-form>
    </b-modal>
  </div>
</template>
  
<script>
const countries = require('i18n-iso-countries')
countries.registerLocale(require('i18n-iso-countries/langs/en.json'))
export default {
  data() {
    return {
      sortBy: 'age',
      sortDesc: false,
      fields: [
        { key: 'textTitle', sortable: true },
        { key: 'textQuality', sortable: true },
        { key: 'user_id', sortable: true },
        { key: 'deliveryDate', sortable: false },
        { key: 'actions', label: 'Actions' }
      ],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
      },
      infoEdit: {},
      lang: ''
    }
  },
  created() {
    this.$store.dispatch("getOrders")
  },
  mounted() {
    console.log('COUNTRY IS : ')
    console.log(countries.getName('Fr', "en"))
  },
  computed: {
    allOrders: function () {
      return this.$store.getters.getAllOrders
    },
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
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`
      this.infoModal.content = JSON.stringify(item, null, 2)
      this.infoEdit = item
      this.lang = countries.getName(this.infoEdit.language, "en")
      console.log("DATA A DATER : ")
      console.log(this.infoEdit.language)
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
    editOrder() {
      const order = {
        id: this.infoEdit.id,
        title: this.infoEdit.textTitle,
        quality: this.infoEdit.textQuality,
        deliveryDate: this.infoEdit.deliveryDate,
        consigne: this.infoEdit.consigne,
        mainKeyWord: this.infoEdit.mainKeyWord,
        wordsCount: this.infoEdit.wordsCount
      }
      this.$store.dispatch('editOrder', { item: order, vm: this, text: 'Order edited successfully' })
      
    },
    deleteOrder(item) {
      this.$store.dispatch('deleteOrder', item)
    },
    showMsgBoxTwo(item) {
      this.boxTwo = ''
      this.$bvModal.msgBoxConfirm('Please confirm that you want to delete this order.', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
        .then(value => {
          this.boxTwo = value
          this.boxTwo = item
          if (value) {
            this.deleteOrder({ item: item, vm: this, text: 'Order deleted successfully' })
          }
        })
        .catch(err => {
          // An error occurred
          console.log(err)
          alert('NO')
        })
    }
  }
}
</script>
  
<style>

</style>
  
  