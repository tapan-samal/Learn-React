import React, { useContext } from 'react';
import UserDetails from './UserDetails';
import {UserContext} from '../createContext/CreateContext';

const Users = () => {
  const data = useContext(UserContext); 
  console.log(data.userName);
  return (
    <>
    <h3>Users Component: </h3>
    <p> Name: {data.userName}</p>
    <UserDetails />
    </>
  );
};

export default Users;