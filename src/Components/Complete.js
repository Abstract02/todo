import React,{useState} from 'react'
import "./Task.css"
import axios from 'axios'


function Complete({ id, completed }) {

    const [status, setstatus] = useState({
        completed: completed
    })

    const refreshPage = () => {
        window.location.reload();
    }
    const taskStatus = () => {
        if (status.completed === false) {
            status.completed=true;
            console.log(status)
            axios
                .patch(`http://localhost:4000/todos/${id}`, status)
                .then(() => {
                    console.log("task updated")
                    window.location.href = '/';
                })
                .catch(err => {
                    console.log(`error is ${err}`)
                })
        }
        else {
            status.completed=false;
            axios
                .patch(`https://to-do-appp.herokuapp.com/todos/${id}`, status)
                .then(() => {
                    console.log("task updated")
                    window.location.href = '/';
                })
                .catch(err => {
                    console.log(`error is ${err}`)
                })
        }
    }

    return (
        <>
            <div className="markCompleted">
                <button id="complete" className={(completed === false) ? "incomplete" : "completed"} type='submit' onClick={taskStatus}>{completed?"Mark as Incomplete":"Mark as Complete"}</button>
            </div>
        </>
    )
}

export default Complete