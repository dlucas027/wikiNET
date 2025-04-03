// Function to toggle the visibility of the sidebar (collapse/expand)
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar"); // Gets the element with ID "sidebar"
    sidebar.classList.toggle("collapsed"); // Toggles the "collapsed" class to show or hide the sidebar
}

// Typing effect for the title (h1) when the page loads
document.addEventListener("DOMContentLoaded", function () {
    var h1 = document.querySelector("h1"); // Selects the <h1> element
    var text = "wikiNET"; // Text to be typed
    var icon = '<i class="bi bi-globe-americas"></i>'; // Icon to be added at the end of typing
    var index = 0; // Initial index to traverse the characters

    function typeText() {
        if (index < text.length) { // While there are characters to add
            h1.innerHTML = text.substring(0, index + 1); // Updates the text in <h1>
            index++; // Moves to the next character
            setTimeout(typeText, 100); // Calls the function again after 100ms
        } else {
            h1.innerHTML += icon; // When typing is finished, adds the icon at the end
        }
    }

    h1.innerHTML = ""; // Ensures <h1> is empty before starting the typing effect
    typeText(); // Starts the typing effect
});

// ** Chart data configuration **
const data = {
    labels: ['Hardware', 'Protocols', 'Softwares', 'Monitoring Tools'], // Labels for the X-axis
    datasets: [{
        label: 'Content Percentage', // Name of the dataset legend
        data: [41.67, 33.33, 16.67, 8.33], // Percentage values for each category
        backgroundColor: ['#FF6F61', '#4E73DF', '#F39C12', '#1ABC9C'], // Colors of the bars
        borderColor: ['#C44D4B', '#3756A0', '#B3730A', '#118570'], // Border colors of the bars
        borderWidth: 1 // Border width
    }]
};

// ** Chart configuration **
const config = {
    type: 'bar', // Defines the chart type (bar)
    data: data, // Associates the configured data
    options: {
        responsive: false, // Sets the chart to not automatically adjust to screen size
        scales: {
            y: { beginAtZero: true } // Ensures the Y-axis starts at 0
        },
        plugins: {
            legend: { position: 'top' }, // Positions the legend at the top
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%'; // Displays label and percentage in the tooltip
                    }
                }
            }
        }
    }
};

// ** Chart creation **
var areaChart = new Chart(document.getElementById('areaChart'), config); // Renders the chart in the element with ID "areaChart"

// ** Chameleon effect for the subtitle (h4) **
var subtitle = document.querySelector("h4"); // Selects the <h4> element to be affected

setInterval(() => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Generates a random hexadecimal color
    subtitle.style.transition = "color 1s ease"; // Sets a smooth transition for the color change
    subtitle.style.color = randomColor; // Applies the new color to the subtitle
}, 1000); // Changes the color every 1 second
