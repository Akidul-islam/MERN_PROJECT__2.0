import { Route, Routes } from 'react-router-dom';
// role base access user
import PrivateRoute from './component/PrivateRoute';
// if user seach wrong page show the error
import NotFoundPage from './NotFoundPage';
// main component
import About from './pages/about/About';
import SearchTermPage from './pages/doctor/SearchTermPage';
import LoginForm from './pages/Form/Login';
import RegisterForm from './pages/Form/RegisterForm';
import Home from './pages/home/Home';

import { useUserContext } from './ContextApi/ContextProvider';
import DoctorProfile from './pages/doctor/DoctorProfile';
import PatientProfile from './pages/patient/PatientProfile';
import Services from './pages/services/Services';
function App() {
  const { user } = useUserContext();
  return (
    <div className="App">
      <Routes>
        {/* pages routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        {/* oulter */}
        <Route
          element={
            <PrivateRoute
              isAllowed={!!user && user.role?.includes('patient')}
            />
          }
        >
          <Route path="/patient" element={<PatientProfile user={user} />} />
        </Route>

        <Route
          element={
            <PrivateRoute isAllowed={!!user && user.role?.includes('doctor')} />
          }
        >
          <Route path="/doctor" element={<DoctorProfile />} />
        </Route>
        <Route path="/searchpage" element={<SearchTermPage />} />

        {/* authentication route */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<RegisterForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
