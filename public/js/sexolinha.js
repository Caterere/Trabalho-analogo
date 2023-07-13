var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Mulher","Homem"],
        datasets: [{
            label: "Soltos de Trabalho analogo a escravidão",
            data: [26,550],
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1,
            
        }]
    }

});