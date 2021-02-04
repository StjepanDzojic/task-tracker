import Header from './components/Header'
import {useState} from 'react'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appintment",
      day: "Feb 5th",
      reminder: true,
    },
    {
      id: 3,
      text: "Shoping",
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

  return (
    <div className="container">
      <Header title="Task tracker" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
