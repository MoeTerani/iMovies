// const path = require('path');
const express = require('express');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
// const compression = require('compression');
const cors = require('cors');

// Start express app
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/api'));


//  ROUTES


module.exports = app;