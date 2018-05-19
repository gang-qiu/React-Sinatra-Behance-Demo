import React from 'react';

export default class UserProfilePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Results for User {this.props.userSearchResults}</h1>
        <button onClick={this.props.handleBackBtnClick}>Back to Search</button>
      </div>
    )
  }
}