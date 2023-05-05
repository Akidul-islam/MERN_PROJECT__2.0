const mongoose = require("mongoose");
const { Schema } = mongoose;

const appointmentSchema = new Schema(
  {
    patientId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
    patientName: {
      type: String,
      required: true,
    },
    doctorId: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
    doctorName: {
      type: String,
      required: true,
    },
    departmentName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    symptoms: {
      type: String,
      required: true,
    },
    google_link: {
      type: String,
    },
    data: {
      type: Date,
      default: Date.now,
    },
    appointment_status: {
      type: String,
      enum: ["approved", "reject", "pending"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
