import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Main from './main.jsx';

import {
    colors
} from 'material-ui/styles';

let muiTheme = getMuiTheme({
    palette: {
        primary1Color: colors.indigo500,
        primary2Color: colors.indigo700,
        accent1Color: colors.cyan400,
    }
});

muiTheme.tabs.backgroundColor = muiTheme.palette.primary2Color;

const App = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Main />
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'))
