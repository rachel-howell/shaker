import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();

    const homeBtn = () => {
        navigate('/')
    }

  return (
    <div className="d-flex justify-content-between align-items-center px-4 py-2 col-8 mx-auto">
        <div>
            <MenuIcon />
        </div>
        <div>
            <h4>Shaker.io</h4>
        </div>
        <div>
            <button className="btn" onClick={homeBtn}>
                <HomeIcon />
            </button>
        </div>
    </div>
  )
}

export default NavBar