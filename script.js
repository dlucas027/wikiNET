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

// Chart data configuration
const data = {
    labels: ['Hardware', 'Softwares', 'Protocols', 'Monitoring Tools'], // Labels for the X-axis
    datasets: [{
        label: 'Content Percentage', // Keeps the legend title, but hides square
        data: [41.67, 16.67, 33.33, 8.33], // Percentage values for each category
        backgroundColor: ['#FF6F61', '#4E73DF', '#F39C12', '#1ABC9C'], // Bar colors
        borderColor: ['#C44D4B', '#3756A0', '#B3730A', '#118570'], // Border colors
        borderWidth: 1 // Border width
    }]
};

// Chart configuration
const config = {
    type: 'bar', // Chart type
    data: data,
    options: {
        responsive: false,
        scales: {
            y: { beginAtZero: true }
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    usePointStyle: true, // Custom legend style
                    generateLabels: function (chart) {
                        return Chart.defaults.plugins.legend.labels.generateLabels(chart).map(label => {
                            if (label.text === 'Content Percentage') {
                                label.pointStyle = false; // Hide square for "Content Percentage"
                                label.fillStyle = 'transparent'; // No fill
                                label.strokeStyle = 'transparent'; // No border
                            }
                            return label;
                        });
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%'; // Shows label and percentage
                    }
                }
            }
        }
    }
};

// Create and render the chart
var areaChart = new Chart(document.getElementById('areaChart'), config);

// Function to update chart theme when dark mode is toggled
function updateChartTheme(chart) {
    const isDark = document.body.classList.contains("dark-mode");

    // Change X and Y axes text and grid colors
    chart.options.scales.x = {
        ticks: {
            color: isDark ? "white" : "black"
        },
        grid: {
            color: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"
        }
    };
    chart.options.scales.y = {
        beginAtZero: true,
        ticks: {
            color: isDark ? "white" : "black"
        },
        grid: {
            color: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"
        }
    };

    // Change legend label color
    chart.options.plugins.legend.labels.color = isDark ? "white" : "black";

    chart.update(); // Apply changes
}

// Dark mode toggle button
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.createElement("button"); // Create the button
    toggleButton.id = "toggle-theme"; // Set an ID for the button

    toggleButton.innerHTML = "&#x1F31E;"; // Default to sun icon
    document.body.prepend(toggleButton); // Add button to top of body

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode"); // Toggle theme

        // Change icon according to theme
        if (document.body.classList.contains("dark-mode")) {
            toggleButton.innerHTML = "&#x1F31A;"; // Moon icon
        } else {
            toggleButton.innerHTML = "&#x1F31E;"; // Sun icon
        }

        updateChartTheme(areaChart); // Update chart colors
    });
});
