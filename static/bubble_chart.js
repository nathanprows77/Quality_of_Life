


d3.selectAll('#pollution_year')
.on('change', selectYear)

function selectYear() {
  

  // Define SVG area dimensions
var svgWidth = 1100;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
top: 30,
right: 50,
bottom: 100,
left: 50
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

d3.selectAll("#Plot").remove()
// Select body, append SVG area to it, and set the dimensions
var svg = d3.select("#bubble-plot")
.append("svg")
.attr("height", svgHeight)
.attr("width", svgWidth)
.attr("id", "Plot")


// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
.attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

  var selector = document.getElementById('pollution_year')
  var year = selector.options[selector.selectedIndex].value
  
  



// console.log(AQI)
// var link = "http://127.0.0.1:5001/census/";
// var selector = document.getElementById('census_year')
// var year = selector.options[selector.selectedIndex].value.toLowerCase()

// Load data from hours-of-tv-watched.csv
d3.json("http://127.0.0.1:5001/pollution/"+year).then(function(pollutionData) {

console.log(pollutionData);
// console.log(censusData.povertyrate);
var AQI = pollutionData.median_AQI
// var unhealthyDays = pollutionData.unhealthy_days
// var veryUnhealthyDays = pollutionData.very_unhealthy_days
// var badDays = (hazardousDays + unhealthyDays + veryUnhealthyDays)

var state = pollutionData.state

var pollution_array = pollutionDictionary(AQI,state)

// console.log(poverty_array)

// Cast the poverty rate value to a number for each piece of censusData
// censusData.povertyrate.forEach(function(d) {
//   d.povertyrate = +d.povertyrate;
// });

// poverty_array.forEach(function(d) {
//   console.log(d.name)
// });

// Configure a band scale for the horizontal axis with a padding of 0.1 (10%)
  var xBandScale = d3.scaleBand()
  .domain(pollution_array.map(d => d.state))
  .range([0, chartWidth])
  .padding(0.1);


// Create a linear scale for the vertical axis.
var yLinearScale = d3.scaleLinear()
  .domain([0, d3.max(pollution_array, d => d.AQI)])
  .range([chartHeight, 0]);

// Create two new functions passing our scales in as arguments
// These will be used to create the chart's axes
var bottomAxis = d3.axisBottom(xBandScale);
var leftAxis = d3.axisLeft(yLinearScale).ticks(10);

// Append two SVG group elements to the chartGroup area,
// and create the bottom and left axes inside of them
chartGroup.append("g")
  .call(leftAxis);
  

chartGroup.append("g")

  .attr("transform", `translate(0, ${chartHeight})`)
  .call(bottomAxis)
  .selectAll("text")
  .attr("y", 0)
  .attr("x", 9)
  .attr("dy", ".35em")
  .attr("transform", "rotate(90)")
  .style("text-anchor", "start");

// Create one SVG rectangle per piece of tvData
// Use the linear and band scales to position each rectangle within the chart
chartGroup.selectAll(".bar")
  .exit()
  .remove()
  .data(pollution_array)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", d => xBandScale(d.state))
  .attr("y", d => yLinearScale(d.AQI))
  .attr("width", xBandScale.bandwidth())
  .attr("height", d => chartHeight - yLinearScale(d.AQI));

}).catch(function(error) {
console.log(error);
})};


function pollutionDictionary(median_AQI,state) {
var pollution_array = []
for (let x in median_AQI){
  // console.log(poverty[x])
  var pollution_dictionary = {}
  // .povertyrate = +d.povertyrate
  pollution_dictionary["median_AQI"] = parseFloat(median_AQI[x])
  pollution_dictionary["state"] = state[x]
  pollution_array.push(pollution_dictionary)
}
return pollution_array
console.log(pollution_array)}