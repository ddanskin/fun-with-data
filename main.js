const data = [23, 88, 30, 18, 56, 60, 73, 91, 40, 50];

//create bar chart using data
d3.select(".chart")
    .selectAll("div")
        .data(data)
    .enter().append("div")
        .style("width", function(d) { return d * 10 + "px"; })
        .text(function(d) { return d; })
