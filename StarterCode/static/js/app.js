d3.json("samples.json").then(function(data) {
   Samples = (data.samples)
   });

let sortedotus = Samples.sort((a,b) => b.otu_ids - a.otu_ids );
console.log(sortedotus);

sliceData = sortedotus.slice(0,10);

reverseData = sliceData.reverse();

   // Trace1 for the Greek Data
let trace1 = {
  x: reversedData.map(object => object.sampl_values),
  y: reversedData.map(object => object.otu_ids),
  text: reversedData.map(object => object.otu_lables),
  name: "Greek",
  type: "bar",
  orientation: "h"
};
// Data array
// `data` has already been defined, so we must choose a new name here:
let traceData = [trace1];

// Apply a title to the layout
let layout = {
  title: "New Greek gods search results",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};
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
