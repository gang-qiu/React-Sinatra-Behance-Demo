import React from 'react';
import ProjectsView from './projects-view/projects-view';
import TabbedFollowersView from './tabbed-followers-view/tabbed-followers-view';
import './content-pane.css';

export default class MainView extends React.Component {

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
