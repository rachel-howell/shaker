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
    <div className="flex flex-row justify-content-between items-center mx-auto w-screen absolute p-3 z-20 bg-[#fbf6ee] bg-opacity-80 xl:bg-opacity-0">

      <div onClick={homeBtn}><img src={require('../assets/logo.png')} style={logoStyle} alt="logo" className="ml-2"/></div>
  
      <button className="btn shadow-none" onClick={loggedIn ? logoutBtn : loginBtn}>
          { loggedIn ? <LogoutIcon /> : <button className="bg-[#a10d00] p-4 px-5 rounded-full bg-opacity-70 hover:bg-opacity-80 duration-200 text-xl text-[#faf5f2]">Log In</button>}
      </button>
    </div>
  )
}

export default AltNavBar
