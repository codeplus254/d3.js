import { smileAtTheCamera } from './smiley/smiley';
import { showBarchart } from './bar_chart/barChart';
import './styles/styles.css';

let page = 'barChart';
switch(page) {
  case 'barChart':
    smileAtTheCamera(false);
    showBarchart(true);
    break;
  default:
    showBarchart(false);
    smileAtTheCamera(true);
    
}