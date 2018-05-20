import React from 'react';
import UserProfileProjectCard from './user-profile-project-card';
import TabbedFollowersView from './tabbed-followers-view/tabbed-followers-view';
import './user-profile-main-view.css';

export default class UserProfileMainView extends React.Component {

  render() {
    const projects = Array.isArray(this.props.projectsData) ? this.props.projectsData : [];

    return (
      <main className="projects-container">
        {(function(props) {
            switch(props.activeView) {
              case 'projects':
                return projects.map(project => <UserProfileProjectCard key={project.id} project={project} />);
              case 'followers': 
              case 'following': 
                return <TabbedFollowersView 
                  activeView={props.activeView}
                  followersData={props.followersData}
                  isLoadingFollowersData={props.isLoadingFollowersData}
                  followingData={props.followingData}
                  isLoadingFollowingData={props.isLoadingFollowingData}/>
              default:
                return null
            }
          })(this.props)
        }
      </main>
    )
  }
}

