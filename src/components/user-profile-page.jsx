import React from 'react';
import UserProfileSideBar from './user-profile-sidebar'
import './user-profile-sidebar.css'

export default class UserProfilePage extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleBackBtnClick}>Back to Search</button>
        <UserProfileSideBar userData={this.props.userData}/>
      </div>
    )
  }
}