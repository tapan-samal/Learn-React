import React, { useContext } from 'react';
import {UserContext} from '../createContext/CreateContext';

const UserDetails = () => {
  
  // const data = useContext(UserContext);
  const {updateName} = useContext(UserContext);

  return (
    <>
    <h3>UserDetails Component: </h3>
    {/* <div>Full Name : {data.userName}</div> */}
    <button onClick={() => updateName('Tapan Kumar Samal')}>Update Name</button>
    </>
  );
};

export default UserDetails;