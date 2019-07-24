import { smileAtTheCamera } from './smiley/smiley';
import { showBarchart } from './bar_chart/barChart';
import { showScatterPlot } from './scatterplot/scatterPlot';
import { showLineAndAreaPlots } from './line_chart/line_chart';
import './styles/styles.css';

let page = 'lineChart';
switch(page) {
  case 'barChart':
    smileAtTheCamera(false);
    showScatterPlot(false);
    showLineAndAreaPlots(false);
    showBarchart(true);
    break;
  case 'scatterPlot':
    smileAtTheCamera(false);
    showBarchart(false);
    showLineAndAreaPlots(false);
    showScatterPlot(true);
    break;
  case 'lineChart':
    smileAtTheCamera(false);
    showBarchart(false);
    showScatterPlot(false);
    showLineAndAreaPlots(true);
    break;
  default:
    showBarchart(false);
    showScatterPlot(false);
    smileAtTheCamera(true);
    
}