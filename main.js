const barData = [23, 88, 30, 18, 56, 60, 73, 91, 40, 50];

let height = 400,
    width = 600,
    barWidth = 50,
    barOffset = 5;

let yScale = d3.scaleLinear()
    .domain([0, d3.max(barData)])
    .range([0, height]);

d3.select('#barChart')
    .append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', '#CCCCCC')
    .selectAll('rect').data(barData)
        .enter().append('rect')
            .style('fill','#1C86EE')
            .attr('x', function(d, i) { 
                return i * (barWidth + barOffset); 
            })
            .attr('y', function(d) { 
                return height - yScale(d); 
            })
            .attr('height', function(d) { 
                    return yScale(d); 
            })
            .attr('width', barWidth)
            .text(function(d) {
                return d;
            });

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

