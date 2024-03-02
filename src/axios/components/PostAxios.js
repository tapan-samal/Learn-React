import axios from 'axios';
import React, { useState } from 'react';

const PostAxios = () => {

  const data = { fname: "", email: "" };
  const [inputData, setInputData] = useState(data);

  const handleInputData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users", inputData)
      .then((response) => {
        console.log(response);
      })
      setInputData({fname: "", email: ""});
    };
    
    const handleUpdate = (e) => {
      e.preventDefault();
      axios.put("https://jsonplaceholder.typicode.com/users/1", inputData)
      .then((response) => {
        console.log(response);
      })
      setInputData({fname: "", email: ""});
    };
    
    const handleDelete = (e) => {
      e.preventDefault();
      axios.delete("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        console.log(response);
      })
      setInputData({fname: "", email: ""});
  };

  return (
    <>
      <h3>Post Axios / Put Axios / Delete Axios :</h3>
      <form>
        <label>Name : </label>
        <input type='text' name='fname' value={inputData.fname} onChange={handleInputData} /> <br /> <br />
        <label> Email : </label>
        <input type='email' name='email' value={inputData.email} onChange={handleInputData} /> <br />
      </form> <br />
      <button onClick={handleSubmit}>Post Data</button> &nbsp;
      <button onClick={handleUpdate}>Put Data</button> &nbsp;
      <button onClick={handleDelete}>Delete Data</button>
    </>
  );
};

export default PostAxios;