// Função para alternar a visibilidade da sidebar (colapsar/expandir)
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar"); // Obtém o elemento com ID "sidebar"
    sidebar.classList.toggle("collapsed"); // Alterna a classe "collapsed" para mostrar ou esconder a sidebar
}

// Efeito de digitação no título (h1) ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    var h1 = document.querySelector("h1"); // Seleciona o elemento <h1>
    var text = "wikiNET"; // Texto que será digitado
    var icon = '<i class="bi bi-globe-americas"></i>'; // Ícone a ser adicionado ao final da digitação
    var index = 0; // Índice inicial para percorrer os caracteres

    function typeText() {
        if (index < text.length) { // Enquanto houver caracteres para adicionar
            h1.innerHTML = text.substring(0, index + 1); // Atualiza o texto no <h1>
            index++; // Avança para o próximo caractere
            setTimeout(typeText, 100); // Chama a função novamente após 100ms
        } else {
            h1.innerHTML += icon; // Quando terminar a digitação, adiciona o ícone ao final
        }
    }

    h1.innerHTML = ""; // Garante que o <h1> está vazio antes de iniciar a digitação
    typeText(); // Inicia o efeito de digitação
});

// ** Configuração dos dados para o gráfico **
const data = {
    labels: ['Hardware', 'Protocols', 'Softwares', 'Monitoring Tools'], // Rótulos do eixo X
    datasets: [{
        label: 'Porcentagem de Conteúdo', // Nome da legenda do conjunto de dados
        data: [41.67, 33.33, 16.67, 8.33], // Valores de porcentagem para cada categoria
        backgroundColor: ['#FF6F61', '#4E73DF', '#F39C12', '#1ABC9C'], // Cores das barras
        borderColor: ['#C44D4B', '#3756A0', '#B3730A', '#118570'], // Cores da borda das barras
        borderWidth: 1 // Largura da borda
    }]
};

// ** Configuração do gráfico **
const config = {
    type: 'bar', // Define o tipo do gráfico (barras)
    data: data, // Associa os dados configurados
    options: {
        responsive: false, // Define que o gráfico não se ajusta automaticamente ao tamanho da tela
        scales: {
            y: { beginAtZero: true } // Faz com que o eixo Y comece em 0
        },
        plugins: {
            legend: { position: 'top' }, // Posição da legenda no topo
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%'; // Exibe rótulo e porcentagem no tooltip
                    }
                }
            }
        }
    }
};

// ** Criação do gráfico **
var areaChart = new Chart(document.getElementById('areaChart'), config); // Renderiza o gráfico no elemento com ID "areaChart"

// ** Efeito camaleão para o subtítulo (h4) **
var subtitle = document.querySelector("h4"); // Seleciona o elemento <h4> que será afetado

setInterval(() => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Gera uma cor hexadecimal aleatória
    subtitle.style.transition = "color 1s ease"; // Define uma transição suave na mudança de cor
    subtitle.style.color = randomColor; // Aplica a nova cor ao subtítulo
}, 1000); // Muda a cor a cada 1 segundo
