import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

const SideNavbar = () => {

    const navigate = useNavigate();

    const logoutHandle = () => {
        navigate('/login');
        // localStorage.removeItem("isLoggedin")
    };
    const homeHandle = () => {
        navigate('home')
    }

    return (
        <>
            {/* Here we use both useNavigate and Link tag */}
            <button className='btn' onClick={homeHandle}>Home </button>
            <Link to='/dashboard/service' className='routing-link'>Service</Link>
            <Link to='/dashboard/contact' className='routing-link'>Contact</Link>
            <button className='btn' onClick={logoutHandle}>Logout </button>
        </>
    );
};

export default SideNavbar;