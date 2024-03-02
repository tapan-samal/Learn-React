import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();

  const handleBtn = () => {
    navigate('/login');
  };

  return (
    <div className='signup-page'>
    <h1 style={{padding: "15px"}}>Signup Page</h1>
    <button onClick={handleBtn} className='btn'>Account Created</button>
    </div>
  );
};

export default Signup;