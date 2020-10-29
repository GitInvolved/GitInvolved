import React from 'react';
import Repo from '../Components/Repo';

const MyRepoContainer = (props: any) => {

  let myRepoList: any = [];
  for(let i = 0; i < props.data.length; i++) {
    myRepoList.push(
      <Repo
        name={props.data[i].name}
        gitId={props.data[i].gitId}
        description={props.data[i].description}
        owner={props.data[i].owner}
        stars={props.data[i].stargazers}
        url={props.data[i].repoUrl}
        help={props.data[i].help}
      />
    );
  }

  return (
    <div id="repo-container">
      {myRepoList}
    </div>
  )
}

export default MyRepoContainer;
