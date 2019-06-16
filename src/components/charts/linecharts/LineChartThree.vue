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
                    // Configures settings for the hover tooltips
                    tooltips: {
                        // Disable the on-canvas tooltip
                        enabled: false,

                        custom: function(tooltipModel) {
                            // Tooltip Element
                            var tooltipEl = document.getElementById('chartjs-tooltip');

                            // Create element on first render
                            if (!tooltipEl) {
                                tooltipEl = document.createElement('div');
                                tooltipEl.id = 'chartjs-tooltip';
                                tooltipEl.innerHTML = '<table></table>';
                                document.body.appendChild(tooltipEl);
                            }

                            // Hide if no tooltip
                            if (tooltipModel.opacity === 0) {
                                tooltipEl.style.opacity = 0;
                                return;
                            }

                            // Set caret Position
                            tooltipEl.classList.remove('above', 'below', 'no-transform');
                            if (tooltipModel.yAlign) {
                                tooltipEl.classList.add(tooltipModel.yAlign);
                            } else {
                                tooltipEl.classList.add('no-transform');
                            }

                            function getBody(bodyItem) {
                                return bodyItem.lines;
                            }

                            // Set Text
                            if (tooltipModel.body) {
                                var titleLines = tooltipModel.title || [];
                                var bodyLines = tooltipModel.body.map(getBody);

                                var innerHtml = '<thead>';

                                // Sets the html for the title
                                titleLines.forEach(function(title) {
                                    innerHtml += '<div><h4>' + title + '</h4></div>';
                                });
                                innerHtml += '</thead><tbody>';

                                // Sets the html for body
                                bodyLines.forEach(function(body, i) {
                                    var colors = tooltipModel.labelColors[i];
                                    var style = 'background: ' + colors.backgroundColor;
                                    style += '; border-color: ' + colors.borderColor;
                                    style += '; border-width: 2px';
                                    var span = '<span style="' + style + '"></span>';
                                    innerHtml += '<div>' + span + body + '</div>';
                                });
                                innerHtml += '</tbody>';

                                var tableRoot = tooltipEl.querySelector('table');
                                tableRoot.innerHTML = innerHtml;
                            }

                            // `this` will be the overall tooltip
                            var position = this._chart.canvas.getBoundingClientRect();

                            // This is where you will do most of the styling for the tooltips

                            // Sets opacity for the whole tooltip area
                            tooltipEl.style.opacity = 1;
                            // Helps set position for tooltip area
                            tooltipEl.style.position = "absolute";
                            // Sets background color for the tooltip area
                            tooltipEl.style.backgroundColor = "white";
                            // Settings for caret position?
                            tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                            tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                            // Font styling for tooltips?
                            tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
                            tooltipEl.style.fontSize = tooltipModel.bodyFontSize + "px";
                            tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                            // Sets padding for tooltips
                            tooltipEl.style.padding =
                                tooltipModel.yPadding + "px " + tooltipModel.xPadding + "px";
                            // Needs documentation
                            tooltipEl.style.pointerEvents = "none";
                            // Sets the width and color of the toolips border
                            tooltipEl.style.border = "3px solid rgb(131, 244, 66)";
                            // Rounds the corners of the tooltip area
                            tooltipEl.style.borderRadius = "20px";
                        }
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