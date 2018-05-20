import React from 'react';
import SearchUserInput from './search-user-input';
import SearchResult from './search-result';
import './search-page.css';

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const results = Array.isArray(this.props.searchUsersResultsList) ? this.props.searchUsersResultsList : [];
    return (
      <main>
        <h1>Search for users...</h1>

        <SearchUserInput onSubmit={this.props.handleSubmit}/>

        {this.props.errorFetchingResults && <p>Error loading results...</p>}

        {results.map(user => {
          return <SearchResult key={user.id} user={user} onSelectUser={this.props.onSelectUser} />
        })}
      </main>
    )
  }
}
