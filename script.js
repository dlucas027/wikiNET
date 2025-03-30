function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("collapsed");
}

// Dados do gráfico em formato de objeto
const data = {
    // Rótulos para cada fatia do gráfico
    labels: ['Hardware', 'Protocols', 'Softwares', 'Monitoring Tools'],
    
    // O conjunto de dados que será exibido no gráfico
    datasets: [{
        // Rótulo do conjunto de dados (usado na legenda)
        label: 'Porcentagem de Conteúdo',
        
        // Dados reais para cada área (porcentagem calculada)
        data: [41.67, 33.33, 16.67, 8.33],
        
        // Cores de fundo para cada fatia do gráfico
        backgroundColor: ['#FF6F61', '#4E73DF', '#F39C12', '#1ABC9C'],
        
        // Deslocamento do hover (efeito de destaque quando o mouse passa sobre uma fatia)
        hoverOffset: 10
    }]
};


// Configuração do gráfico, como o tipo e as opções de exibição
const config = {
    // Tipo de gráfico: neste caso, um gráfico de pizza (pie chart)
    type: 'pie',

    // Os dados a serem exibidos no gráfico
    data: data,

    // Opções de personalização do gráfico
    options: {
        // Faz o gráfico ser responsivo, adaptando-se ao tamanho da tela
        responsive: false,
        
        // Configurações para os plugins do gráfico
        plugins: {
            // Configura a posição da legenda (topo do gráfico)
            legend: {
                position: 'bottom',
            },
            
            // Configura as dicas (tooltips) que aparecem quando o usuário passa o mouse sobre uma fatia
            tooltip: {
                callbacks: {
                    // Personaliza o conteúdo da dica para exibir a porcentagem com o rótulo
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%'; // Exibe a porcentagem
                    }
                }
            }
        }
    }
};

// Criação do gráfico, passando o contexto do canvas e as configurações
var areaChart = new Chart(
    document.getElementById('areaChart'),  // Elemento canvas onde o gráfico será desenhado
    config  // Configuração do gráfico definida acima
);
