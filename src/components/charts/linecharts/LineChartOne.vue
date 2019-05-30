<template>

  <div class="container">
      
    <div class="">
                    
        <canvas id="myChart" height="300px" width="800px"></canvas>
        
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
                type: 'line',
                // The data for our dataset
                data: {
                    labels: [
                        'January', 'February', 'March', 'April', 
                        'May', 'June', 'July', 'August',
                        'September', 'October', 'November', 'December'
                    ],
                    datasets: [{
                        label: 'Compsognathus Population',
                        backgroundColor: 'rgb(131, 244, 66, 0.3)',
                        borderColor: 'rgb(131, 244, 66)',
                        data: [0, 10, 5, 2, 20, 30, 45, 25, 38, 60, 65, 89]
                    }]
                },
                // Configure your chart options here
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
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
                                stepSize: 10
                            },
                            position: "left",
                            scaleLabel: {
                                display: false,
                                labelString: "NPS Score",
                                fontSize: 16,
                                fontFamily: "Open Sans"
                            }

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

.gaugeStyle {
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
}

</style>