console.log(companies)
var arr = companies.map(companies => companies.industry);
var counts = {};

for (var num of arr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts);
var keys = Object.keys(counts).slice(0, 10).reverse();
var values = Object.values(counts).slice(0, 10).reverse();
console.log(values)
// create pie chart
//var trace3 = {
 //   labels: keys,
   // values: values,
    //type: "pie",
//}

//var data = [trace3]


//Plotly.newPlot("pie", data)


// create trace variable for the plot
var trace1 = {
    x: keys,
    y: values,
    type:"bar",
};

// create data variable
var data = [trace1];


// create the bar plot
Plotly.newPlot("pie", data);
