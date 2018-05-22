import React from 'react';
import './header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <a 
              className="logo-text clickable navbar-brand"
              onClick={this.props.onClickLogo}>
              Dealer Behanced
            </a>
          </div>
        </div>
      </header>
    )
  }
}