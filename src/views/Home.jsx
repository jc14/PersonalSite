import React from 'react';
import http from 'http';

import Project from '../components/Project.jsx';

export default class Home extends React.Component {
  constructor () {
    super();
    
    this.state = {
      projects: [],
    }
  }

  componentWillMount () {
    http.get(__dirname + 'projects', res => {
      let rawData = '';
      res.on('data', chunk => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          this.setState({ projects: parsedData });
        } 
        catch (e) {
          console.error(e);
        }
      });
    }).on('error', e => {
      console.error(e);
    })
  }

  render () {
    return (
      <div>
        {
          this.state.projects.map(project => {
            return (
              <Project projectData={project} key={project._id} />
            );
          })
        }
      </div>
    )
  }
}
