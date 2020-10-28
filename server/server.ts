import express from 'express';
const app = express();
import path from 'path';

app.use(express.static('public'));
app.use('/build', express.static(path.resolve(__dirname, '../../build')));

// app.get('/', (_req: any, res) => {
//     res.status(200).sendFile(path.resolve(__dirname, '../../public/index.html'));
//   });

app.listen(3000, () => console.log('Listening on 3000'));
