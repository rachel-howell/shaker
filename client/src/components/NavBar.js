import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';



const NavBar = () => {

    const navigate = useNavigate();

    const homeBtn = () => {
        navigate('/')
    }

    
    const dropDownMenu = {
        color: "black"
    }

  return (
    <div className="navbar d-flex justify-content-between align-items-baseline px-4 col-12 col-md-10 mx-auto">

        <div className="nav-item dropdown">
            <button className="nav-link dropdown-toggle btn" style={dropDownMenu} href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                <MenuIcon />
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/browse">Browse All</a></li>
                <li><a className="dropdown-item" href="#">Favorites</a></li>
                <li><a className="dropdown-item" href="#">FAQ</a></li>
            </ul>
        </div>

            <h4 onClick={homeBtn}>Shaker.io</h4>
        
        <div className="d-flex flex-row align-items-center">
            <button className="btn" onClick={homeBtn}>
                <HomeIcon />
            </button>
            <h4 className="align-self-end lead">|</h4>
            <button className="btn">
                Log In
            </button>
        </div>
    </div>
  )
}

export default NavBar