const PatientPayment = ({ userName }) => {
  return (
    <div className="col-8">
      <h5 className="header-title pb-3 mt-0">Payments</h5>
      <div className="table-responsive">
        <table className="table table-hover mb-0">
          <thead>
            <tr className="align-self-center">
              <th>{userName}</th>
              <th>Payment Type</th>
              <th>Paid Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kevin Heal</td>
              <td>Bkash</td>
              <td>5/8/2018</td>
              <td>$15,000</td>
            </tr>
            <tr>
              <td>Frank M. Lyons</td>
              <td>Nagod</td>
              <td>15/7/2018</td>
              <td>$35,000</td>
            </tr>
            <tr>
              <td>Frank M. Lyons</td>
              <td>Bkash</td>
              <td>15/7/2018</td>
              <td>$35,000</td>
            </tr>
          </tbody>
        </table>
        <div class="">
          <div class="col-md-4 col-md-offset-4 text-center">
            <ul class="pagination"></ul>
          </div>
        </div>
      </div>
      {/* <div className="pt-3 border-top text-right">
        <a href="#" className="text-primary">
          View all <i className="mdi mdi-arrow-right"></i>
        </a>
      </div> */}
    </div>
  );
};
export default PatientPayment;
