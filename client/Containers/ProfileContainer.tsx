import React from 'react';

import Header from '../Components/Header';
import CategoryContainer from './CategoryContainer';
import RepoContainer from './RepoContainer';

const ProfileContainer = () => {
  return (
    <div>
      <Header />
      <div id="cat-and-repo">
        <CategoryContainer />
        <RepoContainer />
      </div>
    </div>
  )
}

export default ProfileContainer;
