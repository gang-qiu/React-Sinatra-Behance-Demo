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
          (this.props.activeView === 'followers' || this.props.activeView === 'following') &&
            <TabbedFollowersView 
              activeView={this.props.activeView}
              onClickFollowersLink={this.props.onClickFollowersLink}
              onClickFollowingLink={this.props.onClickFollowingLink}

              followersData={this.props.followersData}
              isLoadingFollowersData={this.props.isLoadingFollowersData}
              followingData={this.props.followingData}
              isLoadingFollowingData={this.props.isLoadingFollowingData}/>
        }
      </main>
    )
  }
}
