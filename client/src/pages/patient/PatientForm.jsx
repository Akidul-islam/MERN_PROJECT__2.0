import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '../../ContextApi/Api/apiCrudOperation'
import { useUserContext } from "../../ContextApi/ContextProvider";
const initialValue = {
    avatar: '',
    fullName: '',
    phone: '',
    address: '',
    age: '',
    gender: '',
    disease: ""
}
const PatientProfile = () => {
    const { user } = useUserContext()
    const [inputValue, setInputValue] = useState({ ...initialValue });
    const [succes, setSucess] = useState({
        loading: false,
        error: '',
        succes: false
    })
    const navigator = useNavigate()

    const { avater, fullName, phone, address, age, disease, gender } = inputValue
    const { loading, error } = succes
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
            formData.append('avater', avater)
            formData.append('fullName', fullName)
            formData.append('phone', phone)
            formData.append('address', address)
            formData.append('age', age)
            formData.append('gender', gender)
            formData.append('disease', disease)
            formData.append("completed", true)
            await api.patchUpdate(`patients/${user.userId}`, formData);
            setSucess({ ...succes, loading: false });
            setInputValue({ ...initialValue });
            navigator('/patient')
        } catch (error) {
            console.log(error.message);
            setSucess({ ...succes, loading: false, error: error.message })
        }
    };


    return (
        <form className="card-body" onSubmit={updateHandler}>
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
                    <h6 className="mb-0">Disease</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                    <select
                        name="disease"
                        className="form-control wide"
                        id="inputDepartmentName"
                        value={disease}
                        onChange={changeHandler}
                    >
                        <option value="">select </option>
                        <option value=" Diphtheria."> Diphtheria.</option>
                        <option value="H. Haemophilus infection.">H. Haemophilus infection</option>
                        <option value="Dermatologists">Dermatologists</option>
                        <option value="Endocrinologists">Endocrinologists</option>
                    </select>
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
                    />
                </div>
            </div>
        </form>
    );
};

export default PatientProfile