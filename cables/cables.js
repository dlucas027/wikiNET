// When the page is fully loaded, the function will be executed
window.onload = function () {
    // Fade-in effect for the columns when the page loads
    const columns = document.querySelectorAll(".column");

    columns.forEach((col, index) => {
        col.style.opacity = 0; // Initially set opacity to 0 (hidden)

        setTimeout(() => {
            col.style.opacity = 1; // Gradually make the column visible
            col.style.transition = "opacity 0.5s ease-in-out"; // Smooth transition
        }, index * 200); // Delay effect for each column based on index
    });

    // Add hover effect to each column
    columns.forEach(column => {
        column.addEventListener("mouseenter", () => {
            column.style.transition = "transform 0.3s ease, box-shadow 0.3s ease"; // Smooth transition
            column.style.transform = "translateY(-5px)"; // Moves the column slightly up
            column.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.15)"; // Adds shadow effect
        });

        column.addEventListener("mouseleave", () => {
            column.style.transition = "transform 0.3s ease, box-shadow 0.3s ease"; // Smooth transition
            column.style.transform = "translateY(0)"; // Resets position
            column.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.08)"; // Restores original shadow
        });
    });

    // Typing effect for the main title (h1)
    var h1 = document.querySelector("#title");
    var text = "Network Cables: Fiber, Twisted Pair & Ethernet"; // Text to be typed
    var index = 0;

    function typeText() {
        if (index < text.length) {
            h1.innerHTML += text.charAt(index); // Adds one letter at a time
            index++;
            setTimeout(typeText, 100); // Speed of typing effect
        }
    }
    typeText(); // Start typing effect

    // Chameleon effect for the subtitle (p) - changes color every second
    var subtitle = document.querySelector(".subtitle");

    setInterval(() => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Generates a random hex color
        subtitle.style.transition = "color 1s ease"; // Smooth transition
        subtitle.style.color = randomColor; // Applies the new color
    }, 1000); // Changes color every 1 second

    // Typing effect in loop for the footer paragraph
    var footer = document.querySelector("#footeranimate");
    var footerText = "Learn Networking with Confidence!"; // Text to display
    var footerIndex = 0;
    var deleting = false; // Controls whether to type or delete

    function typeFooter() {
        if (!deleting) {
            // Typing phase
            footer.innerHTML = footerText.substring(0, footerIndex);
            footerIndex++;
            if (footerIndex > footerText.length) {
                deleting = true; // Start deleting when typing is complete
                setTimeout(typeFooter, 4000); // Wait 4 seconds before deleting
                return;
            }
        } else {
            // Deleting phase
            footer.innerHTML = footerText.substring(0, footerIndex);
            footerIndex--;
            if (footerIndex === 0) {
                deleting = false; // Start typing again
            }
        }
        setTimeout(typeFooter, deleting ? 50 : 100); // Faster while deleting
    }

    typeFooter(); // Start the infinite loop for the footer typing effect

    console.log("Animation script loaded successfully."); // Debug message
};
