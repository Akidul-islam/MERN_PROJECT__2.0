import React from 'react';

const BookAppointment = () => {
  return (
    <section className="book_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col">
            <form>
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
                    id="inputPatientName"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-lg-4">
                  <label htmlFor="inputDoctorName">Doctor's Name</label>
                  <select
                    name=""
                    className="form-control wide"
                    id="inputDoctorName"
                  >
                    <option value="Normal distribution ">Doctor Name 1</option>
                    <option value="Normal distribution ">Doctor Name 2 </option>
                    <option value="Normal distribution ">Doctor Name 3 </option>
                  </select>
                </div>
                <div className="form-group col-lg-4">
                  <label htmlFor="inputDepartmentName">Department's Name</label>
                  <select
                    name=""
                    className="form-control wide"
                    id="inputDepartmentName"
                  >
                    <option value="Normal distribution ">Cardiology </option>
                    <option value="Normal distribution ">Surgery </option>
                    <option value="Normal distribution ">First Aid </option>
                  </select>
                </div>
              </div>
              <div className="form-row ">
                <div className="form-group col-lg-4">
                  <label htmlFor="inputPhone">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPhone"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-lg-4">
                  <label htmlFor="inputSymptoms">Symptoms</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputSymptoms"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-lg-4">
                  <label htmlFor="inputDate">Choose Date </label>
                  <div
                    className="input-group date"
                    id="inputDate"
                    data-date-format="mm-dd-yyyy"
                  >
                    <input type="date" className="form-control" />
                    {/* <span className="input-group-addon date_icon">
                <i className="fa fa-calendar" aria-hidden="true"></i>
              </span> */}
                  </div>
                </div>
              </div>
              <div className="btn-box">
                <button type="submit" className="btn">
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
