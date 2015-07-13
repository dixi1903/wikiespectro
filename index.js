var dblocation = "https://docs.google.com/spreadsheets/d/1F-T6Z519mYgB8XxmH-oWmXmpiRT1R9N-61XlexvTACc/edit?usp=sharing";
    
function fillChart(response) {
    "use strict";
    
    var data, options, chart;
    
    data = response.getDataTable();
    
     options = {
        title: "Espectro",
        hAxis: {title: "Economico", 
                maxValue: 10,
                minValue: -10,
                minorGridlines: {count: 4}
                },
        vAxis: {title: "Libertades personales",
                maxValue: 10,
                minValue: -10,
                minorGridlines: {count: 4}
               },
        explorer: { actions: ['dragToZoom', 'rightClickToReset'] },
        bubble: {textStyle: {fontSize: 11},
                 maxSize: 2
                }
    };
   

    chart = new google.visualization.BubbleChart(document.getElementById("espectrochart"));
    
    chart.draw(data, options)
}

function readData() {
    "use strict";
    var query;
    
    
    query = new google.visualization.Query(dblocation);
    query.setQuery("select *"
                  );
    query.send(fillChart);
}

$(document).ready(function () { 
    "use strict";
    
    readData();
});