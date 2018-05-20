import React from 'react';
import Header from './header';
import SearchPage from './search-page';
import UserProfilePage from './user-profile-page';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userInfoData: null,
      userWorkExperienceData: null,
      errorFetchingResults: false,
      isFinishedFetchingData: false,
    };

    this.onSubmitUserSearchForm = this.onSubmitUserSearchForm.bind(this);
    this.clearUserSearchResults = this.clearUserSearchResults.bind(this);
  }

  onSubmitUserSearchForm(userName) {
    this.setState({
      errorFetchingResults: false,
      isFinishedFetchingData: false,
    });

    Promise.all([
      this._fetchUserInfo(userName),
      this._fetchUserWorkExperience(userName),
    ]).catch(err => {
      this.setState({errorFetchingResults: true});
      console.log(err);
    }).finally(() => {
      this.setState({isFinishedFetchingData: true});
    });
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
          this.state.isFinishedFetchingData 
          ? <SearchPage 
              handleSubmit={this.onSubmitUserSearchForm} 
              errorFetchingResults={this.state.errorFetchingResults}/> 
          : <UserProfilePage 
              userData={this.state.userInfoData} 
              handleBackBtnClick={this.clearUserSearchResults}
            />
        }
      </div>
    )
  }
}