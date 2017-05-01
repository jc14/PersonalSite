import React from 'react';
import ReactDOM from 'react-dom';
import {
  MuiThemeProvider,
  getMuiTheme,
  colors
} from 'material-ui/styles';

import Main from './views/Main.jsx';

let muiTheme = getMuiTheme({
  palette: {
    primary1Color: colors.indigo500,
    primary2Color: colors.indigo700,
    accent1Color: colors.cyan400,
  }
});

muiTheme.tabs.backgroundColor = muiTheme.palette.primary1Color;

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Main />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'))
