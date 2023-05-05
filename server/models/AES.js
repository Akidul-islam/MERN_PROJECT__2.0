// Here's an example function in JavaScript using the crypto-js library to perform AES 128 encryption and decryption of a patient's email and phone number in a MongoDB database:
// Note: The findPatientById and updatePatient functions are not provided and would need to be implemented based on the specifics of your MongoDB setup. Also, it's important to use a secure key for the AES_KEY constant and to properly handle any exceptions that may occur during the encryption and decryption processes.

const crypto = require("crypto-js");

const AES_KEY = "your-secret-key";

function encrypt(plaintext) {
  return crypto.AES.encrypt(plaintext, AES_KEY).toString();
}

function decrypt(ciphertext) {
  const bytes = crypto.AES.decrypt(ciphertext, AES_KEY);
  return bytes.toString(crypto.enc.Utf8);
}

async function encryptPatientInfo(patientId) {
  try {
    // retrieve the patient information from the database
    const patient = await findPatientById(patientId);
    // encrypt the email and phone number
    patient.email = encrypt(patient.email);
    patient.phone = encrypt(patient.phone);
    // update the patient information in the database
    await updatePatient(patientId, patient);
  } catch (error) {
    console.error(error);
  }
}

async function decryptPatientInfo(patientId) {
  try {
    // retrieve the patient information from the database
    const patient = await findPatientById(patientId);
    // decrypt the email and phone number
    patient.email = decrypt(patient.email);
    patient.phone = decrypt(patient.phone);
    return patient;
  } catch (error) {
    console.error(error);
  }
}
