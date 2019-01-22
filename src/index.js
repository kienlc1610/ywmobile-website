import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleUp, faIgloo } from '@fortawesome/free-solid-svg-icons'
import { HashRouter } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';

import jquery from 'jquery';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/popper.js/dist/popper';

window.$ = window.jQuery = jquery;
/* Jquery Plugin Start */
require('../node_modules/textillate/jquery.textillate');
require('../node_modules/letteringjs/jquery.lettering');
/* Jquery Plugin End */

library.add(faAngleUp, faIgloo);

ReactDOM.render((<HashRouter>
    <App />
</HashRouter>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
