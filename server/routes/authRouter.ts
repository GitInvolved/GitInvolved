import express from 'express';
const authRouter = express.Router();
import authController from '../controllers/authController';
// import express from 'express';
// import authController from '../controllers/authController';

// Direct user to GitHub for authentication
authRouter.get('/', (_req, res) => {
  res.status(301).redirect(`https://www.google.com/`);
});

// Redirected back from GitHub
authRouter.get('/profile', authController.getData, (_req, _res) => {
  console.log('get here');
  // res.status(200).json('getData done');
});

// export default authRouter;
export default authRouter;