const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  avatar: {
    type: String
  },
  
  dmesId:{
      type:String,
      required:true
  },
  skills: {
    type: [String],
    required: true
  },
  appointment_list:[
    {
      patientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
      },
      name:{
        type:String,
        required:true
      },
      date:{
        type:Date,
        default:new Date.now()
      }
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
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
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
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
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

module.exports = DoctorProfile = mongoose.model("DoctorProfile", profileSchema);
