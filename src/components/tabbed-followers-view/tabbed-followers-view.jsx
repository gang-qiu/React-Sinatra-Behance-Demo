import React from 'react';
import UsersList from '../users-list';

export default class TabbedFollowersView extends React.Component {
  constructor(props) {
    super(props);
    this.followers = Array.isArray(props.followersData) ? props.followersData : [];
  }

  render() {
    return (
      <div>
        <h2>FOLLOWERS {this.followers.length}</h2>
        <UsersList users={this.followers} />
      </div>
    )
  }
}