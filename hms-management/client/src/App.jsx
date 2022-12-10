import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// if user seach wrong page show the error
import NotFoundPage from './NotFoundPage';
// main component
import About from './pages/about/About';
import DoctorProfile from './pages/doctor/DoctorProfile';
import LoginForm from './pages/Form/Login';
import RegisterForm from './pages/Form/RegisterForm';
import Home from './pages/home/Home';
import PatientProfile from './pages/patient/PatientProfile';
import Services from './pages/services/Services';
import Layout from './shareUi/Layout';
function App() {
  const [api, setAPIData] = useState([])
    useEffect(() => {
    axios.get('')
        .then((response) => {
            setAPIData(response.data);
        })
}, [])
console.log(api)



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/appointment" element={<Layout />} />
        <Route path="/patient" element={<PatientProfile />} />
        <Route path="/doctor" element={<DoctorProfile />} />

        {/* authentication route */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<RegisterForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
