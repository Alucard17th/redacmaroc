<template>
  <div class="mr-3">
    <h2 class="py-3">Welcome to your Dashboard</h2>
    <div>
      <b-card-group deck>
        <b-card text-variant="white" class="text-center">
            <LineChart />
        </b-card>

        <b-card text-variant="white" class="text-center">
            <BarChart />
        </b-card>

        <b-card text-variant="white" class="text-center">
            <BubbleChart />
        </b-card>
      </b-card-group>
    </div>

    <div class="mt-3">
      <b-card-group deck>
        <b-card text-variant="white" class="text-center">
            <DoghnutChart />
        </b-card>

        <b-card  header="Danger" class="text-center">
          <b-card-text>
            <b-button pill variant="outline-secondary"><b-icon icon="arrow-left"></b-icon></b-button>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <b-button pill variant="outline-secondary"><b-icon icon="arrow-right"></b-icon></b-button>
          </b-card-text>
          <b-table hover :items="items"></b-table>
        </b-card>
      </b-card-group>
    </div>
    <div class="mt-3">
      <b-card-group deck>
        <b-card bg-variant="light" header="Light" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>

        <b-card bg-variant="dark" header="Dark" text-variant="white" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>

        <b-card header="Default" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>
  

<script>
import BarChart from './charts/BarChart.vue'
import BubbleChart from './charts/BubbleChart.vue'
import DoghnutChart from './charts/DoghnutChart.vue'
import LineChart from './charts/LineChart.vue'

export default {
  components: {
    BarChart,
    BubbleChart,
    DoghnutChart,
    LineChart
  },
  data() {
    return {
      items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          {
            age: 89,
            first_name: 'Geneva',
            last_name: 'Wilson',
            _rowVariant: 'danger'
          },
          {
            age: 40,
            first_name: 'Thor',
            last_name: 'MacDonald',
            _cellVariants: { age: 'info', first_name: 'warning' }
          },
          { age: 29, first_name: 'Dick', last_name: 'Dunlap' }
        ]
    }
  },

  methods: {

  }
}
</script>
  
<style>

</style>
  
  