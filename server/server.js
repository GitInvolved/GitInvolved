const express = require('express');
const app = express();
const path = require('path');
// import express from 'express';
// import path from 'path';
// import authRouter from './routers/authRouter';

const authRouter = require('./routers/authRouter');

app.use(express.static('public'));
app.use('/build', express.static(path.resolve(__dirname, '../../build')));

// app.get('/', (_req: any, res) => {
//     res.status(200).sendFile(path.resolve(__dirname, '../../public/index.html'));
//   });

app.use('/auth', authRouter);

app.listen(3000, () => console.log('Listening on 3000'));
