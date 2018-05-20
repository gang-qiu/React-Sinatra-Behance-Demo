import React from 'react';

export default class UserProfileProjectCard extends React.Component {
  handleClick() {
    window.location.href = this.props.project.url;
  }

  render() {
    const project = this.props.project;

    return (
      <div className="project-card" onClick={this.handleClick.bind(this)}>
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