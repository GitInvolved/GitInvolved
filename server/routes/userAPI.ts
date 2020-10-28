import express from 'express'
import userController from '../controllers/userController';

const userAPI = express.Router();

userAPI.get('/getrepos', userController.getRepos, (req, res) => {
  res.status(200)
})

module.exports = userAPI;