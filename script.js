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
    labels: ['Hardware', 'Softwares', 'Protocols', 'Monitoring Tools'], // Labels for the X-axis
    datasets: [{
        label: 'Content Percentage', // Mantém o título da legenda, mas sem quadrado
        data: [41.67, 16.67, 33.33, 8.33], // Percentage values for each category
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
            legend: {
                position: 'top',
                labels: {
                    usePointStyle: true, // Usa estilos personalizados para os itens da legenda
                    generateLabels: function (chart) {
                        return Chart.defaults.plugins.legend.labels.generateLabels(chart).map(label => {
                            if (label.text === 'Content Percentage') {
                                label.pointStyle = false; // Remove o quadrado da label "Content Percentage"
                                label.fillStyle = 'transparent'; // Garante que não tenha cor
                                label.strokeStyle = 'transparent'; // Remove a borda
                            }
                            return label;
                        });
                    }
                }
            },
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


/* Dark mode button */
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.createElement("button"); // Create the button
    toggleButton.id = "toggle-theme"; // Set an ID for the button

    // Set the sun icon as the default
    toggleButton.innerHTML = "&#x1F31E;"; // Unicode for the sun icon
    document.body.prepend(toggleButton); // Add the button at the beginning of the body

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode"); // Toggle between themes

        // Update the button icon according to the current theme
        if (document.body.classList.contains("dark-mode")) {
            toggleButton.innerHTML = "&#x1F31A;"; // Crescent moon (for dark mode)
        } else {
            toggleButton.innerHTML = "&#x1F31E;"; // Sun (for light mode)
        }
    });
});
