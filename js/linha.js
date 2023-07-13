var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["18-40","40-60"],
        datasets: [{
            label: "Soltos de Trabalho analogo a escravidão",
            data: [361,215],
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1,
            
        }]
    }
    // ,
    // options: {
    //     // responsive: true,
    //     scales: {
    //         y: {
    //             beginAtZero: true
    //         }
    //     }
    // }
});