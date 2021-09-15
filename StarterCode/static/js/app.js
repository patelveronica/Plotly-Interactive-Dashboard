// read JSON file with d3
d3.json("samples.json").then(function(data) {
    console.log(data);
    plotMetric(data)
});

function plotMetric(data){

    let trace1 = {
      x: data.sample_values,
      y: data.otu_ids,
      type: "bar"
    }
  
    let plotdata = [trace1]
  
    // Pass metric to chart title
    let layout = {
      title: `give title later`
    };
  
    Plotly.newPlot("plot",plotdata , layout);
  }
