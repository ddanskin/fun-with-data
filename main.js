const barData = [18, 23, 56, 80, 30, 60, 73, 91, 40, 50];

let height = 400,
    width = 600,
    barWidth = 50,
    barOffset = 5;

let xScale = d3.scaleBand()
    .domain(barData)
    .paddingInner(.1)
    .paddingOuter(.3)
    .range([0, width]);

let yScale = d3.scaleLinear()
    .domain([0, d3.max(barData)])
    .range([0, height]);

let colors = d3.scaleLinear()
    .domain([0, d3.max(barData)])
    .range(['#B3E5FC', '#01579B'])

// build barChart
let barChart = 
d3.select('#barChart')
    .append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', '#CCCCCC')
    .selectAll('rect').data(barData)
        .enter().append('rect')
            .attr('fill',function(d) {
                return colors(d);
            })
            .attr('x', function(d, i) { 
                return xScale(d); 
            })
            .attr('y', height)
            .attr('height', 0)
            .attr('width', function(d) {
                return xScale.bandwidth();
            })
            .text(function(d) {
                return d;
            })
            .on('mouseover', function(d) {
                d3.select(this)
                    .style('opacity', .5)
            })
            .on('mouseout', function(d) {
                d3.select(this)
                    .style('opacity', 1)
            });

// create bar chart with transition animation
barChart.transition()
    .attr('y', function(d) { 
        return height - yScale(d); 
    })
    .attr('height', function(d) { 
        return yScale(d); 
    })
    .delay(function(d, i) {
        return i * 20;
    })
    .duration(1000)
    .ease(d3.easeBounceOut);

const tableData = [
    { date: '7/01/2018', price: 147.00 },
    { date: '7/02/2018', price: 189.00 },
    { date: '7/03/2018', price: 200.00 },
    { date: '7/04/2018', price: 290.00 },
    { date: '7/05/2018', price: 290.00 },
];

// create table of dates and prices
d3.select('tbody')
    .selectAll('tr')
    .data(tableData)
    .enter().append('tr')
    .html(function(d) {
        return '<th scope="row">' + d.date + 
            '</th><td>' + '$' + d.price + '</td>'
    });

// create svg with rectangle
d3.select('#visual')
    .append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', '#8B008B')
        .append('rect')
            .attr('x', 240)
            .attr('y', 100)
            .attr('width', 200)
            .attr('height', 200)
            .style('fill', '#FF00FF');
// add circle to svg
d3.select('#visual svg')
    .append('circle')
        .attr('cx', 450)
        .attr('cy', 100)
        .attr('r', 80)
        .style('fill', '#8A2BE2');

// add triangle to svg
d3.select('#visual svg')
    .append('g')
        .append('polyline')
            .attr('points', '520 380, 550 330, 580 380')
            .style('fill', '#BA55D3');

// add text to svg
d3.select('#visual svg')
    .append('text')
        .attr('x', 30)
        .attr('y', 30)
        .attr('font-family', 'Monospace')
        .attr('font-size', 24)
        .style('fill', '#fff')
        .text('Hello, World!');

