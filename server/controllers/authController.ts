import fetch from 'node-fetch';
const authController: any = {};
const clientId = '';
const clientSecret = '';
const redirectUrl = 'http://localhost:3000/auth/profile';

authController.getData = (req: any, res: any, next: any) => {
  //Receive the code parameter from GitHub API after user signin there
  const requestToken = req.query.code;
  const githubUrl = `https://github.com/login/oauth/access_token?client_id=${clientId}&redirect_uri=${redirectUrl}&client_secret=${clientSecret}&code=${requestToken}`;

  //Post request to another GitHub API endpoint for an access token
  fetch(githubUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const access_token = data.access_token;
      res.redirect(`/profile.html?access_token=${access_token}`);
      return next();
    })
    .catch((error) => {
      console.log('fetch error');
      return next(error);
    });
};

// export default authController;
export default authController;