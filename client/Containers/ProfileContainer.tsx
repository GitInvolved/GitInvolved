import React, { useState } from 'react';
import Header from '../Components/Header';
import CategoryContainer from './CategoryContainer';
import MyRepoContainer from './MyRepoContainer';
import StarredRepoContainer from './StarredRepoContainer';

const ProfileContainer = () => {

  const [myReposActive, setMyReposActive] = useState(true);
  const [starredReposActive, setStarredReposActive] = useState(!myReposActive);

  const makeMyReposActive = () => {
    setMyReposActive(true);
    setStarredReposActive(false);
  }

  const makeStarredReposActive = () => {
    setStarredReposActive(true);
    setMyReposActive(false);
  }

  return(
    <div id="profile-container">
    <Header 
      makeMyReposActive={() => makeMyReposActive()}
      myReposActive={myReposActive}
      makeStarredReposActive={() => makeStarredReposActive()}
      starredReposActive={starredReposActive}
    />
    <div id="cat-and-repo">
      <CategoryContainer />
      <MyRepoContainer />
      <StarredRepoContainer />
    </div>
  </div>
  )
};

export default ProfileContainer;
