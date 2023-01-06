import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {

    const divStyle = {
        backgroundColor: "#f8f5e2",
        height: '30vh'
    }
  return (
    <div className="mt-3 align-contents-start d-flex" style={divStyle}>

      <div className="d-flex col-md-10 mx-auto mt-2 flex-column">
        <h4>Thanks for using Shaker.io!</h4>
        <div>
          <a href="https://www.linkedin.com/in/racheljhowell/"><LinkedInIcon fontSize="large" color="info"/></a>
          <a href="https://github.com/rachel-howell"><GitHubIcon fontSize="large" color="info"/></a>
        </div>
      </div>

    </div>
  )
}

export default Footer