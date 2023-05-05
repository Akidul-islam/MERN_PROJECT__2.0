const encryptPatientInfo = (patientId) => {
  try {
    const patient = crudOperation.dbFindPropertyById();
    patient.email = encrypt(patient.email);
    patient.phone = encrypt(patient.phone);
    updatePatient(patientId, patient);
  } catch (error) {
    console.error(error);
  }
};
