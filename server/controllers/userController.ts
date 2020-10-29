import User from '../models/applicationUsers';
import UserRepos from '../models/userRepos';
import fetch from 'node-fetch';
let userController: any = {};

// GET /repos/{owner}/{repo}
// https://api.github.com/users/defunkt/repos

let dummyUser: string = 'oslabs-beta';

// gitHubid, name (title), forked, stargazers_count, commits, languages_url
userController.getRepos = async (_req: any, _res: any, next: any) => {
  fetch(`https://api.github.com/users/${dummyUser}/repos`)
  .then(res => res.json())
  .then( async (data) => {

    console.log(typeof data)
    console.log(Array.isArray(data));
    // console.log(data);
   
    // Iterate through data which is an array of repo objects
     for (let repo of data){

      try{
        // let dbRepo = await UserRepos.findOne({gitId: `${repo.id}`}).exec();

        // if(dbRepo === null) {
          // Create dbRepo using the userRepo Schema
          const user = new UserRepos({
            gitId: repo.id,
            name: repo.name,
            description: repo.description,
            owner: repo.owner.login,
            forked: repo.fork,
            stargazers: repo.stargazers_count,
            commits: repo.commits_url,
            languages_url: repo.languages_url,
            repoUrl: repo.html_url,
            help: false,
          })

          const _save = await user.save();

        // } 

      } catch {
        console.log('There was an errorrrrr')
      }
      
      // Else Update the dbRepo document

    };

  })
  .then(()=> next())
  .catch(() => {
    return next()
  })  
};

userController.getLanguages = (_req: any, _res: any, next: any) => {
  UserRepos.find({ owner: "oslabs-beta" }, (_err: any, data: any) => {
    //iterate over the data returned, taking each object an update the languages key in the database
    //updating the language key: fetch to the url from the same object's languages_url
    console.log(`data inside of getLanguages controller:`, data)
    data.forEach(async (repo: any) => {
      await fetch(`${repo.languages_url}`)
        .then((response) => response.json())
        .then(async responseLanguages => {
          await UserRepos.findOneAndUpdate({gitId: repo.gitId}, {languages: responseLanguages }, {findAndModify: false})
        })
    })
    return next(); 
  })
}


  //   .then((data: any) => {
  //           //iterate over the data returned, taking each object an update the languages key in the database
  //           //updating the language key: fetch to the url from the same object's languages_url
  //     data.forEach(async (repo: any) => {
  //       await fetch(`${repo.languages_url}`)
  //         .then((response) => response.json())
  //         .then(async responseLanguages => {
  //           await UserRepos.findOneAndUpdate({gitId: repo.gitId}, {languages: responseLanguages }, {findAndModify: true})
  //         })
  //     })
  //     console.log(data);
  //     return next();
  //   })
  //   .catch((err: any) => {
  //     console.log(err);
  //     return next(); 
  //   })
  // //query the database
  //   //the userRepos collection where owner of document is = userName



export default userController;