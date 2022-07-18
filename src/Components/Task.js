import axios from 'axios'
import React, { useEffect } from 'react'
import Complete from './Complete'
import './Task.css'
import {BsCheckCircleFill} from 'react-icons/bs'

function Task({ id, title, completed }) {




  const Delete = () => {
    axios
      .delete(`https://to-do-appp.herokuapp.com/todos${id}`)
      .then(() => {
        console.log("task deleted")
        window.location.href = '/';
      })
      .catch(err => {
        console.log(`error is ${err}`)
      })
  }
  


  return (

    <div id="box" className={completed ? "taskBoxcomplete" : "taskBoxincomplete"}>
      <div className='taskBoxUpper'>
        <p>{title}</p>
        {completed?<BsCheckCircleFill className='CheckCircle' />:null}
      </div>
      <div className='dividingLine'></div>
      <div className='taskBoxLower'>
        <Complete
          id={id}
          completed={completed}
        />
        <div className='deleteTask'>
          <button type='submit' onClick={Delete}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Task