<template>
  <div>
    <h2 class="py-3">All Tests</h2>

    <b-skeleton-table v-if="!allTests.length" :rows="5" :columns="4" :table-props="{ bordered: true, striped: true }" animation="wave"></b-skeleton-table>
    
    <b-table v-else :items="allTests" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" sort-icon-left
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

      <template #cell(testStatu)="row">
        <b-badge v-if="row.item.testStatu==='Pending'" variant="warning">{{row.item.testStatu}}</b-badge>
        <b-badge v-else-if="row.item.testStatu==='Done'" variant="success">{{row.item.testStatu}}</b-badge>
        <b-badge v-else-if="row.item.testStatu==='Cancelled'" variant="secondary">{{row.item.testStatu}}</b-badge>
        <b-badge v-else-if="row.item.testStatu==='Error'" variant="danger">{{row.item.testStatu}}</b-badge>
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
      <b-form @reset="onReset" @submit.prevent="editTest">
        <b-form-group id="input-group-5">
          <b-row>
            <b-col cols="4" class="text-left"><label label-for="input-5">Test Statu</label></b-col>
            <b-col cols="8">
              <b-form-select :value="infoEdit.testStatu" :options="testStatu" @change="handleChange"></b-form-select>
            </b-col>
          </b-row>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-modal>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      sortBy: 'age',
      sortDesc: false,
      fields: [
        { key: 'testContent', sortable: true },

        { key: 'user_id', sortable: true },
        { key: 'testStatu', sortable: false },
        { key: 'actions', label: 'Actions' }
      ],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
      },
      infoEdit: {},
      testStatu: ['Pending', 'Done', 'Rejected', 'Cancelled', 'Error'],
      newStatu:''
    }
  },
  created() {
    this.$store.dispatch("getTests")
  },
  computed: {
    allTests: function () {
      return this.$store.getters.getAllTests
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
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
    editTest() {
      const test = {
        id:this.infoEdit.id,
        statu: this.newStatu,
      }
      this.$store.dispatch('editTest', { item: test, vm: this, text: 'Test edited successfully' })
    },
    handleChange(e) {
      this.newStatu = e
    },
    deleteTest(item) {
      this.$store.dispatch('deleteTest', item)
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
            if(value){
              this.deleteTest({item: item, vm : this, text : 'Test deleted successfully'})
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
  
  