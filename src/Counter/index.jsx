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
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column'

    }}>
      <h2>Counter: {count}</h2>
      <div style = {{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap:10
      }}>
      <button onClick={handleIncreament}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter;
