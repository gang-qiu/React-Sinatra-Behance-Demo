import React from 'react';
import Header from './header';
import SearchPage from './search-page';
import UserProfilePage from './user-profile-page';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userSearchResults: null,
    };

    this.onSubmitUserSearchForm = this.onSubmitUserSearchForm.bind(this);
    this.handleBackBtnClick = this.handleBackBtnClick.bind(this);
  }

  onSubmitUserSearchForm(userName) {
    console.log('app'+ userName);
    this.setState({userSearchResults: userName});
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
          ? <SearchPage handleSubmit={this.onSubmitUserSearchForm}/> 
          : <UserProfilePage 
              userSearchResults={this.state.userSearchResults} 
              handleBackBtnClick={this.handleBackBtnClick}
            />
        }
      </div>
    )
  }
}