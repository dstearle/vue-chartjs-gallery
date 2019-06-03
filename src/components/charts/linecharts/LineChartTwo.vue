<template>

  <div class="container">

      <div class="card bg-light">

            <h5 class="card-header">Multiple Line Chart</h5>

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
                type: 'line',
                // The data for our dataset
                data: {
                    // Labels for the X axis
                    labels: [
                        'January', 'February', 'March', 'April', 
                        'May', 'June', 'July', 'August',
                        'September', 'October', 'November', 'December'
                    ],
                    datasets: [
                        // First set of data for line one (green)
                        {
                            label: 'Compsognathus Population',
                            pointStyle: 'circle',
                            radius: 6,
                            hoverRadius: 8,
                            backgroundColor: 'rgb(131, 244, 66, 0.3)',
                            borderColor: 'rgb(131, 244, 66)',
                            data: [0, 10, 5, 2, 20, 30, 45, 25, 38, 60, 65, 89]
                        },
                        // Second set of data for line two (orange)
                        {
                            label: 'Velociraptor Population',
                            pointStyle: 'triangle',
                            radius: 6,
                            hoverRadius: 8,
                            backgroundColor: 'rgb(255, 153, 0, 0.3)',
                            borderColor: 'rgb(255, 153, 0)',
                            data: [0, 3, 9, 23, 37, 18, 32, 45, 60, 28, 36, 45]
                        },
                        // Third set of data for line two (yellow)
                        {
                            label: 'Parasaurolophus Population',
                            pointStyle: 'rect',
                            radius: 6,
                            hoverRadius: 8,
                            backgroundColor: 'rgb(255, 255, 26, 0.3)',
                            borderColor: 'rgb(255, 255, 26)',
                            data: [30, 36, 50, 42, 68, 53, 60, 30, 48, 22, 15, 12]
                        }
                    ]
                },
                // Configure your chart options here
                options: {
                    drawBorder: true,
                    maintainAspectRatio: false,
                    responsive: true,
                    // Configures settings fo the legend
                    legend: {
                        display: true
                    },
                    // Configures the X and Y axes
                    scales:{
                        // Allows you to customize the X axis
                        xAxes: [{

                            gridLines: {
                                // Thickness and color for vertical grid lines
                                lineWidth: [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                                color: [
                                        '#73737a', '#73737a', '#73737a', '#73737a',
                                        '#73737a', '#73737a', '#73737a', '#73737a',
                                        '#73737a', '#73737a', '#73737a', '#73737a',
                                ],
                                // Size of tick marks on the axis
                                tickMarkLength: 0,
                            },
                            ticks: {
                                padding: 15,
                            }

                        }],
                        // Allows you to customize the Y axis
                        yAxes: [{
                            
                            gridLines: {
                                // Thickness and color for horizontal grid lines
                                lineWidth: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                                color: [
                                        '#73737a', '#73737a', '#73737a', '#73737a',
                                        '#73737a', '#73737a', '#73737a', '#73737a',
                                        '#73737a', '#73737a', '#73737a', '#73737a',
                                ],
                                tickMarkLength: 0,
                            },
                            ticks: {
                                padding: 15,
                                max: 100,
                                min: 0,
                                stepSize: 10
                            },

                        }]
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

canvas {
   background-color: rgba(47, 152, 208, 0.1);
}

</style>