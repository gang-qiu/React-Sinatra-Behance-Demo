import React from 'react';
import UserProfileProjectCard from './user-profile-project-card';
import TabbedFollowersView from './tabbed-followers-view/tabbed-followers-view';
import './user-profile-main-view.css';

export default class UserProfileMainView extends React.Component {

  render() {
    const projects = Array.isArray(this.props.projectsData) ? this.props.projectsData : [];

    return (
      <main className="projects-container">
        {
          this.props.activeView === 'projects' &&
            projects.map(project => <UserProfileProjectCard key={project.id} project={project} />)
        }

        {
          ['followers', 'following'].includes(this.props.activeView) &&
            <TabbedFollowersView 
              activeView={this.props.activeView}
              setActiveView={this.props.setActiveView}
              followersData={this.props.followersData}
              followingData={this.props.followingData} />
        }
      </main>
    )
  }
}
