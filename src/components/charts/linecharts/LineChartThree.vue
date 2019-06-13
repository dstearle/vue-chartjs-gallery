<template>

  <div class="container">

      <div class="card bg-light">

            <h5 class="card-header">Multi Axis Line Chart</h5>

            <div class="card-body p-5">

                <canvas id="myChart3" height="300px" width="800px"></canvas>

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

            const ctx = document.getElementById('myChart3').getContext('2d');
            // Creates the gradient for the fill background
            let gradientStroke = ctx.createLinearGradient(0, 250, 0, 100);
                // More color stops can be added
                gradientStroke.addColorStop(0, "rgb(131, 244, 66, 0.3)");
                gradientStroke.addColorStop(1, "rgb(131, 244, 66, 0.8)");

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
                    datasets: [{
                        label: 'Compsognathus Population',
                        backgroundColor: gradientStroke,
                        borderColor: 'rgb(131, 244, 66)',
                        data: [0, 10, 5, 2, 20, 30, 45, 25, 38, 60, 65, 89]
                    }]
                },
                // Configure your chart options here
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    // Configures settings fo the legend
                    legend: {
                        display: false
                    },
                    // Configures the X and Y axes
                    scales:{
                        // Allows you to customize the X axis
                        xAxes: [{
                            
                            gridLines: {
                                tickMarkLength: 0,
                            },
                            ticks: {
                                padding: 15,
                            }

                        }],
                        // Allows you to customize the Y axis
                        yAxes: [
                            // First Y Axis
                            {
                                position: 'left',
                                scaleLabel: {
                                    display: true,
                                    fontStyle: 'bold',
                                    labelString: 'Invasive Population'
                                },
                                gridLines: {
                                    tickMarkLength: 0,
                                },
                                ticks: {
                                    padding: 15,
                                    max: 100,
                                    min: 0,
                                    stepSize: 10
                                },
                            },
                            // Second Y Axis
                            {
                                position: 'right',
                                scaleLabel: {
                                    display: true,
                                    fontStyle: 'bold',
                                    labelString: 'Child Mortality Rate'
                                },
                                gridLines: {
                                    tickMarkLength: 0,
                                },
                                ticks: {
                                    padding: 15,
                                    max: 100,
                                    min: 0,
                                    stepSize: 10
                                },
                            }
                        ]
                    },

                    tooltips: {

                        // Disable the default tooltips
                        enabled: false,
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