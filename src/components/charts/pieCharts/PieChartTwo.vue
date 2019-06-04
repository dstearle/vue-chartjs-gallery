<template>

  <div class="container">

      <div class="card bg-light">

            <h5 class="card-header">Doughnut Chart</h5>

            <div class="card-body p-5">

                <canvas id="myChart2" height="300px" width="800px"></canvas>

            </div>
      
        </div> 
        
  </div>

</template>

<script>

// Imports the different types of charts from the package";
import Chart from "chart.js";

export default {

    methods: {
        initializeChart() {

            const ctx = document.getElementById('myChart2').getContext('2d');
            this.chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'doughnut',
                // The data for our dataset
                data: {
                    // Labels for the pie chart
                    labels: [
                        'Stegosaurs', 'Camarasaurus', 'Iguanodon', 'Proceratorsaurus', 'Metriocanthosaurus' 
                    ],
                    datasets: [{
                        data: [30, 18, 42, 12, 8],
                        backgroundColor: ["#009900", "#e6e600","#8c8c8c","#660066","#ff9900"],
                    }],
                },
                // Configure your chart options here
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    // Configures settings fo the legend
                    legend: {
                        display: true,
                        position: "right"
                    },
                    title: {
                        display: true,
                        position: "top",
                        // text: 'Est. Population of Isla Muerta (1997)'
                    }
                }
            })
        }
    },
    mounted() {
        this.initializeChart();
    },
    
};

</script>

<style scoped>

</style>