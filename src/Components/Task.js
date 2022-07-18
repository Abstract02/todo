import axios from 'axios'
import React, { useEffect } from 'react'
import './Task.css'

function Task({ id, title, completed }) {

  useEffect(() => {
    if (completed === true) {
      document.getElementById("box").style.background = '#202020'
      document.getElementById("complete").style.background = '#202020'
    }
  }, [])


  const Delete = () => {
    axios
      .delete(`http://localhost:4000/todos/${id}`)
      .then(() => {
        console.log("task deleted")
        window.location.href = '/';
      })
      .catch(err => {
        console.log(`error is ${err}`)
      })
  }

  const taskStatus = () => {
    if (completed === false) {
      const task = {
        "completed": true
      }
      console.log(task)
      axios
        .patch(`http://localhost:4000/todos/${id}`, task)
        .then(() => {
          console.log("task updated")

          window.location.href = "/";
        })
        .catch(err => {
          console.log(`error is ${err}`)
        })
    }
    else {
      console.log("Already Completed")
    }
  }

  return (

    <div id="box" className='taskBox'>
      <div className='taskBoxUpper'>
        <p>{title}</p>
      </div>
      <div className='dividingLine'></div>
      <div className='taskBoxLower'>
        <div className='markCompleted'>
          <button id="complete" type='sunmit' onClick={taskStatus}>Mark as completed</button>
        </div>
        <div className='deleteTask'>
          <button type='submit' onClick={Delete}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Task