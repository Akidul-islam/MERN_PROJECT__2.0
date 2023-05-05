import { Link, Outlet } from 'react-router-dom';
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
                        <p className="text-secondary mb-1"></p>
                        <p className="text-muted font-size-sm">

                        </p>
                        <Link to={"/doctorinfo"}>
                          <button
                            className="btn edit-info"
                          >
                            EditProfile
                          </button>
                        </Link>
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
                            <Link to={route.path}>
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
              <Outlet />

            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DoctorProfile;
