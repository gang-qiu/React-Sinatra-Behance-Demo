import React from 'react';
import UserProfileSideBar from './user-profile-sidebar';
import UserProfileMainView from './user-profile-main-view';
import './user-profile-sidebar.css';

export default class UserProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: 'projects',    // can be 'projects', 'followers', 'following'

      isLoadingWorkExperienceData: false,
      workExperienceData: null,

      isLoadingProjectsData: false,
      projectsData: null,

      isLoadingFollowersData: false,
      followersData: null,

      isLoadingFollowingData: false,
      followingData: null,
    };

    this.onClickFollowersLink = this.onClickFollowersLink.bind(this);
    this.onClickFollowingLink = this.onClickFollowingLink.bind(this);
    this.onClickUserName = this.onClickUserName.bind(this);
  }

  componentDidMount() {
    // immediately fire off requests for additional user info
    this._fetchUserWorkExperience(this.props.userData.username);
    this._fetchUserProjects(this.props.userData.username);
  }

  onClickUserName() {
    // fetch for user projects
    this.setState({activeView: 'projects'});
    this._fetchUserProjects(this.props.userData.username);
  }

  onClickFollowersLink() {
    // fetch for user followers info when the "followers" link on the profile page is clicked
    this.setState({activeView: 'followers'});
    this._fetchUserFollowers(this.props.userData.username);
  }

  onClickFollowingLink() {
    // fetch for user followers info when the "followers" link on the profile page is clicked
    this.setState({activeView: 'following'});
    this._fetchUserFollowings(this.props.userData.username);
  }

  /**
    The following helper methods return promises
  */

  _fetchUserWorkExperience(userName) {
    this.setState({isLoadingWorkExperienceData: true});

    return fetch(`/api/user/${userName}/work_experience`).then(resp => {
      return resp.json();
    }).then(data => {
      this.setState({workExperienceData: data.work_experience});
    }).finally(() => {
      this.setState({isLoadingWorkExperienceData: false});
    });
  }

  _fetchUserProjects(userName) {
    this.setState({isLoadingProjectsData: true});

    return fetch(`/api/user/${userName}/projects`).then(resp => {
      return resp.json();
    }).then(data => {
      this.setState({projectsData: data.projects});
    }).finally(() => {
      this.setState({isLoadingProjectsData: false});
    });
  }

  _fetchUserFollowers(userName) {
    this.setState({isLoadingFollowersData: true});

    return fetch(`/api/user/${userName}/followers`).then(resp => {
      return resp.json();
    }).then(data => {
      this.setState({followersData: data.followers});
    }).finally(() => {
      this.setState({isLoadingFollowersData: false});
    });
  }

  _fetchUserFollowings(userName) {
    this.setState({isLoadingFollowingData: true});

    return fetch(`/api/user/${userName}/following`).then(resp => {
      return resp.json();
    }).then(data => {
      this.setState({followingData: data.following});
    }).finally(() => {
      this.setState({isLoadingFollowingData: false});
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.activeView}</p>
        <UserProfileSideBar 
          userData={this.props.userData}
          onClickUserName={this.onClickUserName}
          onClickFollowersLink={this.onClickFollowersLink}
          onClickFollowingLink={this.onClickFollowingLink}

          isLoadingWorkExperienceData={this.state.isLoadingWorkExperienceData}
          workExperienceData={this.state.workExperienceData}/>
        <UserProfileMainView
          isLoadingProjectsData={this.state.isLoadingProjectsData}
          projectsData={this.state.projectsData} 

          isLoadingFollowersData={this.state.isLoadingFollowersData}
          followersData={this.state.followersData}
          
          isLoadingFollowingData={this.state.isLoadingFollowingData}
          followingData={this.state.followingData}
          
          activeView={this.state.activeView}/>
      </div>
    )
  }
}