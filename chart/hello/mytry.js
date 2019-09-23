const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    // purple disappear when 'horizontalBar'
    data: {
        labels: ['Red','Blue','Yellow','Green','Purple'],
        datasets: [{
            label: '# of Votes',
            data: [10,4,3,2,1],
            backgroundColor: [
                'rgba(255,99,132,0.2)',
                //red
                'rgba(55,162,235,0.2)',
                //blue
                'rgba(255,206,86,0.2)',
                //yellow
                'rgba(75,192,192,0.2)',
                //green
                'rgba(153,102,255,0.2)',
                //purple
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(55,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(75,192,192,1)',
                'rgba(153,102,255,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                    // need to push array[0]
                }
            }]
        }
    }
})
