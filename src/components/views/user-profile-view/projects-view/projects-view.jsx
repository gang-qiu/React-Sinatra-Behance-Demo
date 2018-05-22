import React from 'react';
import './projects-view.css';

export default class ProjectsView extends React.Component {
  handleClick(project) {
    window.location.href = project.url;
  }

  render() {
    const projects = Array.isArray(this.props.projects) && this.props.projects || [];

    return (
      <div className="project-cards-view">
        {
          projects.map(project => {
            return (
              <div key={project.id} className="project-card clickable" onClick={this.handleClick.bind(this, project)}>
                <img src={project.covers[230] || project.covers[200]} />
                <div className="project-card-details">
                  <p><strong>{project.name}</strong></p>
                  <p className="project-stats">
                    <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
                    <span className="margin-right-10"> {project.stats.appreciations} </span>
                    <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                    <span className="margin-right-10"> {project.stats.views}</span>
                  </p>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}