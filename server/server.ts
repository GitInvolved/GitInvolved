import express from 'express';
import path from 'path';
import mongoose from 'mongoose'

import userAPI from './routes/userAPI';

require('dotenv').config();

const PORT = 3000;
const app = express();

const uri: string = (typeof process.env.MONGO_URI === 'string') ? process.env.MONGO_URI : '';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.static('public'));
app.use('/build', express.static(path.resolve(__dirname, '../../build')));

app.use('/api', userAPI);



// app.get('/', (_req: any, res) => {
//     res.status(200).sendFile(path.resolve(__dirname, '../../public/index.html'));
//   });

app.listen(PORT, () => console.log('Listening on 3000'));
