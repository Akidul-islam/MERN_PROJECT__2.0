import { Link } from 'react-router-dom';
import ProfileForm from '../../component/ProfileForm';
import { useUserContext } from '../../ContextApi/ContextProvider';
import Layout from '../../shareUi/Layout';
import { doctorNestedRoute } from '../../StaticData';
const DoctorProfile = () => {
  const { user, logOut } = useUserContext();
  return (
    <>
      <Layout>
        <div className="container profile-mt-1">
          <div className="main-body">
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar6.png"
                        alt="Admin"
                        className="rounded-circle p-1 bg-primary"
                        width="110"
                      />
                      <div className="mt-3">
                        <h4>{user?.name}</h4>
                        <p className="text-secondary mb-1">{user?.category}</p>
                        <p className="text-muted font-size-sm">
                          {user?.degree}
                        </p>
                        <button className="btn edit-info">EditProfile</button>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <ul className="list-group list-group-flush">
                      {/* map using */}
                      {doctorNestedRoute.map((route) => {
                        return (
                          <li
                            key={route.id}
                            className="list-sub-link list-group-item d-flex justify-content-between align-items-center flex-wrap"
                          >
                            <Link>
                              <span className="text-secondary">
                                {route.link}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                      <li className="list-group-item border-bottom logout-btn">
                        <a className="text-secondary " onClick={logOut}>
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card">
                  {/* profile form */}
                  <ProfileForm />
                </div>
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
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Libero, accusamus suscipit? Quibusdam aliquid
                            nisi accusamus, beatae omnis iusto! Qui illo
                            doloremque nobis quas, dolores, iste asperiores
                            exercitationem tenetur enim blanditiis
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
                        <button className="save-change book-app">
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DoctorProfile;
