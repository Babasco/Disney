var trace = [{
    x: [1937,1947,1957,1967,1977,1987,1997,2007,2017,2021],
    y: [1490000,1443875,2600000,3458333,6350000,15076923,29907317,65180000,116191428,163846154],
    mode: 'lines+markers'}];

var layout = {
    dragmode: 'zoom',
    showlegend: 'false',
    xaxis: {
       title: "Decades",
        },
    yaxis: {
       title: "Cost",
        }
    
};

Plotly.newPlot('disney_fig_2', trace, layout);