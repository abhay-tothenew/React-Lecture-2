import React from 'react'
import Counter from './Counter'
import Parent from './Parent';
import Todo from './TodoList';
import Toggle from './ToggleView';

const App = () => {
  return (
    <div style = {{
      display:'flex',
      justifyContent:'center',
      flexDirection:'column'
    }}>
      <Counter />
      <Parent/>
      <Todo/>
      <Toggle/>
      </div>
  )
}

export default App;
