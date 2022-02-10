import { 
  Alert, 
  Button, 
  Carousel, 
  Collapse, 
  Dropdown, 
  Modal, 
  Offcanvas, 
  Popover, 
  ScrollSpy, 
  Tab, 
  Toast, 
  Tooltip 
} from 'bootstrap';


// create a dynamic year and insert into the js-year span
document.getElementById('js-year').innerHTML = new Date().getFullYear();
