import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  RaisedButton
} from 'material-ui';

export default class Project extends React.Component {

  render () {

    let id = 0;
    let project = this.props.projectData;
    let linkElements = this.props.projectData.links.map(link => {
      return (
        <RaisedButton label={link.text} href={link.url} target='_blank' key={id++} />
      );
    });

    return (
      <Card style={{
        backgroundColor: '#' + project.colorKey
      }} >
        <CardMedia
          overlay={<CardTitle title={project.title} />}
        >
          <img src={"images/" + project.thumbnail + ".png"} style={{
            height: '600px',
            
          }} />
        </CardMedia>
        <CardTitle>
          {project.description}
        </CardTitle>
        <CardActions>
          {linkElements}
        </CardActions>
      </Card>
    )
  }

}