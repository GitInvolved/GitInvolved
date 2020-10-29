import React from 'react';
import { HiOutlineStar } from 'react-icons/hi';
import { useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Repo = (props: any) => {

  const [{ isDragging }, drag] = useDrag({
    item: { type: 'DRAGME' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <div className="repo-div">
      <div className="repoheader">{props.name}</div>
      <div className="repodesc"><span className="repotitle">What it is</span><br/>{props.description}</div>
      <div className="repoowner"><span className="repotitle">Author</span><br/>{props.owner}</div>
      <div className="repourl"><span className="repotitle">Website</span><br/><a href={props.url}/>{props.url}</div>
      <div className="repodragtocat" ref={drag}>DRAG ME</div>
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
