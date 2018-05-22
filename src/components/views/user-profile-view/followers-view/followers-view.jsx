import React from 'react';
import UsersList from '../../../common/users-list';

export default class FollowersView extends React.Component {
  getUsers() {
    switch (this.props.activeView) {
      case 'followers': return this.props.followersData;
      case 'following': return this.props.followingData;
      default: return [];
    }
  }

  onSelectUser(user) {
    window.location.href = user.url;
  }

  render() {
    return (
      <div>
        <ul className="nav nav-pills margin-bottom-10">
          <li className={this.props.activeView === 'followers' ? 'active' : ''}>
            <a onClick={this.props.setActiveView.bind(this, 'followers')}>Followers</a>
          </li>
          <li className={this.props.activeView === 'following' ? 'active' : ''}>
            <a onClick={this.props.setActiveView.bind(this, 'following')}>Following</a>
          </li>
        </ul>
        <UsersList users={this.getUsers()} onSelectUser={this.onSelectUser.bind(this)}/>
      </div>
    )
  }
}