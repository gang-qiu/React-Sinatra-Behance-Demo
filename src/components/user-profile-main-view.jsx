import React from 'react';
import UserProfileProjectCard from './user-profile-project-card';
import './user-profile-main-view.css';

export default class UserProfileMainView extends React.Component {

  render() {
    const projects = Array.isArray(this.props.projectsData) ? this.props.projectsData : [];
    return (
      <main className="projects-container">
        {(function(activeView) {

          switch(activeView) {
            case 'projects':
              return projects.map(project => <UserProfileProjectCard key={project.id} project={project} />);
            case 'followers': 
              return <h2>followers</h2>

            case 'following': 
              return <h2>following</h2>

            default:
              return null
          }
          })(this.props.activeView)
        }
      </main>
    )
  }
}

