const mongoose = require('mongoose')
const {Schema} = mongoose
const patientSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'Users'
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
  });

  module.exports = mongoose.model('Patient', patientSchema)
