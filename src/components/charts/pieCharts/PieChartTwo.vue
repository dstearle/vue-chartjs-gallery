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
                        'Securtiy', 'Entertainment', 'Research' 
                    ],
                    datasets: [{
                        data: [30, 18, 42],
                        backgroundColor: ["#ff3300", "#3399ff","#66ffcc"],
                    }],
                },
                // Configure your chart options here
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    // Configures settings fo the legend
                    legend: {
                        display: true,
                        position: "top"
                    },
                    title: {
                        display: true,
                        position: "top",
                        text: 'InGen Division Funding for 2019'
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