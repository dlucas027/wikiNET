// Quando a página for totalmente carregada, a função será executada
window.onload = function () {
    // Efeito de fadeIn para as colunas
    const columns = document.querySelectorAll(".column");

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

    // Efeito de digitação no título (h1)
    var h1 = document.querySelector("#title");
    var text = "Wi-Fi Types and Differences";
    var index = 0;

    function typeText() {
        if (index < text.length) {
            h1.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }
    typeText();

    // Efeito camaleão para o subtítulo (p)
    var subtitle = document.querySelector(".subtitle");

    setInterval(() => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        subtitle.style.transition = "color 1s ease";
        subtitle.style.color = randomColor;
    }, 1000);

    // Efeito de digitação em loop no footer
    var footer = document.querySelector("footer p");
    var footerText = "Learn Networking with Confidence!";
    var footerIndex = 0;
    var deleting = false; // Para controlar a digitação e a exclusão do texto

    function typeFooter() {
        if (!deleting) {
            // Digitando
            footer.innerHTML = footerText.substring(0, footerIndex);
            footerIndex++;
            if (footerIndex > footerText.length) {
                deleting = true; // Começar a deletar depois de terminar a digitação
                setTimeout(typeFooter, 4000); // Espera 2s antes de apagar
                return;
            }
        } else {
            // Apagando
            footer.innerHTML = footerText.substring(0, footerIndex);
            footerIndex--;
            if (footerIndex === 0) {
                deleting = false; // Voltar a digitar
            }
        }
        setTimeout(typeFooter, deleting ? 50 : 100); // Mais rápido ao apagar
    }

    typeFooter(); // Inicia o loop infinito no footer

    console.log("Animation script loaded successfully.");
};
