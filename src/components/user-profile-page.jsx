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
    };

    this.onClickFollowersLink = this.onClickFollowersLink.bind(this);
  }

  componentDidMount() {
    // immediately fire off requests for additional user info
    this._fetchUserWorkExperience(this.props.userData.username);
    this._fetchUserProjects(this.props.userData.username);
  }

  onClickFollowersLink() {
    // fetch for user followers info when the "followers" link on the profile page is clicked
    this.setState({activeView: 'followers'});
    this._fetchUserFollowers(this.props.userData.username);
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

  render() {
    return (
      <div>
        <UserProfileSideBar 
          userData={this.props.userData}
          onClickFollowersLink={this.onClickFollowersLink}
          isLoadingFollowersData={this.state.isLoadingFollowersData}
          followersData={this.state.followersData}
          isLoadingWorkExperienceData={this.state.isLoadingWorkExperienceData}
          workExperienceData={this.state.workExperienceData}/>
        <UserProfileMainView
          isLoadingProjectsData={this.state.isLoadingProjectsData}
          projectsData={this.state.projectsData} 
          activeView={this.state.activeView}/>
      </div>
    )
  }
}