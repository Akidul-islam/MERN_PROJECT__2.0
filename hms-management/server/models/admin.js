const mongoose = require('mongoose');

const { Schema } = mongoose;

const adminSchema = new Schema({
  position: { type: String },
  salary: { type: String },
});

module.exports = mongoose.model('Admin', adminSchema);
