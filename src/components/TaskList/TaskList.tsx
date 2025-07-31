import type { TaskListProps } from "../../types";
import type { TaskItem } from "../../types";
import { useState } from "react";

export default function TaskListProps({}: TaskListProps) {
   
    
    const [search, setSearch]= useState<string>("")
    const [sortedTasks, setSortedTasks] = useState<TaskItem[]>([])
 {sortedTasks.map((task)=>(
                <li key={task.id}>{task.taskDescription}</li>
            ))}

    return(
         <div className="TaskList">
        <h2>Task List</h2>
        <input 
        type="text" 
        placeholder="Search any Tasks" 
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        />

        <ul>
           
            
        </ul>
    </div>
    )

}

    
   