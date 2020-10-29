import User from '../models/applicationUsers';
import UserRepos from '../models/userRepos';
import fetch from 'node-fetch';
let userController: any = {};

// GET /repos/{owner}/{repo}
// https://api.github.com/users/defunkt/repos

let dummyUser: string = 'oslabs-beta';

// gitHubid, name (title), forked, stargazers_count, commits, languages_url
userController.getRepos = (req: any, res: any, next: any) => {
  let req1 = req;
  let res1 = res;

  fetch(`https://api.github.com/users/${dummyUser}/repos`)
  .then(res => res.json())
  .then((data) => {

    console.log(typeof data)
    console.log(Array.isArray(data));
    console.log(data);
   
    // Iterate through data which is an array of repo objects
    data.forEach(async (repo: any) => {
      
      let dbRepo = await UserRepos.findOne({gitId: `${repo.id}`}).exec()

      if(dbRepo === null) {
        // Create dbRepo using the userRepo Schema
        await UserRepos.create({
          gitId: repo.id,
          description: repo.description,
          owner: repo.owner.login,
          forked: repo.fork,
          stargazers: repo.stargazers_count,
          commits: repo.commits_url,
          languages: repo.languages_url,
          repoUrl: repo.html_url,
          help: false,
        }, (err: any, userRepo: any) => {
          if(err) {
            console.log("There was an error creating the userRepo");
            console.log(err)
          }
          console.log(userRepo);
        })
      } 
      // Else Update the dbRepo document

    })

     return next()
  })
  .catch(() => {
    return next()
  })

  
};

export default userController;