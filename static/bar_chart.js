


d3.selectAll('#census_year')
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

d3.selectAll("#barPlot").remove()
// Select body, append SVG area to it, and set the dimensions
var svg = d3.select("#bar-plot")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth)
  .attr("id", "barPlot")


// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);
 
    var selector = document.getElementById('census_year')
    var year = selector.options[selector.selectedIndex].value
    
    



console.log(year)
// var link = "http://127.0.0.1:5001/census/";
// var selector = document.getElementById('census_year')
// var year = selector.options[selector.selectedIndex].value.toLowerCase()

// Load data from hours-of-tv-watched.csv
d3.json("https://quality-of-life-by-state.herokuapp.com/census/"+year).then(function(censusData) {
console.log(censusData)
  // console.log(censusData.povertyrate);
  var poverty = censusData.PovertyRate

  var name = censusData.Name

  var poverty_array = povertyDictionary(poverty,name)

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
    .domain(poverty_array.map(d => d.name))
    .range([0, chartWidth])
    .padding(0.1);


  // Create a linear scale for the vertical axis.
  var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(poverty_array, d => d.povertyrate)])
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
    .data(poverty_array)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => xBandScale(d.name))
    .attr("y", d => yLinearScale(d.povertyrate))
    .attr("width", xBandScale.bandwidth())
    .attr("height", d => chartHeight - yLinearScale(d.povertyrate));

    chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - chartMargin.left)
    .attr("x", 0 - (chartHeight / 2))
    .attr("dy", "1em")
    .attr("class", "aText")
    .text("Population In Poverty (%)");

}).catch(function(error) {
  console.log(error);
})};


function povertyDictionary(poverty,name) {
  var poverty_array = []
  for (let x in poverty){
    // console.log(poverty[x])
    var poverty_dictionary = {}
    // .povertyrate = +d.povertyrate
    poverty_dictionary["povertyrate"] = parseFloat(poverty[x])
    poverty_dictionary["name"] = name[x]
    poverty_array.push(poverty_dictionary)
  }
  return poverty_array}