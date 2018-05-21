import React from 'react';
import UsersList from '../users-list';

export default class TabbedFollowersView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {users: []};
    this.onChangeTab = this.onChangeTab.bind(this);
  }

  componentDidMount() {
    this.onChangeTab(this.state.activeView);
  }

  onChangeTab(view) {
    let users;

    if (view === 'followers') {
      users = this.props.followersData;
      this.props.onClickFollowersLink();
    } else {
      users = this.props.followingData;
      this.props.onClickFollowingLink();
    }

    this.setState({users: users});
  }

  render() {
    return (
      <div>
        <h2>{this.props.activeView.toUpperCase()} {this.state.users.length}</h2>
        <ul>
          <li className="clickable" onClick={this.onChangeTab.bind(this, 'followers')}>Followers</li>
          <li className="clickable" onClick={this.onChangeTab.bind(this, 'following')}>Following</li>
        </ul>
        <UsersList users={this.state.users} />
      </div>
    )
  }
}