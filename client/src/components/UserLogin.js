import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const UserLogin = ({setLoggedIn, setEmail}) => {

    const [ userEmail, setUserEmail ] = useState("");
    const [ userPassword, setUserPassword ] = useState("");
    const [ errors, setErrors ] = useState([]);
    const navigate = useNavigate();

    const divStyle = {
        minHeight: '58vh'
    }


    const submitHandler = (e) => {
        e.preventDefault();
        let pw = userPassword.toString();
        let user = { userEmail, userPassword: pw };
        setEmail(userEmail);
        axios
            .post(`http://localhost:8000/api/login`, user, {withCredentials:true, credentials:'include'})
            .then((res) => {
                setLoggedIn(true)
                navigate('/')
            })
            .catch(err => {
                setErrors(err.response.data.error)
            })
    }


  return (
    <div className="p-4 pt-3" style={divStyle}>
        <h1 className="pt-3">Welcome back!</h1>
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
                {
                        errors ? <p className="text-danger">{errors}</p> : null
                }
                <input className="btn btn-dark mb-2" type="submit" />
            </form>
            <div className="d-flex flex-row p-2 mx-auto">
                {/* <Link className="btn btn-sm border me-1">Forgot Password</Link> */}
                <Link className="btn btn-sm border" to={'/register'}>Register New User</Link>
            </div>
        </div>
    </div>
  )
}

export default UserLogin