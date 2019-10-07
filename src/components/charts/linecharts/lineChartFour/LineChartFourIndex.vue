<template>

    <div class="container">

        <div class="card bg-light">

            <!-- Card Title -->
            <h5 class="card-header">Bi-Weekly Chart</h5>

            <div class="card-body p-5">

                <div class="col">

                    <!-- Chart -->
                    <div class="row">

                        <line-chart-four :chart-data="datacollection"></line-chart-four>

                    </div>

                    <!-- Next Day Button -->
                    <div class="row pt-5 justify-content-end">

                        <button 
                            type="button" 
                            class="btn btn-outline-dark"
                            @click="fillData()"
                        >
                        
                            Next Day
                            
                        </button>

                    </div>

                </div>

            </div>

        </div> 
        
    </div>

</template>

<script>
  import LineChartFour from './LineChartFour.vue'

  export default {
    components: {
      LineChartFour
    },
    data () {
      return {
        datacollection: {}
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>