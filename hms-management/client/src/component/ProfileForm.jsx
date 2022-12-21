import React, { useEffect } from 'react';
import { useProfile } from '../hook/useProfile';
const ProfileForm = () => {
  const {
    submitHandler,
    changeHandler,
    inputValue,
    updateHandler,
    isSucess,
    getSingleData,
  } = useProfile({
    Name: '',
    Email: '',
    Phone: '',
    Age: '',
    Address: '',
  });

  useEffect(() => {
    getSingleData();
  }, []);
  return (
    <form className="card-body" onSubmit={submitHandler}>
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
            disabled
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
            type="text"
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
            required
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
          {isSucess.completed ? (
            <input
              type="submit"
              className="btn btn-primary save-change px-4"
              value={isSucess.loading ? 'data posting...' : 'UPDATE'}
              onSubmit={updateHandler}
            />
          ) : (
            <input
              type="submit"
              className="btn btn-primary save-change px-4"
              value={isSucess.loading ? 'data posting...' : 'SAVE'}
              onSubmit={submitHandler}
            />
          )}
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
