// read JSON file with d3
d3.json("samples.json").then(function(data) {
    console.log(data);
    plotMetric(data)
});

function plotMetric(data){

    let trace1 = {
      x: data.samples.sample_values,
      y: data.samples.otu_ids,
      type: "bar"
    }
    console.log(data.samples.sample_values);
  
    let plotdata = [trace1]
  
    // Pass metric to chart title
    let layout = {
      title: `give title later`
    };
  
    Plotly.newPlot("plot",plotdata , layout);
  }
