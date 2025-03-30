document.addEventListener("DOMContentLoaded", () => {
    const columns = document.querySelectorAll(".column");

    columns.forEach((col, index) => {
        col.style.opacity = 0;
        setTimeout(() => {
            col.style.opacity = 1;
            col.style.transition = "opacity 0.5s ease-in-out";
        }, index * 200);
    });

    console.log("Welcome to the Networking World 🌐");
});
