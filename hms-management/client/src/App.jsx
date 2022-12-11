import { Route, Routes } from 'react-router-dom';
// if user seach wrong page show the error
import NotFoundPage from './NotFoundPage';
// main component
import DoctorProfile from './pages/doctor/DoctorProfile';
import SearchTermPage from './pages/doctor/SearchTermPage';
import LoginForm from './pages/Form/Login';
import RegisterForm from './pages/Form/RegisterForm';
import Home from './pages/home/Home';
import PatientProfile from './pages/patient/PatientProfile';
function App() {
  return (
    <div className="App">
      <Routes>
        {/* pages routes */}
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<DoctorProfile />} />
        <Route path="/patient" element={<PatientProfile />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/searchpage" element={<SearchTermPage />} />

        {/* authentication route */}
        <Route path="/signup" element={<RegisterForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
