import { 
  select, 
  csv,
  scaleLinear,
  scaleTime, 
  extent,
  axisLeft,
  axisBottom,
  line,
  curveBasis,
} from 'd3';
import './line_chart.css';

const svg = select('svg');

const height = +svg.attr('height'); //return a number
const width = +svg.attr('width');

const render = data => {
  const title = 'A week in San Fransisco';
  const xValue = d => d.timestamp;
  const xAxisLabel = 'Time'
  const yValue = d => d.temperature;
  const yAxisLabel = 'Temperature';
  const circleRadius = 6;
   
  const margin = {top: 60, right: 40, bottom: 90, left: 105};
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  
  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0])
    .nice();

  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const xAxis = axisBottom(xScale)
    .tickSize(-innerHeight)
    .tickPadding(15);

  const yAxis = axisLeft(yScale)
    .tickSize(-innerWidth)
    .tickPadding(5);;


  const yAxisG = g.append('g')
    .call(yAxis);

  yAxisG.select('.domain').remove();

  yAxisG.append('text')
      .attr('class', 'axis-label')
      .attr('y', -60)
      .attr('x', -innerHeight/2 )
      .attr('fill','black')
      .attr('transform', `rotate(-90)`)
      .attr('text-anchor', 'middle')
      .text(yAxisLabel);

  const xAxisG = g.append('g').call(xAxis)
    .attr('transform', `translate(0,${innerHeight})`);

  xAxisG.select('.domain').remove();

  xAxisG.append('text')
    .attr('class', 'axis-label')
    .attr('y', 75)
    .attr('x', innerWidth/2)
    .attr('fill','black')
    .text(xAxisLabel);

  const lineGenerator = line()
    .x(d => xScale(xValue(d)))
    .y(d => yScale(yValue(d)))
    .curve(curveBasis);

  g.append('path')
    .attr('class', 'line-path')
    .attr('d', lineGenerator(data));

  g.append('text')
  .attr('class', 'title')
    .attr('y', -10)
    .text(title);
};

const showLineChart = boolean => {
  csv('https://vizhub.com/curran/datasets/temperature-in-san-francisco.csv')
    .then(data=> {
      data.forEach(d => {
        d.temperature = +d.temperature; //parseInt
        d.timestamp = new Date(d.timestamp);
      });
      if(boolean){ 
        render(data);
      };
    })
};

export { showLineChart };

