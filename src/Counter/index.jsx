import React from 'react'

const Counter = () => {
  const[count,setCount] = React.useState(0);

  const handleIncreament = () => {
    setCount(count+1);
  }

  const handleDecrement = ()=>{
    if(count>0){
      setCount(count-1);
    }
  }
  return (
    <div style = {{
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'center'
    }}>
      <h2>Counter: {count}</h2>
      <div>
      <button onClick={handleIncreament}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter;
