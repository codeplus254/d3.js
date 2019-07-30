import { select, json, tsv, zoom, event,  geoPath, geoNaturalEarth1 } from 'd3';
import * as topojson from "topojson-client";
import './worldMap.css'


const svg = select('svg');



const projection = geoNaturalEarth1();
const pathGenerator=geoPath().projection(projection);
const g = svg.append('g');
g.append('path')
  .attr('class', 'sphere')
  .attr('d', pathGenerator({type: 'Sphere'}));


svg.call(zoom().on('zoom', () => {
    g.attr('transform', event.transform);
}));

Promise.all([
  tsv('../../node_modules/world-atlas/world/50m.tsv'),
  json('../../node_modules/world-atlas/world/50m.json')
]).then(([tsvData, topoJSONData]) => {
  const countryName = {};
  tsvData.forEach(d => {
    countryName[d.iso_n3] = d.name;
  });

    const countries = topojson.feature(topoJSONData, topoJSONData.objects.countries);
    g.selectAll('path').data(countries.features)
      .enter().append('path')
        .attr('class', 'country')
        .attr('d', pathGenerator)
      .append('title')
        .text(d => countryName[d.id]);
} );





const showWorld = boolean => {
  if(boolean){ 
    //
  };
};

export { showWorld };
