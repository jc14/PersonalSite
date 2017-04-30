import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
    AppBar,
    Avatar,
    RaisedButton
 } from 'material-ui';
 import {
    Toolbar,
    ToolbarGroup
 } from 'material-ui/Toolbar';
 import {
     Tabs, 
     Tab
 } from 'material-ui/Tabs';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

/* --- VIEWS --- */
import Home from './views/Home.jsx';
import Blog from './views/Blog.jsx';

const buttonStyle = {
    margin: 12
}

 const Buttons = () => (
    <div>
        <RaisedButton
            label="GitHub"
            style={buttonStyle}
            href="https://github.com/jc14"
            target="_blank"
        />
        <RaisedButton
            label="LinkedIn"
            style={buttonStyle}
            href="https://www.linkedin.com/in/jcampbell14"
            target="_blank"
        />
        <RaisedButton
            label="Twitter"
            style={buttonStyle}
            href="https://twitter.com/jc1441"
            target="_blank"
        />
    </div>
 );

export default class Main extends React.Component {
    constructor (props) {
        super(props);
        injectTapEventPlugin();
    }

    render () {
        return (
            <div style={{
                backgroundColor: '#eeeeee'
            }} >
                <AppBar
                    title={'Jordan Campbell'}
                    iconElementRight={ <Buttons /> }
                />
                <Tabs>
                    <Tab label="Projects">
                        <Home />
                    </Tab>
                    <Tab label="Blog">
                        <Blog />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}