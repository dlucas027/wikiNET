document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento canvas onde o gráfico será renderizado
    var ctx = document.getElementById('myChart').getContext('2d');

    // Cria um novo gráfico do tipo 'bar' (barras) usando a biblioteca Chart.js
    var myChart = new Chart(ctx, {
        type: 'bar', // Define o tipo do gráfico como "barras"
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], // Rótulos do eixo X (meses)
            datasets: [{
                label: 'Consumo de Dados (GB)', // Nome do conjunto de dados (aparece na legenda)
                data: [12, 19, 3, 5, 2], // Valores correspondentes aos meses
                
                // Cores de fundo das barras (uma cor para cada mês)
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',  // Vermelho
                    'rgba(54, 162, 235, 0.5)',  // Azul
                    'rgba(255, 206, 86, 0.5)',  // Amarelo
                    'rgba(75, 192, 192, 0.5)',  // Verde água
                    'rgba(153, 102, 255, 0.5)'  // Roxo
                ],

                // Cores das bordas das barras (uma cor para cada mês)
                borderColor: [
                    'rgba(255, 99, 132, 1)',  
                    'rgba(54, 162, 235, 1)',  
                    'rgba(255, 206, 86, 1)',  
                    'rgba(75, 192, 192, 1)',  
                    'rgba(153, 102, 255, 1)'  
                ],

                borderWidth: 1 // Espessura da borda das barras
            }]
        },
        options: {
            responsive: true, // Permite que o gráfico se ajuste ao tamanho da tela
            maintainAspectRatio: false, // Permite alterar a proporção do gráfico

            scales: {
                y: {
                    beginAtZero: true // Faz com que o eixo Y comece do zero
                }
            }
        }
    });
});
