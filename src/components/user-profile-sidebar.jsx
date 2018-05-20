import React from 'react';

export default class UserProfileSideBar extends React.Component {

  render() {
    const userBasicInfoData = {
      name: this.props.userData.display_name,
      website: this.props.userData.website,
      job: this.props.userData.occupation,
      location: this.props.userData.location,
      imgUrl: this.props.userData.images[50]
    }

    const userStatsData = this.props.userData.stats;
    const workExperienceData = this.props.workExperienceData;

    return (
      <aside style={{float: 'left'}}>
        <UserBasicInfo data={userBasicInfoData}/>
        <hr/>
        <UserStats data={userStatsData}/>
        <hr/>
        <UserWorkExperience data={workExperienceData} />
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
