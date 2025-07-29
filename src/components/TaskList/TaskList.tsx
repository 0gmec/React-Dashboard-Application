import type { TaskListProps } from "../../types";
import type { TaskItem } from "../../types";
import { useState } from "react";

export default function TaskListProps({tasks}: TaskListProps) {
   
    
    const [search, setSearch]= useState<string>("")
    const [filteredTask, setFilteredTask]= useState([])

    return(
         <div className="TaskList">
        <h2>Task List</h2>
        <input 
        type="text" placeholder="Search any Tasks" value={search}
        onChange={(event)=> setSearch(event.target.value)}
        />
        <ul>
            {tasks.map((task)=>(
                <li key={task.id}>{task.taskDescription}</li>
            ))}
            
            {filteredTask.map((Task)=> <li> {filteredTask}</li>)}
        </ul>
    </div>
    )

}

    
   