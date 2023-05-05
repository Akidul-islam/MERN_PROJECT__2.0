import React, { useEffect } from 'react';
import { useUserContext } from '../ContextApi/ContextProvider';
import { useProfile } from '../hook/useProfile';
const ProfileForm = () => {
  const { isEdited, user } = useUserContext();
  const {
    profileCreate,
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
    Dmsc: '',
  });
  const { loading, error } = isSucess;
  useEffect(() => {
    getSingleData(user.userId);
  }, [user.userId]);
  return (
    <form className="card-body" onSubmit={profileCreate}>
      <div className="row mb-3">
        <div className="col-sm-3">
          <h6 className="mb-0">Full Name</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          <input
            type="text"
            className="form-control"
            readOnly={isEdited ? false : true}
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
            readOnly={isEdited ? false : true}
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
            readOnly={isEdited ? false : true}
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
            readOnly={isEdited ? false : true}
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
            type="text"
            required
            readOnly={isEdited ? false : true}
            className="form-control"
            value={inputValue.Age}
            onChange={changeHandler}
            name={'Age'}
          />
        </div>
      </div>
      {user.role.includes('doctor') && (
        <div className="row mb-3">
          <div className="col-sm-3">
            <h6 className="mb-0">DMSC</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <input
              type="text"
              required
              readOnly={isEdited ? false : true}
              className="form-control"
              value={inputValue.Dmsc}
              onChange={changeHandler}
              name={'Dmsc'}
            />
          </div>
        </div>
      )}
      <div className="row">
        <div className="col-sm-3">
          {loading && <h4>Loading...</h4>}
          {error && <h4>please wait few seconds...</h4>}
        </div>
        <div className="col-sm-9 text-secondary">
          {isSucess.completed ? (
            <input
              type="button"
              className="btn btn-primary save-change px-4"
              disabled={isEdited ? false : true}
              value={loading ? 'data Updating...' : 'UPDATE'}
              onClick={updateHandler}
            />
          ) : (
            <input
              type="submit"
              className="btn btn-primary save-change px-4"
              disabled={isEdited ? false : true}
              value={loading ? 'data posting...' : 'SAVE'}
              onSubmit={profileCreate}
            />
          )}
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
