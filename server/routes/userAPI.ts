import express from 'express'
import userController from '../controllers/userController';

const userAPI = express.Router();

userAPI.get('/userInfo', userController.getUser, userController.getRepos, userController.getLanguages, userController.updateUser, (_req, res) => {
  console.log('res.locals: ',res.locals.userObject);
  res.sendStatus(200);
})

userAPI.get('/getrepos', userController.getRepos, userController.getLanguages, (_req, res) => {
  res.sendStatus(200)
})


// /profileData
export default userAPI;