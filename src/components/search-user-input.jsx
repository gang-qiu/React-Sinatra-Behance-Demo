import React from 'react';
import PropTypes from 'prop-types';

export default class SearchUserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userName: null};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    this.props.onSubmit(this.state.userName);
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({userName: e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            <input
              placeholder="user mcGee" 
              value={this.state.userName}
              onChange={this.handleChange}/>
          </label>
        </div>
      </form>
    )
  }
}

