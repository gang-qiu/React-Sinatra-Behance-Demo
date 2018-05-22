import React from 'react';
import './sidebar.css';

export default class SideBar extends React.Component {

  render() {
    const userBasicInfoData = {
      name: this.props.userData.display_name,
      website: this.props.userData.website,
      job: this.props.userData.occupation,
      location: this.props.userData.location,
      imgUrl: this.props.userData.images && this.props.userData.images[138]
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
      <div className="text-center">
        <p className="lead" onClick={props.onClickUserName}>
          <a>{props.data.name}</a>
        </p> 
        {props.data.imgUrl && 
          <img className="img-circle clickable" 
            onClick={props.onClickUserName}
            src={props.data.imgUrl}/>
        }
        <p>{props.data.job}</p>
        <p>
          <a href={'https:www.google.com/maps?=' + props.data.location.replace(' ', '+')}>
            <span className="glyphicon glyphicon-globe"></span> &nbsp;
            {props.data.location}
          </a>
        </p>
        <p>
          <a href={props.data.website}>{props.data.website}</a>
        </p>
            
      </div>
    </div>
  )
}

function UserStats(props) {
  return (
    <div>
      <p className="clearfix">
        <span className="pull-left">Project Views</span> 
        <span className="pull-right">{props.data.views}</span>
      </p> 
      <p className="clearfix">
        <span className="pull-left">Appreciations</span> 
        <span className="pull-right">{props.data.appreciations}</span>
      </p>
      <p className="clearfix" onClick={props.onClickFollowersLink}>
        <a className="pull-left">
          Followers <span className="glyphicon glyphicon-log-in"></span>
        </a> 
        <span className="pull-right">{props.data.followers}</span>
      </p>
      <p className="clearfix" onClick={props.onClickFollowingLink}>
        <a className="pull-left">
          Following <span className="glyphicon glyphicon-log-in"></span>
        </a> 
        <span className="pull-right">{props.data.following}</span>
      </p>
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
