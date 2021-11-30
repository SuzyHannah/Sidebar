

var jtx = document.getElementById('yearly').getContext('2d');
var mychart = new Chart(jtx, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [15, 85,],
            backgroundColor: [
                'red',
                'rgba(54, 162, 235, 0.2)',
               
            ],
          
            borderWidth: 1,
            cutout: "75%"
        }]
    },
  
});