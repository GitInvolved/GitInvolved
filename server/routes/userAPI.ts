import express from 'express'
import userController from '../controllers/userController';

const userAPI = express.Router();

userAPI.get('/getrepos', userController.getRepos, userController.getLanguages, (req, res) => {
  let req1 = req;
  res.sendStatus(200)
})

// /profileData
export default userAPI;