<template>
    
    <div class="container">

        <h2 class="py-5">Line Charts</h2>

        <app-chart-one></app-chart-one>

        <br>

        <app-chart-two></app-chart-two>

        <br>

        <app-chart-three></app-chart-three>

    </div>

</template>

<script>

import ChartOne from './LineChartOne.vue';
import ChartTwo from './LineChartTwo.vue';
import ChartThree from './LineChartThree.vue';

export default {

    components: {
          
        appChartOne: ChartOne,
        appChartTwo: ChartTwo,
        appChartThree: ChartThree,

    },
    
}

</script>
