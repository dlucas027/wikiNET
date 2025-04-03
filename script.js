function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("collapsed");
}

// Typing effect on the title (h1)
document.addEventListener("DOMContentLoaded", function () {
    var h1 = document.querySelector("h1");
    var text = "wikiNET";
    var icon = '<i class="bi bi-globe-americas"></i>'; // Ícone separado
    var index = 0;

    function typeText() {
        if (index < text.length) {
            h1.innerHTML = text.substring(0, index + 1); // Atualiza o texto sendo digitado
            index++;
            setTimeout(typeText, 100);
        } else {
            h1.innerHTML += icon; // Adiciona o ícone após a digitação
        }
    }

    h1.innerHTML = ""; // Garante que o h1 está vazio antes de iniciar
    typeText();
});

// Dados do gráfico em formato de objeto
const data = {
    labels: ['Hardware', 'Protocols', 'Softwares', 'Monitoring Tools'],
    datasets: [{
        label: 'Porcentagem de Conteúdo',
        data: [41.67, 33.33, 16.67, 8.33],
        backgroundColor: ['#FF6F61', '#4E73DF', '#F39C12', '#1ABC9C'],
        borderColor: ['#C44D4B', '#3756A0', '#B3730A', '#118570'],
        borderWidth: 1
    }]
};

// Configuração do gráfico
const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: false,
        scales: {
            y: { beginAtZero: true }
        },
        plugins: {
            legend: { position: 'top' },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
};

// Criação do gráfico
var areaChart = new Chart(document.getElementById('areaChart'), config);

// Chameleon effect for the subtitle (p)
var subtitle = document.querySelector("h4");

setInterval(() => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    subtitle.style.transition = "color 1s ease";
    subtitle.style.color = randomColor;
}, 1000);
