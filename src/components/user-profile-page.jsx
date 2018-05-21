import React from 'react';
import UserProfileSideBar from './user-profile-sidebar';
import UserProfileMainView from './user-profile-main-view';
import './user-profile-sidebar.css';

export default class UserProfilePage extends React.Component {
  constructor(props, context) {
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
    this._fetchUserWorkExperience();
    this._fetchUserProjects();
    this._fetchUserFollowers()
    this._fetchUserFollowing()
  }

  onClickUserName() {
    console.log('clicked user name!');
    this.setState({activeView: 'projects'});
  }

  onClickFollowersLink() {
    console.log('clicked followers!');
    this.setState({activeView: 'followers'});
  }

  onClickFollowingLink() {
    console.log('clicked following!');
    this.setState({activeView: 'following'});
  }

  /**
    The following helper methods return promises
  */

  _fetchUserWorkExperience() {
    this.setState({isLoadingWorkExperienceData: true});

    return fetch(`/api/user/${this.props.userData.username}/work_experience`).then(resp => {
      return resp.json();
    }).then(data => {
      this.setState({workExperienceData: data.work_experience});
    }).finally(() => {
      this.setState({isLoadingWorkExperienceData: false});
    });
  }

  _fetchUserProjects() {
    this.setState({isLoadingProjectsData: true});

    return fetch(`/api/user/${this.props.userData.username}/projects`).then(resp => {
      return resp.json();
    }).then(data => {
      this.setState({projectsData: data.projects});
    }).finally(() => {
      this.setState({isLoadingProjectsData: false});
    });
  }

  _fetchUserFollowers() {
    this.setState({isLoadingFollowersData: true});

    return fetch(`/api/user/${this.props.userData.username}/followers`).then(resp => {
      return resp.json();
    }).then(data => {
      this.setState({followersData: data.followers});
    }).finally(() => {
      this.setState({isLoadingFollowersData: false});
    });
  }

  _fetchUserFollowing() {
    this.setState({isLoadingFollowingData: true});

    return fetch(`/api/user/${this.props.userData.username}/following`).then(resp => {
      return resp.json();
    }).then(data => {
      console.log('fetch following', data.following);
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

          onClickFollowersLink={this.onClickFollowersLink}
          onClickFollowingLink={this.onClickFollowingLink}
          activeView={this.state.activeView}/>
      </div>
    )
  }
}