// When the page is fully loaded, the function will be executed
window.onload = function () {
    // FadeIn effect for the columns
    const columns = document.querySelectorAll(".column");

    columns.forEach((col, index) => {
        col.style.opacity = 0;

        setTimeout(() => {
            col.style.opacity = 1;
            col.style.transition = "opacity 0.5s ease-in-out";
        }, index * 200);
    });

    // Add hover effect via JS
    columns.forEach(column => {
        column.addEventListener("mouseenter", () => {
            column.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            column.style.transform = "translateY(-5px)";
            column.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.15)";
        });

        column.addEventListener("mouseleave", () => {
            column.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            column.style.transform = "translateY(0)";
            column.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.08)";
        });
    });

    // Typing effect on the title (h1)
    var h1 = document.querySelector("#title");
    var text = "What Is the Difference Between ONU and ONT?";
    var index = 0;

    function typeText() {
        if (index < text.length) {
            h1.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }
    typeText();

    // Chameleon effect for the subtitle (p)
    var subtitle = document.querySelector(".subtitle");

    setInterval(() => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        subtitle.style.transition = "color 1s ease";
        subtitle.style.color = randomColor;
    }, 1000);

    // Typing effect in loop on the footer paragraph
    var footer = document.querySelector("#footeranimate");
    var footerText = "Learn Networking with Confidence!";
    var footerIndex = 0;
    var deleting = false; // Control the typing and deleting effect

    function typeFooter() {
        if (!deleting) {
            // Typing
            footer.innerHTML = footerText.substring(0, footerIndex);
            footerIndex++;
            if (footerIndex > footerText.length) {
                deleting = true; // Start deleting after typing is finished
                setTimeout(typeFooter, 4000); // Wait 4 seconds before deleting
                return;
            }
        } else {
            // Deleting
            footer.innerHTML = footerText.substring(0, footerIndex);
            footerIndex--;
            if (footerIndex === 0) {
                deleting = false; // Start typing again
            }
        }
        setTimeout(typeFooter, deleting ? 50 : 100); // Faster while deleting
    }

    typeFooter(); // Starts the infinite loop for the footer typing effect

    console.log("Animation script loaded successfully.");
};
