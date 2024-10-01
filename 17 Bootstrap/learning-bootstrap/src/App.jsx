import { useState } from 'react'
import AppName from './components/AppName'
import AddToDo from './components/AddTodo'
import ToDoItem1 from './components/ToDoItem1'
import ToDoItem2 from './components/ToDoItem2'
import './App.css'

function App() {
 

  return <center>
      <AppName></AppName>
      <AddToDo></AddToDo>
      <ToDoItem1></ToDoItem1>
      <ToDoItem2></ToDoItem2>

  </center>
  

  
}
  
export default App
