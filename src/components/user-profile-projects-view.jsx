import React from 'react';

export default class UserProfileProjectsView extends React.Component {
  handleClick() {
    window.location.href = this.props.project.url;
  }

  render() {
    const projects = Array.isArray(this.props.projects) && this.props.projects || [];

    return (
      <div className="project-cards-view">
        {
          projects.map(project => {
            return (
              <div key={project.id} className="project-card" onClick={this.handleClick.bind(this)}>
                <img src={project.covers[230]} />
                <p>{project.name}</p>
                <p>
                  Likes {project.stats.appreciations} | 
                  Views {project.stats.views}
                </p>
              </div>
            )
          })
        }
      </div>
    )
  }
}