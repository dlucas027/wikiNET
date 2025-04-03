// When the page is fully loaded, the function will be executed
window.onload = function () {
    // FadeIn effect for the columns
    const columns = document.querySelectorAll(".column");

    columns.forEach((col, index) => {
        col.style.opacity = 0; // Initially, set opacity to 0 (hidden)

        setTimeout(() => {
            col.style.opacity = 1; // Make the column visible with a fade-in effect
            col.style.transition = "opacity 0.5s ease-in-out"; // Smooth transition effect
        }, index * 200); // Apply staggered effect (each column appears with a delay)
    });

    // Add hover effect via JavaScript
    columns.forEach(column => {
        column.addEventListener("mouseenter", () => {
            column.style.transition = "transform 0.3s ease, box-shadow 0.3s ease"; // Smooth transition
            column.style.transform = "translateY(-5px)"; // Slightly lift the column on hover
            column.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.15)"; // Apply shadow effect
        });

        column.addEventListener("mouseleave", () => {
            column.style.transition = "transform 0.3s ease, box-shadow 0.3s ease"; // Smooth transition
            column.style.transform = "translateY(0)"; // Reset position when mouse leaves
            column.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.08)"; // Reduce shadow effect
        });
    });

    // Typing effect on the title (h1)
    var h1 = document.querySelector("#title");
    var text = "What Is the Difference Between ONU and ONT?"; // Text to be displayed in the title
    var index = 0; // Start index

    function typeText() {
        if (index < text.length) {
            h1.innerHTML += text.charAt(index); // Append one character at a time
            index++; // Move to the next character
            setTimeout(typeText, 100); // Control typing speed (100ms per character)
        }
    }
    typeText(); // Start the typing effect

    // Chameleon effect for the subtitle (p) - Changes color every second
    var subtitle = document.querySelector(".subtitle");

    setInterval(() => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Generate a random color
        subtitle.style.transition = "color 1s ease"; // Smooth color transition
        subtitle.style.color = randomColor; // Apply the new color
    }, 1000); // Change color every 1 second

    // Typing effect in loop on the footer paragraph
    var footer = document.querySelector("#footeranimate");
    var footerText = "Learn Networking with Confidence!"; // Text to display in the footer
    var footerIndex = 0; // Initial index
    var deleting = false; // Control the typing and deleting effect

    function typeFooter() {
        if (!deleting) {
            // Typing effect
            footer.innerHTML = footerText.substring(0, footerIndex); // Show increasing text
            footerIndex++; // Move to the next character
            if (footerIndex > footerText.length) {
                deleting = true; // Start deleting after typing is complete
                setTimeout(typeFooter, 4000); // Wait 4 seconds before deleting
                return;
            }
        } else {
            // Deleting effect
            footer.innerHTML = footerText.substring(0, footerIndex); // Show decreasing text
            footerIndex--; // Move backward
            if (footerIndex === 0) {
                deleting = false; // Restart typing effect
            }
        }
        setTimeout(typeFooter, deleting ? 50 : 100); // Faster deleting (50ms), slower typing (100ms)
    }

    typeFooter(); // Start the infinite typing-deleting loop for the footer

    console.log("Animation script loaded successfully."); // Console log to confirm script execution
};
