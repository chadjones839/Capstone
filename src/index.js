import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import TechTok from './TechTok.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TechTok />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
