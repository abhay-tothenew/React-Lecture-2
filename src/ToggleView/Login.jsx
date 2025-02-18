import React from "react";
const Login = ({ toggle }) => {
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
      <h1>Login Page</h1>
      <button onClick={toggle}>Go to Logout Page</button>
    </div>
  );
};

export default Login;
