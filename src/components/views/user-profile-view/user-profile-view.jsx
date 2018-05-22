import React from 'react';
import SideBar from './sidebar';
import ContentPane from './content-pane';

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
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-lg-3">
            <SideBar 
              userData={this.props.userData}
              setActiveView={this.setActiveView}
              workExperienceData={this.state.workExperienceData}/>
          </div>

          <div className="col-sm-8 col-lg-9">
            <ContentPane
              projectsData={this.state.projectsData} 
              followersData={this.state.followersData}          
              followingData={this.state.followingData}
              setActiveView={this.setActiveView}
              activeView={this.state.activeView}/>
          </div>
        </div>
      </div>
    )
  }
}