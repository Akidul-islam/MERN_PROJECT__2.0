import React, { useEffect, useState } from "react";
import { useUserContext } from "../../ContextApi/ContextProvider"
import { Navigate } from "react-router-dom";
import API from '../../ContextApi/Api/apiCrudOperation'

const Admin = () => {
    const [userData, setUserData] = useState({
        admins: [],
        patients: [],
        doctors: [],
        loading: true
    })
    const { user, logOut, singleAdmin, ADMIN_URL } = useUserContext()
    const PATIENTS_URL = 'patients'
    const DOCTOR_URL = 'doctors'

    const { sAdmin: { address, avater, phone, completed, fullName } } = singleAdmin

    useEffect(() => {
        const dataList = async () => {
            try {
                setUserData({ ...userData, loading: true })
                const { data: { admins } } = await API.getAll(`${ADMIN_URL}`)
                const { data: { patients } } = await API.getAll(`${PATIENTS_URL}`)
                const { data: { dataList } } = await API.getAll(`${DOCTOR_URL}`)
                setUserData({ ...userData, admins, patients, doctors: dataList })
            } catch (error) {
                console.log(error)
                setUserData({ ...userData, loading: false, })
            }
        }

        dataList()
        return () => {
            dataList()
        }
    }, []);

    if (!completed) {
        <Navigate to="/admininfo" replace />
    }
    else {
        return (
            <div className="container-fluid">
                < div> <h2 style={{ paddingTop: "30px" }}></h2></div >
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">

                            <div className="card">
                                <div className="card-body">

                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src={avater} alt="Admin" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4></h4>
                                            <p className="text-secondary mb-1">Role: {user.name}</p>
                                            <p className="text-muted font-size-sm">{address}</p>
                                            <button className="btn btn-primary" onClick={logOut}>Logout</button>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {fullName}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {user.email}
                                        </div>
                                    </div>

                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Mobile</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {phone}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {address}
                                        </div>
                                    </div>
                                    <hr />

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <a className="btn btn-info " target="__blank" href="#">Edit</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* DASHBORAD */}

                <div className="card-deck">
                    <div className="card bg-danger text-white">
                        <div className="card-header"><i className="fas fa-user-md"></i><h3>Total Doctors</h3></div>
                        <div className="card-body">
                            <p className="card-text" style={{ fontWeight: 600, fontSize: '50px' }} >{userData.doctors.length}</p>
                        </div>
                    </div>

                    <div className="card bg-info text-white">
                        <div className="card-header"><i className="fas fa-users "></i><h3>Total Patients</h3></div>
                        <div className="card-body">
                            <p className="card-text" style={{ fontWeight: 600, fontSize: '50px' }} >{userData.patients.length}</p>
                        </div>
                    </div>
                    <div className="card bg-secondary text-white">
                        <div className="card-header"><i className="fas fa-users"></i><h3>Total Admins</h3></div>
                        <div className="card-body">
                            <p className="card-text" style={{ fontWeight: 600, fontSize: '50px' }} >{userData.admins.length}</p>
                        </div>
                    </div>
                </div>
                {/* Doctor LISt */}

                <h3 className="text-left mb-5" id="docreq" style={{ paddingTop: '30px' }} >Doctor Registration Request List</h3>
                <div className="input-group rounded">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span className="input-group-text border-0" id="search-addon">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Doctor Name</th>
                            <th scope="col">Specialization</th>
                            <th scope="col">Licence NO</th>
                            <th scope="col">Phone</th>
                            <th scope="col">email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.doctors.length < 1 && <tr><td><h3>No Doctor exits</h3></td></tr>}
                        {userData.admins && userData?.doctors.map((item, index) => {
                            return (<tr key={index}>
                                <th scope="row">{1 + index}</th>

                                <td>{item.userId.name}</td>
                                <td>{item.department}</td>
                                <td>{item.phone}</td>
                                <td>{item.userId.email}</td>
                                <td>{item.licence_num}</td>
                                <td>
                                    <a href="https://verify.bmdc.org.bd/" className="btn btn-warning btn-sm">
                                        <i className="fa-solid fa-triangle-exclamation"></i> Varify
                                    </a>
                                    <a href="#" className="btn btn-success btn-sm">
                                        <i className="fas fa-check"></i> Approve
                                    </a>
                                    <a href="#" className="btn btn-danger btn-sm">
                                        <i className="fas fa-times"></i> Reject
                                    </a>
                                </td>
                            </tr>)
                        })}

                    </tbody>
                </table>

                {/* patient list */}
                <h3 className="text-left mb-5" id="docreq" style={{ marginTop: '30px' }} >Patient List</h3>
                <div className="input-group rounded">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span className="input-group-text border-0" id="search-addon">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Patient Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {userData.patients.length === 0 && <tr><td><h3>No Doctor exits</h3></td></tr>} */}

                        {userData.patients && userData?.patients.map((item, index) => {
                            return (<tr key={index}>
                                <th scope="row">{1 + index}</th>
                                <td>{item.userId.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.userId.email}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm">
                                        <i className="fas fa-times"></i> remove
                                    </button>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
                {/* Addmin list */}

                <h3 className="text-left mb-5" id="docreq" style={{ marginTop: '30px' }} > Admin List</h3>
                <div className="input-group rounded">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span className="input-group-text border-0" id="search-addon">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Admin Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.admins.length < 1 && <tr><td><h3>No admins exits</h3></td></tr>}

                        {userData.admins && userData?.admins.map((item, index) => {
                            return (<tr key={index}>
                                <th scope="row">{1 + index}</th>
                                <td>{item.userId.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.userId.email}</td>
                                <td>
                                    <a href="#" className="btn btn-danger btn-sm">
                                        <i className="fas fa-times"></i> Reject
                                    </a>
                                </td>
                            </tr>)
                        })}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Admin

