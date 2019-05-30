<template>
    
    <div class="container">

        <h2 class="py-5">Line Charts</h2>

        <div class="card bg-light">

            <h5 class="card-header">Basic Line Chart</h5>

            <div class="card-body p-5">

                 <app-chart-one></app-chart-one>

            </div>
      
        </div>

    </div>

</template>

<script>

import ChartOne from './LineChartOne.vue';

export default {

    components: {
          
        appChartOne: ChartOne,
          
    },
    
}

</script>
