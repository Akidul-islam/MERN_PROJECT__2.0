const Doctor = require('../models/doctorProfile')
const takeError = require('../utilities/error')

const crudOperation = require('../services/rolesBaseActivity')

// doctor profile create
const createDoctorService = async(bodyData, user) =>{
    const doctorExits = await crudOperation.dbFindPropertyById(Doctor, 'userId', user._id)
    if(doctorExits) throw takeError('already users exits', 404)
    const data ={
        userId:user._id,
        name:user.name,
        email:user.email,
        role:user.role[0],
        ...bodyData
    }
    console.log(data)
    const doctor =  await crudOperation.dbCreateNewItem(Doctor, data)
     return doctor
   
}

// get all doctors and query systems
const doctorsService = async (data) =>{
    const queryObject = {}
    if(data){
     const {name,sex,phone,dmseId }= data
     if(name) {queryObject.name = {$regex :name, $options:'i'}}
     
     if(sex){
         queryObject.sex = {$regex :sex, $options:'i'}
 
     }
     if(phone){
         queryObject.phone = phone 
     }
     if(dmseId){
         queryObject.dmseId = dmseId
     }
    }
    return await crudOperation.dbGetItems(Doctor, queryObject)
 }
 
 // singlePatients
 const singleDoctorService =async (doctorId) =>{
     const doctor = await crudOperation.dbFindPropertyById(Doctor, '_id', doctorId)
     if(!doctor) throw takeError('doctor does not exits', 400)
     return await Doctor.findOne({_id:doctor._id }).populate('userId', '-password')
 }
 
 //doctor update/edit his/her profile 
 const doctorUpdateService = async (doctorId, doctorData, user) =>{
     const doctor = await crudOperation.dbFindPropertyById(Doctor, '_id', doctorId)
     if(!doctor) throw takeError('does not exits', 404)
       //   2 ta id equal bt match kore na kano...?
     if(doctor.userId._id.toString() === user._id.toString()){
         user.name = doctorData.name ?? user.name,
         user.role[0] = doctorData.role ?? user.role[0]
         await user.save()
     }
    
        doctor.address= doctorData.address  ?? doctor.address,
        doctor.phone = doctorData.phone  ?? doctor.phone
        return doctor
 
 }
 
 // deleted service
 const deleteDoctorService = async (doctorId) =>{
     const doctor = await crudOperation.dbFindPropertyById(Doctor, '_id', doctorId)
     if(!doctor) throw takeError('user not exit', 400)
      return await crudOperation.dbDeletedItem(Doctor, doctorId)
 }

module.exports = {createDoctorService, doctorsService, singleDoctorService, deleteDoctorService, doctorUpdateService}