import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Main from './main.jsx';

import {
    indigo500,
    indigo700,
    cyan400,
    black,
} from 'material-ui/styles/colors';

let muiTheme = getMuiTheme({
    palette: {
        primary1Color: indigo500,
        primary2Color: indigo700,
        accent1Color: cyan400,
    }
});

muiTheme.tabs.backgroundColor = muiTheme.palette.primary2Color;

const App = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Main />
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'))
