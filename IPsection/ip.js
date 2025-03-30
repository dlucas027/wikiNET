document.addEventListener("DOMContentLoaded", () => {
    const columns = document.querySelectorAll(".column");

    // Efeito de fadeIn inicial (como você já tinha)
    columns.forEach((col, index) => {
        col.style.opacity = 0;
        setTimeout(() => {
            col.style.opacity = 1;
            col.style.transition = "opacity 0.5s ease-in-out";
        }, index * 200);
    });

    // Adiciona efeito de hover via JS
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

    console.log("Welcome to the Networking World 🌐");
});
