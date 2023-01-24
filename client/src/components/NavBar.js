import React, { useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'


const NavBar = (props) => {

    const navigate = useNavigate();

    const { loggedIn, setLoggedIn } = props;

    const homeBtn = () => {
        navigate('/')
    }

    const loginBtn = () => {
        navigate('/login')
    }

    const logoutBtn = () => {
        axios
            .get(`http://localhost:8000/api/logout`, {withCredentials:true, credentials:'include'})
            .then((res) => {
                setLoggedIn(false)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    const dropDownMenu = {
        color: "black"
    }

    const logoStyle = {
        height: '5em',
        width: 'auto',
        cursor: 'pointer'
    }

  return (
    <div className="navbar d-flex justify-content-between align-items-center px-4 col-12 col-md-10 mx-auto">

        <div className="nav-item dropdown">
            <button className="nav-link dropdown-toggle btn shadow-none" style={dropDownMenu} href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                <MenuIcon />
            </button>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">Home</Link></li>
                <li><Link className="dropdown-item" to="/browse">Browse All</Link></li>
                {/* <li><a className="dropdown-item" href="/favorites">Favorites</a></li> */}
                {loggedIn ? <li><Link className="dropdown-item" to="/addnew">Add New Cocktail</Link></li> : null}
            </ul>
        </div>

        <div onClick={homeBtn}><img src={require('../assets/logo.png')} style={logoStyle} alt="logo"/></div>
    
        <button className="btn shadow-none" onClick={loggedIn ? logoutBtn : loginBtn}>
            { loggedIn ? <LogoutIcon /> : <AccountCircleIcon />}
        </button>
    </div>
  )
}

export default NavBar