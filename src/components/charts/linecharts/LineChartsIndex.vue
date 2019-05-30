<template>
    <div class="container">
        <h2 class="py-5">Line Charts</h2>
        
        <br>

        <app-chart-one></app-chart-one>
        
    </div>
</template>

<script>

import chartOne from "./ChartOne.vue";

export default {

    components: {
          
        appChartOne: chartOne
          
    },
    
}

</script>
