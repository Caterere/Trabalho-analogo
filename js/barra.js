var ctx = document.getElementById("barra").getContext('2d');

var chartGraph = new Chart(ctx,{
    type: 'bar',
    data: {
        labels:["18-40","40-60"],
        datasets: [{
                label:"Soltos de Trabalho analogo a escravidão",
                data:[361,215],
                borderwidth: 1,
                borderColor: 'rgba(77,166,253,0.85)',
                backgroundColor: 'black'
            }]
    } 
});