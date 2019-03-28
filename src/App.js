import React, {useState} from 'react';
import './App.css';

function Todo({todo, index, completeTodo, deleteTodo}){
  return(
      <div style={{textDecoration:todo.isCompleted ? 'line-through' : ""}}
           className="todo">{todo.text}
           <div>
             <button onClick={() => completeTodo(index)}>Completed</button>
             <button onClick={() => deleteTodo(index)}>x</button>
           </div>
      </div>
  )
}

function TodoForm({addTodo}){
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("");
  };

  return(
      <form onSubmit={handleSubmit}>
        <input className="input"
               value={value}
               placeholder={"...Add todo"}
               onChange={e => setValue(e.target.value)}
               type="text"/>
      </form>
  )
}

function App(){

  const [todos, setTodos] = useState([
      {
        text: "Learning",
        isCompleted: false
      },
      {
        text:"Meet friend",
        isCompleted:false
      }
      ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  };

  return(
      <div className="app">
        <h1>Intro-Hooks (to-do)</h1>
        <div className="todo-list">
          {todos.map((todo,index) =>
            <Todo key={index}
                  index={index}
                  todo={todo}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}/>)
          }
          <TodoForm addTodo={addTodo}/>
        </div>
      </div>)
}

export default App;