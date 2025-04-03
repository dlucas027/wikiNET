// When the page is fully loaded, the function will be executed
window.onload = function () {
    // FadeIn effect for the columns
    const columns = document.querySelectorAll(".column");

    columns.forEach((col, index) => {
        col.style.opacity = 0; // Set initial opacity to 0 (invisible)

        setTimeout(() => {
            col.style.opacity = 1; // Gradually make the column visible
            col.style.transition = "opacity 0.5s ease-in-out"; // Apply smooth transition
        }, index * 200); // Progressive delay for each column
    });

    // Add hover effect via JavaScript
    columns.forEach(column => {
        column.addEventListener("mouseenter", () => {
            column.style.transition = "transform 0.3s ease, box-shadow 0.3s ease"; // Smooth animation
            column.style.transform = "translateY(-5px)"; // Slightly move the column up on hover
            column.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.15)"; // Add shadow effect on hover
        });

        column.addEventListener("mouseleave", () => {
            column.style.transition = "transform 0.3s ease, box-shadow 0.3s ease"; // Smooth animation when leaving hover
            column.style.transform = "translateY(0)"; // Reset the column position
            column.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.08)"; // Reduce shadow effect when the mouse leaves
        });
    });

    // Typing effect on the title (h1)
    var h1 = document.querySelector("#title");
    var text = "OLT vs Switch: What’s the Difference?"; // The text to be typed
    var index = 0; // Initial index to control typing

    function typeText() {
        if (index < text.length) {
            h1.innerHTML += text.charAt(index); // Add one letter at a time
            index++; // Move to the next character
            setTimeout(typeText, 100); // Delay between each typed character (100ms)
        }
    }
    typeText(); // Start the typing effect

    // Chameleon effect for the subtitle (p) - Changes text color every second
    var subtitle = document.querySelector(".subtitle");

    setInterval(() => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Generate a random color
        subtitle.style.transition = "color 1s ease"; // Smooth color transition
        subtitle.style.color = randomColor; // Apply new color to the subtitle
    }, 1000); // Interval of 1 second between color changes

    // Typing effect in a loop on the footer paragraph
    var footer = document.querySelector("#footeranimate");
    var footerText = "Learn Networking with Confidence!"; // Text to be displayed in the footer
    var footerIndex = 0; // Initial index
    var deleting = false; // Controls the typing and deleting effect

    function typeFooter() {
        if (!deleting) {
            // Typing effect
            footer.innerHTML = footerText.substring(0, footerIndex); // Show growing text
            footerIndex++; // Move to the next character
            if (footerIndex > footerText.length) {
                deleting = true; // Start deleting after typing is complete
                setTimeout(typeFooter, 4000); // Wait 4 seconds before deleting
                return;
            }
        } else {
            // Deleting effect
            footer.innerHTML = footerText.substring(0, footerIndex); // Gradually remove characters
            footerIndex--; // Move to the previous character
            if (footerIndex === 0) {
                deleting = false; // Restart the typing cycle
            }
        }
        setTimeout(typeFooter, deleting ? 50 : 100); // Faster deletion (50ms), slower typing (100ms)
    }

    typeFooter(); // Start the infinite loop for the footer typing effect

    console.log("Animation script loaded successfully."); // Success message in console
};
