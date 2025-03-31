// Quando a página for totalmente carregada, a função será executada
window.onload = function() {

    // Efeito de fadeIn para as colunas
    const columns = document.querySelectorAll(".column");  // Seleciona todas as seções com a classe 'column'
    
    columns.forEach((col, index) => {
        col.style.opacity = 0;  // Inicializa a opacidade de cada coluna em 0 (invisível)
        
        // Define um tempo de delay antes de mostrar cada coluna
        setTimeout(() => {
            col.style.opacity = 1;  // Altera a opacidade para 1 (tornando a coluna visível)
            col.style.transition = "opacity 0.5s ease-in-out";  // Adiciona uma transição suave de 0.5s
        }, index * 200);  // Atraso de 200ms para cada coluna subsequente
    });

    // Adiciona efeito de hover via JS
    columns.forEach(column => {
        // Quando o mouse entra na coluna (mouseenter)
        column.addEventListener("mouseenter", () => {
            column.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";  // Define a transição suave
            column.style.transform = "translateY(-5px)";  // Move a coluna para cima 5px
            column.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.15)";  // Aplica uma sombra ao redor da coluna
        });

        // Quando o mouse sai da coluna (mouseleave)
        column.addEventListener("mouseleave", () => {
            column.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";  // Define a transição suave
            column.style.transform = "translateY(0)";  // Restaura a posição da coluna
            column.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.08)";  // Restaura a sombra original
        });
    });

    // Efeito de digitação no título (h1)
    var h1 = document.querySelector("#title");  // Seleciona o h1 com ID "title"
    var text = "OLT vs Switch: What's the Difference?";  // Texto a ser animado
    var index = 0;  // Contador para controlar a posição do caractere

    // Função para adicionar um caractere por vez ao título
    function typeText() {
        if (index < text.length) {  // Verifica se ainda há caracteres para adicionar
            h1.innerHTML += text.charAt(index);  // Adiciona o próximo caractere
            index++;  // Incrementa o índice
            setTimeout(typeText, 100);  // Chama a função novamente após 100ms
        }
    }
    typeText();  // Inicia o efeito de digitação assim que a página for carregada

    // Efeito camaleão para o subtítulo (p)
    var subtitle = document.querySelector(".subtitle");  // Seleciona o subtítulo com a classe 'subtitle'
    
    // Define um intervalo para alterar as cores do subtítulo a cada 1 segundo
    setInterval(() => {
        // Gera uma cor aleatória em hexadecimal
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        subtitle.style.transition = "color 1s ease";  // Adiciona transição suave para a cor
        subtitle.style.color = randomColor;  // Altera a cor do texto para a cor gerada aleatoriamente
    }, 1000);  // Intervalo de 1 segundo (1000ms)

    console.log("Welcome to the Networking World 🌐");  // Mensagem no console de boas-vindas
};
