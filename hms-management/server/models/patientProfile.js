const mongoose = require('mongoose');
const { Schema } = mongoose;
const patientSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
    },
    personalInfo: {
      full_name: { type: String },
      age: { type: String },
      phone: { type: String },
      address: { type: String },
      gender: { type: String },
      birthdate: { type: String },
    },

    hospitalInfo: {
      diagnosis: {
        isCompleted: { type: Boolean, default: false },
        diagnosis_details: [
          {
            diagnosis_code: { type: String },
            diagnosis_date: { type: Date, default: Date.now },
            medical_condition: { type: String },
            diagnosis_description: { type: String },
            complications: { type: String },
            treatment_plan: [
              {
                notes: { type: String },
                medication: { type: String },
                dosage: { type: String },
                schedule: { type: String },
              },
            ],
          },
        ],
      },
      medicalHistory: [
        {
          condition: { type: String },
          diagnosed_date: { type: String },
        },
      ],
      admitted: { type: Boolean, default: false },
      discharged: { type: Boolean, default: false },
      croom_no: { type: Number, default: null },
      proom_no: { type: Number, default: null },
      surgery: { type: Boolean, default: false },
      diseasis: { type: String },
      admit_condition: { type: String },
      waiting: { type: Boolean, default: false },
      leave_time: { type: Date, default: new Date() },
    },

    appointment: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Appointment',
      },
    ],
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Patient', patientSchema);
