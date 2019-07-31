# Chart.js Hello
## Min
need this url. Use 2.0 over.
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0" ></script>

## Problem
canvas width setting will not be applied...  
test.html set width and height 400px, but returns 1350px.

## grammer
set canvas  
```
const ctx = document.getElementById('chart').getContext('2d');
```
make chart
```
const chartName = new Chart(ctx, {
        type: 'hoge',
        data: {
            labeles: [],
            datasets: [{
                lable: 'DataName',
                data: [1,2,3,4,],
                backgroundColor: [
                    '#FFF'
                ],
                borderColor: [
                    '#FFF'
                ],
                borderWidth: num
            }]
        },
        options:

        })
```

## tips
Using HEX disables opacity,   
use RGBA like 'rgba(0,0,0,0.1)'  
use 0.2 alpha to look good.  
use `options.scales.yAxes.ticks.beginAtZero:true`  
to start data from 1.  

## BAR
### Usage
Define `type` as `bar`  
Define data num,   
`labels` : ['hoge','huga','foo'], for data names  
`data`: [0,1,2], for data values   
`backgroundColor`:  
['rgba(0,0,0,0.1)','rgba(0,0,0,0.1)','rgba(0,0,0,0.1)',]  
for each data's background color  
`borderColor` :same as that.  


`options` like `beginAtZero`, 
