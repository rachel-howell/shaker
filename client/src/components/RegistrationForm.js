import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const RegistrationForm = ({setLoggedIn, setEmail}) => {

    const [ userEmail, setUserEmail ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ userPassword, setUserPassword ] = useState("");
    const [ errors, setErrors ] = useState([]);
    const [ match, setMatch ] = useState(true);
    const [ emailIsValid, setEmailIsValid ] = useState(true);

    const phantomDiv = {
        height: '7vh'
    }

    const navigate = useNavigate();

    const passwordsMatch = (checkpassword) => {
        if(userPassword == checkpassword ) {
            setMatch(true)
        }else{
            setMatch(false)
        }
    }

    const validateEmail = (userEmail) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)){
            return true;
        } else{
            setEmailIsValid(false);
            return false;
        }
    }


    const submitHandler = (e) => {
        e.preventDefault();
        if(match && validateEmail(userEmail)){
            let newUser = { username: username, email: userEmail, password: userPassword}
            axios
                .post(`http://localhost:8000/api/register`, newUser, {withCredentials:true, credentials:'include'})
                .then((res) => {
                    setLoggedIn(true)
                    setEmail(userEmail)
                    navigate('/')
                })
                .catch(err => {
                    setErrors(err.response.data.errors)
                })
        }
    }

  return (
    <div className="p-4 pt-3">
        <h1>Register New User</h1>
        <div className="p-5 pt-3 d-flex mx-auto flex-column col-12 col-md-8 col-lg-5">
            <form onSubmit={submitHandler}>
                <div className="form-floating mb-3">
                    <input className="form-control" type="text" onChange={(e)=>setUserEmail(e.target.value)}/>
                    <label className="form-label">Email</label>
                    {
                        errors.email ? <p className="text-danger">{errors.email.message}</p> : null
                    }
                    {
                        emailIsValid ? null : <p className="text-danger">Please enter a valid email.</p>
                    }
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" type="text" onChange={(e)=>setUsername(e.target.value)}/>
                    <label className="form-label">Username</label>
                    {
                        errors.username ? <p className="text-danger">{errors.username.message}</p> : null
                    }
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" type="password" onChange={(e)=>setUserPassword(e.target.value)}/>
                    <label className="form-label">Password</label>
                    {
                        errors.password ? <p className="text-danger">{errors.password.message}</p> : null
                    }
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" type="password" onChange={(e)=>passwordsMatch(e.target.value)}/>
                    <label className="form-label">Confirm Password</label>
                    {
                        match ? null : <p className="text-danger">Passwords must match.</p>
                    }
                </div>
                <input className="btn btn-dark mb-2" type="submit" />
            </form>
        </div>
        <div style={phantomDiv}></div>
    </div>
  )
}

export default RegistrationForm