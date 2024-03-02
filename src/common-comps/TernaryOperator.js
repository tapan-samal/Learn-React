import React from 'react';

const TernaryOperator = () => {
  const name = "Tapan Samal";
  const isNameShowing = true;
  const x = 10;
  const age = 20;
  return (
      <>
      <h2 className='font-bold'>Ternary Operator :</h2>
          {name} <br />
          Number Computation: {10 + 20 * 5}
          <h3>Hello, {isNameShowing ? name : 'someone'}</h3>
          <p>{(x) > 15 ? "Greater" : "Smaller"}</p>
          <p>{(age) > 21 ? "U can Marry" : "U are a Minor"}</p>
      </>
  );
};
export default TernaryOperator;
