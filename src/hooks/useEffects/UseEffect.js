import React, { useState, useEffect } from 'react';

const UseEffect = () => {

  const [count, setCount] = useState(0);
  const [addFive, setAddFive] = useState(5);
  const [time, setTime] = useState(0);

  // useEffect(() => {           //without dependencies
  //   document.title = `${count} new messages!`   
  // });

  // useEffect(() => {               //with dependencies
  //   document.title = `${count} new messages!`
  // },[]);

  useEffect(() => {                    //with variables
    document.title = `${addFive} new messages!`
  }, [addFive])

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  });

  return (
    <>
      <h2>2. useEffect :</h2>
      <div>
        <h3>{count} new messages!!</h3>
        <button onClick={() => setCount(count + 1)}>Increase</button>

        <h3>Other count: {addFive}</h3>
        <button onClick={() => setAddFive(addFive + 5)}>IncreseBy5</button>

        <h3>{time} in seconds.</h3>
      </div>
    </>
  )
};

export default UseEffect;

//UseEffect is used to perform side effects in our component.
//Like: Fetching data from API, Updating the DOM document & window and Time function(setTimeout & setInterval).
//Syntax: useEffect(callback, dependencies)
//Variation of UseEffect :
//1. useEffect without dependencies.
//2. useEffect with empty array - it run one time, when it render(usefull for API).
//3. useEffect with variables.
