import React from "react";
const Logout = ({ toggle }) => {
  return (
    <div>
      {" "}
      <h1>Logout Page</h1>
      <button onClick={toggle}>Go to Login Page</button>
    </div>
  );
};

export default Logout;
