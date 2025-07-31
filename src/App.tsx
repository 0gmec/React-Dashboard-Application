import { useState } from 'react'

import  TaskList from './components/TaskList/TaskList'
import   TaskForm  from './components/TaskForm/TaskForm'
// import   TaskFilter from './components/TaskFilter/TaskFilter'


import './App.css'

function App() {
  return (
    <>
      <h1>Task Dashboard</h1>
      <TaskForm/>
      <TaskList/>
      {/* <TaskFilter/> */}
    </>
  )
}

export default App
