import React from 'react';
import GetAxios from './components/GetAxios';
import PostAxios from './components/PostAxios';

const AxiosHome = () => {
  return (
    <>
      <h1>Axios :</h1>
        <GetAxios />
        <PostAxios />
    </>
  );
};

export default AxiosHome;