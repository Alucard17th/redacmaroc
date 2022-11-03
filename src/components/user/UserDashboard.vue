<template>
  <div>

    <!-- ETAPE A SUIVRE -->
    <div class="mb-5">
      <h3>Pour Bien Commencer</h3>
      <b-card-group deck>
        <b-card header="featured" header-tag="header" footer="Card Footer" footer-tag="footer" title="Title">
          <b-card-text>Header and footers using props.</b-card-text>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>

        <b-card title="Title" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0">Header Slot</h6>
          </template>
          <b-card-text>Header and footers using slots.</b-card-text>
          <b-button href="#" variant="primary">Go somewhere</b-button>
          <template #footer>
            <em>Footer Slot</em>
          </template>
        </b-card>

        <b-card title="Title" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0">Header Slot</h6>
          </template>
          <b-card-text>Header and footers using slots.</b-card-text>
          <b-button href="#" variant="primary">Go somewhere</b-button>
          <template #footer>
            <em>Footer Slot</em>
          </template>
        </b-card>
      </b-card-group>
    </div>
    <hr/>
    <!-- LES DERNIERES REDACTION -->
    <div class="mb-3">
      <h3>Texte Livrés</h3>
      <b-table :items="items" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" sort-icon-left
        responsive="sm"></b-table>

      <div>
        Sorting By: <b>{{ sortBy }}</b>, Sort Direction:
        <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
      </div>
    </div>

    <!-- COMPETENCES UTILISATEUR -->
    <div class="mb-3">
      <h3>Mes Compétences</h3>
    </div>

  </div>

</template>
  
<script>
export default {
  data() {
    return {
      sortBy: 'age',
      sortDesc: false,
      fields: [
        { key: 'last_name', sortable: true },
        { key: 'first_name', sortable: true },
        { key: 'age', sortable: true },
        { key: 'isActive', sortable: false }
      ],
      items: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>
  
<style>
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(133, 27, 27, 0.1);
}
</style>