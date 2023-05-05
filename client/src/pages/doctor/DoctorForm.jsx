import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '../../ContextApi/Api/apiCrudOperation'
import { useUserContext } from "../../ContextApi/ContextProvider";
import useFetchData from "../../hook/useFatchData";
const initialValue = {
  avater: '',
  fullName: '',
  phone: '',
  address: '',
  department: "",
  age: '',
  licence_num: '',
  degree: '',
  gender: '',
}
const DOCTOR__URL = 'doctors'
const Doctorforms = () => {
  const { user } = useUserContext()
  const [inputValue, setInputValue] = useState({ ...initialValue });
  const [succes, setSucess] = useState({
    loading: false,
    error: false,
    succes: false
  })
  const navigate = useNavigate()
  const { loading, error } = succes
  const { avater, fullName, phone, address, degree, age, licence_num, department, gender } = inputValue
  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (e.target.type === "file") {
      setInputValue({ ...inputValue, [name]: e.target.files[0] });
    }
    setInputValue({ ...inputValue, [name]: value });
  };

  const updateHandler = async () => {
    try {
      setSucess({ ...succes, loading: true });
      // update data
      const formData = new FormData()
      formData.append("avater", avater)
      formData.append("fullName", fullName)
      formData.append("phone", phone)
      formData.append("address", address)
      formData.append("age", age)
      formData.append("degree", degree)
      formData.append("licence_num", licence_num)
      formData.append("department", department)
      formData.append("gender", gender)
      formData.append("completed", true)
      setSucess({ error: false, succes: false, loading: true });
      await api.patchUpdate(`doctors/${user.userId}`, formData);
      setSucess({ error: false, succes: true, loading: false });
      setInputValue({ ...initialValue });
      navigate('/doctor')
    } catch (error) {
      console.log(error.message);
      setSucess({ succes: false, loading: false, error: error.message })
    }
  };
  return (
    <form className="card-body" >
      <div className="row mb-3">
        <div className="col-sm-3">
          <h6 className="mb-0">Avater</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          <input
            type="file"
            className="form-control"
            name={'avatar'}
            value={avater}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-3">
          <h6 className="mb-0">Full Name</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          <input
            type="text"
            className="form-control"
            name={'fullName'}
            value={fullName}
            onChange={changeHandler}
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
            name={'phone'}
            value={phone}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-3">
          <h6 className="mb-0">Address</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          <input
            name={'address'}
            type="text"
            className="form-control"
            value={address}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-3">
          <h6 className="mb-0">Gender</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          <input
            name={'gender'}
            type="text"
            className="form-control"
            value={gender}
            onChange={changeHandler}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-3">
          <h6 className="mb-0">departmentName</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          <select
            name="department"
            className="form-control wide"
            id="inputDepartmentName"
            value={department}
            onChange={changeHandler}
          >
            <option value="">select </option>
            <option value="Ophthalmologists">Ophthalmologists</option>
            <option value="Cardiologists">Cardiologists</option>
            <option value="Dermatologists">Dermatologists</option>
            <option value="Endocrinologists">Endocrinologists</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-3">
          <h6 className="mb-0">Degree</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          <input
            name={'degree'}
            type="text"
            className="form-control"
            value={degree}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-3">
          <h6 className="mb-0">Age</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          <input
            name={'age'}
            type="text"
            className="form-control"
            value={age}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-3">
          <h6 className="mb-0">licence number</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          <input
            name={'licence_num'}
            type="text"
            className="form-control"
            value={licence_num}
            onChange={changeHandler}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3">
          {loading && <h4>Loading...</h4>}
          {error && <h4>please wait few seconds...</h4>}
        </div>
        <div className="col-sm-9 text-secondary">
          <input
            type="button"
            className="btn btn-primary save-change px-4"
            value={loading ? 'data saving...' : 'Save'}
            onClick={updateHandler}
          />        </div>
      </div>
    </form>
  );
};

export default Doctorforms
