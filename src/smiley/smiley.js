import { select, arc, line } from 'd3';

const svg = select('svg');


const height = +svg.attr('height'); //return a number
const width = +svg.attr('width');

const smileAtTheCamera = boolean => {
  if (boolean) { 
    const g =svg.append('g')
      .attr('transform',`translate(${width / 2}, ${height / 2})`);

    const circle =  g.append('circle')
      .attr('r', height/2)    
      .attr('fill', 'yellow')
      .attr('stroke', 'black'); 

    const eyeSpacing = 100;
    const eyeYOffset = - 70;
    const eyeRadius = 40; 
    const eyebrowWidth = 70;
    const eyebrowHeight = 15;
    const eyebrowYOffset = -30;

    const eyesG = g
      .append('g')
        .attr('transform',`translate(0, ${eyeYOffset})`);

    const leftEye = eyesG
      .append('circle')
        .attr('r', eyeRadius)
        .attr('cx', - eyeSpacing); 

    const rightEye =   eyesG
      .append('circle')
        .attr('r', eyeRadius)
        .attr('cx', + eyeSpacing);

    const eyebrowsG = eyesG
        .append('g')
          .attr('transform',`translate(0, ${eyeYOffset})`);

    eyebrowsG    
        .transition().duration(2000)
          .attr('transform', `translate(0, ${eyebrowYOffset - 50})`)
        .transition().duration(2000)
          .attr('transform', `translate(0, ${eyebrowYOffset - 40})` );

        
    const leftEyebrow = eyebrowsG
      .append('rect')
        .attr('x', -eyeSpacing - eyebrowWidth / 2)
        .attr('y', eyebrowYOffset )
        .attr('width', eyebrowWidth)
        .attr('height', eyebrowHeight); 

    const rightEyebrow = eyebrowsG
      .append('rect')
        .attr('x', eyeSpacing - eyebrowWidth / 2)
        .attr('y', eyebrowYOffset )
        .attr('width', eyebrowWidth)
        .attr('height', eyebrowHeight);
      
    const nose = g
      .append('ellipse')
        .attr('cx', 0)
        .attr('cy', 20)
        .attr('rx', 20)
        .attr('ry', 30)

    const mouth = g
      .append('path')
        .attr('d', arc()({
          innerRadius: 150,
          outerRadius: 170,
          startAngle: 2.25,
          endAngle: 4
        }));

    mouth   
      .transition().duration(2000)
        .attr('transform', `translate(0, ${20 })`)
      .transition().duration(2000)
        .attr('d', arc()({
          innerRadius: 150,
          outerRadius: 170,
          startAngle: 2,
          endAngle: 4.25
        }));
    };
};

export { smileAtTheCamera };
