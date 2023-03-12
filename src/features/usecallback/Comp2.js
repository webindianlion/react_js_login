import React, {memo} from 'react'

function Comp2({ todos, addTodo }) {
    console.log("Comp2 child render");
    return (
      <>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </>
    );
  };

export default memo(Comp2)



