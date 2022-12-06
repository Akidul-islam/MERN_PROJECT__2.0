const express = require("express");
const app = express();
const connectDB = require("./config/db");
const router = require('./routes/api/index');
const ErrorHandler = require("./middleware/errorHandlerMiddleware/globalError");
const PORT = process.env.PORT || 8080;
require('dotenv').config()
const db = process.env.MONGOCONNECT;

// practice 
const practice = require('./routes/api/parctice')
// Connect database
connectDB(db)

// middleware
app.use(express.json())
app.use(router)
app.use(ErrorHandler)
app.use(practice)


// I am listening you
app.listen(PORT, () =>
  console.log(`🏎  ✔ Server started on port ${PORT}`)
);
