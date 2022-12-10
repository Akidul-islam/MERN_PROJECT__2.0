const Patient = require('../models/patientProfile')
const Users = require('../models/users')
const takeError = require('../utilities/error')

const crudOperation = require('../services/rolesBaseActivity')

//  patient can upate annd edit him/her profile
const createPatientService = async(bodyData, user) =>{
    const patientExits = await crudOperation.dbFindPropertyById(Patient, 'userId', user._id)
    if(patientExits) throw takeError('already users exits', 404)
    const data ={
        userId:user._id,
        name:user.name,
        email:user.email,
        role:user.role[0],
        ...bodyData
    }
    const patient =  await crudOperation.dbCreateNewItem(Patient, data)
     return patient
   
}

// get all patient and query systems
const patientsService = async (data) =>{
   const queryObject = {}
   if(data){
    const {name,sex,phone}= data
    if(name) {queryObject.name = {$regex :name, $options:'i'}}
    
    if(sex){
        queryObject.sex = {$regex :sex, $options:'i'}

    }
    if(phone){
        queryObject.phone = phone 
    }
   }
   return await crudOperation.dbGetItems(Patient, queryObject)
}

// singlePatients
const singlePatinetService =async (patientId) =>{
    const patient = await crudOperation.dbFindPropertyById(Patient, '_id', patientId)
    if(!patient) throw takeError('patient does not exits', 400)
    return await Patient.findOne({'_id':patient._id }).populate('userId', '-password')
}

//patients update/edit his/her profile 
const patientUpdateService = async (patientId, patientData) =>{
    const patient = await crudOperation.dbFindPropertyById(Patient, '_id', patientId)
    if(!patient) throw takeError('does not exits', 404)
      const user = await crudOperation.dbFindPropertyById(Users, '_id', patient.userId) 
      //   2 ta id equal bt match kore na kano...?
    if(patient.userId._id.toString() === user._id.toString()){
        user.name = patientData.name ?? user.name,
        user.role[0] = patientData.role ?? user.role[0]
        await user.save()
    }
   
       patient.address= patientData.address  ?? patient.address,
       patient.phone = patientData.phone  ?? patient.phone
       return patient

}

// deleted service
const deletePatientService = async (patientId) =>{
    const patient = await crudOperation.dbFindPropertyById(Patient, '_id', patientId)
    if(!patient) throw takeError('user not exit', 400)
     return await crudOperation.dbDeletedItem(Patient, patientId)
}

module.exports={patientsService, createPatientService, singlePatinetService, patientUpdateService,  deletePatientService}