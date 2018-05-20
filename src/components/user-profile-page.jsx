import React from 'react';
import UserProfileSideBar from './user-profile-sidebar'
import './user-profile-sidebar.css'

export default class UserProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingWorkExperienceData: false,
      workExperienceData: null,
    };
  }

  componentDidMount() {
    // immediately fire off requests for additional user info
    const userName = this.props.userData.username;
    this._fetchUserWorkExperience(userName);
  }

  /**
    The following helper methods return promises
  */

  _fetchUserWorkExperience(userName) {
    this.setState({isLoadingWorkExperienceData: true});

    return fetch(`/api/user/${userName}/work_experience`).then(resp => {
      return resp.json();
    }).then(data => {
      console.log(data);
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
      </div>
    )
  }
}