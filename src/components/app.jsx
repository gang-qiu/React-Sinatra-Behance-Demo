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
    this.handleBackBtnClick = this.handleBackBtnClick.bind(this);
  }

  onSubmitUserSearchForm(userName) {
    console.log('requesting json ....'+ userName);
    this.setState({errorFetchingResults: false});
    fetch(`/api/user/${userName}`).then(resp => {
      return resp.json();
    }).then(data => {
      console.log(data);
      this.setState({userSearchResults: data.data});
    }).catch(err => {
      this.setState({errorFetchingResults: true});
      console.log(err);
    });
  }

  handleBackBtnClick() {
    this.setState({userSearchResults: null});
  }

  render() {
    return (
      <div>
        <Header/>
        {
          this.state.userSearchResults === null 
          ? <SearchPage 
              handleSubmit={this.onSubmitUserSearchForm} 
              errorFetchingResults={this.state.errorFetchingResults}/> 
          : <UserProfilePage 
              userSearchResults={this.state.userSearchResults} 
              handleBackBtnClick={this.handleBackBtnClick}
            />
        }
      </div>
    )
  }
}