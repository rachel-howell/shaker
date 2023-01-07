import React from 'react'

const UserLogin = () => {
  return (
    <div className="p-5 pt-3">
        <h1>Welcome back!</h1>
        <div className="p-5 mt-3 d-flex mx-auto flex-column col-12 col-md-8 col-lg-4">
            <form>
                <div className="form-floating mb-3">
                    <input className="form-control" type="text" placeholder="name@example.com"/>
                    <label className="form-label">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" type="text" placeholder="Password"/>
                    <label className="form-label">Password</label>
                </div>
                <input className="btn btn-dark mb-2" type="submit" />
            </form>
            <div className="">
                <button className="btn-sm border me-1">Forgot Password</button>
                <button className="btn-sm border">Register New User</button>
            </div>
        </div>

    </div>
  )
}

export default UserLogin