<template>

  <div class="container">

      <div class="card bg-light">

            <h5 class="card-header">Radar Chart</h5>

            <div class="card-body p-5">

                <canvas id="myChart" height="300px" width="800px"></canvas>

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

            const ctx = document.getElementById('myChart').getContext('2d');
            this.chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'radar',
                // The data for our dataset
                data: {
                    // Labels for the pie chart
                    labels: [
                        'North America', 'Europe', 'Asia', 'South America', 'Africa' 
                    ],
                    datasets: [
                        // Dataset for 1997
                        {
                            data: [55, 8, 22, 4, 8],
                            fill: true,
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                            borderColor: "rgba(255, 0, 0)",
                            label: "1997"
                            
                        },
                        // Dataset for 2015
                        {
                            data: [30, 18, 42, 12, 8],
                            fill: true,
                            backgroundColor: "rgba(0, 102, 255, 0.2)",
                            borderColor: "rgba(0, 102, 255)",
                            label: "2015"
                            
                        },
                    ],
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
                        text: 'Park Visitor Representation (1997 & 2015)'
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