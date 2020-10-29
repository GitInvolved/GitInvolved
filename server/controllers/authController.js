const authController = {};
const clientId = '21b87ca77f7f56db3dcf';
const clientSecret = '<YOUR_CLIENT_SECRET>';
const redirectUrl = '<YOUR_REDIRECT_URL>';

authController.getToken = (req, res, next) => {
  //const githubId = [req.user.id];
  res.redirect(`https://github.com/login/oauth/authorize?client_id=21b87ca77f7f56db3dcf`);
  console.log('getToken');
  return next();
};

authController.getData = (req, res, next) => {
  const requestToken = req.query.code;
  const githubUrl = `https://github.com/login/oauth/${requestToken}`;

  //if GitHub API returns the code parameter
  if (requestToken) {
    const requestData = {
      clientId: clientId,
      redirectUrl: redirectUrl,
      clientSecret: clientSecret,
      code: requestToken,
    };

    fetch(githubUrl, {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: {
        accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const accessToken = data.access_token;
        res.redirect(`/profile.html?access_token=${accessToken}`);
        return next();
      })
      .catch((error) => {
        console.log('fetch error');
        return next(error);
      });
  }
};

// console.log(authController);
export default authController;
