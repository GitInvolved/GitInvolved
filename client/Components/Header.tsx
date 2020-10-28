/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const Header = () => {
  const onEnter = () => {
    //  do something
  };

  return (
    <div id="header-container">
      <div id="profile-pic-div">
        <img id="profile-pic" src="https://i.imgur.com/rY1b33l.jpg" alt="GitHub profile img" />
      </div>
      <div id="header-right">
        <div id="header-links">
          <a className="header-btn" id="my-repos-header">My Repositories</a>
          <a className="header-btn" id="starred-header">Starred Repositories</a>
        </div>
        <div id="header-search">
          <input id="profile-repo-search" type="text" placeholder="Find Repository" />
        </div>
      </div>
    </div>
  );
};

export default Header;
