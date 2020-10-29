import React from 'react';
import Repo from '../Components/Repo';

const MyRepoContainer = (props: any) => {

  let repoList: any = [];
  for(let i = 0; i < props.data.length; i++) {
    repoList.push(
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

  console.log('repo list');
  console.log(repoList);

  return (
    <div id="repo-container">
      {repoList}
    </div>
  )
}

export default MyRepoContainer;
