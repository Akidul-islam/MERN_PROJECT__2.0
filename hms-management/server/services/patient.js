const Patient = require('../models/patientProfile')
const takeError = require('../utilities/error')

const crudOperation = require('../services/rolesBaseActivity')

//  patient can upate annd edit him/her profile
const createPatientService = async(bodyData, user) =>{
    // vai ekhne problem hocche ei data save hocce bt id save hocce na
    // api endpoint http://localhost:8080/patients
    const data = {
        userId:user._id,
        ...bodyData
    }
     return await crudOperation.dbCreateNewItem(Patient, data)
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

    return patient
}

//patients update/edit his/her profile 
const patientUpdateService = async (patientId, patientData) =>{
    return await crudOperation.dbUpdateItem(Patient, '_id', patientId, patientData)
}

// deleted service
const deletePatientService = async (patientId) =>{
    const patient = await crudOperation.dbFindPropertyById(Patient, '_id', patientId)
    if(!patient) throw takeError('user not exit', 400)
     return await crudOperation.dbDeletedItem(Patient, patientId)
}

module.exports={patientsService, createPatientService, singlePatinetService, patientUpdateService,  deletePatientService}