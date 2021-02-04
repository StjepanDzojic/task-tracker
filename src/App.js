import Header from './components/Header'
import {useState} from 'react'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th",
      reminder: true,
    },
    {
      id: 3,
      text: "Shopping",
      day: "Feb 7th",
      reminder: false,
    },
    {
      id: 2,
      text: "Meeting",
      day: "Feb 6th",
      reminder: true,
    },
  ])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id ))
  } 

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  } 

  return (
    <div className="container">
      <Header title="Task tracker" />
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
