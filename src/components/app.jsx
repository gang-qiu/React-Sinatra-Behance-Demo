import React from 'react';
import Header from './header';
import SearchPage from './search-page';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hasSearchResults: false,
    };

    this.onSubmitUserSearchForm = this.onSubmitUserSearchForm.bind(this);
  }

  onSubmitUserSearchForm(userName) {
    console.log('app'+ userName);
  }

  render() {
    return (
      <div>
        <Header/>
        <SearchPage handleSubmit={this.onSubmitUserSearchForm}/>
      </div>
    )
  }
}