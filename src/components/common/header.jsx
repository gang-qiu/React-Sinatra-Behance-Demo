import React from 'react';
import './header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <span 
            className="logo-text"
            onClick={this.props.onClickLogo}>
            Dealer Behanced
          </span>
        </div>
      </header>
    )
  }
}