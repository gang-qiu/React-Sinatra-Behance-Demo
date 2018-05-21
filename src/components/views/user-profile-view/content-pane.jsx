import React from 'react';
import UserProfileProjectsView from './user-profile-projects-view';
import TabbedFollowersView from './tabbed-followers-view/tabbed-followers-view';
import './user-profile-main-view.css';

export default class UserProfileMainView extends React.Component {

  render() {
    return (
      <main className="projects-container">
        {
          this.props.activeView === 'projects' && 
            <UserProfileProjectsView projects={this.props.projectsData} />
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
