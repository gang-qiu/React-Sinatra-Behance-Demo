import React from 'react';
import './sidebar.css';

export default class SideBar extends React.Component {

  render() {
    const userBasicInfoData = {
      name: this.props.userData.display_name,
      website: this.props.userData.website,
      job: this.props.userData.occupation,
      location: this.props.userData.location,
      imgUrl: this.props.userData.images && this.props.userData.images[50]
    }

    const userStatsData = this.props.userData.stats;
    const workExperienceData = this.props.workExperienceData;

    return (
      <aside>
        <UserBasicInfo 
          data={userBasicInfoData}
          onClickUserName={() => this.props.setActiveView('projects')}/>
        <hr/>
        <UserStats 
          data={userStatsData} 
          onClickFollowersLink={() => this.props.setActiveView('followers')}
          onClickFollowingLink={() => this.props.setActiveView('following')}/>
        <hr/>
        <UserWorkExperience data={workExperienceData} />
      </aside>
    )
  }
}

function UserBasicInfo(props) {
  return (
    <div>
      <p className="lead" onClick={props.onClickUserName}>{props.data.name}</p> 
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
      {workExperiences.map((workExperiece, idx) => {
        return (
          <div key={workExperiece.start_date + idx} className="work-experience-row">
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
