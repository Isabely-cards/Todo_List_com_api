const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

<<<<<<< HEAD
module.exports = app;
=======
module.exports = app;
>>>>>>> 9208a473711cc1055da15ea65e655e7facbcf537
