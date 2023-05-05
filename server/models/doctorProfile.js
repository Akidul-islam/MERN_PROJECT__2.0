const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  fullName: {
    type: String,
    trim: true,
  },
  avater: {
    type: String,
  },
  phone: {
    type: String,
    trim: true,
  },
  department: {
    type: String,
  },
  age: {
    type: String,
  },
  address: {
    type: String,
  },
  gender: {
    type: String,
  },
  licence_num: {
    type: String,
  },
  skills: {
    type: [String],
  },
  appointment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
    },
  ],

  doc_gigs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DoctorGig",
    },
  ],
  degree: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Doctor", doctorSchema);
