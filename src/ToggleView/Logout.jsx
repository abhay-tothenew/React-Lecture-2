import React from "react";
const Logout = ({ toggle }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      {" "}
      <h1>Logout Page</h1>
      <button onClick={toggle}>Go to Login Page</button>
    </div>
  );
};

export default Logout;
