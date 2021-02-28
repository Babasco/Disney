Plotly.d3.csv(
  "https://raw.githubusercontent.com/Babasco/Disney/master/Dataset/Movies_Evolution.csv",
  function(rows) {
    var x = [],
      y = [],
      s = [],
      c = [],
      t = [];

    for (var i = 0; i < rows.length; i++) {
      row = rows[i];
      y.push(row["PNL Ratio"]);
      x.push(row["Release"]);
      s.push(row["BoxOff"]);
      c.push(row["imdb"]);
      t.push(row["title"]);
    };

    Plotly.newPlot('disney_fig_1', {
      data: [
        {
          type: "scatter",
          mode: "markers",
          x: x,
          y: y,
          text: t,
          marker: { size: s, sizeref: 1000000, sizemode: "area",color: c, cmin:5,cmax:9,showscale:true,colorbar:{title:{text:"Rating"}}},
          hovertemplate:
            "<b>%{text}</b><br><br>" +
            "%{yaxis.title.text}: %{y:,}<br>" +
            "Box Office: %{marker.size:$,.0f}<br>" +
            "<extra></extra>"
        }
      ],
      layout: {
        dragmode: 'zoom',
        xaxis: {
          title: "Release Date",
        },
        yaxis: {
          title: "Benefit / Cost",
        }
      },
      config: { responsive: true }
    });
  }
);