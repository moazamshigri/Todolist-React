import React, { useState } from "react";
import "./todolist.css"
function Todo() {
    const [Tasks, setTask] = useState(["Take a Shower", "Eat Breakfast", "Code", "sleep"]);
    const [newTask, setNew] = useState("");

    function handleInput(e) {
        setNew(e.target.value);

    }
    function addTask() {
        if(document.querySelector(".hello").value == ""){

        }
        else{
        setTask(n => [...n, newTask]);
    setNew(n => (n = ""))}


    }
    function deleteTask(index) {
        setTask(Tasks.filter((element, i) => i != index));

    }
    function moveUp(index) {


    }
    function moveDown(index) {

    }

    return (
        <div className="main">

        
        <div className="todo-list">
            <h1>Todo List</h1>
            <div className="input">
                <input className="hello" type="text" onChange={handleInput} placeholder="Enter New Task..." value={newTask} />
                <i className="fa-solid fa-plus " onClick={addTask}></i>
            </div>
            <ul>
                {Tasks.map((element, index) => <li className="Task" key={index}> <span className="sp1">{element}</span>
               <span className="sp2">
                 <i className="fa-solid fa-trash-can dlt" onClick={() => deleteTask(index)}></i>
               {/* <button onClick={()=>moveUp(index)} className="upp">☝️</button>
               <button onClick={()=>moveDown(index)} className="down">👇</button> */}
               </span>
                </li>)}
            </ul>
        </div>
        </div>
    )

}
export default Todo;