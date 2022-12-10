const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  avatar: {
    type: String
  },
  phone:{
    type:String,
    trim:true,
    required:true,
  },
  age:{
    type:String,
    required:true,
    default:'0'
  },
  address:{
    type:String,
    required:true,
  },
  dmesId:{
      type:String,
      trim:true,
      required:true,
  },
  skills: {
    type: [String],
    required: true
  },
  appointment_list:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Appointment'
    }
  ],
  gigs: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      description: {
        type: String
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String,
        required: true
      },
      description: {
        type: String
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Doctor", doctorSchema);
