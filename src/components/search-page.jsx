import React from 'react';
import SearchUserInput from './search-user-input';
import './search-page.css';

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const results = Array.isArray(this.props.searchUsersResultsList) ? this.props.searchUsersResultsList : [];
    console.log(results);
    return (
      <main>
        <h1>Search for users...</h1>
        <SearchUserInput onSubmit={this.props.handleSubmit}/>
        {this.props.errorFetchingResults && <p>Error loading results...</p>}
        {results.map(result => {
          return <SearchResult userResult={result} />
        })}
      </main>
    )
  }
}

function SearchResult (props) {
  const data = props.userResult;

  return (
    <div key={data.id} className="search-result-row">
      <img src={data.images[50]} />
      <strong>{data.display_name}</strong>
      <span>{data.location}</span>
    </div>
  )
}