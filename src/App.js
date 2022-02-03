import { useState } from 'react'
import Header from './components/Header'
import Footer  from './components/Footer'
import Task from './components/Tasks'
import AddTask from './components/AddTask'


function App() {

  const [showAddText, setShowAddText] = useState(false)

  const  [tasks, setTasks]= useState(
    [
        {
            id: 1,
            text: "visit the stores",
            day : "01/12/2021",
            reminder: true,
        },
        {
            id: 2,
            text: "visit the garage",
            day : "02/12/2021",
            reminder: true,
        },
        {
            id: 3,
            text: "visit the Pool",
            day : "03/12/2021",
            reminder: false,
        } 
        ])
        // Add task
        const addTask = (task) =>{
        const id = Math.floor(Math.random()*10000)+1
          const newTask= {id, ...task}
          setTasks([...tasks, newTask])
        }


        // delete the data 
        const deleteTask = (id)=> {
          setTasks(tasks.filter((task=>task.id !== id)))
        }


        //set reminder true of false
        const changeReminder = (id) =>{
          setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder}: task))
        }
  
  return (
    <div  className="container">
      <Header onAdd = {()=>setShowAddText(!showAddText)}/>
      {showAddText && <AddTask  onAdd = {addTask}/>}
      {tasks.length >0 ? (<Task tasks ={tasks} onDelete = {deleteTask} onToogle = {changeReminder} />) :"No task available"  }
      
     
    </div> 
  );
}






export default App;
