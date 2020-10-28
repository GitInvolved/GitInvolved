import User from '../models/applicationUsers.ts';
let userController: any = {};

// GET /repos/{owner}/{repo}
// https://api.github.com/users/defunkt/repos

let dummyUser: string = 'jmodestov';
userController.getRepos = (req: any, res: any, next: any) => {
  fetch('https://api.github.com/users/jmodestov/repos')
  .then(res => res.json())
  .then((data) => {
    console.log(data)
    return next()
  })
  .catch(err => {
    console.log(err)
    return next()
  })

  
};

export default userController;