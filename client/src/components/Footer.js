import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {

    const divStyle = {
        backgroundColor: "#f2b4b5",
        height: '30vh'
    }
  return (
    <div className="mt-3 d-flex" style={divStyle}>

      <div className="d-flex col-6 col-md-4 mx-auto mt-5 flex-column">
        <h4>Thanks for using Shaker.io!</h4>
        <div>
          <a href="https://www.linkedin.com/in/racheljhowell/"><LinkedInIcon fontSize="large" color="dark"/></a>
          <a href="https://github.com/rachel-howell"><GitHubIcon fontSize="large" color="dark"/></a>
        </div>
      </div>

      <div className="d-flex col-6 col-md-4 mx-auto mt-5 flex-column">
        other stuff
      </div>

    </div>
  )
}

export default Footer