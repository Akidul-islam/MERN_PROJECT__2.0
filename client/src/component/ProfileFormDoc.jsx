import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useUserContext } from '../ContextApi/ContextProvider';
import API from '../ContextApi/Api/apiCrudOperation';

const ProfileFormDoc = () => {
  const { user } = useUserContext()
  const [singleDoc, setSingleDoc] = useState({
    sDoctor: [],
    loading: true
  })

  useEffect(() => {
    const findDoctor = async (id) => {
      try {
        setSingleDoc({ sDoctor: [], loading: true })
        const { data: { doctor } } = await API.getOne(`doctors/${id}`)
        setSingleDoc({ loading: false, sDoctor: doctor })
      } catch (error) {
        console.log(error.message)
        setSingleDoc({ sDoctor: [], loading: false })
      }
    }
    findDoctor(user.userId)
  }, [user.userId])
  const { fullName, age, phone, address, gender, licence_num, degree, completed } = singleDoc.sDoctor
  // if (singleDoc.loading) { return <h1>loading</h1> }
  // if (completed) { return <Navigate to={'/doctorinfo'} replace /> }

  return (
    <form className="card-body">
      <div className="row mb-3">
        <div className="col-sm-3">
          <h6 className="mb-0">Full Name</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          <h3>{fullName}</h3>
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
          <h4>{phone}</h4>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-3">
          <h6 className="mb-0">Address</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          <h4>{address}</h4>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-3">
          <h6 className="mb-0">Age</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          <h4>{age}</h4>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-3">
          <h6 className="mb-0">Gender</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          <h4>{gender}</h4>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-3">
          <h6 className="mb-0">Lincence Number</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          <h4>{licence_num}</h4>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-3">
          <h6 className="mb-0">Degree</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          <h4>{degree}</h4>
        </div>
      </div>
    </form>
  );
}


export default ProfileFormDoc;
