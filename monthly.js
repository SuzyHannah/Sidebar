

var ktx = document.getElementById('monthly').getContext('2d');
var myChart = new Chart(ktx, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [20, 80,],
            backgroundColor: [
                'red',
                'rgba(54, 162, 235, 0.2)',
               
            ],
          
            borderWidth: 1,
            cutout: "75%"
        }]
    },
  
});