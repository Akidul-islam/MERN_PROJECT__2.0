import { Route, Routes } from 'react-router-dom';
import { useUserContext } from './ContextApi/ContextProvider';
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

import DoctorProfile from './pages/doctor/DoctorProfile';
import PatientProfile from './pages/patient/PatientProfile';

import PrimaryDetails from './component/PrimaryDetails';
import AppointmentHistory from './pages/appointment/AppointmentHistory';
import MedicalHistory from './pages/appointment/MedicalHistory';
import PatientPayment from './pages/appointment/PatientPayment';
import Wallet from './pages/doctor/Wallet';
import BookAppointment from './pages/home/BookAppointment';
import Services from './pages/services/Services';
import GigsPublish from './pages/doctor/GigsPublish';
import Admin from './pages/admin/Admin';
import AdminProfile from './pages/admin/AdminProfile';
import Doctorforms from './pages/doctor/DoctorForm';
import PatientForm from './pages/patient/PatientForm';
import GisPreviews from './pages/home/GigsPreviews';
import MyForm from './component/CallHere';
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
          <Route path='/patientinfo' element={<PatientForm />} />

          <Route path="patient" element={<PatientProfile user={user} />}>
            <Route index element={<PrimaryDetails />} />
            <Route path={'primarydetails'} element={<PrimaryDetails />} />
            <Route path={'appointment'} element={<AppointmentHistory />} />
            <Route
              path={'payment'}
              element={<PatientPayment userName={'Doctor Name'} />}
            />
            <Route path={'medical'} element={<MedicalHistory />} />
            <Route path={'booking'} element={<BookAppointment />} />
          </Route>
        </Route>

        <Route
          element={
            <PrivateRoute isAllowed={!!user && user.role?.includes('doctor')} />
          }
        >
          <Route path="doctor" element={<DoctorProfile />}>
            <Route index element={<PrimaryDetails />} />
            <Route path={'primarydetails'} element={<PrimaryDetails />} />
            <Route path={'wallet'} element={<Wallet />} />
            <Route path={'appointment'} element={<AppointmentHistory />} />
            <Route
              path={'transition'}
              element={<PatientPayment userName={'Patient Name'} />}
            />
          </Route>
          <Route path='/doctorinfo' element={<Doctorforms />} />

          <Route path={'/gigcreate'} element={<GigsPublish />} />
        </Route>

        {/* Admin role */}
        <Route element={<PrivateRoute isAllowed={!!user && user.role?.includes('admin')} />}>
          <Route path='/admininfo' element={<AdminProfile />} />
          <Route path='/admin' element={<Admin />} />
        </Route>


        <Route path="/searchpage" element={<SearchTermPage />} />
        <Route path="/preview:id" element={<GisPreviews />} />
        {/* authentication route */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<RegisterForm />} />
        <Route path="/myform" element={<MyForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
