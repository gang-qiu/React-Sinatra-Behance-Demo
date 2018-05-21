import React from 'react';
import UsersList from '../users-list';

export default class TabbedFollowersView extends React.Component {
  getUsers() {
    switch (this.props.activeView) {
      case 'followers': return this.props.followersData;
      case 'following': return this.props.followingData;
      default: return [];
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.activeView.toUpperCase()} {this.getUsers().length}</h2>
        <ul>
          <li className="clickable" onClick={this.props.setActiveView.bind(this, 'followers')}>Followers</li>
          <li className="clickable" onClick={this.props.setActiveView.bind(this, 'following')}>Following</li>
        </ul>
        <UsersList users={this.getUsers()} />
      </div>
    )
  }
}