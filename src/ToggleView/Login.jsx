import React from "react";
const Login = ({ toggle }) => {
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={toggle}>Go to Logout Page</button>
    </div>
  );
};

export default Login;
