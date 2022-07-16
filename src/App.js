import './App.css';
import Task from './Components/Task';

function App() {
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
            <input type="text" placeholder='Enter the task here' ></input>
          </div>
          <div className='submit_task'>
          <button type='submit'>Submit</button>
          </div>
        </div>
      </div>
      <div className='tasks_section'>
        <div className='taskSectionTitle'>
          <p>Added task in to-do list</p>
        </div>
        <div className='tasksContainer'>
            <Task />
        </div>
      </div>
    </div>
  );
}

export default App;
