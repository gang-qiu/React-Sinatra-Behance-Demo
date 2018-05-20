import React from 'react';
import Header from './header';
import SearchPage from './search-page';
import UserProfilePage from './user-profile-page';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userSearchResults: null,
      errorFetchingResults: false,
    };

    this.onSubmitUserSearchForm = this.onSubmitUserSearchForm.bind(this);
    this.clearUserSearchResults = this.clearUserSearchResults.bind(this);
  }

  onSubmitUserSearchForm(userName) {
    this.setState({errorFetchingResults: false});

    fetch(`/api/user/${userName}`).then(resp => {
      return resp.json();
    }).then(data => {
      this.setState({userSearchResults: data.user});
    }).catch(err => {
      this.setState({errorFetchingResults: true});
      console.log(err);
    });
  }

  clearUserSearchResults() {
    this.setState({
      userSearchResults: null,
      errorFetchingResults: false,
    })
  }

  render() {
    return (
      <div>
        <Header onClickLogo={this.clearUserSearchResults}/>
        {
          this.state.userSearchResults === null 
          ? <SearchPage 
              handleSubmit={this.onSubmitUserSearchForm} 
              errorFetchingResults={this.state.errorFetchingResults}/> 
          : <UserProfilePage 
              userData={this.state.userSearchResults} 
              handleBackBtnClick={this.clearUserSearchResults}
            />
        }
      </div>
    )
  }
}