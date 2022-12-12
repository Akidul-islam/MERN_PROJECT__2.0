import React from 'react';
import Layout from '../../shareUi/Layout';
import { validate } from '../../uitilities/formvalidation';
import useAuth from './useAuth';

const RegisterForm = () => {
  const { changeHandler, submitHandler, inputValue, checkedFun, error } =
    useAuth(
      {
        Name: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',
        Role: '',
        CheckBox: false,
      },
      'http://localhost:3000/api/v1/register',
      validate
    );
  return (
    <Layout>
      <section className="vh-90" style={{ backgroundColor: '#eee' }}>
        <div className="container h-80">
          <div className="row d-flex justify-content-center align-items-center h-50">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: '25px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={submitHandler}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name={'Name'}
                              value={inputValue.Name.trim()}
                              onChange={changeHandler}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              name={'Email'}
                              value={inputValue.Email.trim()}
                              onChange={changeHandler}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              name={'Password'}
                              value={inputValue.Password.trim()}
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

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              value={inputValue.ConfirmPassword}
                              onChange={changeHandler}
                              name={'ConfirmPassword'}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Repeat your password
                            </label>
                          </div>
                        </div>
                        <select
                          className="form-select"
                          value={inputValue.Role}
                          name={'Role'}
                          onChange={changeHandler}
                          aria-label="Default select example"
                        >
                          <option value={''}>Select</option>
                          <option value="doctor">Doctor</option>
                          <option value="patient">Patient</option>
                        </select>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            checked={inputValue.CheckBox}
                            id="form2Example3c"
                            onChange={checkedFun}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{' '}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        {/* slectio */}

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            disabled={inputValue.CheckBox ? false : true}
                            className="btn btn-primary btn-lg"
                          >
                            Register
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
    </Layout>
  );
};

export default RegisterForm;
