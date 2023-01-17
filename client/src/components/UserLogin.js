import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = (props) => {

    const [ userEmail, setUserEmail ] = useState("");
    const [ userPassword, setUserPassword ] = useState("");
    const { loggedIn, setLoggedIn } = props;
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(userEmail, userPassword)
        axios
            .post(`http://localhost:8000/api/login`,{ userEmail, userPassword }, {withCredentials:true, credentials:'include'})
            .then((res) => {
                setLoggedIn(true)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }


  return (
    <div className="p-4 pt-3">
        <h1>Welcome back!</h1>
        <div className="p-5 pt-3 d-flex mx-auto flex-column col-12 col-md-8 col-lg-5">
            <form onSubmit={submitHandler}>
                <div className="form-floating mb-3">
                    <input className="form-control" type="text" placeholder="name@example.com" onChange={(e)=>setUserEmail(e.target.value)}/>
                    <label className="form-label">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" type="password" placeholder="Password" onChange={(e)=>setUserPassword(e.target.value)}/>
                    <label className="form-label">Password</label>
                </div>
                <input className="btn btn-dark mb-2" type="submit" />
            </form>
            <div className="d-flex flex-row p-2 mx-auto">
                <button className="btn btn-sm border me-1">Forgot Password</button>
                <button className="btn btn-sm border">Register New User</button>
            </div>
        </div>

    </div>
  )
}

export default UserLogin