import React from 'react';
import PropTypes from 'prop-types';
import './users-list.css';

export default class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.users = Array.isArray(this.props.users) ? this.props.users : [];
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(user) {
    this.props.onSelectUser && this.props.onSelectUser(user);
  }

  renderUserListRow(user) {
    // return a single user list row element
    const imgSrc = user.images && (user.images[100] || user.images[50] || null);

    return (
      <li key={user.id} 
        className="user-list-row list-group-item clearfix clickable" 
        onClick={this.handleClick.bind(this, user)}>
          {imgSrc && <img src={imgSrc} className="pull-left img-rounded"/>}
          <div className="pull-left">
            <p><strong className="lead">{user.display_name}</strong></p>
            <p><span>{user.location}</span></p>
            {user.stats && 
              <p>
                <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
                <span className="margin-right-10"> {user.stats.appreciations} </span>
                <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                <span className="margin-right-10"> {user.stats.views}</span>
                <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                <span className="margin-right-10"> {user.stats.followers}</span>
              </p>
            }
          </div>
      </li>
    )
  }

  render() {
    return (
      <ul className="users-list list-group">
        {this.props.users.map(user => this.renderUserListRow(user))}
      </ul>
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
    stats: PropTypes.shape({
      appreciations: PropTypes.number,
      views: PropTypes.number,
      followers: PropTypes.number,
    })
  })).isRequired
}