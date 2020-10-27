"use strict";
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));
//app.use('/build', express.static(path.join(__dirname, '../build')));
app.listen(3000, () => console.log('Listening on 3000'));
//# sourceMappingURL=server.js.map