d3.json("samples.json").then(function(data) {
   console.log(data.samples)
   });
var sample = Object.values(samples.sample);
console.log(sample);

var labels = Object.keys(samples.sample.otu_labels);
console.log(labels);
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
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
