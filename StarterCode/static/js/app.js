d3.json("samples.json").then(function(data) {
  var newdata = data.samples;
   console.log(newdata);

//  filter sample values by ID


// get top 10 records
var samplesvalues = samples.sample_value.slice(0, 10).reverse();
console.log(samplesvalues);

// get top 10 OTU ids for plot
var otu_topten = samples.otu_ids.slice(0, 10).reverse();
console.log(otu_topten);

// get otu ids for plot
var otu_ids = samples.map(id => "OTU" + id);
console.log(otu_ids);

// get top 10 otu labels for plot
var labels = samples.otu_labels.slice(0, 10);
console.log(labels);
});




   
   
   
   
   
   
