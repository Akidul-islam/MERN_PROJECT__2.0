const mongoose = require('mongoose');
const connectDB = async (db) => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('💾  ✔ MongoDB connected');
  } catch (err) {
    console.error(err);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
