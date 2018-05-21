import React from 'react';
import UserProfileSideBar from './user-profile-sidebar';
import UserProfileMainView from './user-profile-main-view';
import './user-profile-sidebar.css';

export default class UserProfileView extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      activeView: 'projects',    // can be 'projects', 'followers', 'following'
      workExperienceData: [],
      projectsData: [],
      followersData: [],
      followingData: [],
    };

    this.setActiveView = this.setActiveView.bind(this);
  }

  componentDidMount() {
    // immediately fire off requests for additional user info
    this._fetchUserWorkExperience();
    this._fetchUserProjects();
    this._fetchUserFollowers()
    this._fetchUserFollowing()
  }

  setActiveView(view) {
    console.log('SETTING VIEW ', view)
    if (['projects', 'followers', 'following'].includes(view)) {
      this.setState({activeView: view});
    }
  }

  /**
    The following helper methods return promises
  */

  _fetchUserWorkExperience() {
    return fetch(`/api/user/${this.props.userData.username}/work_experience`).then(resp => {
      return resp.json();
    }).then(data => {
      this.setState({workExperienceData: data.work_experience});
    });
  }

  _fetchUserProjects() {
    return fetch(`/api/user/${this.props.userData.username}/projects`).then(resp => {
      return resp.json();
    }).then(data => {
      this.setState({projectsData: data.projects});
    });
  }

  _fetchUserFollowers() {
    return fetch(`/api/user/${this.props.userData.username}/followers`).then(resp => {
      return resp.json();
    }).then(data => {
      this.setState({followersData: data.followers});
    });
  }

  _fetchUserFollowing() {
    return fetch(`/api/user/${this.props.userData.username}/following`).then(resp => {
      return resp.json();
    }).then(data => {
      console.log('fetch following', data.following);
      this.setState({followingData: data.following});
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.activeView}</p>
        <UserProfileSideBar 
          userData={this.props.userData}
          setActiveView={this.setActiveView}
          workExperienceData={this.state.workExperienceData}/>

        <UserProfileMainView
          projectsData={this.state.projectsData} 
          followersData={this.state.followersData}          
          followingData={this.state.followingData}
          setActiveView={this.setActiveView}
          activeView={this.state.activeView}/>
      </div>
    )
  }
}