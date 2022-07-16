import React from 'react'
import './Task.css'

function Task() {
  return (
    <div className='taskBox'>
        <div className='taskBoxUpper'>
        <h1>Task1</h1>
        </div>
        <div className='taskBoxLower'>
            <div>
            <button>Mark as completed</button>
            </div>
            <div>
            <button>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Task