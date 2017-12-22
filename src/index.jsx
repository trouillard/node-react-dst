import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DstSynthese from './DstSynthese';

require('./bundle.css');

const App = () => (
  <MuiThemeProvider>
    <DstSynthese />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('main'));