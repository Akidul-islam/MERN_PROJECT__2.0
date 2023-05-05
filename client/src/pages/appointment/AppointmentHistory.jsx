import React, { useState, useEffect } from 'react';
import api from '../../ContextApi/Api/apiCrudOperation'
import { useUserContext } from '../../ContextApi/ContextProvider';

const AppointmentHistory = () => {
  const { user } = useUserContext()
  const [inputValue, setInputValue] = useState('')
  const [appointment, setAppointment] = useState([])
  const [loading, setLoading] = useState(false)
  const APPOINTMENT__URL = `appointments`;
  const role = user.role.includes('doctor')

  const appointmentApproved = async (appointmentId, updateTitle) => {
    if (appointmentId) {
      const findData = appointment.find(item => item._id === appointmentId)
      findData.appointment_status = updateTitle
      findData.google_link = inputValue
      try {
        setLoading(true)
        await api.patchUpdate(`${APPOINTMENT__URL}/${appointmentId}`, findData)
        setLoading(false)

      } catch (error) {
        console.log(error.message)
        setLoading(false)
      }
    }
  }
  const changeHandler = (e) => {
    e.preventDefault()
    setInputValue(e.target.value)
  }

  // get appointment
  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        setLoading(true)
        const { data: { data } } = await api.getAll(APPOINTMENT__URL);
        setAppointment(data)
        setLoading(false)
      } catch (error) {
        console.log(error.message)
        setLoading(false)
      }
    };
    fetchAppointment();
    return () => fetchAppointment()
  }, []);
  return (
    <div className="tab-content">
      <h5 className="header-title pb-3 mt-0">Appointment History</h5>
      <div className="tab-pane active" id="home">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>A.Id</th>
                <th>doctor name</th>
                <th>patient name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Prescription </th>
                <th>Approved</th>
                <th>Genaratlink</th>
              </tr>
            </thead>
            <tbody id="items">
              {
                appointment && appointment.map((item, index) => {
                  const approved = item.appointment_status === "approved"
                  const buttonActive = approved ? true : false;

                  const d = new Date(item.data)
                  return <tr key={item._id}>
                    <td>{1 + index}</td>
                    <td>{item.doctorName}</td>
                    <td>{item.patientName}</td>
                    <td>{d.toLocaleDateString()}</td>
                    <td>{d.toLocaleTimeString()}</td>
                    <td>
                      {role ? (
                        <> <button>Create</button>
                          <button>Edit</button>
                        </>
                      ) : (<>
                        <button>check</button>
                      </>)}
                    </td>
                    <td>{appointment.length === '0' && <h2 >there is no appointment</h2>}</td>
                    <td>{role && <div>
                      <input type="text" value={inputValue} onChange={changeHandler} />
                    </div>}</td>
                    <td>{approved && <button>
                      <a href='https://docs.google.com/forms/d/1WKUrHx3WiLOlA8hF0k972VgRMz9fKe1wYV9Shgw2X0A/edit'>contack</a>
                      <a href='https://us05web.zoom.us/j/89530916175?pwd=OTdVSk1vYmNhbW0vTUNNSVN4VW9aQT09'>Call</a>
                    </button>}</td>
                    <td>
                      {role ? (<>
                        <button disabled={buttonActive} onClick={() => appointmentApproved(item._id, 'approved')}>approved</button>
                        <button onClick={() => appointmentApproved(item._id, 'pending')}>reject</button>
                      </>) : approved ? 'online' : 'pending'
                      }</td>
                  </tr>
                })
              }
            </tbody>
          </table>
          <hr />
          <div >
            <div className="col-md-4 col-md-offset-4 text-center">
              <ul className="pagination"></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentHistory;
