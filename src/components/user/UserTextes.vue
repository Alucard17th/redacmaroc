<template>
  <div>
    <h2>All Orders</h2>
    <b-table :items="allOrders" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" sort-icon-left
      responsive="sm">

      <template #cell(actions)="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          <b-icon icon="info"></b-icon>
        </b-button>
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }}
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

    <button @click="getallOrders">get TESTS</button>

    <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
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
      }
    }
  },
  created() {
    this.$store.dispatch("getOrders")
  },
  computed: {
    allOrders: function () {
      return this.$store.getters.getAllOrders
    }
  },
  methods: {
    getallOrders() {
      this.$store.dispatch("getOrders")
    },
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`
      this.infoModal.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
  }
}
</script>
  
<style>

</style>
  
  