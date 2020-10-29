const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authController');
// import express from 'express';
// import authController from '../controllers/authController';

// Direct user to GitHub for authentication
authRouter.get('/', (req, res) => {
  res.status(301).redirect(`https://www.google.com/`);
});

// Redirected back from GitHub
authRouter.get('/profile', authController.getData, (req, res) => {
  console.log('get here');
  // res.status(200).json('getData done');
});

// export default authRouter;
module.exports = authRouter;
