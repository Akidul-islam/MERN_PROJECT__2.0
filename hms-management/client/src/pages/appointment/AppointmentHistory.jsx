import React from 'react';

const AppointmentHistory = () => {
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
                <th>Check-up</th>
                <th>Date</th>
                <th>Time</th>
                <th>Prescription </th>
                <th>Payment Bd </th>
              </tr>
            </thead>
            <tbody id="items">
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <div class="">
            <div class="col-md-4 col-md-offset-4 text-center">
              <ul class="pagination"></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentHistory;
