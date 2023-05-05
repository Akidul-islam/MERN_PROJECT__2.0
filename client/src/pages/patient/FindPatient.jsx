import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import API from '../../ContextApi/Api/apiCrudOperation';
import { useUserContext } from '../../ContextApi/ContextProvider';
const ProfileFormPatient = () => {
    const { user } = useUserContext()
    const [singleDoc, setSingleDoc] = useState({
        sPatient: [],
        loading: true
    })
    const { avater, fullName, age, phone, address, gender, disease, completed } = singleDoc.sPatient
    useEffect(() => {
        const findPatient = async (id) => {
            try {
                setSingleDoc({ sPatient: [], loading: true })
                const { data } = await API.getOne(`patients/${id}`)
                setSingleDoc({ loading: false, sPatient: data.data })
            } catch (error) {
                console.log(error.message)
                setSingleDoc({ sPatient: [], loading: false })
            }
        }
        findPatient(user?.userId)
    }, [user?.userId])
    if (singleDoc.loading) return <h1>Loading....</h1>
    if (!completed) {
        <Navigate to={'/patientinfo'} replace />;
    }
    else {
        return (
            <form className="card-body">

                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <h5>{fullName}</h5>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <h6>{user.email}</h6>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <h5>{phone}</h5>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <h5>{address}</h5>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Age</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <h6>{age}</h6>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Gender</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <h6>{gender}</h6>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Diease</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <h6>{disease}</h6>
                    </div>
                </div>
            </form>
        );
    }
};

export default ProfileFormPatient;
