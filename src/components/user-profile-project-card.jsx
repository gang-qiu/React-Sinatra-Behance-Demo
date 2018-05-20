import React from 'react';

export default class UserProfileProjectCard extends React.Component {
  render() {
    console.log(this.props)
    const project = this.props.project;

    return (
      <div className="project-card">
        <img src={project.covers[230]} />
        <p>{project.name}</p>
        <p>
          Likes {project.stats.appreciations} | 
          Views {project.stats.views}
        </p>
      </div>
    )
  }
}