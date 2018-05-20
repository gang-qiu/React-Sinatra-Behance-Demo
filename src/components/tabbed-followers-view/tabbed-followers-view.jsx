import React from 'react';

export default class TabbedFollowersView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h2>{this.props.activeView}</h2>
    )
  }
}