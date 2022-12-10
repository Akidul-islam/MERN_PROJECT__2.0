// serviceProvider
const service = require('../services/patient')

// post create patient
const createPatient = async (req,res,next) => {
  try {
     const patient = await service.createPatientService(req.body, req.user)
     res.status(201).json({status:'success', data:patient})
 } catch (error) {
   next(error)
 }
}

// querypatients
const getPatients = async (req, res, next) =>{

   try {
      const patients = await service.patientsService(req.query)
      res.status(200).json({ status:'succes', data:{ patients, isbn: patients.length }})
   
   } catch (error) {
      next(error)
   }
}

// single patient
const getPatient =  async(req, res, next) =>{
   const {patientId} = req.params
   try {
      const patient = await service.singlePatinetService(patientId)
       res.status(200).json({status:'success', data:patient})
   } catch (error) {
      next(error)
   }
 
}

// update is reusable functionlity
const patchPatientUpdate = async (req, res, next) => {
   const {patientId} = req.params
 try {
   const patient = await service.patientUpdateService(patientId, req.body)
   res.status(203).json({ status:'success', patient})
 } catch (error) {
   next(error)
 }
}

// deleted patient account
const deletedPatients =  async (req, res, next) =>{
   const {patientId} = req.params
   try { 
      await service.deletePatientService(patientId)
      res.status(200).json({ results:'succesfully delete patient'})

   } catch (error) {
      next(error)
   }
 
}

module.exports= {getPatients, getPatient,createPatient, patchPatientUpdate, deletedPatients}