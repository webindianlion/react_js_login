import React, { useState, useCallback } from 'react'
import Comp2 from './Comp2'

function Comp1() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => {
      setTodos((t) => [...t, "New Todo"]);
    }, [todos]);
  
    return (
      <>
        <Comp2 todos={todos} addTodo={addTodo} />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </>
    );
  };

export default Comp1