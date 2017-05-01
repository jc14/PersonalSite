import React from 'react';
import { RaisedButton } from 'material-ui';

export default class Buttons extends React.Component {
  render () {

    const buttonStyle = {
      margin: 12
    }

    return (
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
  }

}