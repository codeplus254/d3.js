import { smileAtTheCamera } from './smiley/smiley';
import { showBarchart } from './bar_chart/barChart';
import { showScatterPlot } from './scatterplot/scatterPlot';
import { showLineChart } from './line_chart/line_chart';
import { showAreaChart } from './area_chart/area_chart';

import './styles/styles.css';

let page = 'areaChart';
switch(page) {
  case 'barChart':
    smileAtTheCamera(false);
    showScatterPlot(false);
    showLineChart(false);
    showBarchart(true);
    break;
  case 'scatterPlot':
    smileAtTheCamera(false);
    showBarchart(false);
    showLineChart(false);
    showScatterPlot(true);
    break;
  case 'lineChart':
    smileAtTheCamera(false);
    showBarchart(false);
    showScatterPlot(false);
    showLineChart(true);
    break;
  case 'areaChart':
    smileAtTheCamera(false);
    showAreaChart(true);
    break;
  default:
    showBarchart(false);
    showScatterPlot(false);
    smileAtTheCamera(true);
    
}