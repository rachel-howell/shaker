import React from 'react'
import { Link } from 'react-router-dom';
import UserLogin from './UserLogin';

const ThankYou = () => {

  const divStyle = {
    minHeight: '58vh'
  }

  return (
    <div style={divStyle}>
      <div className="flex col-6 mx-auto mt-5">
        <h1>Congratulations! You have successfully registered for an account at shakerr.io.</h1>
        <h2>Welcome to the family.</h2>
        <h3 className="mt-3">Please <Link to={'/login'}>log in</Link> to add your own custom cocktails.</h3>
      </div>
    </div>
  )
}

export default ThankYou