import React from 'react';

export default class UserProfileSideBar extends React.Component {

  render() {
    const userBasicInfoData = {
      name: this.props.userData.display_name,
      website: this.props.userData.website,
      job: this.props.userData.occupation,
      location: this.props.userData.location,
      imgUrl: this.props.userData.images && this.props.userData.images[50]
    }
    console.log(this.props.userData)
    const userStatsData = this.props.userData.stats;
    const workExperienceData = this.props.workExperienceData;

    return (
      <aside style={{float: 'left'}}>
        <UserBasicInfo 
          data={userBasicInfoData}
          onClickUserName={this.props.onClickUserName}/>
        <hr/>
        <UserStats 
          data={userStatsData} 
          onClickFollowersLink={this.props.onClickFollowersLink}
          onClickFollowingLink={this.props.onClickFollowingLink}/>
        <hr/>
        <UserWorkExperience data={workExperienceData} />
      </aside>
    )
  }
}

function UserBasicInfo(props) {
  return (
    <div>
      <h3 onClick={props.onClickUserName}>{props.data.name}</h3> 
      <p>{props.data.job}</p>
      <p>{props.data.location}</p>
      <p>{props.data.website}</p>
      {props.data.imgUrl && <img src={props.data.imgUrl}/>}
    </div>
  )
}

function UserStats(props) {
  return (
    <div>
      <p>Project Views {props.data.views}</p> 
      <p>Appreciations {props.data.appreciations}</p>
      <p onClick={props.onClickFollowersLink}>Followers {props.data.followers}</p>
      <p onClick={props.onClickFollowingLink}>Following {props.data.following}</p>
    </div>
  )
}

function UserWorkExperience(props) {
  const workExperiences = Array.isArray(props.data) ? props.data : [];

  return (
    <div>
      <p>{workExperiences.length > 0 ? 'Work Experience: ' : 'No work experience'}</p>
      {workExperiences.map(workExperiece => {
        return (
          <div key={workExperiece.start_date} className="work-experience-row">
            <em>{workExperiece.start_date}</em> {workExperiece.location}
            <br />
            {workExperiece.organization}
            <br />
            {workExperiece.position}
          </div>
          )  
        })
      }
    </div>
  )
}
