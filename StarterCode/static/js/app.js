d3.json("samples.json").then(function(data) {
   // console.log(data.samples);
    let id ="940"
    let xArry = []
    let yArray= []

    for (let i=0; i< data.samples.length; i++)
    {
        if (data.samples[i].id == id)
        {
            console.log('v1');            
          //  console.log(data.samples[i])
          for (let j=0; j < 10 ; j++)
          {
            console.log(data.samples[i].otu_ids[j]);
            xArry.push(data.samples[i].sample_values[j]);
            yArray.push(data.samples[i].otu_ids[j])
           
          }

        }
        console.log(xArry)
        console.log(yArray)
    }  

   plotMetric(xArry,yArray )
});

console.log('i like blue');


function plotMetric(xArray, yArray){

    let trace1 = {
      x: xArray,
      y: yArray,
      type: "bar",
      orientation: "h" 
    }     
  
    let plotdata = [trace1]
  
    // Pass metric to chart title
    let layout = {
      title: `give title later Mujhe?`,
      xaxis:{
        autorange:'reversed'
    },
      yaxis:{
         side:'right'
    } 
    };
  
    Plotly.newPlot("plot",plotdata , layout);
  }
