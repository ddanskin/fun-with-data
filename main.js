const data = [23, 88, 30, 18, 56, 60, 73, 91, 40, 50];

//create bar chart using data
d3.select(".bar-chart")
    .selectAll("div")
        .data(data)
    .enter().append("div")
        .style("width", function(d) { return d * 10 + "px"; })
        .text(function(d) { return d; })

const tableData = [
    { date: '7/01/2018', price: 147.00 },
    { date: '7/02/2018', price: 189.00 },
    { date: '7/03/2018', price: 200.00 },
    { date: '7/04/2018', price: 290.00 },
    { date: '7/05/2018', price: 290.00 },
];

d3.select("tbody")
    .selectAll("tr")
    .data(tableData)
    .enter().append("tr")
    .html(function(d) {
        return "<th scope='row'>" + d.date + 
            "</th><td>" + "$" + d.price + "</td>"
    })

