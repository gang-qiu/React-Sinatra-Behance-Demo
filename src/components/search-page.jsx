import React from 'react';
import SearchUserInput from './search-user-input';
import UsersList from './users-list';

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <h1>Search for users...</h1>
        <SearchUserInput onSubmit={this.props.handleSubmit}/>
        {this.props.errorFetchingResults && <p>Error loading results...</p>}
        {this.props.searchUsersResultsList && 
          <UsersList 
            users={this.props.searchUsersResultsList} 
            onSelectUser={this.props.onSelectUser} />
        }
      </main>
    )
  }
}
