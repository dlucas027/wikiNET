//Mecanismo do menu
function toggleSidebar() {  //função chamada toggleSidebar será executada quando o botão ☰ for clicado no HTML 
    const sidebar = document.getElementById("sidebar"); //pega um elemento HTML com o atributo

    // Alterna (liga/desliga) a classe "collapsed"
    // Se tiver, remove; se não tiver, adiciona
    sidebar.classList.toggle("collapsed");
}
const data = {
    labels: ['DevOps', 'Redes', 'Cibersegurança', 'Desenvolvimento'],
    datasets: [{
        label: 'Áreas de TI',
        data: [25, 20, 15, 40], // Porcentagem de profissionais em cada área
        backgroundColor: ['#FF6F61', '#4E73DF', '#F39C12', '#1ABC9C'], // Cores do gráfico
        hoverOffset: 10
    }]
};

const config = {
    type: 'pie', // Tipo de gráfico (Pizza)
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%'; // Exibe a porcentagem
                    }
                }
            }
        }
    }
};

// Cria o gráfico no elemento canvas
var areaChart = new Chart(
    document.getElementById('areaChart'),
    config
);
