const dataArray = [
    {x:20,y:1},{x:25,y:2},{x:30,y:5},{x:35,y:8},
    {x:40,y:16},{x:45,y:16},{x:50,y:16},{x:55,y:18},
    {x:60,y:13},{x:65,y:3},{x:70,y:2}];

let lineGraph = d3.select('#lineGraph').append('svg')
    .attr('height', height)
    .attr('width', width);

let line = d3.line()
    .x(function(d, i){ return d.x; })
    .y(function(d, i){ return height - d.y; })

lineGraph.append('path')
    .attr('fill', 'none')
    .attr('stroke', '#000')
    .attr('d', line(dataArray));
