import React from 'react';
import SearchUserInput from './search-user-input';

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(userName) {
    console.log('page', userName);
  }
  render() {
    return (
      <main>
        <h1>Search for users...</h1>
        <SearchUserInput onSubmit={this.props.handleSubmit}/>
      </main>
    )
  }
}