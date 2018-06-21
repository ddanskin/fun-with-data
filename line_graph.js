const dataArray = [
    {midpoint:20,percent:1},{midpoint:25,percent:2},
    {midpoint:30,percent:5},{midpoint:35,percent:8},
    {midpoint:40,percent:16},{midpoint:45,percent:16},
    {midpoint:50,percent:16},{midpoint:55,percent:18},
    {midpoint:60,percent:13},{midpoint:65,percent:3},
    {midpoint:70,percent:2}
];

let graphMargin = { left:50, right:50, top:40, bottom:30 };

let yLineScale = d3.scaleLinear()
    .domain([0, 20])
    .range([height, 0]);

let xLineScale = d3.scaleLinear()
    .domain([0, 80])
    .range([0, width]);

let yLineAxis = d3.axisLeft(yLineScale)
    .ticks(4);

let xLineAxis = d3.axisBottom(xLineScale)
    .ticks(14);

let lineGraph = d3.select('#lineGraph').append('svg')
    .attr('height', height + graphMargin.top + graphMargin.bottom)
    .attr('width', width + graphMargin.left + graphMargin.right);

let graphGroup = lineGraph.append('g')
    .attr('transform', 'translate(' + graphMargin.left + ',' + graphMargin.top + ')');

let line = d3.line()
    .x(function(d, i){ return xLineScale(d.midpoint); })
    .y(function(d, i){ return yLineScale(d.percent); });
    
graphGroup.append('path')
    .attr('fill', 'none')
    .attr('stroke', '#000')
    .attr('d', line(dataArray));

graphGroup.append('g')
    .attr('class', 'axis y')
    .call(yLineAxis);

graphGroup.append('g')
    .attr('class', 'axis x')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xLineAxis);
