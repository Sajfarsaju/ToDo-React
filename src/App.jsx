import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [toDos,setTodos] = useState([])
  const [toDo,setTodo] = useState('')

  //For remove todo
  const removeTodo=(id)=>{
    setTodos(toDos.filter((obj2)=> obj2.id !== id ))
  }


  //For date
  const SubHeading = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = days[currentDate.getDay()];
  
    return (
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {currentDay} 🌝 ☕</h2>
      </div>
    );
  };
  //

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      
      <SubHeading />

  
    <div className="input">
    <input value={toDo}  onChange={(ev) => setTodo(ev.target.value.trim())} type="text" placeholder="🖊️ Add item..." />

    {toDo.trim() !== "" ? (
      <i onClick={() => {
        const newTodo = { id: Date.now(), text: toDo, status: false };

        const todoExists = toDos.some((todo) => todo.text === newTodo.text);

        if (!todoExists) {
          setTodos([...toDos, newTodo]);
          setTodo('')
        }
      }} className="fas fa-plus"></i>
    ) : null}
    </div>

      <div className="todos">

      { toDos.map((obj)=>{

        return (
        <div className="todo">
          <div className="left">
            <input 
              onChange={(ev)=>{
              
              console.log(ev.target.checked);
              console.log(obj);

              setTodos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=ev.target.checked
                }
                return obj2

              } ))

            } } value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          
          <div className="right">
            <i onClick={()=>{
              removeTodo(obj.id)
            } } className="fas fa-times"></i>
          </div>
        </div>
        )
      })}




<div className="checkedText">
  <table className="taskTable">
    <thead>
      <tr>
        <th>Tasks</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {toDos.map((obj) => (
        <tr key={obj.id}>
          <td>{obj.text}</td>
          <td>{obj.status ? "Success✅" : "Pending"}</td>
        </tr>
      ))}
    </tbody>
  </table>
  
</div>




      </div>
    </div>
  );
}

export default App;