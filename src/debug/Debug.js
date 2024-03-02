import React, { useEffect, useState } from "react";

const DebugNums = () => {
  const [displayNums, setDisplayNums] = useState([]);
  const [displayOddNums, setDisplayOddNums] = useState([]);

  useEffect(() => {
    // debugger;
    let nums = [];
    for (let i = 1; i <= 10; i++) {
      if (i === 5) {
        oddNumbers();
      }
      nums.push(i);
    }
    setDisplayNums(nums);
  }, []);

  const oddNumbers = () => {
    let oddNums = [];
    for (let j = 11; j <= 25; j++) {
      if (j % 2 !== 0) {
        oddNums.push(j);
      }
    }
    setDisplayOddNums(oddNums);
  };

  return (
    <>
      <h1>Debugger :</h1>
      <div>
        First Case:{" "}
        {displayNums.map((num, index) => (
          <span key={index}>
            {num}
            {index < displayNums.length - 1 && ", "}
          </span>
        ))}
      </div>
      <div>
        Second Case:{" "}
        {displayOddNums.map((oddNum, index) => (
          <span key={index}>{oddNum}{index < displayOddNums.length - 1  &&  ", "}</span>
        ))}
      </div>
    </>
  );
};

export default DebugNums;
