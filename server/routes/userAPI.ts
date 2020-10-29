import express from 'express'
import userController from '../controllers/userController';

const userAPI = express.Router();

userAPI.get('/getrepos', userController.getRepos, (req, res) => {
  let req1 = req;
  res.sendStatus(200)
})

export default userAPI;