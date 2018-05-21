import React from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: null};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            <input
              placeholder={this.props.placeholder} 
              value={this.state.userName}
              onChange={this.handleChange}/>
          </label>
        </div>
      </form>
    )
  }
}

TextInput.PropTypes = {
  placeholder: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
}

