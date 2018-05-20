import React from 'react';
import UserProfileProjectCard from './user-profile-project-card';
import './user-profile-main-view.css';

export default class UserProfileMainView extends React.Component {

  render() {
    const projects = Array.isArray(this.props.projectsData) ? this.props.projectsData : [];
    return (
      <main className="projects-container">
        {projects.map(project => {
          return <UserProfileProjectCard key={project.id} project={project} />
        })}
      </main>
    )
  }
}

