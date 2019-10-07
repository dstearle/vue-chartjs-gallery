<template>
    
    <div class="container">

        <h2 class="py-5">Line Charts</h2>

        <app-chart-one></app-chart-one>

        <br>

        <app-chart-two></app-chart-two>

        <br>

        <app-chart-three></app-chart-three>

        <br>

        <app-chart-four></app-chart-four>

        <br>

    </div>

</template>

<script>

import ChartOne from './LineChartOne.vue';
import ChartTwo from './LineChartTwo.vue';
import ChartThree from './LineChartThree.vue';
import ChartFour from './lineChartFour/LineChartFour.vue';


export default {

    components: {
          
        appChartOne: ChartOne,
        appChartTwo: ChartTwo,
        appChartThree: ChartThree,
        appChartFour: ChartFour,

    },
    
}

</script>
