import { scaleOrdinal } from 'd3';

const colorScale = scaleOrdinal()
	.domain(['apple', 'lemon'])
	.range(['#c11d1d', '#eae600']);

const radiusScale = scaleOrdinal()
	.domain(['apple', 'lemon'])
	.range([ 80, 50 ]);

export const fruitBowl = (selection, props ) => {
	const { fruits, height, setSelectedFruit, selectedFruit } = props;

  const bowl = selection.selectAll('rect')
  	.data([null])
  	.enter().append('rect')
  		.attr('y', 110)
  		.attr('width', 920)
  		.attr('height', 350)
  		.attr('rx', 300/2);
  
  const groups = selection.selectAll('g')
  	.data(fruits);
  const groupsEnter = groups.enter().append('g');
  groupsEnter
    .merge(groups)    
  		.attr('transform', (d,i) =>
            `translate(${i*180+ 100}, ${height /2})`
			);
  groups.exit().remove();

  groupsEnter.append('circle')
    .merge(groups.select('circle'))
    	.attr('r', d => radiusScale(d.type))
      .attr('fill', d => colorScale(d.type))
      .attr('stroke-width', 5)
      .attr('stroke', d => d.id === selectedFruit ? 'black' : 'none')
      .on('mouseover', d => setSelectedFruit(d.id))
      .on('mouseout',() => setSelectedFruit(null));
  
  groupsEnter.append('text')
    .merge(groups.select('text'))
  		.text( d => d.type)
  		.attr('y', 120);
}
