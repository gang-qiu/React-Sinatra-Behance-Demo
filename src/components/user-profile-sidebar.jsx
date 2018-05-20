import React from 'react';
import UserProfileSideBarBasicInfo from './user-profile-sidebar-basic-info';

export default class UserProfileSideBar extends React.Component {
  render() {
    console.log(this.props.userData)
    const userBasicInfoData = {
      name: this.props.userData.display_name,
      website: this.props.userData.website,
      job: this.props.userData.occupation,
      location: this.props.userData.location,
      imgUrl: this.props.userData.images[50]
    }

    const userStatsData = this.props.userData.stats;

    return (
      <aside>
        <UserBasicInfo data={userBasicInfoData}/>
        <hr/>
        <UserStats data={userStatsData}/>
        <hr/>
      </aside>
    )
  }
}

function UserBasicInfo(props) {
  return (
    <div>
      <h3>{props.data.name}</h3> 
      <p>{props.data.job}</p>
      <p>{props.data.location}</p>
      <p>{props.data.website}</p>
      <img src={props.data.imgUrl}/>
    </div>
  )
}

function UserStats(props) {
  return (
    <div>
      <p>Project Views {props.data.views}</p> 
      <p>Appreciations {props.data.appreciations}</p>
      <p>Followers {props.data.followers}</p>
      <p>Following {props.data.following}</p>
    </div>
  )
}
