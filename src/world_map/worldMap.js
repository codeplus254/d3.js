import { select, geoPath, geoNaturalEarth1 } from 'd3';
import * as topojson from "topojson-client";
import './worldMap.css'


const svg = select('svg');



const projection = geoNaturalEarth1();
const pathGenerator=geoPath().projection(projection);

svg.append('path')
  .attr('class', 'sphere')
  .attr('d', pathGenerator({type: 'Sphere'}));

const world = require("../../node_modules/world-atlas/world/110m.json" );
const countries = topojson.feature(world, world.objects.countries);

svg.selectAll('path')
  .data(countries.features)
  .enter().append('path')
    .attr('class', 'country')
    .attr('d', pathGenerator);


const showWorld = boolean => {
  if(boolean){ 
    //
  };
};

export { showWorld };
