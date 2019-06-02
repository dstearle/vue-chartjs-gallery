<template>

  <div class="container">

      <div class="card bg-light">

            <h5 class="card-header">Grouped Bar Chart</h5>

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
                type: 'bar',
                // The data for our dataset
                data: {
                    // Labels for the X axis
                    labels: [
                        '1993', '1997', '2001', '2015',
                    ],
                    datasets: [
                        {
                            label: "InGen",
                            backgroundColor: "rgb(51, 102, 255)",
                            data: [76,22,68,97]
                        }, 
                        {
                            label: "Biosyn",
                            backgroundColor: "rgb(64, 64, 64,)",
                            data: [21,52,35,66]
                        }
                    ]
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
                    // Configures title above chart
                    title: {
                        display: true,
                        text: 'Stock worth (millions)'
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
                        yAxes: [{

                            gridLines: {
                                tickMarkLength: 0,
                            },
                            ticks: {
                                padding: 15,
                                max: 100,
                                min: 0,
                                stepSize: 20
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

</style>