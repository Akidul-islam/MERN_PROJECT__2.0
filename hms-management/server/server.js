const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');
const router = require('./routes/api/index');
const ErrorHandler = require('./middleware/errorHandlerMiddleware/globalError');
const PORT = process.env.PORT || 3000;
require('dotenv').config();
const db = process.env.MONGOCONNECT;

// practice
// Connect database
connectDB(db);

// middleware
// only allow this url
let corsOptions = {
  origin: 'http://localhost:3000',
};
// app.use(express.static(path.join))
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(ErrorHandler);

// I am listening you
app.listen(PORT, () => console.log(`🏎  ✔ Server started on port ${PORT}`));
