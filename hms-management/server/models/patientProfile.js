const mongoose = require('mongoose');
const { Schema } = mongoose;
const patientSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
  fullName: {
    type: String,
    required: [true, 'wright your name'],
  },
  avater: {
    type: String,
    default:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-xsukd&psig=AOvVaw2w6qmgkmU6iKup_cpSG6z8&ust=1670523817465000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMiUg6mQ6PsCFQAAAAAdAAAAABAE',
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
  sex: {
    type: String,
  },
  birthdate: {
    type: String,
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
});

module.exports = mongoose.model('Patient', patientSchema);
