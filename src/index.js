import { smileAtTheCamera } from './smiley/smiley';
import { showBarchart } from './bar_chart/barChart';
import { showScatterPlot } from './scatterplot/scatterPlot';
import './styles/styles.css';

let page = 'scatterPlot';
switch(page) {
  case 'barChart':
    smileAtTheCamera(false);
    showScatterPlot(false);
    showBarchart(true);
    break;
  case 'scatterPlot':
      smileAtTheCamera(false);
      showBarchart(false);
      showScatterPlot(true);
      break;
  default:
    showBarchart(false);
    showScatterPlot(false);
    smileAtTheCamera(true);
    
}