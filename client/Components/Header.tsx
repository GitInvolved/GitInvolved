import React from 'react';

const Header = () => {
  return (
    <div>
      <div id="header-container">
        <img id="profile-pic" src="https://i.imgur.com/geQRMcr.png" title="source: imgur.com" />
        <a><p className="header-btn" id="my-repos-header">My Repositories</p></a>
        <a><p className="header-btn" id="starred-header">Starred</p></a>
      </div>
      <input type="text" placeholder="Find Repository"></input>
    </div>
  )
}

export default Header;
