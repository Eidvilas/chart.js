





console.log('Chart.JS loaded');

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1,
        } ,{
            label: '# of Votes',
            data: [16, 12, 13, 5, 8, 1],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1,
        }
        ]
    }

    

});





function addData() {

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var salary = document.getElementById('salary').value;
    var weight = document.getElementById('weight').value;

    myChart.data.labels.push(name);


    myChart.data.datasets[0].data.push(age);
    };
    myChart.data.datasets[1].data.push(salary);
    };
    myChart.data.datasets[2].data.push(weight);
    };


    myChart.update();

    }



function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

function clear(chart) {
    chart.data.labels=[];
    chart.data.datasets[0].data=[];
    chart.update();
    
}

console.log(myChart);

