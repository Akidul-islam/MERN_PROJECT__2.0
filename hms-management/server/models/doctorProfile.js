const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  avatar: {
    type: String,
  },
  hospitalInfo: {
    position: { type: String },
    department_name: { type: String },
    salary: { type: String },
  },
  personalInfo: {
    full_name: {
      type: String,
      trim: true,
    },
    phone: { type: String },
    age: { type: String },
    gender: { type: String },
    address: { type: String },
    dmscId: { type: String },
  },
  education: [
    {
      school: { type: String },
      degree: { type: String },
      fieldofstudy: { type: String },
      description: { type: String },
    },
  ],
  skills: [String],
  appointment_list: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment',
    },
  ],
  gigs: [],

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Doctor', doctorSchema);
