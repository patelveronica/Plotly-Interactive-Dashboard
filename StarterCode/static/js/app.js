d3.json("samples.json").then(function(data) {
   console.log(data.samples)
   });
console.log("-I MISS YOU--");
function OTUs(otusdata) {
    return otusdata.otu_ids;
};
console.log(OTUs);

let toptenotus = data.sample.filter(OTUs);
console.log(toptenotus);

let trace1= {
    x: toptenotus.map(row=> row.smapl_values),
    y: toptenotus.map(row=> row.out_ids),
    type: "bar",
    orientation: "h"
};
// Data trace array
let traceData = [trace1];

// Apply title to the layout
let layout = {
  title: "Top 10 OTUs Data"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
//    // console.log(data.samples);
//     let id ="940"
//     let xArry = []
//     let yArray= []

//     for (let i=0; i< data.samples.length; i++)
//     {
//         if (data.samples[i].id == id)
//         {
//             console.log('v1');            
//           //  console.log(data.samples[i])
//           for (let j=0; j < 10 ; j++)
//           {
//             console.log(data.samples[i].otu_ids[j]);
//             xArry.push(data.samples[i].sample_values[j]);
//             yArray.push(data.samples[i].otu_ids[j])
           
//           }

//         }
//     }  

//    plotMetric(xArry,yArray )
// });

// console.log('i like blue');

// function plotMetric(xArray, yArray){

//     let trace1 = {
//       x: xArray,
//       y: yArray,
//       type: "bar",
//       orientation: "h" 
//     }     
  
//     let plotdata = [trace1]
  
//     // Pass metric to chart title
//     let layout = {
//       title: `give title later Mujhe?`,
//       yaxis:{
//          side:'left'
//     } 
//     };
  
//     Plotly.newPlot("plot",plotdata , layout);
//   }
