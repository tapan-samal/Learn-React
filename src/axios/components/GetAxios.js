import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GetAxios = () => {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      // console.log(response);
      setUserData(response.data);
    })
  }, []);
  return (
    <>
      <h3>Get Axios : Print User Name</h3>
      {userData.map((data) => {
        return (
          <div>{data.name}</div>
        )
      })}
    </>
  );
};

export default GetAxios;
