import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// js bundles
// import './assets/js/vendor/modernizr-3.8.0.min.js';
// import $ from 'jquery';
// window.$ = $; 
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './assets/js/owl.carousel.min.js';
// import './assets/js/waypoints.min.js';
// import './assets/js/jquery.counterup.min.js';
// import './assets/js/slick.min.js';
// import './assets/js/jquery.scrollUp.min.js';
// import './assets/js/jquery.meanmenu.min.js';
// import './assets/js/imagesloaded.pkgd.min.js';
// import './assets/js/jquery.magnific-popup.min.js';
// import './assets/js/plugins.js';
// import './assets/js/main.js';

// styles
import './assets/css/bootstrap.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/fontawesome-all.min.css';
import './assets/css/themify-icons.css';
import './assets/css/animate.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/meanmenu.css';
import './assets/css/slick.css';
import './assets/css/default.css';
import './assets/css/style.css';
import './assets/css/responsive.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
