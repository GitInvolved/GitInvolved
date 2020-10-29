import React, { useState } from 'react';
import Header from '../Components/Header';
import CategoryContainer from './CategoryContainer';
import MyRepoContainer from './MyRepoContainer';
import StarredRepoContainer from './StarredRepoContainer';

const ProfileContainer = () => {

  const [myReposActive, setMyReposActive] = useState(true);
  const [starredReposActive, setStarredReposActive] = useState(!myReposActive);

  // attr userRepos is array of obj
  // with attrs 
  /*
  gitId: {type: Number, required: true},
  name: {type: String, required: true}, 
  description: {type: String, required: false},
  owner: {type: String, required: true},
  forked: {type: Boolean, required: true}, ------> do you own main repo or a fork of it
  stargazers: {type: Number, required: true}, ------> number of stars
  commits: {type: String, required: true}, //don't use
  languages_url: {type: String, required: true}, //don't use
  languages: {type: Object, required: true, default: {}}, == object with keys, value is # of files
  repoUrl: {type: String, required: true},  
  help: {type: Boolean, required: false} // do they want help with their repo or not // when clicking, send gitId, project name, and true or false
  */

  // let fetchData: Array<object> = [];

  // fetch('/api/profiledata')
  //   .then(res => res.json())
  //   .then(res => fetchData = res.userRepos)
  //   .catch(err => console.log(err));

  const makeMyReposActive = () => {
    setMyReposActive(true);
    setStarredReposActive(false);
  }

  const dummyData = [
    { gitId: 432,
      name: 'Aqls', 
      description: 'a way to get aqls',
      owner: 'julie pinchak',
      forked: true, // ------> do you own main repo or a fork of it
      stargazers: 84, // ------> number of stars
      commits: 'jfksdl', // {type: String, required: true}, //don't use
      languages_url: 'fds', //{type: String, required: true}, //don't use
      repoUrl: 'aqls.io',  
      help: false, // do they want help with their repo or not // when clicking, send gitId, project name, and true or false}
    },
    { gitId: 434,
      name: 'Gatsby', 
      description: 'got tons of attention',
      owner: 'bhash',
      forked: false, // ------> do you own main repo or a fork of it
      stargazers: 121, // ------> number of stars
      commits: 'jfksdl', // {type: String, required: true}, //don't use
      languages_url: 'fds', //{type: String, required: true}, //don't use
      repoUrl: 'gatsby.io',  
      help: true, // do they want help with their repo or not // when clicking, send gitId, project name, and true or false}
    }
  ];

  const [dummy, setDummy] = useState(dummyData);

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
      {
        myReposActive
        ? <MyRepoContainer data={dummy} />
        : <StarredRepoContainer />
      }

    </div>
  </div>
  )
};

export default ProfileContainer;
