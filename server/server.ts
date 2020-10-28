import express from 'express';
import path from 'path';

const mongoose = require('mongoose');

const userAPI = require('./routes/userAPI.ts')

require('dotenv').config();

const PORT = 3000;
const app = express();

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.static('public'));
app.use('/build', express.static(path.resolve(__dirname, '../../build')));

app.use('/api', userAPI);


// app.get('/', (_req: any, res) => {
//     res.status(200).sendFile(path.resolve(__dirname, '../../public/index.html'));
//   });

app.listen(PORT, () => console.log('Listening on 3000'));
