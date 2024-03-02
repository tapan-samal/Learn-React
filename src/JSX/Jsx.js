import React from "react";

//Element creation before JSX
// const Jsx = () => {
//   return React.createElement(
//     "div",
//     null,
//     React.createElement("h2", null, "JSX :"),
//     React.createElement("h4", { id: "jsx" }, "Element creation Before JSX. ")
//   );
// };

// Element creation after JSX
const Jsx = () => {
  const sub = "Element creation after JSX.";

  const user = {
    name: "Tapan",
  };
  
  const profileValid = false;

  const handleBtn = () => {
    alert("Button Clicked !");
  };

  return (
    //Fragment does not create extra node to DOM, but div create node
    <>
      <h2>JSX :</h2>
      {/* Add JavaScript expression inside JSX */}
      <h3>UserName: {user.name}</h3>
      <h4 className="jsx">{sub}</h4>
      <h4>Is profile valid : {`${profileValid}`}</h4>
      <h4>{profileValid ? "Valid Profile" : "Invalid Profile"}</h4>
      <button onClick={handleBtn}>Click Here</button>
    </>
  );
};

export default Jsx;
