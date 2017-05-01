import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  AppBar,
  Avatar,
  RaisedButton,
  IconButton,
  Dialog,
  Paper,
  Tabs,
  Tab,
  Toolbar,
  ToolbarGroup
} from 'material-ui';
import ContactMail from 'material-ui/svg-icons/communication/contact-mail';

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

    this.state = {
      modalOpen: false
    };
  }

  handleModalOpen () {
    this.setState({modalOpen: true});
  };

  handleModalClose () {
    this.setState({modalOpen: false});
  };

  render () {

    const actions = [
      <RaisedButton 
        label="Close"
        primary={true}
        onTouchTap={this.handleModalClose.bind(this)}
      />
    ]

    return (
      <div>
        <AppBar
          title={'Jordan Campbell'}
          iconElementRight={ <Buttons /> }
          iconElementLeft={
          <IconButton
            onTouchTap={this.handleModalOpen.bind(this)}
          >
            <ContactMail color='white' />
          </IconButton>
          }
        />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.modalOpen}
          onRequestClose={this.handleModalClose.bind(this)}
          >
          Email: jcampbell1441@gmail.com
        </Dialog>
        <Paper
          style={{
          width: '65%',
          textAlign: 'center',
          margin: '5px auto',
          fontSize: '26px'
          }} 
        >
          <Avatar 
            src={__dirname + 'images/Profile_Avatar.png'}
            size={150}
            style={{ margin: '0 auto' }}
          />
          <p
            style={{ margin: '0' }}
          >
            I started programming in college with a computer science major then took the knowledge I gained there and started a game development startup called Ignition Studios. I have been building games in Unity and C# for almost 4 years now. I have almost 1 year of web development experience after graduating Makersquare/Hack Reactor and currently work at InMotion Software.
          </p>
        </Paper>
        <Tabs
          style={{
          width: '65%',
          margin: '0 auto'
          }}
        >
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