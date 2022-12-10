const mongoose = require('mongoose')
const {Schema} = mongoose

const appointmentSchema = new Schema ({
    patientId:{
        type:Schema.Types.ObjectId,
        ref:'Patient'
    },
    patientName:{
        type:String,
        required:true
    },
    doctorId:{
      type:Schema.Types.ObjectId,
      ref:'Doctor'
    },
    doctorName:{
        type:Stirng,
        required:true
        },
    departmentName:{
        type:String,
        required:true,
    },
    symtoms:{
        type:String,
        require:true,
    },
    data:{
      type:Date,
     default: Date.now
    }
},{timestamps:true,})

module.exports = mongoose.model('Appointment', appointmentSchema)