

var ctx = document.getElementById('daily').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [70, 30,],
            backgroundColor: [
                'red',
                'rgba(54, 162, 235, 0.2)',
               
            ],
          
            borderWidth: 1,
            cutout: "75%"
        }]
    },
  
});

