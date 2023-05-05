const mongoose = require("mongoose");
const { Schema } = mongoose;
const patientSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  fullName: {
    type: String,
  },
  avater: {
    type: String,
  },
  age: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  gender: {
    type: String,
  },
  birthdate: {
    type: String,
  },
  appointment: [
    {
      type: Schema.Types.ObjectId,
      ref: "Appointment",
    },
  ],
  disease: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Patient", patientSchema);
