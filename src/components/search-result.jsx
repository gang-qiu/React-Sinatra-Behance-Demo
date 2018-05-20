import React from 'react';

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onSelectUser(this.props.user)
  }

  render() {
    const user = this.props.user;
    return (
      <div className="search-result-row" onClick={this.handleClick}>
        <img src={user.images[50]} />
        <strong>{user.display_name}</strong>
        <span>{user.location}</span>
      </div>
    )
  }
}