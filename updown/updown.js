// When the page is fully loaded, execute this function
window.onload = function () {
    // Fade-in effect for the columns
    const columns = document.querySelectorAll(".column");

    columns.forEach((col, index) => {
        col.style.opacity = 0; // Set initial opacity to 0

        setTimeout(() => {
            col.style.opacity = 1; // Apply fade-in effect
            col.style.transition = "opacity 0.5s ease-in-out"; // Smooth transition effect
        }, index * 200); // Delay each column's appearance
    });

    // Add hover effect using JavaScript
    columns.forEach(column => {
        column.addEventListener("mouseenter", () => {
            column.style.transition = "transform 0.3s ease, box-shadow 0.3s ease"; // Smooth animation
            column.style.transform = "translateY(-5px)"; // Slightly raise the column
            column.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.15)"; // Add shadow effect
        });

        column.addEventListener("mouseleave", () => {
            column.style.transition = "transform 0.3s ease, box-shadow 0.3s ease"; // Smooth animation
            column.style.transform = "translateY(0)"; // Reset position
            column.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.08)"; // Reduce shadow effect
        });
    });

    // Typing effect for the title (h1)
    var h1 = document.querySelector("#title");
    var text = "Understanding Upload and Download Speeds"; // Text to be displayed
    var index = 0; // Initial index

    function typeText() {
        if (index < text.length) {
            h1.innerHTML += text.charAt(index); // Append one character at a time
            index++; // Move to the next character
            setTimeout(typeText, 100); // Adjust typing speed (100ms)
        }
    }
    typeText(); // Start typing effect

    // Chameleon effect for the subtitle (p) - changes color every second
    var subtitle = document.querySelector(".subtitle");

    setInterval(() => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Generate random color
        subtitle.style.transition = "color 1s ease"; // Smooth transition effect
        subtitle.style.color = randomColor; // Apply new color to the subtitle
    }, 1000); // Change color every 1 second

    // Typing effect in a loop on the footer paragraph
    var footer = document.querySelector("#footeranimate");
    var footerText = "Learn Networking with Confidence!"; // Text to be displayed
    var footerIndex = 0; // Initial index
    var deleting = false; // Control whether typing or deleting

    function typeFooter() {
        if (!deleting) {
            // Typing effect
            footer.innerHTML = footerText.substring(0, footerIndex); // Display partial text
            footerIndex++; // Move to the next character
            if (footerIndex > footerText.length) {
                deleting = true; // Start deleting after typing is complete
                setTimeout(typeFooter, 4000); // Wait 4 seconds before deleting
                return;
            }
        } else {
            // Deleting effect
            footer.innerHTML = footerText.substring(0, footerIndex); // Remove characters
            footerIndex--; // Move backward
            if (footerIndex === 0) {
                deleting = false; // Restart typing
            }
        }
        setTimeout(typeFooter, deleting ? 50 : 100); // Typing: 100ms, Deleting: 50ms (faster)
    }

    typeFooter(); // Start the infinite loop for the footer typing effect

    console.log("Animation script loaded successfully."); // Console log to confirm script execution
};
