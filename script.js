function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("collapsed");
}

// Dados do gráfico em formato de objeto
const data = {
    // Rótulos para cada categoria do gráfico
    labels: ['Hardware', 'Protocols', 'Softwares', 'Monitoring Tools'],
    
    // O conjunto de dados que será exibido no gráfico
    datasets: [{
        // Rótulo do conjunto de dados (usado na legenda)
        label: 'Porcentagem de Conteúdo',
        
        // Dados reais para cada categoria (porcentagem calculada)
        data: [41.67, 33.33, 16.67, 8.33],
        
        // Cores de fundo das barras
        backgroundColor: ['#FF6F61', '#4E73DF', '#F39C12', '#1ABC9C'],
        
        // Cor da borda das barras
        borderColor: ['#C44D4B', '#3756A0', '#B3730A', '#118570'],
        
        // Espessura da borda
        borderWidth: 1
    }]
};

// Configuração do gráfico
const config = {
    // Tipo de gráfico: alterado para 'bar' (barras)
    type: 'bar',

    // Os dados a serem exibidos no gráfico
    data: data,

    // Opções de personalização do gráfico
    options: {
        // Faz o gráfico ser responsivo
        responsive: false,
        
        // Configurações dos eixos
        scales: {
            y: {
                beginAtZero: true // Garante que o eixo Y começa no zero
            }
        },
        
        // Configurações dos plugins
        plugins: {
            legend: {
                position: 'top', // Posição da legenda no topo
            },
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

// Criação do gráfico, passando o contexto do canvas e as configurações
var areaChart = new Chart(
    document.getElementById('areaChart'), // Elemento canvas onde o gráfico será desenhado
    config // Configuração do gráfico definida acima
);
