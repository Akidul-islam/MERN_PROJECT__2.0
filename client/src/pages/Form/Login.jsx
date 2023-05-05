import { Link } from 'react-router-dom';
import { validate } from '../../uitilities/formValidation';
import useAuth from './useAuth';
const LoginForm = () => {
  const { changeHandler, LoginHandler, status, inputValue } = useAuth(
    {
      email: '',
      password: '',
    },
    'login',
    validate
  );
  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-80">
        <div
          className="row d-flex justify-content-center"
          style={{ paddingTop: '0' }}
        >
          <div className=" col-xl-11 ">
            <div
              className="card text-black"
              style={{ borderRadius: '25px', padding: '0px' }}
            >
              <div className="card-body p-md-5">
                <div className="row justify-content-center align-item-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Login up
                      {status && status?.welcome && <h3>{status.welcome}</h3>}
                    </p>

                    <form className="mx-1 mx-md-4" onSubmit={LoginHandler}>
                      {status && status.loading && <p>loading...</p>}
                      {status && status.errors && <p>some thing wrong</p>}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            placeholder="enter your email"
                            value={inputValue.email}
                            name={'email'}
                            onChange={changeHandler}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            name={'password'}
                            value={inputValue.password}
                            onChange={changeHandler}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          Do you have already Accout ?
                          <Link to={'/signup'}>SignUp</Link>
                        </label>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          you dont remmber your password?{' '}
                          <a href="#!">forget pasword</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        {' '}

                        <button
                          type="submit"
                          className="btn btn-primary btn-lg edit-info"
                          style={{ border: 0 }}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
