import React from 'react';
import Header from './common/header';
import SearchView from './views/search-view/search-view';
import UserProfileView from './views/user-profile-view/user-profile-view';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      errorFetchingResults: false,
      searchUsersResultsList: null,     // list of users from the initial search of users
      selectedUser: null,               // the user that was selected from the query
                                        // when defined, the profile page will be shown
    };

    this.onSubmitUserSearchForm = this.onSubmitUserSearchForm.bind(this);
    this.onSelectUser = this.onSelectUser.bind(this);
    this.clearUserSearchResults = this.clearUserSearchResults.bind(this);
  }

  onSubmitUserSearchForm(userName) {
    // search for users based on user name
    this.setState({
      errorFetchingResults: false,
    });

    return fetch(`/api/user/${userName}/search`).then(resp => {
      return resp.json();
    }).then(data => {
      this.setState({searchUsersResultsList: data.users});
    }).catch(error => {
      this.setState({errorFetchingResults: true});
    });
  }

  /**
    handler when a user is selected from the list of queried users
    Display the user profile page for this user
  */
  onSelectUser(user) {
    this.setState({selectedUser: user});
  }

  clearUserSearchResults() {
    this.setState({
      selectedUser: null,
      searchUsersResultsList: null,
      errorFetchingResults: false,
    })
  }

  render() {
    return (
      <div>
        <Header onClickLogo={this.clearUserSearchResults}/>
        {
          this.state.selectedUser
          ? <UserProfileView userData={this.state.selectedUser} />
          : <SearchView 
              handleSubmit={this.onSubmitUserSearchForm} 
              errorFetchingResults={this.state.errorFetchingResults}
              searchUsersResultsList={this.state.searchUsersResultsList}
              onSelectUser={this.onSelectUser}/> 
        }
      </div>
    )
  }
}