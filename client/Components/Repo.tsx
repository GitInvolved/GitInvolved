import React from 'react';
import { HiOutlineStar } from 'react-icons/hi'

const Repo = (props: any) => {
  return (
    <div className="repo-div">
      <div className="repoheader">{props.name}</div>
      <div className="repodesc"><span className="repotitle">What it is</span><br/>{props.description}</div>
      <div className="repoowner"><span className="repotitle">Author</span><br/>{props.owner}</div>
      <div className="repourl"><span className="repotitle">Website</span><br/><a href={props.url}/>{props.url}</div>
      <div className="repostars">
        <HiOutlineStar className="repoicon" />
        {props.stars}
      </div>
      <div className="repohelp">
        <span className="repotitle">Request help?</span><br/>
        <div>
          <div className={`helpbut ${props.help ? 'active' : 'inactive'}`}>YES</div>
          <div className={`helpbut ${!props.help ? 'active' : 'inactive'}`}>NO</div>
        </div>
      </div>
    </div>
  )
}

export default Repo;
