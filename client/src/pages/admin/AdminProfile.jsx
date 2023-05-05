import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '../../ContextApi/Api/apiCrudOperation'
import { useUserContext } from "../../ContextApi/ContextProvider";
const initialValue = {
    avatar: '',
    fullName: '',
    phone: '',
    address: '',
    category: ""
}
const AdminProfile = () => {
    const { user } = useUserContext()
    const [inputValue, setInputValue] = useState({ ...initialValue });
    const [succes, setSucess] = useState({
        loading: false,
        error: '',
        succes: false
    })
    const navigator = useNavigate()

    const { avater, fullName, phone, address, category } = inputValue
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
            const adminData = {
                avater,
                fullName,
                phone,
                address,
                category,
                completed: true,
            };
            await api.patchUpdate(`admin/${user.userId}`, adminData);
            setSucess({ ...succes, loading: false });
            setInputValue({ ...initialValue });
            navigator('/admin')
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
                    <h6 className="mb-0">Category</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                    <input
                        name={'category'}
                        type="text"
                        className="form-control"
                        value={category}
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
                    />
                </div>
            </div>
        </form>
    );
};

export default AdminProfile