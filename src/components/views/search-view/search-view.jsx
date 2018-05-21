import React from 'react';
import TextInput from '../../common/text-input';
import UsersList from '../../common/users-list';

export default class SearchView extends React.Component {
  constructor(props) {
    super(props);
    this.textInputPlaceholder = 'Mike';
  }

  render() {
    return (
      <main>
        <h1>Search for users...</h1>
        <TextInput placeholder={this.textInputPlaceholder} onSubmit={this.props.handleSubmit}/>
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
