import User from '../models/applicationUsers';
import UserRepos from '../models/userRepos';
import fetch from 'node-fetch';
import { response } from 'express';
let userController: any = {};

// GET /repos/{owner}/{repo}
// https://api.github.com/users/defunkt/repos

require('dotenv').config();
const dummyUser = process.env.DUMMY_USER;
const dummyToken = process.env.DUMMY_TOKEN;

// gitHubid, name (title), forked, stargazers_count, commits, languages_url
userController.getRepos = async (_req: any, _res: any, next: any) => {
  fetch(`https://api.github.com/users/${dummyUser}/repos`, {
    headers: {
      authorization: `token ${dummyToken}`
    }
  })
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
  UserRepos.find({ owner: `${dummyUser}` }, async (_err: any, data: any) => {
    //iterate over the data returned, taking each object an update the languages key in the database
    //updating the language key: fetch to the url from the same object's languages_url
    console.log(`data inside of getLanguages controller:`, data)
    for (let repo of data) {
     await fetch(`${repo.languages_url}`, {
      headers: {
        authorization: `token ${dummyToken}`
      }
     })
    .then((response) => response.json())
    .then(async responseLanguages => {
      await UserRepos.findOneAndUpdate({gitId: repo.gitId}, {languages: responseLanguages }, {findAndModify: false})
    })
   } 
    return next(); 
  })
}

userController.getStarred = (_req: any, _res: any, next: any) => {
  fetch( `http://api.github.com/users/${dummyUser}/starred`, {
    headers: {
        authorization: `token ${dummyToken}`
    }
  })
    .then((res) => res.json())
    .then(async (data) => {
      // Create array containing starred repo objects
      const starred = []
      for(let repo of data) {
        starred.push({
          gitId: repo.gitId,
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
      }
      await User.findOneAndUpdate({userName: dummyUser}, {starred: starred})

    })
    .then(() => next())
    .catch((err) => {
      console.log(err);
      return next();
    })
}

userController.updateUser = (_req: any, res: any, next: any) => {

  //query all repos pertaining to user
  UserRepos.find({owner: dummyUser}, async (_err: any, data: any) => {
    if(_err) {
      console.log(_err);
      return next();
    }
    // pushing repos into the userRepos key of the user object in the DB
    await User.findOneAndUpdate({userName: dummyUser}, {userRepos: data}, {new: true}, (err, data) => {
      if(err){
        console.log(err);
        return next()
      }
      res.locals.userObject = data;
    });
    return next()
  })

}


/* either going to create a user or get an existing user  */
userController.getUser = (_req: any, res:any, next: any) => {
  //query the mongoDB for the User
  User.findOne({userName: dummyUser}, async (err, data) => {
    if (err) {
      console.log(err);
      return next(); 
    } else {
      //if the user was not found
      if (data === null) {

        await User.create({
          userName: dummyUser,
          starred: [],
          categories: [],
          userRepos: []
        }, (_err, user) => {
          res.locals.user = user;
        })

      } else {
        res.locals.user = data; 
      }
      
    }
    return next();
  })
};


export default userController;