import React, { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";

const Toggle = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);


  const toggleState = ()=>{
    console.log("toggleState");
    setIsLoggedIn((prev)=> !prev);
  }
  return (
    <div style = {{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center'
      }}>
      {isLoggedIn ? (
        <Logout toggle={toggleState} />
      ) : (
        <Login toggle={toggleState} />
      )}
    </div>
  );
};

export default Toggle;
