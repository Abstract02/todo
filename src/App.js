import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Task from './Components/Task';

function App() {

  const [task, settask] = useState({})
  const [data,setdata] = useState([])

  const handleChange = (e) => {
    settask(
      e.target.value
    )
  }

  useEffect(() => {
    axios
      .get("http://localhost:4000/todos")
      .then((res)=>{
        const data = res.data;
        setdata(data);
      })
      .catch((err)=>{console.log(err)})
  }, [])
  
  function submit() {
    
    const todoTask = {
      title: task,
    }
    console.log(task.length)
    if (task.length > 0) {
      axios.post("http://localhost:4000/todos", todoTask)
        .then(() => {
          console.log("api post success")
          settask("");
          window.location.href = "/";
        }).catch(err => {
          console.log(`error is ${err}`)
        })
    }
    else {
      alert("Give a title name")
    }

  }

  return (
    <div className="app">
      <div className='todo_list'>
        <h1>To do List</h1>
      </div>
      <div className='add_task'>
        <div className='add_task_text'>
          <p>Add a new task in the list</p>
        </div>
        <div className='create_task'>
          <div className='task_title'>
            <input type="text" onChange={handleChange} placeholder='Enter the task here' name="title"></input>
          </div>
          <div className='submit_task'>
            <button type='submit' onClick={submit}>Submit</button>
          </div>
        </div>
      </div>
      <div className='tasks_section'>
        <div className='taskSectionTitle'>
          <p>Added task in to-do list</p>
        </div>
        <div className='tasksContainer'>
          {
            data.map((taskdata,i) => {
              return(
                <>
                <div className='content'>
                <div className='index'>
                  <p>
                  {i+1}.
                  </p>
                </div>
                <Task
                id = {taskdata._id}
                title = {taskdata.title}
                completed = {taskdata.completed}
                /> 
                </div>
                </>
              )
            })
          }          
        </div>
      </div>
    </div>
  );
}

export default App;
