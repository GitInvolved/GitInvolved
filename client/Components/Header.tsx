/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';

const Header = () => {

  const [repoSearch, setRepoSearch] = useState('');

  const handleEnter = (e: any) => {
    if (e.key === 'Enter') {
      console.log('Search Repo: ' + repoSearch);
      // setRepoSearch('');
    }
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
          <input
            id="profile-repo-search"
            type="text"
            placeholder="Find Repository"
            onChange={(e) => setRepoSearch(e.target.value)}
            onKeyDown={handleEnter}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
