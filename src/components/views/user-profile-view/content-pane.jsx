import React from 'react';
import ProjectsView from './projects-view/projects-view';
import FollowersView from './followers-view/followers-view';
import './content-pane.css';

export default class ContentPane extends React.Component {

  render() {
    return (
      <main className="projects-container">
        {
          this.props.activeView === 'projects' && 
            <ProjectsView projects={this.props.projectsData} />
        }
        {
          ['followers', 'following'].includes(this.props.activeView) &&
            <FollowersView 
              activeView={this.props.activeView}
              setActiveView={this.props.setActiveView}
              followersData={this.props.followersData}
              followingData={this.props.followingData} />
        }
      </main>
    )
  }
}
