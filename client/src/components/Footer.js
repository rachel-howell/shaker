import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {

    const divStyle = {
      backgroundColor: 'rgb(248, 245, 226)',
      height: '20em'
    }

    const imgStyle = {
      height: '9em',
      width: 'auto'
    }

  return (
    <div className="mt-3 d-flex footer border-top " style={divStyle}>

    

      <div className="d-flex col-6 col-md-4 mx-auto mt-4 mb-0 flex-column">
        
        <img className="mx-auto mb-2 mt-3" style={imgStyle} src={require('../assets/footer-text.png')} alt="Thanks for visiting!"/>

        <div>
          <a href="https://www.linkedin.com/in/racheljhowell/" target="_blank"><LinkedInIcon fontSize="large" color="dark" className="me-2"/></a>
          <a href="https://github.com/rachel-howell" target="_blank"><GitHubIcon fontSize="large" color="dark"/></a>
        </div>
      </div>
      
      {/* <img src={require('../assets/footer-cocktail.png')} alt="logo"/> */}

    </div>
  )
}

export default Footer
