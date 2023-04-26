import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'


const AltNavBar = () => {

    const navigate = useNavigate();

    const { loggedIn, setLoggedIn } = useContext(UserContext);

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
    <div>
      <div className="navbar d-flex justify-content-between items-center px-4 w-screen mx-auto bg-opacity-0 absolute top-0 bg-[#faf5f2]">

        <div onClick={homeBtn}><img src={require('../assets/logo.png')} style={logoStyle} alt="logo" className="ml-20 mt-2"/></div>
    
        <button className="btn shadow-none" onClick={loggedIn ? logoutBtn : loginBtn}>
            { loggedIn ? <LogoutIcon /> : <button className="bg-[#a10d00] p-4 px-5 rounded-full bg-opacity-70 hover:bg-opacity-80 duration-200 text-xl text-[#faf5f2]">Log In</button>}
        </button>
    </div>

    

  </div>
  )
}

export default AltNavBar
