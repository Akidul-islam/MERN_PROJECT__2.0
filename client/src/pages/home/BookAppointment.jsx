import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../ContextApi/ContextProvider';
import useAppointment from '../../hook/useAppointment';

const BookAppointment = () => {
  const { user } = useUserContext()
  const { inputValue, changeHandler, doctorData, appointHandler } = useAppointment({
    patientName: '',
    doctorName: '',
    departmentName: '',
    symptoms: '',
    phone: '',
    date: '',
  })
  const { patientName, doctorName, departmentName, symptoms, phone, date } = inputValue
  return (
    <section className="book_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={appointHandler}>
              <h4>
                <span className="design_dot"></span>
                BOOK APPOINTMENT
              </h4>
              <div className="form-row ">
                <div className="form-group col-lg-4">
                  <label htmlFor="inputPatientName">Patient Name </label>
                  <input
                    type="text"
                    className="form-control"
                    name='patientName'
                    id="inputPatientName"
                    placeholder=""
                    value={patientName}
                    onChange={changeHandler}
                  />
                </div>
                <div className="form-group col-lg-4">
                  <label htmlFor="inputDoctorName">Doctor's Name</label>
                  <select
                    name="doctorName"
                    className="form-control wide"
                    id="inputDoctorName"
                    value={doctorName}
                    onChange={changeHandler}
                  >
                    <option value="">select</option>
                    {doctorData.docData && doctorData.docData?.map(item => {
                      return <option key={item._id} value={item.userId?.name}>{item.userId?.name}</option>
                    })}
                  </select>
                </div>
                <div className="form-group col-lg-4">
                  <label htmlFor="inputDepartmentName">Department's Name</label>
                  <select
                    name="departmentName"
                    className="form-control wide"
                    id="inputDepartmentName"
                    value={departmentName}
                    onChange={changeHandler}
                  >
                    <option value="">select </option>
                    {/* {doctorData.docData && doctorData.docData?.map(item => {
                      return <option key={item._id} value={item?.departmentName}>{item?.departmentName}</option>
                    })} */}
                    <option value="Ophthalmologists">Ophthalmologists</option>
                    <option value="Cardiologists">Cardiologists</option>
                    <option value="Dermatologists">Dermatologists</option>
                    <option value="Endocrinologists">Endocrinologists</option>
                  </select>
                </div>
              </div>
              <div className="form-row ">
                <div className="form-group col-lg-4">
                  <label htmlFor="inputPhone">Phone Number</label>
                  <input
                    name='phone'
                    type="text"
                    className="form-control"
                    id="inputPhone"
                    placeholder=""
                    value={phone}
                    onChange={changeHandler}
                  />
                </div>
                <div className="form-group col-lg-4">
                  <label htmlFor="inputSymptoms">Symptoms</label>
                  <input
                    name='symptoms'
                    type="text"
                    className="form-control"
                    id="inputSymptoms"
                    placeholder=""
                    value={symptoms}
                    onChange={changeHandler}
                  />
                </div>
                <div className="form-group col-lg-4">
                  <label htmlFor="inputDate">Choose Date </label>
                  <div
                    className="input-group date"
                    id="inputDate"
                    data-date-format="mm-dd-yyyy"
                  >
                    <input type="datetime-local" name='date' className="form-control"
                      value={date} onChange={changeHandler} />
                    {/* <span className="input-group-addon date_icon">
                <i className="fa fa-calendar" aria-hidden="true"></i>
              </span> */}
                  </div>
                </div>
              </div>
              <div className="btn-box">
                <button disabled={user && user.role.includes('patient') ? false : true} type="submit" className="btn">
                  Submit Now
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
