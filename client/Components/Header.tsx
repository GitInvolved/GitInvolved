import React from 'react';

const Header = () => {
  return (
    <div id="header-container">
      <div id="profile-pic-div">
        <img id="profile-pic" src="https://i.imgur.com/rY1b33l.jpg" title="source: imgur.com" />
      </div>
      <div id="header-right">
        <div id="header-links">
          <a className="header-btn"><p id="my-repos-header">My Repositories</p></a>
          <a className="header-btn"><p id="starred-header">Starred</p></a>
        </div>
        <div id="header-search">
          <input id="" type="text" placeholder="Find Repository"></input>
        </div>
      </div>
    </div>
  )
}

export default Header;
