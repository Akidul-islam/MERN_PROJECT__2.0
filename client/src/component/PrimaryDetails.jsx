import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../ContextApi/ContextProvider';
import ProfileFormPatient from '../pages/patient/FindPatient';
import ProfileFormDoc from './ProfileFormDoc';

const PrimaryDetails = () => {
  const { user } = useUserContext()
  const roleCreate = user && user.role.includes('patient')
  return (
    <div className="col-lg-8">
      <div className="card"></div> {/* profile form */}
      {user && roleCreate && <ProfileFormPatient />
      }
      {user.role === 'doctor' && <ProfileFormDoc />}
      {/* others stuff */}
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <h5 className="d-flex align-items-center mb-3">
                Doctor descripation
              </h5>
              <div className="d-flex">
                <p style={{ maxWidth: '50%' }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Libero, accusamus suscipit? Quibusdam aliquid nisi accusamus,
                  beatae omnis iusto! Qui illo
                </p>
                <div
                  style={{
                    width: '50%',
                    height: '300px',
                    overflow: 'hidden',
                    borderRadius: '0.7rem',
                  }}
                >
                  <img
                    src="https://cdn.pixabay.com/photo/2015/07/10/20/54/stethoscope-840125_960_720.jpg"
                    alt="doctorImage"
                  />
                </div>
              </div>
              <Link to={`${roleCreate ? 'booking' : '/gigcreate'}`}>
                {' '}
                <button className="save-change book-app">
                  {roleCreate ? 'Book Appointment' : 'Create Gigs'}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryDetails;
