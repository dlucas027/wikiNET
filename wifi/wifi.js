// When the page is fully loaded, the function will be executed
window.onload = function () {
    // Fade-in effect for the columns
    const columns = document.querySelectorAll(".column");

    columns.forEach((col, index) => {
        col.style.opacity = 0; // Initially set opacity to 0

        setTimeout(() => {
            col.style.opacity = 1; // Fade in the column
            col.style.transition = "opacity 0.5s ease-in-out"; // Smooth transition effect
        }, index * 200); // Apply delay based on column index
    });

    // Add hover effect via JavaScript
    columns.forEach(column => {
        column.addEventListener("mouseenter", () => {
            column.style.transition = "transform 0.3s ease, box-shadow 0.3s ease"; // Smooth transition
            column.style.transform = "translateY(-5px)"; // Move the column slightly upwards
            column.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.15)"; // Add shadow effect
        });

        column.addEventListener("mouseleave", () => {
            column.style.transition = "transform 0.3s ease, box-shadow 0.3s ease"; // Smooth transition
            column.style.transform = "translateY(0)"; // Reset position
            column.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.08)"; // Reset shadow effect
        });
    });

    // Typing effect on the title (h1)
    var h1 = document.querySelector("#title");
    var text = "Exploring Different Types of WI-FI Networks"; // Text to be typed
    var index = 0; // Initial index

    function typeText() {
        if (index < text.length) {
            h1.innerHTML += text.charAt(index); // Add character to the title
            index++; // Move to the next character
            setTimeout(typeText, 100); // Call function again after 100ms
        }
    }
    typeText(); // Start the typing effect

    // Chameleon effect for the subtitle (p)
    var subtitle = document.querySelector(".subtitle");

    setInterval(() => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Generate a random color
        subtitle.style.transition = "color 1s ease"; // Smooth transition effect
        subtitle.style.color = randomColor; // Apply new color to the subtitle
    }, 1000); // Change color every 1 second

    // Typing effect in a loop on the footer paragraph
    var footer = document.querySelector("#footeranimate");
    var footerText = "Learn Networking with Confidence!"; // Text to be displayed
    var footerIndex = 0; // Initial index
    var deleting = false; // Control the typing and deleting effect

    function typeFooter() {
        if (!deleting) {
            // Typing
            footer.innerHTML = footerText.substring(0, footerIndex); // Display part of the text
            footerIndex++; // Move to the next character
            if (footerIndex > footerText.length) {
                deleting = true; // Start deleting after typing is finished
                setTimeout(typeFooter, 4000); // Wait 4 seconds before deleting
                return;
            }
        } else {
            // Deleting
            footer.innerHTML = footerText.substring(0, footerIndex); // Remove part of the text
            footerIndex--; // Move backward
            if (footerIndex === 0) {
                deleting = false; // Start typing again
            }
        }
        setTimeout(typeFooter, deleting ? 50 : 100); // Faster while deleting
    }

    typeFooter(); // Starts the infinite loop for the footer typing effect

    console.log("Animation script loaded successfully."); // Log message when script loads
};
