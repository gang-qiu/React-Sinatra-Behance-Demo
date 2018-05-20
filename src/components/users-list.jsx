import React from 'react';
import PropTypes from 'prop-types';
import './users-list.css';

export default class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(user) {
    this.props.onSelectUser && this.props.onSelectUser(user);
  }

  renderUserListRow(user) {
    // return a single user list row element
    const imgSrc = user.images && user.images[50] || null;

    return (
      <div key={user.id} className="user-list-row" onClick={this.handleClick.bind(this, user)}>
        {imgSrc && <img src={imgSrc} />}
        <strong>{user.display_name}</strong>
        <span>{user.location}</span>
      </div>
    )
  }

  render() {
    const users = Array.isArray(this.props.users) ? this.props.users : [];

    return (
      <div className="users-list">
        {users.map(user => this.renderUserListRow(user))}
      </div>
    )
  }
}

UsersList.propTypes = {
  onSelectUser: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    images: PropTypes.object.isRequired,
    display_name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  })).isRequired
}