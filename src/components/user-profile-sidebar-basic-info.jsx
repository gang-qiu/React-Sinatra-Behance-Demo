import React from 'react';
import PropTypes from 'prop-types';

export default class UserProfileSideBarBasicInfo extends React.Component {
  render () {
    <div>
      {JSON.stringify(this.props.data)}
    </div>
  }
}

UserProfileSideBarBasicInfo.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    websiteUrl: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
  }).isRequired
};