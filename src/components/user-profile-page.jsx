import React from 'react';
import UserProfileSideBar from './user-profile-sidebar';
import UserProfileMainView from './user-profile-main-view';
import './user-profile-sidebar.css';

export default class UserProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingWorkExperienceData: false,
      workExperienceData: null,

      isLoadingProjectsData: false,
      projectsData: null,
    };
  }

  componentDidMount() {
    // immediately fire off requests for additional user info
    const userName = this.props.userData.username;

    this._fetchUserWorkExperience(userName);
    this._fetchUserProjects(userName);
  }

  /**
    The following helper methods return promises
  */

  _fetchUserWorkExperience(userName) {
    this.setState({isLoadingProjectsData: true});

    return fetch(`/api/user/${userName}/projects`).then(resp => {
      return resp.json();
    }).then(data => {
      this.setState({projectsData: data.projects});
    }).finally(() => {
      this.setState({isLoadingProjectsData: false});
    });
  }

  _fetchUserProjects(userName) {
    this.setState({isLoadingWorkExperienceData: true});

    return fetch(`/api/user/${userName}/work_experience`).then(resp => {
      return resp.json();
    }).then(data => {
      this.setState({workExperienceData: data.work_experience});
    }).finally(() => {
      this.setState({isLoadingWorkExperienceData: false});
    });
  }

  render() {
    return (
      <div>
        <UserProfileSideBar 
          userData={this.props.userData}
          isLoadingWorkExperienceData={this.state.isLoadingWorkExperienceData}
          workExperienceData={this.state.workExperienceData}/>
        <UserProfileMainView
          isLoadingProjectsData={this.state.isLoadingProjectsData}
          projectsData={this.state.projectsData} />
      </div>
    )
  }
}