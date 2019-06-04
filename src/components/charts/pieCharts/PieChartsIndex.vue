<template>
    
    <div class="container">

        <h2 class="py-5">Pie Charts</h2>

        <app-chart-one></app-chart-one>

        <br>

        <app-chart-two></app-chart-two>

        <br>

        <!-- <app-chart-three></app-chart-three> -->

    </div>

</template>

<script>

import ChartOne from './PieChartOne.vue';
import ChartTwo from './PieChartTwo.vue';
// import ChartThree from './LineChartThree.vue';

export default {

    components: {
          
        appChartOne: ChartOne,
        appChartTwo: ChartTwo,
        // appChartThree: ChartThree,

    },
    
}

</script>