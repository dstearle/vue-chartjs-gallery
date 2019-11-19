<template>

  <div class="container">

      <div class="card bg-light">

            <!-- Card Title -->
            <h5 class="card-header">Canvas Conversion</h5>

            <div class="card-body p-5">

                <div class="col">

                    <!-- Chart -->
                    <div class="row">

                        <canvas id="myChart5" height="300px" width="800px"></canvas>

                    </div>

                    <!-- Convert Button -->
                    <div class="row pt-5 justify-content-end">

                        <a 
                            id="download"
                            download="image.png"
                        >

                            <button 
                                type="button" 
                                class="btn btn-outline-dark"
                                @click="convertCanvas()"
                            >
                            
                                Convert Canvas
                                
                            </button>

                        </a>

                    </div>

                </div>

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

            const ctx = document.getElementById('myChart5').getContext('2d');
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
                        backgroundColor: 'rgb(131, 244, 66, 0.3)',
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
                        }]
                    }
                }
            })
        },

        // Method that converts the canvas element into an image
        convertCanvas() {

            // References the anchor tag wrapped around the canvas element
            var download = document.getElementById("download");

            // Grabs the canvas element, use toDataURL then replaces its file name with "image"
            var image = document.getElementById("myChart5").toDataURL("image/png").replace("image/png", "image/octet-stream");
            
            // Downloads the image
            download.setAttribute("href", image);
            
        },

    },

    mounted() {
        this.initializeChart();
    },
    
};

</script>