const DoctorForm = () => {
  return (
    <div className="card-body">
      <div className="row mb-3">
        <div className="col-sm-3">
          <h6 className="mb-0">Full Name</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          <input
            type="text"
            className="form-control"
            value={inputValue.Name}
            onChange={changeHandler}
            name={'Name'}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-3">
          <h6 className="mb-0">Email</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          <input
            type="text"
            className="form-control"
            value={inputValue.Email}
            onChange={changeHandler}
            name={'Email'}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-3">
          <h6 className="mb-0">Phone</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          <input
            type="number"
            className="form-control"
            value={inputValue.Phone}
            onChange={changeHandler}
            name={'Phone'}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-3">
          <h6 className="mb-0">Address</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          <input
            type="text"
            className="form-control"
            value={inputValue.Address}
            onChange={changeHandler}
            name={'Address'}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-3">
          <h6 className="mb-0">Age</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          <input
            type="number"
            className="form-control"
            value={inputValue.Age}
            onChange={changeHandler}
            name={'Age'}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-9 text-secondary">
          <input
            type="submit"
            className="btn btn-primary save-change px-4"
            value="Save Changes"
            onSubmit={submitHandler}
          />
        </div>
      </div>
    </div>
  );
};
export default DoctorForm;
