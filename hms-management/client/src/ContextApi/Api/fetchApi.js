import axios from 'axios';
// continu fetching data in axios

// http://locathost:3000/api/v1/register
// http://locathost:3000/api/v1/login
// http://locathost:3000/api/v1/patients
// http://locathost:3000/api/v1/doctor

export default axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
});
