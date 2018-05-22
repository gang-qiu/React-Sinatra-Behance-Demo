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
      <main className="container-fluid">
        <h1 className="text-center">Search for users...</h1>
        <div className="text-center">
          <TextInput placeholder={this.textInputPlaceholder} onSubmit={this.props.handleSubmit}/>
          {
            this.props.errorFetchingResults && 
              <p className="alert alert-warning">Error loading results...</p>
          }
        </div>
        {this.props.searchUsersResultsList && 
          <UsersList 
            users={this.props.searchUsersResultsList} 
            onSelectUser={this.props.onSelectUser} />
        }
      </main>
    )
  }
}
