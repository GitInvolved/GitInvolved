import React from 'react';
import { HiOutlineStar } from 'react-icons/hi'

const Repo = (props: any) => {
  return (
    <div className="repo-div">
      <div className="repoheader">{props.name}</div>
      <div className="repodesc">{props.description}</div>
      <div className="repoowner">{props.owner}</div>
      <div className="repourl">{props.url}</div>
      <div className="repostars">
        <HiOutlineStar className="repoicon" />
        {props.stars}
      </div>
      <div className="repohelp">{props.help}</div>
    </div>
  )
}

export default Repo;
