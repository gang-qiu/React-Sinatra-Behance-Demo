import React from 'react';
import Header from './header';
import SearchPage from './search-page';
import UserProfilePage from './user-profile-page';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchUsersResultsList: null,     // list of users from the initial search of users
      selectedUser: null,               // the user that was selected from the query
                                        // when defined, the profile page will be shown
      userInfoData: null,
      userWorkExperienceData: null,
      errorFetchingResults: false,
      isFinishedFetchingData: false,
    };

    this.onSubmitUserSearchForm = this.onSubmitUserSearchForm.bind(this);
    this.onSelectUser = this.onSelectUser.bind(this);
    this.clearUserSearchResults = this.clearUserSearchResults.bind(this);
  }

  onSubmitUserSearchForm(userName) {
    // search for users based on user name
    this.setState({
      errorFetchingResults: false,
      isFinishedFetchingData: false,
    });

    return fetch(`/api/user/${userName}/search`).then(resp => {
      return resp.json();
    }).then(data => {
      this.setState({searchUsersResultsList: data.users});
    }).catch(error => {
      this.setState({errorFetchingResults: true});
    }).finally(() => {
      this.setState({isFinishedFetchingData: true});
    });

    // Promise.all([
    //   this._fetchUserInfo(userName),
    //   this._fetchUserWorkExperience(userName),
    // ]).catch(err => {
    //   // all requests have failed with 
    //   this.setState({errorFetchingResults: true});
    //   console.log(err);
    // }).finally(() => {
    //   this.setState({isFinishedFetchingData: true});
    // });
  }

  /**
    handler when a user is selected from the list of queried users
    Display the user profile page for this user
  */
  onSelectUser(user) {
    this.setState({selectedUser: user});
  }

  /**
    The following helper methods return promises
  */

  _fetchUserInfo(userName) {
    return fetch(`/api/user/${userName}`).then(resp => {
      return resp.json();
    }).then(data => {
      this.setState({userInfoData: data.user});
    });
  }

  _fetchUserWorkExperience(userName) {
    return fetch(`/api/user/${userName}/work_experience`).then(resp => {
      return resp.json();
    }).then(data => {
      console.log(data)
      this.setState({userWorkExperienceData: data.work_experience});
    });
  }



  clearUserSearchResults() {
    this.setState({
      userInfoData: null,
      errorFetchingResults: false,
    })
  }

  render() {
    return (
      <div>
        <Header onClickLogo={this.clearUserSearchResults}/>
        {
          this.state.selectedUser
          ? <UserProfilePage userData={this.state.selectedUser} />
          : <SearchPage 
              handleSubmit={this.onSubmitUserSearchForm} 
              errorFetchingResults={this.state.errorFetchingResults}
              searchUsersResultsList={this.state.searchUsersResultsList}
              onSelectUser={this.onSelectUser}/> 
        }
      </div>
    )
  }
}